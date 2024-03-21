import PropTypes from "prop-types";
import styles from "/src/styles/normie.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ setComponent }) => {
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }
  return (
    <header>
      <h1 onClick={() => setComponent(null)}>
        <Link to="/">Dylon Crowley-Perez</Link>
      </h1>

      <nav>
        {toggle ? (
          <div className={styles.nav_page}>
            <div className={styles.nav_menu_toggled} onClick={toggleMenu}>
              <span>&#10006;</span>
            </div>
            <div className={styles.nav_options}>
              <h2>Portfolio</h2>
              <h2>About</h2>
            </div>
          </div>
        ) : (
          <div className={styles.nav_menu} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </nav>
    </header>
  );
};

Header.propTypes = {
  setComponent: PropTypes.func,
};

export default Header;
