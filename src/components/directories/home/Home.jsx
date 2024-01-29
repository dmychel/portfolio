import UserInfo from "./UserInfo";
import Ascii from "./ascii/Ascii";
import Linux from "./ascii/Linux";
import Windows from "./ascii/Windows";
import Mac from "./ascii/Mac";
import { useState, useEffect } from "react";

import "/src/styles/home.css";
const Home = () => {
  const [os, setOs] = useState([]);
  useEffect(() => {
    console.log(navigator.appVersion);
    if (window.navigator.appVersion.indexOf("Wind") != -1) setOs([Windows]);
    if (window.navigator.appVersion.indexOf("Mac") != -1) setOs([Mac]);
    if (window.navigator.appVersion.indexOf("X11" || "Linux") != -1)
      setOs([Linux]);
  }, []);
  return (
    <section className="home">
      <div className="hero">
        <Ascii os={os} />
        <UserInfo />
      </div>
      <span className="help">Type &apos;help&apos; for a list of commands</span>
    </section>
  );
};

export default Home;
