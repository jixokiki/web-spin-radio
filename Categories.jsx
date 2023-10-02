import React, { useState } from "react";
import "./Categories.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function Categories() {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const showCategoriesView = () => {
    setShowCategories(!showCategories);
  };

  const getCategories = async () => {
    await axios
      .get("https://api-berita-indonesia.vercel.app/")
      .then((res) => setCategories(res.data.endpoints[2].paths));
  };

  console.log(showCategories);

  return (
    <>
      <ul className="categories-list">
        {categories.map((data, index) => (
          <li key={index}>
            <Link to="/news">{data.name}</Link>
          </li>
        ))}
      </ul>
      <div className="categories-dropdown-list">
        <div className="categories-dropdown-container">
          <div
            className="categories-dropdown-select"
            onClick={showCategoriesView}
          >
            <p>Select</p>
            <BsFillCaretDownFill />
          </div>
          <div
            className={
              showCategories === true
                ? "categories-dropdown-menu"
                : "categories-dropdown-menu-hidden"
            }
          >
            {categories.map((data, index) => (
              <Link
                to="/watch"
                key={index}
                className="categories-dropdown-link"
              >
                <div className="categories-dropdown-items">{data.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
