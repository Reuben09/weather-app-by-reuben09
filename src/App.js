import React, { useEffect, useState } from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Main from "./Main";

export default function App() {
  const [temp, setTemp] = useState([]);
  const [location, setLocation] = useState("lagos");
  const [locationText, setLocationText] = useState("");
  const [locationList, setLocationList] = useState([]);
  const [time, setTime] = useState("");
  const [text, setText] = useState("");
  const [textZero, setTextZero] = useState("");
  const [textOne, setTextOne] = useState("");
  const [textTwo, setTextTwo] = useState("");
  const [mph, setMph] = useState("");
  const [dateOne, setDateOne] = useState(null);
  const [dateTwo, setDateTwo] = useState(null);
  const [humidity, setHumidity] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleFilter = (event) => {
    setLocationText(event.target.value);
  };

  const FetchLocationApi = `https://api.weatherapi.com/v1/search.json?key=db9e9b9745f14c1ba74231053220703&q=${locationText}`;
  const ApiUrl = `https://api.weatherapi.com/v1/forecast.json?key=ab6b1356bf884054be9193112222402&q=${location}&days=7&aqi=no&alerts=no`;

  const fetchApiLocation = async () => {
    const response = await fetch(FetchLocationApi);
    const weather = await response.json();
    console.log(weather);
    setLocationList(weather);
  };
  const fetchApiUrl = async () => {
    const response = await fetch(ApiUrl);
    const weather = await response.json();
    setTemp(weather.current.temp_c);
    setTime(weather.location.localtime);
    setText(weather.current.condition.text);
    setMph(weather.current.wind_mph);
    setHumidity(weather.current.humidity);
    setDateOne(weather.forecast.forecastday[1].date);
    setDateTwo(weather.forecast.forecastday[2].date);
    setTextZero(weather.forecast.forecastday[0].day.condition.text);
    setTextOne(weather.forecast.forecastday[1].day.condition.text);
    setTextTwo(weather.forecast.forecastday[2].day.condition.text);
  };

  const handleListItem = (name) => {
    setLocation(name);
    // setIsButtonClicked(false);
    console.log(name);
    setLocationText("");
  };

  const handlePopularItem = (popularitem) => {
    setLocation(popularitem);
    // setIsButtonClicked(false);
    console.log(popularitem);
  };

  useEffect(() => {
    fetchApiUrl();
    setIsButtonClicked(false);
    setLocationList([]);
    console.log("clicked");
  }, [location]);
  return (
    <div className="app-container">
    <div className="App">
      <Navbar
        fetchApiUrl={fetchApiUrl}
        fetchApiLocation={fetchApiLocation}
        temp={temp}
        time={time}
        text={text}
        handleListItem={handleListItem}
        locationList={locationList}
        handleFilter={handleFilter}
        location={location}
        isButtonClicked={isButtonClicked}
        setIsButtonClicked={setIsButtonClicked}
        handlePopularItem={handlePopularItem}
        locationText={locationText}
      />
      <Main
        mph={mph}
        dateOne={dateOne}
        dateTwo={dateTwo}
        humidity={humidity}
        text={text}
        textZero={textZero}
        textOne={textOne}
        textTwo={textTwo}
      />
    </div>
      <footer>
       <p>
         created by <a href="#">Reuben09</a>
       </p>
     </footer>
     </div>
  );
}
