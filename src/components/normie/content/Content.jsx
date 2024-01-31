import About from "./About";
import Projects from "./projects/Projects";
import Contact from "./Contact";

import "../styles/content.css";

const Content = () => {
  return (
    <section className="content-master">
      <About />
      <Projects />
      <Contact />
    </section>
  );
};

export default Content;
