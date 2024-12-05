import { useState } from "react";

const FavoriteCity = ({ handleFavoriteCity, cityName, favoriteCity }) => {
  let city = favoriteCity.find((city) => city.cityName === cityName);

  let isFavorite = city ? city.isFavorite : false;
  return (
    <>
      <img
        style={{ maxWidth: "35px", cursor: "pointer" }}
        src={isFavorite ? "./images/favorite_red.png" : "./images/favorite.png"}
        alt=""
        onClick={() => handleFavoriteCity(cityName)}
      />
    </>
  );
};

export default FavoriteCity;
