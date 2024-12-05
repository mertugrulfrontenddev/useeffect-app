import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import CitySelector from "./components/CitySelector";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FavoriteCitiesPage from "./components/FavoriteCitiesPage";

function App() {
  let favoriteCityArr = [];

  let [cityName, setCityName] = useState("istanbul");

  let [weatherData, setWeatherData] = useState(null);

  let [favoriteCity, setFavoriteCity] = useState(favoriteCityArr);

  function handleFavoriteCity(cityName) {
    console.log(cityName);
    setFavoriteCity((prevCities) => {
      let isCityExist = prevCities.some((city) => city.cityName === cityName);

      if (isCityExist) {
        return prevCities
          .map((city) =>
            city.cityName === cityName
              ? { ...city, isFavorite: !city.isFavorite }
              : city
          )
          .filter((city) => city.isFavorite);
      } else {
        return [...prevCities, { cityName: cityName, isFavorite: true }];
      }
    });
  }
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )}&appid=bbadcd2c819b4ceb761eb7c329eaabab&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [cityName]);

  function handleChange(event) {
    setCityName(event.target.value);
  }

  useEffect(() => {
    console.log("Favorite Cities Updated:", favoriteCity);
  }, [favoriteCity]);

  return (
    <Router>
      <div className="container-fluid min-vh-100 d-flex flex-column">
        <div className="row flex-grow-1">
          <div className="col-md-8 col-sm-12 mx-auto d-flex flex-column justify-content-between bg-primary text-white text-center rounded g-0">
            <Navbar />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <CitySelector
                      handleChange={handleChange}
                      cityName={cityName}
                    />
                    <Weather
                      cityName={cityName}
                      weatherData={weatherData}
                      handleFavoriteCity={handleFavoriteCity}
                      favoriteCity={favoriteCity}
                    />
                  </>
                }
              />

              <Route
                path="/favoriteCities"
                element={<FavoriteCitiesPage favoriteCity={favoriteCity} />}
              />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
