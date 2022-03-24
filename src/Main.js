import React, { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ForecastImgZero from "./ForecastImgZero.js";
import ForecastImgOne from "./ForecastImgOne.js";
import ForecastImgTwo from "./ForecastImgTwo.js";

export default function Main({
  textZero,
  textTwo,
  textOne,
  dateTwo,
  dateOne,
  mph,
  humidity,
  text
}) {
  return (
    <div className="overall-main-container">
      <section className="main-card-container">
        <div className="main-cards">
          <p>Tommorow</p>
          <div className="card-image-container">
            <ForecastImgZero textZero={textZero} />
          </div>
          <div className="temp-row">
            <p>{textZero}</p>
          </div>
        </div>

        <div className="main-cards">
          <p>{dateOne}</p>
          <div className="card-image-container">
            <ForecastImgOne textOne={textOne} />
          </div>
          <div className="temp-row">
            <p>{textOne}</p>
          </div>
        </div>

        <div className="main-cards">
          <p>{dateTwo}</p>
          <div className="card-image-container">
            <ForecastImgTwo textTwo={textTwo} />
          </div>
          <div className="temp-row">
            <p>{textTwo}</p>
          </div>
        </div>
      </section>

      <section className="todays-highlight-container">
        <h4>Today's Highlight</h4>

        <div className="today-highlight-card-container">
          <div className="today-highlight-card">
            <p>wind status</p>
            <span className="today-display">
              <h1>{mph}</h1>
              <p>mph</p>
            </span>
            <div className="play-container">
              <PlayCircleIcon />
              <p>wsw</p>
            </div>
          </div>

          <div className="today-highlight-card">
            <p>Humidity</p>
            <span className="today-display">
              <h1>{humidity}</h1>
              <p>%</p>
            </span>
            <LinearProgress className="linear-icon" />
          </div>
        </div>

        <div className="today-highlight-card-container">
          <div className="today-highlight-card2">
            <p>Visibility</p>
            <span className="today-display">
              <h1>6,4</h1>
              <p>miles</p>
            </span>
          </div>

          <div className="today-highlight-card2">
            <p>Air pressure</p>
            <span className="today-display">
              <h1>998</h1>
              <p>mb</p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
