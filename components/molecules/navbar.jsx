import React from "react";

const navbar = () => {
  return (
    <div className="navbar">
      Spotify
      <div className="navbar-link">
        <i class="material-symbols-rounded selected">home</i>
        <i class="material-symbols-rounded">library_music</i>
        <i class="material-symbols-rounded">category</i>
      </div>
    </div>
  );
};

export default navbar;
