import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./routes/Index";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Labs from "./routes/Labs";
import ProjectPage from "./routes/ProjectPage";
import Error from "./routes/Error";

import "/src/styles/app.css";
import { useState } from "react";

const App = () => {
  const [currentProject, setCurrentProject] = useState(null);

  return (
    <section className="app">
      <header>
        <h1>Dylon Crowley-Perez</h1>
      </header>
      <BrowserRouter>
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
