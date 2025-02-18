import React from "react";
import { Link } from "react-router-dom";
import "./HindiSongs.css";

const hindiSongs = [
  { name: "Tum Hi Ho", artist: "Arijit Singh", image: "https://images.genius.com/d7a02693d69d1c65e4b47de07989900a.1000x1000x1.jpg" },
  { name: "Dil Dhadakne Do", artist: "Farhan Akhtar", image: "https://th.bing.com/th/id/R.26b741cc40f2a54bf37b584254582fd4?rik=Pt6Tn8SoqzK%2bxQ&riu=http%3a%2f%2fdata1.ibtimes.co.in%2fen%2ffull%2f569325%2fdil-dhadakne-do.jpg&ehk=fl%2fx4dr3JZ3luiXcxNLo3Gykp3UyLoEJo9Td%2bc%2bSBNk%3d&risl=&pid=ImgRaw&r=0" },
  {name:"Sanam Teri Kasam",artist:"Arijit Singh",image:"https://im.indiatimes.in/content/2025/Feb/0f5b78a508d4a08dc60adc678f2b88f2_67ab0613823f3.jpg?w=1200&h=900&cc=1&webp=1&q=75"},
  {name:"Aaj ki Raat",artist:"Amitabh Bhattacharya",image :"https://i.ytimg.com/vi/G-FjwlwvK24/maxresdefault.jpg"}
];

function HindiSongs() {
  return (
    <div className="hindi-songs">
      <h1>Hindi Songs</h1>
      <div className="song-list">
        {hindiSongs.map((song, index) => (
          <div key={index} className="song-card">
            <img src={song.image} alt={song.name} className="song-image" />
            <p className="song-name">{song.name}</p>
            <p className="song-artist">{song.artist}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">← Back to Home</Link>
    </div>
  );
}

export default HindiSongs;
