import React from "react";
import { Link } from "react-router-dom";
import "./KoreanSongs.css";

const koreanSongs = [
  { name: "Dynamite", artist: "BTS", image: "https://i.ytimg.com/vi/BflFNMl_UWY/maxresdefault.jpg" },
  { name: "Lovesick Girls", artist: "Blackpink", image: "https://th.bing.com/th/id/OIP.Ddba9liKNsj9z3SSNftQ-QHaE8?rs=1&pid=ImgDetMain" },
  {name:"Fake Love",artist:"BTS",image:"https://i.ytimg.com/vi/2UGAemIWU6U/maxresdefault.jpg"},
  {name:"Make it Right",artist:"BTS",image:"https://i.ytimg.com/vi/MBt6kYvu21o/maxresdefault.jpg"},
];

function KoreanSongs() {
  return (
    <div className="korean-songs">
      <h1>Korean Songs</h1>
      <div className="song-list">
        {koreanSongs.map((song, index) => (
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

export default KoreanSongs;
