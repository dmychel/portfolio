// REACT
import { useState } from "react";

// COMPONENTS
import About from "./components/directories/About";
import CommandLine from "./components/CommandLine";
import Home from "/src/components/home/Home";
import Projects from "./components/directories/Projects";

// JS FUNCTIONS
import boolToggle from "./components/boolToggle";

// STYLES
import "./App.css";

function App() {
  const [command, setCommand] = useState("");
  const [renderComp, setRenderComp] = useState([Home]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = command;
    const adjustedStr = handleString(input);
    return handleCommand(adjustedStr);
  };

  const handleString = (string) => {
    return string.toLowerCase();
  };

  const handleCommand = (input) => {
    switch (input) {
      case "about": {
        setRenderComp([...renderComp, About]);
        break;
      }
      case "projects": {
        setRenderComp([...renderComp, Projects]);
        break;
      }
      case "exit": {
        console.log("exit");
        break;
      }
      case "clear": {
        setRenderComp([]);
        break;
      }

      case "~": {
        setRenderComp([...renderComp, Home]);
        break;
      }

      default: {
        console.log(
          `'${input}' is not a command. Type 'help' for a list of commands`
        );
      }
    }
  };

  return (
    <section className="app">
      <section className="renderedInput">
        {renderComp.map((comp) => {
          const CompName = comp;
          return <CompName key={crypto.randomUUID()} />;
        })}
      </section>
      <CommandLine
        handleSubmit={handleSubmit}
        command={command}
        setCommand={setCommand}
      />
    </section>
  );
}

export default App;
