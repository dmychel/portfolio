import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ setComponent }) => {
  return (
    <header>
      <h1 onClick={() => setComponent(null)}>
        <Link to="/menu">Dylon Crowley-Perez</Link>
      </h1>
    </header>
  );
};

Header.propTypes = {
  setComponent: PropTypes.func,
};

export default Header;
