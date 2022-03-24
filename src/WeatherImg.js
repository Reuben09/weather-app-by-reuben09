import React, { useEffect, useState } from "react";
import Data from "./Data.js";

export default function WeatherImg({ text }) {
  const todayState = text;
  let imgWeather = Data.images.clear;
  switch (todayState) {
    default:
      imgWeather = Data.images.clear;
      break;
    case "Blowing snow":
      imgWeather = Data.theme.images.snow;
      break;
    case "Blizzard":
      imgWeather = Data.images.snow;
      break;
    case "Light snow":
      imgWeather = Data.images.snow;
      break;
    case "Light snow showers":
      imgWeather = Data.images.snow;
      break;
    case "Moderate or heavy snow showers":
      imgWeather = Data.images.snow;
      break;
    case "Patchy moderate snow":
      imgWeather = Data.images.snow;
      break;
    case "Moderate snow":
      imgWeather = Data.images.snow;
      break;
    case "Patchy light snow":
      imgWeather = Data.images.snow;
      break;
    case "Patchy sleet nearby":
      imgWeather = Data.images.sleet;
      break;
    case "Light freezing rain":
      imgWeather = Data.images.sleet;
      break;
    case "Light sleet":
      imgWeather = Data.images.sleet;
      break;
    case "Light sleet showers":
      imgWeather = Data.images.sleet;
      break;
    case "Moderate or heavy sleet showers":
      imgWeather = Data.images.sleet;
      break;
    case "Moderate or heavy sleet":
      imgWeather = Data.images.sleet;
      break;
    case "Freezing drizzle":
      imgWeather = Data.images.sleet;
      break;
    case "Heavy freezing drizzle":
      imgWeather = Data.images.sleet;
      break;
    case "Patchy freezing drizzle":
      imgWeather = Data.images.sleet;
      break;
    case "Patchy snow nearby":
      imgWeather = Data.images.hail;
      break;
    case "Freezing fog":
      imgWeather = Data.images.hail;
      break;
    case "Heavy snow":
      imgWeather = Data.images.hail;
      break;
    case "Ice pellets":
      imgWeather = Data.images.hail;
      break;
    case "Light showers of ice pellets":
      imgWeather = Data.images.hail;
      break;
    case "Moderate or heavy showers of ice pellets":
      imgWeather = Data.images.hail;
      break;
    case "Patchy light snow in area with thunder":
      imgWeather = Data.images.hail;
      break;
    case "Moderate or heavy snow in area with thunder":
      imgWeather = Data.images.hail;
      break;
    case "Thundery outbreaks in nearby":
      imgWeather = Data.images.thunderStorm;
      break;
    case "Moderate or heavy rain in area with thunder":
      imgWeather = Data.images.thunderStorm;
      break;
    case "Patchy light rain in area with thunder":
      imgWeather = Data.images.thunderStorm;
      break;
    case "Moderate rain at times":
      imgWeather = Data.images.heavyRain;
      break;
    case "Moderate rain":
      imgWeather = Data.images.heavyRain;
      break;
    case "Heavy rain":
      imgWeather = Data.images.heavyRain;
      break;
    case "Heavy rain at times":
      imgWeather = Data.images.heavyRain;
      break;
    case "Patchy light drizzle":
      imgWeather = Data.images.lightRain;
      break;
    case "Light rain":
      imgWeather = Data.images.lightRain;
      break;
    case "Patchy light rain":
      imgWeather = Data.images.lightRain;
      break;
    case "Light drizzle":
      imgWeather = Data.images.shower;
      break;
    case "Light rain shower":
      imgWeather = Data.images.shower;
      break;
    case "Torrential rain shower":
      imgWeather = Data.images.shower;
      break;
    case "Patchy rain nearby":
      imgWeather = Data.images.shower;
      break;
    case "Cloudy":
      imgWeather = Data.images.heavyCloud;
      break;
    case "Overcast":
      imgWeather = Data.images.heavyCloud;
      break;
    case "Partly cloudy":
      imgWeather = Data.images.lightCloud;
      break;
    case "Mist":
      imgWeather = Data.images.lightCloud;
      break;
    case "Fog":
      imgWeather = Data.images.lightCloud;
      break;
    case "Sunny":
      imgWeather = Data.images.clear;
      break;
    case "Clear":
      imgWeather = Data.images.clear;
      break;
  }
  return (
    <div className="overall-weatherimg-container">
      <img src={imgWeather} alt="clear" />
    </div>
  );
}
