import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import logo1 from "./logo1.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Favourite from "./components/Favourite";
import Browse from "./components/Browse";
import Library from "./components/Library";
import Login from "./components/Login";
import EnglishSongs from "./components/EnglishSongs";
import TamilSongs from "./components/TamilSongs";
import HindiSongs from "./components/HindiSongs";
import KoreanSongs from "./components/KoreanSongs";
import SongPlayer from "./components/SongPlayer";
import shapeofyou from "./components/shapeofyou.mp3";
import heyminnale from "./components/heyminnale.mp3";
import nainmitakka from "./components/nainmitakka.mp3";
import kunjillamvave from "./components/kunjillamvave.mp3";

function AppContent({ languages, trendingSongs, loggedInUser }) {
  const navigate = useNavigate();

  const handleLanguageClick = (languageName) => {
    switch (languageName) {
      case "English":
        navigate("/english-songs");
        break;
      case "Hindi":
        navigate("/hindi-songs");
        break;
      case "Tamil":
        navigate("/tamil-songs");
        break;
      case "Korean":
        navigate("/korean-songs");
        break;
      default:
        break;
    }
  };

  const handleSongClick = (song) => {
    navigate("/song-player", { state: { song } });
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo1} alt="logo" className="logo-image" />
          <p>CHILL AND VIBE</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for music" className="search-input" />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {loggedInUser ? (
          <p className="username-display">Welcome, {loggedInUser}!</p>
        ) : (
          <Link to="/login">
            <button className="login-button">Log in</button>
          </Link>
        )}
      </header>

      <aside className="sidebar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/browse">Browse</Link></li>
          <li><Link to="/library">Your Library</Link></li>
          <li><Link to="/favourites">Favorites</Link></li>
        </ul>
      </aside>

      <main className="content">
        <h1>Languages</h1>
        <div className="language-cards">
          {languages.map((language, index) => (
            <div 
              key={index} 
              className="language-card" 
              onClick={() => handleLanguageClick(language.name)}
              style={{ cursor: "pointer" }}
            >
              <img src={language.image} alt={language.name} className="language-image" />
              <p className="language-name">{language.name}</p>
            </div>
          ))}
        </div>

        <h1>Trending Songs</h1>
        <div className="trending-cards">
          {trendingSongs.map((song, index) => (
            <div key={index} className="trending-card" onClick={() => handleSongClick(song)} style={{ cursor: "pointer" }}>
              <img src={song.image} alt={song.name} className="trending-image" />
              <p className="trending-name">{song.name}</p>
              <p className="trending-artist">{song.artist}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [languages] = useState([
    { name: "English", image: "https://wallpaperaccess.com/full/1432707.jpg" },
    { name: "Hindi", image: "https://www.musicgrotto.com/wp-content/uploads/2022/09/bollywood-dancing-graphic-art.jpg" },
    { name: "Tamil", image: "https://i.pinimg.com/originals/23/26/5f/23265f7333a01fbc1806f3beae7037fc.png" },
    { name: "Korean", image: "https://dailymusicroll.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/05/14161749/Bangtan-Boys.jpeg" },
  ]);

  const [trendingSongs] = useState([
    {
      name: "Shape of You",
      artist: "Ed Sheeran",
      image: "https://tse1.mm.bing.net/th?id=OIP.UXjiqTalhgEqi1KlDNVjxAHaKe&rs=1&pid=ImgDetMain",
      url: shapeofyou,
    },
    {
      name: "Hey Minnale",
      artist: "Haricharan",
      image: "https://i.ytimg.com/vi/8ekaICu_9V0/maxresdefault.jpg",
      url: heyminnale,
    },
    {
      name: "Nain Mattaka",
      artist: "Dee",
      image: "https://media5.bollywoodhungama.in/wp-content/uploads/2024/02/Baby-John-2-585x405.jpg",
      url: nainmitakka,
    },
    {
      name: "Angu Vaana Konille",
      artist: "Vaikom Vijayalakshmi",
      image: "https://i.ytimg.com/vi/jQglN8F3AY8/hqdefault.jpg",
      url: kunjillamvave,
    },      
  ]);

  const [favorites, setFavorites] = useState([]);
  const [library, setLibrary] = useState([]);

  const addToFavorites = (song) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.name === song.name)) {
        return [...prevFavorites, song];
      }
      return prevFavorites;
    });
  };
  
  const addToLibrary = (song) => {
    if (!library.some((lib) => lib.name === song.name)) {
      setLibrary([...library, song]);
    }
  };

  return (
    <div className="music-player">
      <Routes>
        <Route path="/" element={<AppContent languages={languages} trendingSongs={trendingSongs} loggedInUser={loggedInUser} />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/song-player" element={<SongPlayer addToFavorites={addToFavorites} addToLibrary={addToLibrary} loggedInUser={loggedInUser} />} />
        <Route path="/favourites" element={<Favourite favorites={favorites} />} />
        <Route path="/library" element={<Library library={library} />} />
        <Route path="/login" element={<Login onLogin={setLoggedInUser} />} />
        <Route path="/english-songs" element={<EnglishSongs />} />
        <Route path="/tamil-songs" element={<TamilSongs />} />
        <Route path="/hindi-songs" element={<HindiSongs />} />
        <Route path="/korean-songs" element={<KoreanSongs />} />
      </Routes>
    </div>
  );
}

export default App;
