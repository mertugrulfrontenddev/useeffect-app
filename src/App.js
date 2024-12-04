import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import CitySelector from "./components/CitySelector";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
      <div className="container-fluid min-vh-100 d-flex flex-column">
        <div className="row flex-grow-1">
          <div className="col-md-8 col-sm-12 mx-auto d-flex flex-column justify-content-between bg-primary text-white text-center rounded g-0">
            <Navbar />
            <CitySelector handleChange={handleChange} cityName={cityName} />
            <Weather cityName={cityName} weatherData={weatherData} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
