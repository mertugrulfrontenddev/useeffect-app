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
        <a class="navbar-brand text-primary link-nav" href="#">
          WEATHER NOW
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
