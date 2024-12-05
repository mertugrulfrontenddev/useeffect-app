import FavoriteCityItem from "./FavoriteCityItem";

const FavoriteCitiesPage = ({ favoriteCity }) => {
  return (
    <div className="container-fluid flex-column d-flex  align-items-center flex-grow-1">
      <h1 className="mt-5 mb-2">YOUR FAVORITE CITIES</h1>
      <div className="row w-75">
        {favoriteCity.map((city) => (
          <div key={city.cityName} className="col-12 col-sm-6 col-md-4 mt-2">
            <div className="card mb-2">
              <div className="card-body bg-white ">
                <FavoriteCityItem favoriteCity={[city]} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteCitiesPage;
