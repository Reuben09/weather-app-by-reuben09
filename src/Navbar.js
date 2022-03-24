import React, { useEffect, useState } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchIcon from "@mui/icons-material/Search";
import Clouds from "./images/clouds.png";
import Rsc from "./images/rain-sun-cloud.png";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import WeatherImg from "./WeatherImg.js";

export default function Navbar({
  fetchApiLocation,
  handleListItem,
  locationList,
  fetchApiUrl,
  locationText,
  temp,
  time,
  text,
  location,
  setIsButtonClicked,
  isButtonClicked,
  handlePopularItem,
  handleFilter
}) {
  const popularCities = ["london", "lagos", "barcelona"];

  const handleApi = (event) => {
    if (locationText === "") {
      console.log("empty location");
    } else {
      fetchApiLocation();
    }
  };

  return (
    <div className="overall-navbar-container">
      <section
        className={
          isButtonClicked ? "display-none" : "overall-search-container"
        }
      >
        <div className="search-container">
          <button type="button" onClick={() => setIsButtonClicked(true)}>
            Search for places
          </button>
          <MyLocationIcon className="location-icon" />
        </div>
        <div
          className={
            isButtonClicked
              ? "display-none-image"
              : "cloud-rain-image-container"
          }
        >
          <WeatherImg text={text} />
        </div>

        <h1>
          {temp}
          <span className="c">°C</span>
        </h1>
        <h2>{text}</h2>
        <div className="date">{time}</div>
        <p className="location">
          <FmdGoodIcon />
          {location}
        </p>
      </section>

      <section
        className={isButtonClicked ? "overall-input-container" : "display-none"}
      >
        <div className="close-container">
          <CloseIcon
            className="class-icon"
            onClick={() => setIsButtonClicked(false)}
          />
        </div>
        <div className="input-container">
          <div className="inner-input-container">
            <SearchIcon onClick={() => fetchApiUrl()} className="search-icon" />
            <input
              type="text"
              placeholder="search location"
              value={locationText}
              onChange={(event) => handleFilter(event)}
            />
          </div>

          <button onClick={(event) => handleApi()}>search</button>
        </div>

        <div className="location-list">
          <ul>
            {locationList.map((listItem) => {
              const { name } = listItem;
              return (
                <li key={name} onClick={() => handleListItem(name)}>
                  {name}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="list-places-container">
          <h3>popular places</h3>
          <ul className="popular-cities">
            {popularCities.map((popularitem) => {
              return (
                <li
                  key={popularitem}
                  onClick={() => handlePopularItem(popularitem)}
                >
                  {popularitem} <ArrowForwardIosIcon className="arrow-icon" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
