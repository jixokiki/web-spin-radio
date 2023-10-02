import React, { Component } from 'react';
// import './App.css';

class GAMEPY extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
  }

  componentDidMount() {
    // Memanggil API Flask saat komponen dimuat
    fetch('http://127.0.0.1:5001/get_score') // Sesuaikan dengan URL API Anda
      .then((response) => response.json())
      .then((data) => {
        this.setState({ score: data.score });
      })
      .catch((error) => {
        console.error('Error fetching score:', error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Game Score:</h1>
        <p>{this.state.score}</p>
        {/* Tambahkan elemen antarmuka pengguna lainnya di sini */}
      </div>
    );
  }
}

export default GAMEPY;
