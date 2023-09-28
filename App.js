import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Img
import png1 from "./assets/Thumbnail Segmen/1.png";
import png2 from "./assets/Thumbnail Segmen/2.png";
import png3 from "./assets/Thumbnail Segmen/3.png";
import png4 from "./assets/Thumbnail Segmen/4.png";
import png5 from "./assets/Thumbnail Segmen/5.png";

// Latest Podcast
import pod1 from "./assets/Podcast/podcast1.mp3";
import pod2 from "./assets/Podcast/podcast2.mp3";
import pod3 from "./assets/Podcast/podcast3.wav";
import pod4 from "./assets/Podcast/podcast4.wav";

// css
import "./pages/Play.css";

import HeaderMenu from "./components/HeaderMenu";
import Navbar from "./components/Navbar";
import AudioPlay from "./components/AudioPlay";
import Jumbotron from "./components/Jumbotron";
import CardList from "./components/CardList";
import ViewButton from "./components/ViewButton";
import Crews from "./components/Crews";
import Footer from "./components/Footer";
import NewsItem from "./components/NewsItem";
import Play from "./pages/Play";
// import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { AuthContextProvider } from "./AuthContext";
// import Protected from "./Protected";
import Chart from "./components/Chart";
import CrewSpin from './components/CrewSpin';
import ImageGallery from "./components/ImageGalery";
import PhaserGameCanvas from "./components/PhaserGameCanvas";



function App() {
  return (
    <div className="App pages-container">
      {/* <AuthContextProvider> */}
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate replace to="/listen" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Chart" element={<Chart/>}/>
            <Route path="/CrewSpin" element={<CrewSpin/>}/>
            <Route path="/Game" element={<PhaserGameCanvas/>} />
            <Route
              path="/listen"
              element={
                <>
                  {/* <Protected> */}
                    <HeaderMenu />
                    <Navbar view={true} />
                    <AudioPlay />
                    <Jumbotron />
                    <CardList
                      title={"LATEST PODCAST"}
                      png1={png1}
                      png2={png2}
                      png3={png3}
                      png4={png4}
                      png5={png5}
                      pod1={pod1}
                      pod2={pod2}
                      pod3={pod3}
                      pod4={pod4}
                    />
                    <ViewButton />
                    <Crews />
                    {/* <ImageGallery/> */}
                    <Footer />
                  {/* </Protected> */}
                </>
              }
            />
            <Route
              path="/chartcontent"
              element={
                <>
                  {/* <Protected> */}
                    <HeaderMenu />
                    <Navbar/>
                    <Chart/>
                    <Crews />
                    <Footer />
                  {/* </Protected> */}
                </>
              }
            />
            <Route
              path="/CrewSpin"
              element={
                <>
                  <HeaderMenu/>
                  <Navbar/>
                  <Footer/>
                </>
              }
            />
            <Route
              path="/news"
              element={
                <>
                  {/* <Protected> */}
                    <HeaderMenu />
                    <Navbar view={true} />
                    <AudioPlay />
                    <NewsItem />
                    <ViewButton />
                    <CardList title={"PODCAST"} />
                    <Footer />
                  {/* </Protected> */}
                </>
              }
            />
            <Route
              path="/watch"
              element={
                <>
                  {/* <Protected> */}
                    <HeaderMenu />
                    <Navbar view={true} />
                    <AudioPlay />
                    <CardList title={"WATCH"} isCategory={true} />
                    <ViewButton />
                    <CardList title={"TRENDING"} />
                    <Footer />
                  {/* </Protected> */}
                </>
              }
            />
            <Route
              path="/play/:pod_id"
              element={
                <>
                  {/* <Protected> */}
                    <Play />
                  {/* </Protected> */}
                </>
              }
            />
          </Routes>
        </Router>
      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;
