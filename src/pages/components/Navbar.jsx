import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartItems } from "../../libs/store/shop/selectors";

export const Navbar = ({ search, setSearch }) => {
  const { cartItems } = useSelector(getCartItems);
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
    <>
      <nav className="navbar orange navbar-expand-lg bg-light  fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand crimson" to="/">
            <i className="fas fa-shopping-cart"></i> Mes Courses en Ligne
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ms-auto cart">
              <form
                role="search"
                className="search d-flex my-2 my-lg-0"
                onSubmit={handleSubmit}
              >
                <input
                  className="form-control mr-sm-2 rounded-0 rounded-start"
                  type="search"
                  value={search}
                  onChange={chandleSearch}
                  name="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success rounded-0 rounded-end"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <div className="navbar-nav menu-right ms-auto mb-lg-0">
                {/* Cart */}
                <Link to="/cart" className="ms-3">
                  <i className="fas fa-shopping-bag fa-2x grey"></i>
                </Link>
                <span className="badge top-0 p-1 bg-success rounded-circle">
                  {cartItems.length > 0 && cartItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
