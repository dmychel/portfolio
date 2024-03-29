import styles from "/src/styles/normie.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }
  return (
    <header>
      <h1>
        <Link to="/">Dylon Crowley-Perez</Link>
      </h1>

      <nav>
        {toggle ? (
          <div className={styles.nav_page}>
            <div className={styles.nav_menu_toggled} onClick={toggleMenu}>
              <span>&#10006;</span>
            </div>
            <div className={styles.nav_options}>
              <Link to="/">Portfolio</Link>
              <Link to="/about">About</Link>
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

export default Header;
