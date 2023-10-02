import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Categories from "./Categories.jsx";
import "./NewsItem.css";

export default function NewsItem() {
  const [terbaru, setTerbaru] = useState([]);

  useEffect(() => {
    const getTerbaru = async () => {
      await axios
        .get("https://api-berita-indonesia.vercel.app/cnn/terbaru/")
        .then((res) => {
          setTerbaru(res.data.data.posts);
        });
    };
    getTerbaru();
  }, []);

  console.log(terbaru);

  return (
    <div className="container animate__animated animate__slideInLeft">
      <Categories />
      <div className="news-list">
        {terbaru.slice(0, 6).map((value, index) => (
          <div className="news-item" key={index}>
            <div className="news-image">
              <img
                className="image-item"
                src={value.thumbnail}
                alt={value.title}
              />
            </div>
            <div className="news-content">
              <h3 className="news-title">
                <a href={value.link} target="self">
                  {value.title}
                </a>
              </h3>
              <p>{value.description}</p>
              <p>{value.pubDate}</p>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
