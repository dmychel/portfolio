import UserInfo from "./UserInfo";
import Ascii from "./ascii/Ascii";
import Linux from "./ascii/Linux";
import Windows from "./ascii/Windows";
import Mac from "./ascii/Mac";
import { useState, useEffect } from "react";

import "/src/styles/home.css";

const Home = () => {
  const usersOS = navigator.userAgent;
  const [os, setOs] = useState([]);

  useEffect(() => {
    console.log(navigator.userAgent);
    if (usersOS.includes("Windows")) setOs([Windows]);
    if (usersOS.includes("Mac")) setOs([Mac]);
    if (usersOS.includes("X11" || "Linux")) setOs([Linux]);
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
