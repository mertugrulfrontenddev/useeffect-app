import { useEffect, useState } from "react";

const FavoriteCityItem = ({ favoriteCity }) => {
  let [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    favoriteCity.forEach((city) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city.cityName
        )}&appid=bbadcd2c819b4ceb761eb7c329eaabab&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData((prevData) => ({
            ...prevData,
            [city.cityName]: data,
          }));
        });
    });
  }, [favoriteCity]);

  return (
    <div>
      {favoriteCity.map((city) => (
        <div key={city.cityname} className="card  ">
          <div className="card-body d-flex flex-column align-items-center gap-2">
            <img
              src="./images/meteorology.png"
              style={{ maxWidth: 60, maxHeight: 60 }}
              alt=""
            />
            <span className="badge bg-primary">{city.cityName}</span>
            <span className="badge bg-danger">
              Sıcaklık:
              {weatherData[city.cityName] ? (
                weatherData[city.cityName].main.temp
              ) : (
                <p>Loading...</p>
              )}
            </span>
            <span className="badge bg-secondary">
              Weather Forecast: {city.cityName}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavoriteCityItem;
