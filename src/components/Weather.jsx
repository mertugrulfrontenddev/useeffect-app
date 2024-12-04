const Weather = ({ cityName, weatherData }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          {weatherData ? (
            <div className="bg-warning rounded d-flex flex-column align-items-center justify-content-between">
              <img
                className="img-fluid w-25 mt-2"
                src="./images/weather-news.png"
                alt=""
              />
              <h3 className="badge bg-primary mt-2 fs-5 w-75">
                {weatherData.name}
              </h3>
              {/* Şehir adı */}
              <p className="badge bg-danger fs-5 w-75">
                Sıcaklık: {weatherData.main.temp}°C
              </p>
              {/* Sıcaklık */}
              <p className="badge bg-secondary fs-4 w-75">
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
