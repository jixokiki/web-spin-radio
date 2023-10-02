import React from "react";
import "./ViewButton.css";

export default function ViewButton() {
  return (
    <div className="bg-primary-1">
      <div className="container view-container animate__animated animate__fadeInUp">
        <h2>
          <a href="/">VIEW MORE</a>
        </h2>
      </div>
    </div>
  );
}
