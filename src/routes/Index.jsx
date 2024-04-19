import Contact from "../components/Contact";
import Intro from "../components/Intro";
import PreviewProject from "../components/PreviewProject";

function Index() {
  return (
    <div className="index">
      <Intro />
      <PreviewProject />
      <Contact />
    </div>
  );
}

export default Index;
