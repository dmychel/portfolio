// REACT
import { useState } from "react";

// COMPONENTS
import About from "./components/directories/About";
import CommandLine from "./components/CommandLine";
import CommandList from "./components/commands/CommandList";
import Home from "/src/components/home/Home";
import Projects from "./components/directories/Projects";

// JS FUNCTIONS
import boolToggle from "./components/boolToggle";

// STYLES
import "./App.css";

function App() {
  const [command, setCommand] = useState("");
  const [commandHist, setCommandHist] = useState([]);
  const [renderComp, setRenderComp] = useState([Home]);
  const [index, setIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = command;
    const adjustedStr = handleString(input);
    setCommandHist([...commandHist, adjustedStr]);
    return handleCommand(adjustedStr);
  };

  const handleKeyDown = (e) => {
    if (e === "ArrowUp") {
      return cycleHistoryUp();
    } else if (e === "ArrowDown") {
      return cycleHistoryDown();
    }
  };

  const cycleHistoryUp = () => {
    let arr = commandHist;
    if (index === 0) {
      const input = arr.at(-1);
      setCommand(input);
      setIndex(index - 1);
    } else {
      const input = arr.at(index - 1);
      setCommand(input);
      return setIndex(index - 1);
    }
  };

  const cycleHistoryDown = () => {
    let arr = commandHist;
    const input = arr.at(index + 1);
    setCommand(input);
    setIndex(index + 1);
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

      case "help": {
        setRenderComp([...renderComp, CommandList]);
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
        handleKeyDown={handleKeyDown}
        command={command}
        setCommand={setCommand}
      />
    </section>
  );
}

export default App;
