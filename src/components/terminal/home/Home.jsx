import UserInfo from "./UserInfo";
import Ascii from "./ascii/Ascii";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import styles from "/src/styles/terminal/home.module.scss";

const Home = ({ os }) => {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <Ascii os={os} />
        <UserInfo os={os} />
      </div>
      <span className={styles.help}>
        Type &apos;help&apos; for a list of commands
      </span>
    </section>
  );
};

Home.propTypes = {
  os: PropTypes.string,
};

export default Home;
