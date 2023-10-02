import "./AudioPlay.css";
import { BsFillPlayFill } from "react-icons/bs";

export default function AudioPlay() {
  return (
    <div className="audio-play-container">
      <div className="audio-play">
        <div className="audio-play-title">
          {<BsFillPlayFill className="audio-icons" />}
          <h4>LIVE NOW</h4>
        </div>
        <audio
          src="https://n03.radiojar.com/4ywdgup3bnzuv?rj-ttl=5&rj-tok=AAABg0IZQzUAPnH1A9hTjQwGqw"
          controls
        />
      </div>
    </div>
  );
}
