// import logo from './logo.svg';
// import './App.css';
// import Profile from './Component/profile';


// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Profile/>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Profile from './profile.jsx';
// import User from './User'; // Import komponen User
// name, jobTitle, age, address, email, bio, profileImage

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
import HeaderMenu from './HeaderMenu.jsx';
import Navbar from './Navbar.jsx';
import './CrewSpin.css';
import Footer from './Footer.jsx';
import ImageGalery from './ImageGalery.jsx';



function Crew() {
  return (
    <div className="CrewSpin">
      <HeaderMenu/>
      <Navbar/>
      <div className='ColorTittle'>
        <h1>Crew SpinRadioFM</h1>
      </div>
      {/* Menggunakan komponen User dan mengirimkan properti */}

      <Profile name="Andini Aprilia" age={22} email="john@example.com" profileImage={Crew1} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Chelsea Sepyani" age={22} email="john@example.com" profileImage={Crew2} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="D'thya Putri" age={22} email="john@example.com" profileImage={Crew3} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Anita Susilowati" age={22} email="john@example.com" profileImage={Crew4} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Ega Sulistyowati" age={22} email="john@example.com" profileImage={Crew5} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Irfan Nurul" age={22} email="john@example.com" profileImage={Crew6} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Thoriq Maulana" age={22} email="john@example.com" profileImage={Crew7} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Muhammad Raihan" age={22} email="john@example.com" profileImage={Crew8} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Monica Yahya" age={22} email="john@example.com" profileImage={Crew9} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Lianti Jessa" age={22} email="john@example.com" profileImage={Crew10} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Alicia Nissa Amalia" age={22} email="john@example.com" profileImage={Crew11} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Bima Fazha H" age={22} email="john@example.com" profileImage={Crew12} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Maria Sintya Erina" age={22} email="john@example.com" profileImage={Crew13} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Indah Herdiana" age={22} email="john@example.com" profileImage={Crew14} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Veronica Hadi" age={22} email="john@example.com" profileImage={Crew15} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Alfina Poetri Abdillah" age={22} email="john@example.com" profileImage={Crew16} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Ai Selpia Andita" age={22} email="john@example.com" profileImage={Crew17} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Dimas Nur Riffa'i" age={22} email="john@example.com" profileImage={Crew18} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Farhan Ilham Setiawan" age={22} email="john@example.com" profileImage={Crew19} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Fandy Ilham Maulana" age={22} email="john@example.com" profileImage={Crew20} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Sekar Dwi Asmara" age={22} email="john@example.com" profileImage={Crew21} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Taskia Azzahra Aurel" age={22} email="john@example.com" profileImage={Crew22} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Rafif Restu Saputra" age={22} email="john@example.com" profileImage={Crew23} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Audy Fadhilla Haya" age={22} email="john@example.com" profileImage={Crew24} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Fenny Ivana" age={22} email="john@example.com" profileImage={Crew25} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Devanka Ayu Safitri" age={22} email="john@example.com" profileImage={Crew26} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Nanda Fadillah" age={22} email="john@example.com" profileImage={Crew27} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Andini Rosendi" age={22} email="john@example.com" profileImage={Crew28} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Michelle Fernandes" age={22} email="john@example.com" profileImage={Crew29} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Tegar Septian" age={22} email="john@example.com" profileImage={Crew30} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Ananda Meydi" age={22} email="john@example.com" profileImage={Crew31} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Arif Pangestu" age={22} email="john@example.com" profileImage={Crew32} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Ananda Meydi" age={22} email="john@example.com" profileImage={Crew33} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Ferel Himawan" age={22} email="john@example.com" profileImage={Crew34} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Azzahra Indi" age={22} email="john@example.com" profileImage={Crew35} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Raihan Alfaridzi" age={22} email="john@example.com" profileImage={Crew36} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Rizki Maulana" age={22} email="john@example.com" profileImage={Crew37} jobTitle='Leader' address='Bekasi' bio='busy'/>
      <Profile name="Muhammad Alfarel" age={22} email="john@example.com" profileImage={Crew38} jobTitle='Leader' address='Bekasi' bio='busy'/>
      {/* <div className='ImageCrew'>
        <ImageGalery/>
      </div> */}
      <ImageGalery/>
      <Footer/>
    </div>
  );
}

export default Crew;
