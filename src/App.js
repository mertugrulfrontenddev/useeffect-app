import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import CitySelector from "./components/CitySelector";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  let [cityName, setCityName] = useState("istanbul");

  let [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bbadcd2c819b4ceb761eb7c329eaabab&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [cityName]);

  function handleChange(event) {
    setCityName(event.target.value);
  }
  return (
    <>
      <Navbar />
      <div className="container  bg-secondary p-4  min-vh-50">
        <div className="row">
          <div className="col-md-4  col-sm-12 col-lg-8 p-3  bg-primary text-white text-center mx-auto rounded min-vh-50">
            <CitySelector handleChange={handleChange} cityName={cityName} />

            <Weather cityName={cityName} weatherData={weatherData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
