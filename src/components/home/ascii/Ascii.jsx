import { useState, useEffect } from "react";
import '/src/styles/ascii.css'

import Windows from "./Windows";
import Linux from "./Linux";
import Mac from "./Mac";

const Ascii = () => {
  const [os, setOs] = useState([]);

  useEffect(() => {
    console.log(navigator.appVersion)
    if (navigator.appVersion.indexOf("Wind") != -1) setOs([Windows]);
    if (navigator.appVersion.indexOf("Mac") != -1) setOs([Mac]);
    if (navigator.appVersion.indexOf("X11" || 'Linux') != -1) setOs([Linux]);
  }, []);


  return (
    <section className="ascii-wrapper">
      {os.map((comp) => {
        const CompName = comp;
        return <CompName key={crypto.randomUUID()} />;
      })}
    </section>
  );
};

export default Ascii;
