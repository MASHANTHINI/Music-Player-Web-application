
import "./Library.css";

const Favorite = ({ favorites, setFavorites }) => {
  const removeFromFavorites = (songName) => {
    const updatedFavorites = favorites.filter((song) => song.name !== songName);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="library-container">
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        <div className="library-grid">
          {favorites.map((song, index) => (
            <div key={index} className="library-card">
              <img src={song.image} alt={song.name} className="library-image" />
              <h3>{song.name}</h3>
              <p>{song.artist}</p>
              <audio controls>
                <source src={song.url} type="audio/mp3" />
              </audio>
              <button className="remove-button" onClick={() => removeFromFavorites(song.name)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-message">No songs in the favorites yet.</p>
      )}
    </div>
  );
};

export default Favorite;

