import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <img
          src="./images/meteorology.png"
          className="img-thumbnail me-3"
          alt=""
          style={{ width: "50px", height: "auto" }}
        />
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" style={{ marginLeft: "auto" }}>
            <li class="nav-item">
              <Link class="navbar-brand text-primary link-nav" to="/">
                WEATHER NOW
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="navbar-brand text-primary link-nav"
                to="/favoriteCities"
              >
                FAVORİTE CITIES
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
