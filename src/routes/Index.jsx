import Contact from "../components/Contact";
import Intro from "../components/Intro";
import PreviewProject from "../components/PreviewProject";
import Skills from "../components/Skills";
import PropTypes from "prop-types";

function Index({ setCurrentProject }) {
  return (
    <div className="index">
      <Intro />
      <PreviewProject setCurrentProject={setCurrentProject} />
      <Skills />
      <Contact />
    </div>
  );
}

Index.propTypes = {
  setCurrentProject: PropTypes.func,
};

export default Index;
