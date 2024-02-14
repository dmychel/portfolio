import PropTypes from "prop-types";
import styles from "/src/styles/normie/header.module.scss";
import { Link } from "react-router-dom";

const Header = ({ setComponent }) => {
  return (
    <section className={styles.headerMaster}>
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
