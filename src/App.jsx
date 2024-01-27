import { useState } from "react";
import "./App.css";
import CommandLine from "./components/CommandLine";
import Home from "/src/components/home/Home";

function App() {
  const [command, setCommand] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="app">
      <Home />
      <CommandLine
        handleSubmit={handleSubmit}
        command={command}
        setCommand={setCommand}
      />
    </section>
  );
}

export default App;
