import React from "react";
// import { useState } from "react";
import "./Login.css";
import loginImage from "../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
// import { UserAuth } from "../AuthContext";
// import axios from "axios";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // const { googleSignIn, user } = UserAuth();

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const Auth = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5000/login", {
  //       email: email,
  //       password: password,
  //     });
  //     navigate("/listen");
  //   } catch (error) {
  //     if (error.response) {
  //       setMessage(error.response.data.msg);
  //       window.console.clear(null);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const CheckUser = () => {
  //     if (user != null) {
  //       navigate("/listen");
  //     }
  //   };
  //   CheckUser();
  // }, [user, navigate]);

  return (
    <div className="login-divider-container">
      <div className="login-left-container">
        <h1 className="login-spinradio-title">SPIN RADIO</h1>
        <img src={loginImage} alt="" />
      </div>
      <div className="login-right-container">
        <div className="login-container">
          <h1 className="login-title">Login</h1>

          {/* <form className="input-form-login" onSubmit={Auth}>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />

            <button type="submit" className="orange-button">
              Submit
            </button>
          </form> */}
          {/* <hr /> */}
          <button
            type="submit"
            className="google-button"
            // onClick={handleGoogleSignIn}
          >
            Sign With Google {<FcGoogle />}
          </button>
          {/* {message.length === 0 ? (
            <></>
          ) : (
            <p className="alert-message">{message}</p>
          )} */}
          {/* <Link className="link-login-register" to="/register">
            don't have account?, klik here to register
          </Link> */}
        </div>
      </div>
    </div>
  );
}
