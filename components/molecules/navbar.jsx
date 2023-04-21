import React from "react";

const navbar = () => {
  return (
    <div className="navbar">
      MusicHub
      <div className="navbar-link">
        <img
              className="selected"
              src="/images/home.png"
              width="23"
              height="25"
              alt="userImage"
            />
        <img
              src="/images/search.png"
              width="30"
              height="30"
              alt="userImage"
            />
        <img
              src="/images/category.png"
              width="28"
              height="28"
              alt="userImage"
            />
      </div>
    </div>
  );
};

export default navbar;
