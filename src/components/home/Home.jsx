import UserInfo from "./UserInfo";
import Ascii from "./ascii/Ascii";

import "/src/styles/home.css";
const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <Ascii/>
        <UserInfo />
      </div>
      <span className="help">Type &apos;help&apos; for a list of commands</span>
    </section>
  );
};

export default Home;
