import React, { useState } from "react";
import "./Library.css";

const Library = ({ library = [] }) => {
  const [librarySongs, setLibrarySongs] = useState(library);
  const [currentSong, setCurrentSong] = useState(null);

  const removeFromLibrary = (songName) => {
    const updatedLibrary = librarySongs.filter((song) => song.name !== songName);
    setLibrarySongs(updatedLibrary);
  };

  const playSong = (song) => {
    const audioPlayer = document.getElementById("audioPlayer");

    if (currentSong && currentSong.name !== song.name) {
      audioPlayer.pause();
    }

    setCurrentSong(song);
    audioPlayer.src = song.url;
    audioPlayer.play();
  };

  return (
    <div className="library-container">
      <h1>Your Library</h1>

      {librarySongs.length > 0 ? (
        <div className="library-grid">
          {librarySongs.map((song, index) => (
            <div key={index} className="library-card" onClick={() => playSong(song)}>
              <img src={song.image} alt={song.name} className="library-image" />
              <h3>{song.name}</h3>
              <p>{song.artist}</p>

              <audio id="audioPlayer" controls style={{ width: "100%" }}>
                <source src={song.url} type="audio/mp3" />
              </audio>

              <button className="remove-button" onClick={() => removeFromLibrary(song.name)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-message">No songs in the library yet.</p>
      )}
    </div>
  );
};

export default Library;
