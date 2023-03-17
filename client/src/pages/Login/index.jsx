import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TextField from "../../components/Inputs/TextField";
import Checkbox from "../../components/Inputs/Checkbox";
import Button from "../../components/Button";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import AppleIcon from "@mui/icons-material/Apple";
import logo from "../../images/black_logo.svg";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const { isFetching } = useSelector((state) => state.auth);

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <div className="box">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <main className={styles.main}>
        <h1 className={styles.heading}>To continue, log in to Spotify.</h1>
        <button
          className={styles.contained_btn}
          style={{ background: "#3b5998" }}
        >
          <FacebookRoundedIcon /> continue with facebook
        </button>
        <button className={styles.contained_btn} style={{ background: "#000" }}>
          <AppleIcon /> continue with apple
        </button>
        <button
          className={styles.contained_btn}
          style={{ background: "#1877f2" }}
        >
          <FontAwesomeIcon icon="fa-solid fa-circle-v" /> continue with
          visualVault
        </button>
        <p className={styles.or_container}>or</p>
        <form className={styles.form_container}>
          <div className={styles.input_container}>
            <TextField
              label="Enter your email"
              placeholder="Enter your email"
              name="email"
              required={true}
            />
          </div>
          <div className={styles.input_container}>
            <TextField
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              required={true}
            />
          </div>
          <p className={styles.forgot_password}>Forgot your password?</p>
          <div className={styles.form_bottom}>
            <Checkbox label="Remember me" />
            <Button
              type="submit"
              label="LOG IN"
              isFetching={isFetching}
              style={{ color: "white", background: "#15883e", width: "20rem" }}
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
