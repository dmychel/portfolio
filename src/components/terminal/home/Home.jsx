import UserInfo from "./UserInfo";
import Ascii from "./ascii/Ascii";
import PropTypes from "prop-types";

import "/src/styles/terminal/home.scss";

const Home = ({ os, uptime }) => {
  return (
    <section className="home">
      <div className="hero">
        <Ascii os={os} />
        <UserInfo os={os} uptime={uptime} />
      </div>
      <span className="help">Type &apos;help&apos; for a list of commands</span>
    </section>
  );
};

Home.propTypes = {
  os: PropTypes.string,
  uptime: PropTypes.number,
};

export default Home;
