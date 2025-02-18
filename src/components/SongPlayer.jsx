import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SongPlayer.css";

const SongPlayer = ({ addToFavorites, addToLibrary, loggedInUser }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { song } = location.state || {};

  const handleAddToFavorites = () => {
    if (!loggedInUser) {
      navigate("/login"); // Redirect to login if user is not logged in
    } else {
      addToFavorites(song);
    }
  };

  const handleAddToLibrary = () => {
    if (!loggedInUser) {
      navigate("/login"); // Redirect to login if user is not logged in
    } else {
      addToLibrary(song);
    }
  };

  return (
    <div className="song-player-container">
      <h2>Now Playing</h2>
      {song ? (
        <div className="now-playing">
          <img src={song.image} alt={song.name} className="songs-image" />
          <h3>{song.name}</h3>
          <p>{song.artist}</p>
          <audio controls autoPlay>
            <source src={song.url} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <div className="buttons">
            <button className="fav-button" onClick={handleAddToFavorites}>
              Add to Favorites
            </button>
            <button className="lib-button" onClick={handleAddToLibrary}>
              Add to Library
            </button>
          </div>
        </div>
      ) : (
        <p>No song selected</p>
      )}
    </div>
  );
};

export default SongPlayer;
