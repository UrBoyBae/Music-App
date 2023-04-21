import React from "react";
import Styles from "../../styles/Home.module.css";

const listChart = () => {
  return (
    <div className={Styles.list}>
      <div className={Styles.leftContent}>
        <img
          className={Styles.chartImage}
          src="/images/chart.png"
          width="63"
          height="63"
          alt="userImage"
        />
        <div className={Styles.detailList}>
            <span className={Styles.titleList}>Golden age of 80s</span>
            <p>Sean swadder</p>
            <span>2:34:45</span>
        </div>
      </div>
      <div className={Styles.likeButton}>
        <i className="material-symbols-rounded">favorite</i>
      </div>
    </div>
  );
};

export default listChart;
