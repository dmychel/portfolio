import About from "/src/components/normie/content/About";
import Projects from "/src/components/normie/content/projects/Projects";
import Contact from "/src/components/normie/content/Contact";

import "/src/styles/normie/content.scss";

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
