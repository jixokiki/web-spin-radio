import React, { useState } from "react";
import "./Register.css";
import loginImage from "../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        conPassword: conPassword,
      });
      Swal.fire("Registration Success!", "You have registered!", "success");
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.msg);
      }
    }
  };

  return (
    <div className="register-divider-container">
      <div className="register-left-container">
        <h1 className="register-spinradio-title">SPIN RADIO</h1>
        <img src={loginImage} alt="" />
      </div>
      <div className="register-right-container">
        <h1 className="register-title">Register</h1>

        <form className="input-form-register" onSubmit={register}>
          <input
            type="text"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="confirm password"
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {message.length === 0 ? (
          <></>
        ) : (
          <p className="alert-message">{message}</p>
        )}
        <Link className="link-login-register" to="/login">
          you have a account?, klik here to login
        </Link>
      </div>
    </div>
  );
}
