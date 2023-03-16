import { useState, Component } from "react";
import "./App.css";
import Web3 from "web3";

import { contractABI, contractAddress } from "./utils/constants";

import ContractNotDeployed from "./components/ContractNotDeployed/ContractNotDeployed";
import Loading from "./components/Loading/Loading";
import CreateAccount from "./components/CreateAccount";
import UploadImage from "./components/UploadImage/UploadImage";
import Signup from "./components/Signup";
import Login from "./components/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountAddress: "",
      accountBalance: "",
      count: 0,
      loading: true,
      metamaskConnected: false,
      contractDetected: false,
      Contract: null,
      profileSet: false,
      userProfile: null,
    };
  }

  componentWillMount = async () => {
    await this.loadWeb3();
    await this.loadBlockchainData();
  };

  loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      this.setState({ metamaskConnected: false });
    } else {
      this.setState({ metamaskConnected: true });
      this.setState({ loading: true });
      this.setState({ accountAddress: accounts[0] });
      let accountBalance = await web3.eth.getBalance(accounts[0]);
      accountBalance = web3.utils.fromWei(accountBalance, "Ether");
      this.setState({ accountBalance });
      const Contract = new web3.eth.Contract(contractABI, contractAddress);
      if (Contract) {
        this.setState({ Contract });
        this.setState({ contractDetected: true });
      } else {
        this.setState({ contractDetected: false });
      }
      const isProfileSet = await Contract.methods
        .isProfileSet(this.state.accountAddress)
        .call();
      if (!isProfileSet) {
        this.setState({ profileSet: false });
      } else {
        this.setState({ profileSet: true });
        const cp = await this.state.Contract.methods
          .getUserInfo(this.state.accountAddress)
          .call();
        console.log(cp);
        this.setState({ userProfile: cp });
      }
      this.setState({ loading: false });
    }
  };

  connectToMetamask = async () => {
    await window.ethereum.enable();
    this.setState({ metamaskConnected: true });
    window.location.reload();
  };

  addToBlockchain = async (tokenPrice, message, keyword) => {
    this.setState({ loading: true });
    const price = window.web3.utils.toWei(tokenPrice.toString(), "ether");
    const transactionHash = await this.state.Contract.methods
      .addToBlockchain(this.state.accountAddress, price, message, keyword)
      .send({ from: this.state.accountAddress })
      .on("confirmation", () => {
        localStorage.setItem(this.state.accountAddress, new Date().getTime());
        this.setState({ loading: false });
        window.location.reload();
      });
  };

  createProfile = async (name) => {
    this.setState({ loading: true });
    const transactionHash = await this.state.Contract.methods
      .addUserProfile(
        name,
        "https://ipfs.io/ipfs/QmTcn6vxMmxRvRGuCZvgjwxJ3NiBEiuDnQW64iwi4Bia5D"
      )
      .send({ from: this.state.accountAddress })
      .on("confirmation", () => {
        this.setState({ loading: false });
        window.location.reload();
      });
  };

  signup = async (password) => {
    this.setState({ loading: true });
    const transactionHash = await this.state.Contract.methods
      .savePassword(window.location.hostname, password)
      .send({ from: this.state.accountAddress })
      .on("confirmation", () => {
        this.setState({ loading: false });
        window.location.reload();
      });
  };

  login = async (site, password) => {
    return await this.state.Contract.methods
      .login(this.state.accountAddress, site, password)
      .call();
  };

  render() {
    // console.log(this.state.userProfile?.tokenURI);
    return (
      <div className="flex justify-center h-[100vh]">
        {!this.state.metamaskConnected || !this.state.profileSet ? (
          <CreateAccount
            connectToMetamask={this.connectToMetamask}
            createProfile={this.createProfile}
            metamaskConnected={this.state.metamaskConnected}
            accountAddress={this.state.accountAddress}
          />
        ) : !this.state.contractDetected ? (
          <ContractNotDeployed />
        ) : this.state.loading ? (
          <Loading />
        ) : (
          // <UploadImage />

          <BrowserRouter>
            <Routes>
              <Route
                path="signup"
                element={
                  <Signup
                    tokenURI={this.state.userProfile?.tokenURI}
                    signup={this.signup}
                  />
                }
              />
              <Route
                path="login"
                element={
                  <Login
                    tokenURI={this.state.userProfile?.tokenURI}
                    login={this.login}
                  />
                }
              />
              <Route path="upload" element={<UploadImage />} />
            </Routes>
          </BrowserRouter>
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;

{
  /* <Signup
            tokenURI={this.state.userProfile?.tokenURI}
            signup={this.signup}
          /> */
}
