import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./routes/Index";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Labs from "./routes/Labs";
import Error from "./routes/Error";

import "/src/styles/app.css";

const App = () => {
  return (
    <section className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
