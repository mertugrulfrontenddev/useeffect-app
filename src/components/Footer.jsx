const Footer = () => {
  return (
    <footer class="bg-body-tertiary text-primary py-1">
      <div class="container">
        <div class="row g-0">
          <div class="col-md-6">
            <p>&copy; 2024 Your Website</p>
          </div>
          <div class="col-md-6 text-md-end ">
            <ul class="list-inline ">
              <li class="list-inline-item">
                <a
                  href="#"
                  class="text-primary text-decoration-none link-footer"
                >
                  Privacy Policy
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="#"
                  class="text-primary text-decoration-none link-footer"
                >
                  Terms of Service
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="#"
                  class="text-primary text-decoration-none link-footer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
