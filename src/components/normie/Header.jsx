import PropTypes from "prop-types";
import "/src/styles/normie/header.css";
import { Link } from "react-router-dom";

const Header = ({ setComponent }) => {
  return (
    <section className="header-master">
      <h1 onClick={() => setComponent(null)}>
        <Link to="/">Dylon Crowley-Perez</Link>
      </h1>
    </section>
  );
};

Header.propTypes = {
  setComponent: PropTypes.func,
};

export default Header;
