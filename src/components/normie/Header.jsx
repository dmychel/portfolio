import PropTypes from "prop-types";
import "/src/styles/normie/header.css";

const Header = ({ setComponent }) => {
  return (
    <section className="header-master">
      <h1 onClick={() => setComponent(null)}>Dylon Crowley-Perez</h1>
    </section>
  );
};

Header.propTypes = {
  setComponent: PropTypes.func,
};

export default Header;