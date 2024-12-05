import FavoriteCity from "./FavoriteCity";
const Weather = ({
  cityName,
  weatherData,
  handleFavoriteCity,
  favoriteCity,
}) => {
  return (
    <div className="container-fluid  ">
      <div className="card mb-1">
        <div className="card-body ">
          {weatherData ? (
            <div className="bg-warning rounded d-flex flex-column align-items-center justify-content-between mb-1">
              <div
                className=" p-2 "
                style={{ objectFit: "cover", marginLeft: "auto" }}
              >
                <FavoriteCity
                  handleFavoriteCity={handleFavoriteCity}
                  cityName={cityName}
                  favoriteCity={favoriteCity}
                />
              </div>
              <img
                className="img-fluid w-25 "
                src="./images/weather-news.png"
                alt=""
              />
              <h3 className="badge bg-primary mt-1 fs-5 ">
                {weatherData.name}
              </h3>
              {/* Şehir adı */}
              <p className="badge bg-danger fs-5 ">
                Sıcaklık: {weatherData.main.temp}°C
              </p>
              {/* Sıcaklık */}
              <p className="badge bg-secondary fs-5 ">
                Hava Durumu:
                {weatherData.weather[0].description.charAt(0).toUpperCase() +
                  weatherData.weather[0].description.slice(1)}
              </p>
              {/* Durum açıklaması */}
            </div>
          ) : (
            "Loading..." // Veriler henüz gelmediyse
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
