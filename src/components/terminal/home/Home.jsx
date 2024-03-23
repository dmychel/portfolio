import UserInfo from "./UserInfo";
import Ascii from "./ascii/Ascii";
import PropTypes from "prop-types";

const Home = ({ os }) => {
  return (
    <section>
      <div>
        <Ascii os={os} />
        <UserInfo os={os} />
      </div>
      <span>Type &apos;help&apos; for a list of commands</span>
    </section>
  );
};

Home.propTypes = {
  os: PropTypes.string,
};

export default Home;
