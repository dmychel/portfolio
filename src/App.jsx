import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./routes/Index";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Labs from "./routes/Labs";
import ProjectPage from "./routes/ProjectPage";
import Error from "./routes/Error";
import "/src/styles/app.css";


const App = () => {
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const project = JSON.parse(localStorage.getItem('project'));
    if (project) {
      setCurrentProject(project);
    }
    console.log('hello')
  }, []);

  return (
    <section className="app">
      <BrowserRouter>
        <header>
          <Link to="/" style={{ color: "#f8f8f2", textDecoration: "underline" }}><h1>Dylon Crowley-Perez</h1></Link>
        </header>
        <Routes>
          <Route
            path="/"
            element={<Index setCurrentProject={setCurrentProject} />}
          />
          <Route path="/projects" element={<Projects setCurrentProject={setCurrentProject} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/project-page"
            element={<ProjectPage currentProject={currentProject} />}
          ></Route>
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
