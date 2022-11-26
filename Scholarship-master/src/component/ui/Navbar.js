import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <a>Home</a>
        </div>
        <div>
          <a>National Scholarship</a>
        </div>
        <div>
          <a>International Scholarship</a>
        </div>
        <div>
          <a>About Us</a>
        </div>
      </nav>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Menu
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <button>Home</button>
              <button>National Scholarship</button>
              <button>International Scholarship</button>
              <button>About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
