import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar bg-body-tertiary w-100">
      <div class="container d-flex align-items-center justify-content-between">
        <img
          src="./images/meteorology.png"
          className="img-thumbnail"
          alt=""
          style={{ width: "50px", height: "auto" }}
        />
        <Link class="navbar-brand text-primary link-nav" to="/">
          WEATHER NOW
        </Link>
        <Link class="navbar-brand text-primary link-nav" to="/favoriteCities">
          FAVORİTE CITIES
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
