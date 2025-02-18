import React from "react";
import { Link } from "react-router-dom";
import "./EnglishSongs.css";

const englishSongs = [
  { name: "Blinding Lights", artist: "The Weeknd", image: "https://i.ytimg.com/vi/fHI8X4OXluQ/maxresdefault.jpg" },
  { name: "Someone Like You", artist: "Adele", image: "https://www.playhousewhitleybay.co.uk/images/lg_20190214155847_450.jpg" },
  { name: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", image: "https://th.bing.com/th/id/OIP.B5Y33cHKwW6x3cCVxqhdrQHaEK?rs=1&pid=ImgDetMain" },
  { name: "Levitating", artist: "Dua Lipa", image: "https://i.ytimg.com/vi/rrlZfVOGelk/maxresdefault.jpg" },
];

function EnglishSongs() {
  return (
    <div className="english-songs">
      <h1>English Songs</h1>
      <div className="song-list">
        {englishSongs.map((song, index) => (
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

export default EnglishSongs;
