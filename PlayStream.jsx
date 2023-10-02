import React from "react";
import "./PlayStream.css";

export default function PlayStream() {
  return (
    <div className="live-stream-container animate__animated animate__slideInDown">
      <div className="live-stream-items animate__animated animate__fadeInTopLeft">
        <div className="live-logo-container">
          <div className="live-logo-items">
            <h4>LIVE NOW</h4>
            <h2>SPIN RADIO</h2>
          </div>
        </div>
        <audio
          src="https://n03.radiojar.com/4ywdgup3bnzuv?rj-ttl=5&rj-tok=AAABg0IZQzUAPnH1A9hTjQwGqw"
          controls
        />
      </div>
    </div>
  );
}
