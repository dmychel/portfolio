import UserInfo from "./UserInfo";
import ArchLinux from "./ascii/ArchLinux";
import "/src/styles/home.css";
const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <ArchLinux />
        <UserInfo />
      </div>
      <span className="help">Type &apos;help&apos; for a list of commands</span>
    </section>
  );
};

export default Home;
