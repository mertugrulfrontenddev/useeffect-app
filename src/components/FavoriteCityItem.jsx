import { useEffect, useState } from "react";

const FavoriteCityItem = ({ favoriteCity }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        favoriteCity.cityName
      )}&appid=bbadcd2c819b4ceb761eb7c329eaabab&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Hata oluştu:", error);
      });
  }, [favoriteCity]);

  return (
    <div className="card">
      <div className="card-body d-flex flex-column align-items-center gap-2">
        <img
          src="./images/meteorology.png"
          style={{ maxWidth: 60, maxHeight: 60 }}
          alt=""
        />
        <span className="badge bg-primary">{favoriteCity.cityName}</span>
        <span className="badge bg-danger">
          Sıcaklık: {weatherData ? weatherData.main.temp : <p>Loading...</p>}
        </span>
        <span className="badge bg-secondary">
          Weather Forecast: {favoriteCity.cityName}
        </span>
      </div>
    </div>
  );
};

export default FavoriteCityItem;
