import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./routes/Index";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Labs from "./routes/Labs";
import YakuzaAPI from "./routes/projectPages/YakuzaAPI"
import Terminal from "./routes/projectPages/Terminal"
import Onitsuka from "./routes/projectPages/Onitsuka"
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
          <Route path="/yakuza-api" element={<YakuzaAPI />}></Route>
          <Route path="/termial" element={<Terminal />}></Route>
          <Route path="/onitsuka" element={<Onitsuka />}></Route>
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
