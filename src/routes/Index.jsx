import Contact from "../components/Contact";
import Intro from "../components/Intro";
import PreviewProject from "../components/PreviewProject";
import Skills from "../components/Skills";

function Index() {
  return (
    <div className="index">
      <Intro />
      <PreviewProject />
      <Skills />
      <Contact />
    </div>
  );
}

export default Index;
