import { Link } from "react-router-dom";

export const Navbar = ({ search, setSearch }) => {
  const chandleSearch = (evt) => {
    const value = evt.target.value;
    setSearch(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim().length > 1) {
      setSearch(search);
    }
  };
  return (
    <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand crimson" to="/">
        <i className="fas fa-shopping-cart"></i> Mes Courses en Ligne
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ms-auto cart">
          <div>
            <form
              className="search form-inline my-2 my-lg-0"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                value={search}
                onChange={chandleSearch}
                name="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="menu-right ms-auto">
            {/* Cart */}
            <Link to="/cart">
              <i className="fas fa-shopping-bag fa-2x grey"></i>
            </Link>
            <span className="badge badge-pill badge-success">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
