import UserInfo from "./UserInfo";
import ArchLinux from "./ascii/ArchLinux";
import "/src/styles/home.css";
const Home = () => {
  return (
    <section className="home">
      <ArchLinux />
      <UserInfo />
    </section>
  );
};

export default Home;
