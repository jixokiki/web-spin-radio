import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AudioPlay from "../components/AudioPlay";
import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";
import Navbar from "../components/Navbar";
import "./Play.css";
import Chart from "../components/Chart";

export default function Play() {
  const localLink = localStorage.getItem("link");
  const localLinkPodcast = localStorage.getItem("podcast");

  return (
    <>
      <HeaderMenu />
      <Navbar view={true} />
      <AudioPlay />
      <div
        className={
          "live-stream-container animate__animated animate__slideInDown"
        }
      >
        <img src={localLink} alt="" />
        <div className="live-stream-blur"></div>
        <div className="live-stream-items animate__animated animate__fadeInTopLeft">
          <div className="live-logo-container">
            <div className="live-logo-items">
              <img src={localLink} alt="" />
            </div>
          </div>
          <audio src={localLinkPodcast} controls />
          <div className="live-logo-blur"></div>
        </div>
      </div>
      <Chart/>
      <Footer />
    </>
  );
}
