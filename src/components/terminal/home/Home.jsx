import UserInfo from "./UserInfo";
import Ascii from "./ascii/Ascii";
import PropTypes from "prop-types";

import styles from "/src/styles/terminal/home.module.scss";

const Home = ({ os, uptime }) => {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <Ascii os={os} />
        <UserInfo os={os} uptime={uptime} />
      </div>
      <span className={styles.help}>
        Type &apos;help&apos; for a list of commands
      </span>
    </section>
  );
};

Home.propTypes = {
  os: PropTypes.string,
  uptime: PropTypes.number,
};

export default Home;
