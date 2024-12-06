import FavoriteCityItem from "./FavoriteCityItem";

const FavoriteCitiesPage = ({ favoriteCity }) => {
  return (
    <div className="container-fluid flex-column d-flex  align-items-center flex-grow-1">
      <h1 className="mt-5 mb-2">YOUR FAVORITE CITIES</h1>
      <div className="row w-100">
        {favoriteCity.length > 0 ? (
          favoriteCity.map((city) => (
            <div key={city.cityName} className="col-12 col-sm-6 col-md-6 mt-2">
              <div className="card mb-2">
                <div className="card-body bg-white ">
                  <FavoriteCityItem favoriteCity={city} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 col-sm-6 col-md-12 mt-2 d-flex">
            <div
              className="card mb-2 flex-grow-1"
              style={{ minHeight: "50vh" }}
            >
              <div className="card-body bg-white d-flex justify-content-center align-items-center">
                <p>Henüz favori şehriniz yok.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteCitiesPage;
