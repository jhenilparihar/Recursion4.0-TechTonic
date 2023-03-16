import { createTheme, TextField, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

const CreateAccount = ({
  connectToMetamask,
  createProfile,
  metamaskConnected,
  accountAddress,
}) => {

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const onCreateAccountHandler = (e) => {
    e.preventDefault();
    const name = e.target.firstName.value + " " + e.target.lastName.value;
    if(metamaskConnected)
      createProfile(name);
    else {
      toast("Please connect Metamask")
    }
  };

  return (
    <div className="w-auto h-auto px-[50px] py-[25px] bg-[#12131A] text-white flex flex-col gap-y-[20px] rounded-2xl m-auto shadow-lg">
      <div className="flex flex-row">
        {metamaskConnected ? (
          <div className="text-center overflow-ellipsis w-[100px] h-[35px] overflow-hidden">
            {accountAddress.substr(0, 5) +
              "..." +
              accountAddress.slice(accountAddress.length - 5)}
          </div>
        ) : (
          

          <button
            onClick={connectToMetamask}
            className="border-green-400 border-[3px] px-[40px] py-[5px] rounded-xl ml-auto font-semibold text-green-400"
          >
            Connect
          </button>
        )}
      </div>
      <div className="text-[48px] text-transparent font-bold justify-center text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Create Account
      </div>

      <form onSubmit={onCreateAccountHandler}>
        <div className="flex flex-row gap-x-[20px] mt-[30px]">
          <ThemeProvider theme={darkTheme}>
            <TextField
              required
              id="outlined-required"
              name="firstName"
              label="First Name"
              placeholder="John"
              size="small"
            />

            <TextField
              required
              id="outlined-required"
              name="lastName"
              label="Last Name"
              placeholder="John"
              size="small"
            />
          </ThemeProvider>
        </div>

        <div className="flex flex-row justify-center">
          <button
            className="min-w-[200px] m-auto bg-gradient-to-r from-[#380336] to-[#0CBABA] py-[8px] px-[24px] rounded-lg text-white font-inter font-medium border-[1px] mt-[80px] outline-none border-none text-[18px]"
            // onClick={() => {setShowConfirmPass(true)}}
            type="submit"
          >
            CREATE
          </button>
        </div>
        
      </form>

      <div className="text-center text-[14px] mt-[20px] font-medium">
        Powered ❤️ by VisualVault
      </div>
    </div>
  );
};

export default CreateAccount;


{/* <button
            onClick={connectToMetamask}
            className="bg-green-500 px-[40px] py-[5px] rounded-xl ml-auto font-semibold"
          >
            Connect
          </button> */}
