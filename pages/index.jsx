import React from "react"
import Navbar from "../components/molecules/navbar"
import Card from "../components/molecules/card"
import Styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className="container">
      <div className="circleBackground-1">
        <div className="circleBackground-2">
          <div className="circleBackground-3">
            <div className="circleBackground-4"></div>
          </div>
        </div>
      </div>

      <div className="mainContent">
        <Navbar />   
        <div className={Styles.test}>
          <Card test="hai"/>
        </div>
        <div className="innerContent">
          <div className="topChart"></div>
          <div className="trendingSong"></div>
        </div>
      </div>
    </div>
  );
}
