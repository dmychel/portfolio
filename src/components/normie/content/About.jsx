import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import "/src/styles/normie/content.css";

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