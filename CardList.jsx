import React from "react";
import "./CardList.css";
import Categories from "./Categories";
import { Link } from "react-router-dom";

export default function CardList({
  title,
  isCategory,
  png1,
  png2,
  png3,
  png4,
  png5,
  pod1,
  pod2,
  pod3,
  pod4,
}) {
  return (
    <>
      {title === "LATEST PODCAST" ? (
        <div className="bg-primary-1">
          <div className="container podcast-container animate__animated animate__slideInLeft">
            <h1 className="title-container">{title}</h1>
            {/* <!-- Podcast List --> */}
            {isCategory === true ? <Categories /> : <></>}
            <div className="podcast-list">
              <Link
                to="/play/1"
                className="podcast-item"
                onClick={() => {
                  localStorage.setItem("link", String(`${png1}`));
                  localStorage.setItem("podcast", String(`${pod1}`));
                }}
              >
                <img src={png1} alt="" />
              </Link>
              <Link
                to="/play/2"
                className="podcast-item"
                onClick={() => {
                  localStorage.setItem("link", String(`${png2}`));
                  localStorage.setItem("podcast", String(`${pod2}`));
                }}
              >
                <img src={png2} alt="" />
              </Link>
              <Link
                to="/play/3"
                className="podcast-item"
                onClick={() => {
                  localStorage.setItem("link", String(`${png3}`));
                  localStorage.setItem("podcast", String(`${pod3}`));
                }}
              >
                <img src={png3} alt="" />
              </Link>
              <Link
                to="/play/4"
                className="podcast-item"
                onClick={() => {
                  localStorage.setItem("link", String(`${png4}`));
                  localStorage.setItem("podcast", String(`${pod4}`));
                }}
              >
                <img src={png4} alt="" />
              </Link>
              <Link
                to="/play/5"
                className="podcast-item"
                onClick={() => {
                  localStorage.setItem("link", String(`${png5}`));
                }}
              >
                <img src={png5} alt="" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-primary-1">
          <div className="container podcast-container animate__animated animate__slideInLeft">
            <h1 className="title-container">{title}</h1>
            {/* <!-- Podcast List --> */}
            {isCategory === true ? <Categories /> : <></>}
            <div className="podcast-list">
              <div className="podcast-item"></div>
              <div className="podcast-item"></div>
              <div className="podcast-item"></div>
              <div className="podcast-item"></div>
              <div className="podcast-item"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
