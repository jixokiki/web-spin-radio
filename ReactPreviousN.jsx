import React, { Component } from 'react';
import './ReactPreviousNext.css';
import Previous from '../asset/NEXT.png'
import Next from '../asset/PREVIOUS.png'
import Crew1 from '../asset/PhotoCrewDIAM/1a.png';
import Crew2 from '../asset/PhotoCrewDIAM/2a.png';

const crewData = [
  {
    name: 'Crew 1',
    role: 'Role 1',
    image: Crew1,
  },
  {
    name: 'Crew 2',
    role: 'Role 2',
    image: Crew2,
  },
  // Tambahkan data kru lainnya di sini
];

class ProfileWithCustomArrows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCrewIndex: 0,
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      currentCrewIndex:
        prevState.currentCrewIndex < crewData.length - 1
          ? prevState.currentCrewIndex + 1
          : 0,
    }));
  };

  handlePrevious = () => {
    this.setState((prevState) => ({
      currentCrewIndex:
        prevState.currentCrewIndex > 0
          ? prevState.currentCrewIndex - 1
          : crewData.length - 1,
    }));
  };

  render() {
    const currentCrew = crewData[this.state.currentCrewIndex];

    return (
      <div className="profile-crew-container">
        <div className="profile-crew-header">
          <img
            src={currentCrew.image}
            alt={currentCrew.name}
            className="profile-crew-image"
          />
          <h2 className="profile-crew-name">{currentCrew.name}</h2>
          <p className="profile-crew-role">{currentCrew.role}</p>
        </div>
        <div className="profile-crew-controls">
          <button onClick={this.handlePrevious} className="arrow-button previous-button">
            <img src={Previous} alt="Previous" />
          </button>
          <button onClick={this.handleNext} className="arrow-button next-button">
            <img src={Next} alt="Next" />
          </button>
        </div>
      </div>
    );
  }
}

export default ProfileWithCustomArrows;
