const Weather = ({ cityName, weatherData }) => {
  return (
    <div className="container-fluid  ">
      <div className="card mb-1">
        <div className="card-body ">
          {weatherData ? (
            <div className="bg-warning rounded d-flex flex-column align-items-center justify-content-between mb-1">
              <img
                className="img-fluid w-25 mt-1 "
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
              <p className="badge bg-secondary fs-4 ">
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
