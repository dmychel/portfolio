import { Link } from "react-router-dom";
import "/src/App.scss";

const App = () => {
  return (
    <section className="app">
      <div className="title">
        <p>Select your path</p>
      </div>
      <div className="options">
        <Link to="normie">Normie View</Link>
        <Link to="terminal">Developer View</Link>
      </div>
    </section>
  );
};

export default App;
