import React from "react";
import "./ImageGalery.css";
import { BsFillPlayFill } from "react-icons/bs";

import { useEffect, useState } from "react";

import Profile from './profile.jsx';

import Crew1 from '../assets/PhotoCrewDIAM/1a.png';
import Crew2 from '../assets/PhotoCrewDIAM/2a.png';
import Crew3 from '../assets/PhotoCrewDIAM/3a.png';
import Crew4 from '../assets/PhotoCrewDIAM/4a.png';
import Crew5 from '../assets/PhotoCrewDIAM/5a.png';
import Crew6 from '../assets/PhotoCrewDIAM/6a.png';
import Crew7 from '../assets/PhotoCrewDIAM/7a.png';
import Crew8 from '../assets/PhotoCrewDIAM/8a.png';
import Crew9 from '../assets/PhotoCrewDIAM/9a.png';
import Crew10 from '../assets/PhotoCrewDIAM/10a.png';
import Crew11 from '../assets/PhotoCrewDIAM/11a.png';
import Crew12 from '../assets/PhotoCrewDIAM/12a.png';
import Crew13 from '../assets/PhotoCrewDIAM/13a.png';
import Crew14 from '../assets/PhotoCrewDIAM/14a.png';
import Crew15 from '../assets/PhotoCrewDIAM/15a.png';
import Crew16 from '../assets/PhotoCrewDIAM/16a.png';
import Crew17 from '../assets/PhotoCrewDIAM/17a.png';
import Crew18 from '../assets/PhotoCrewDIAM/18a.png';
import Crew19 from '../assets/PhotoCrewDIAM/19a.png';
import Crew20 from '../assets/PhotoCrewDIAM/20a.png';
import Crew21 from '../assets/PhotoCrewDIAM/21a.png';
import Crew22 from '../assets/PhotoCrewDIAM/22a.png';
import Crew23 from '../assets/PhotoCrewDIAM/23a.png';
import Crew24 from '../assets/PhotoCrewDIAM/24a.png';
import Crew25 from '../assets/PhotoCrewDIAM/25a.png';
import Crew26 from '../assets/PhotoCrewDIAM/26a.png';
import Crew27 from '../assets/PhotoCrewDIAM/27a.png';
import Crew28 from '../assets/PhotoCrewDIAM/28a.png';
import Crew29 from '../assets/PhotoCrewDIAM/29a.png';
import Crew30 from '../assets/PhotoCrewDIAM/30a.png';
import Crew31 from '../assets/PhotoCrewDIAM/31a.png';
import Crew32 from '../assets/PhotoCrewDIAM/32a.png';
import Crew33 from '../assets/PhotoCrewDIAM/33a.png';
import Crew34 from '../assets/PhotoCrewDIAM/34a.png';
import Crew35 from '../assets/PhotoCrewDIAM/35a.png';
import Crew36 from '../assets/PhotoCrewDIAM/36a.png';
import Crew37 from '../assets/PhotoCrewDIAM/37a.png';
import Crew38 from '../assets/PhotoCrewDIAM/38a.png';

export default function ImageGalery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    Crew1,
    Crew2,
    Crew3,
    Crew4,
    Crew5,
    Crew6,
    Crew7,
    Crew8,
    Crew9,
    Crew10,
    Crew11,
    Crew12,
    Crew13,
    Crew14,
    Crew15,
    Crew16,
    Crew17,
    Crew18,
    Crew19,
    Crew20,
    Crew21,
    Crew22,
    Crew23,
    Crew24,
    Crew25,
    Crew26,
    Crew27,
    Crew28,
    Crew29,
    Crew30,
    Crew31,
    Crew32,
    Crew33,
    Crew34,
    Crew35,
    Crew36,
    Crew37,
    Crew38,
    // Tambahkan gambar-gambar lainnya di sini
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  useEffect(() => {
    // Anda dapat menambahkan efek tambahan di sini jika diperlukan
  }, [currentImageIndex]);

  return (
    <div className="bg-primary-1">
      <div className="container crews-container-image">
        <h1 className="title-container-image">KHI STATION CREWS</h1>
        <div className="crews-list-image">
          <div className="playImage rotate" onClick={handlePrevious}>
            <BsFillPlayFill/>
          </div>
          <div className="crews-items-image">
            {/* <div className="crews-image"></div>
            <div className="crews-image"></div>
            <div className="crews-image"></div> */}
            {/* <Profile profileImage={Crew1} />
            <Profile profileImage={Crew2} />
            <Profile profileImage={Crew3} /> */}
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
          </div>
          <div className="playImage" onClick={handleNext}>
            <BsFillPlayFill />
          </div>
        </div>
      </div>
    </div>
  );
}
