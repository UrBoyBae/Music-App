import React from "react";
import Styles from "../../styles/Home.module.css";

const card = ({ colorBg, title, detail, like }) => {
  var background = {
    backgroundColor: ''+ colorBg +'',
  }

  return (
    <div className={Styles.card} style={background}>
      <div className={Styles.wave}>
        <img
          className={Styles.image}
          src="/images/wave.png"
          width="373"
          height="373"
        />
      </div>
      <div className={Styles.innerCard}>
        <p>Currated Playlist</p>
        <div className={Styles.titleCard}>
          <span>{ title }</span>
          <p>{ detail }</p>
        </div>
        <div className={Styles.bottomCard}>
          <div className={Styles.userProfile}>
            <img
              className={Styles.userImage1}
              src="/images/pict1.png"
              width="32"
              height="32"
              alt="userImage"
            />
            <img
              className={Styles.userImage2}
              src="/images/pict2.png"
              width="32"
              height="32"
              alt="userImage"
            />
            <img
              className={Styles.userImage3}
              src="/images/pict3.png"
              width="32"
              height="32"
              alt="userImage"
            />
          </div>
          <div className={Styles.likes}>
            <i className="material-symbols-rounded">favorite</i>
            <span>{like} Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
