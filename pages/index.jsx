import React from "react";
import Navbar from "../components/molecules/navbar";
import Card from "../components/molecules/card";
import List from "../components/molecules/listChart";
import Button from "../components/atoms/button";
import Trending from "../components/molecules/trendingSong";

export default function Home() {
  var cardOne = {
    background: "#9B64E1",
    title: "Jazz Hits",
    detail:
      "All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more.",
    like: "30k",
  };

  var cardTwo = {
    background: "#64A5E1",
    title: "R&B Hits",
    detail:
      "All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more.",
    like: "33k",
  };

  var cardThree = {
    background: "#E164D4",
    title: "Rock Hits",
    detail:
      "All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more.",
    like: "25k",
  };

  var cardFour = {
    background: "#9B64E1",
    title: "K-POP Hits",
    detail:
      "Kpop is a sub genre of pop music from South Korea sung by boy bands and girl bands",
    like: "30k",
  };

  var cardFive = {
    background: "#64A5E1",
    title: "J-POP Hits",
    detail:
      "J-POP is a term used for pop music and is raised by the mass media as one of the genres that has its own characteristics.",
    like: "28k",
  };

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
        <div className="cardSlider">
          <div className="listCard">
            <Card
              colorBg={cardOne.background}
              title={cardOne.title}
              detail={cardOne.detail}
              like={cardOne.like}
            />
            <Card
              colorBg={cardTwo.background}
              title={cardTwo.title}
              detail={cardTwo.detail}
              like={cardTwo.like}
            />
            <Card
              colorBg={cardThree.background}
              title={cardThree.title}
              detail={cardThree.detail}
              like={cardThree.like}
            />
            <Card
              colorBg={cardFour.background}
              title={cardFour.title}
              detail={cardFour.detail}
              like={cardFour.like}
            />
            <Card
              colorBg={cardFive.background}
              title={cardFive.title}
              detail={cardFive.detail}
              like={cardFive.like}
            />
          </div>
        </div>
        <div className="innerContent">
          <div className="topChart">
            <span>Top Chart</span>
            <div className="wrapChart">
              <div className="listChart">
                <List/>
                <List/>
              </div>
              <div className="listChart">
                <List/>
                <List/>
              </div>
              <div className="listChart">
                <List/>
                <List/>
              </div>
            </div>
          </div>
          <div className="trendingSong">
            <div className="topTrending">
              <span>Currently Trending Song</span>
              <Button/>
            </div>
            <div className="listTrending">
              <Trending/>
              <Trending/>
              <Trending/>
              <Trending/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
