import React from "react";
import "./Browse.css"; 
function Browse() {
  return (
    <div className="browse-page">
      <h1 className="browse-title">Browse</h1>
      <div className="search-area">
        <input
          type="text"
          className="search-input-browse"
          placeholder="Search for song..."
        />
        <button className="search-button-browse">
          <i  id="butt" className="fas fa-search"></i> {/* Font Awesome search icon */}
        </button>
      </div>
    </div>
  );
}

export default Browse;
