import React from "react";
import "./Jumbotron.css";
import JumbotronImage from "../assets/jumbotron.jpg";

export default function Jumbotron() {
  return (
    <div className="bg-primary-1">
      <div className="container animate__animated animate__slideInDown">
        <img src={JumbotronImage} className="jumbotron-image" alt="" />
      </div>
    </div>
  );
}
