import { useState } from "react";
import "./App.css";
import About from "./components/directories/About";
import ArchLinux from "./components/home/ascii/ArchLinux";
import CommandLine from "./components/CommandLine";
import CommandList from "./components/commands/CommandList";
import Home from "/src/components/home/Home";
import Projects from "./components/directories/Projects";
import UserInfo from "./components/home/UserInfo";

function App() {
  const [command, setCommand] = useState("");
  const [renderComp, setRenderComp] = useState([]);
  const [history, setHistory] = useState([]);

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
        console.log("about command");
        break;
      }
      case "projects": {
        console.log("projects command");
        break;
      }
      case "cd": {
        console.log("cd command");
        break;
      }
      case "exit": {
        console.log("exit command");
        break;
      }
      case "clear": {
        console.log("clear command");
        break;
      }

      default: {
        console.log(
          `'${input}' is not a string. Type 'help' for a list of commands`
        );
      }
    }
  };

  return (
    <section className="app">
      <Home />
      <section className="content"></section>
      <CommandList />
      <CommandLine
        handleSubmit={handleSubmit}
        command={command}
        setCommand={setCommand}
      />
    </section>
  );
}

export default App;
