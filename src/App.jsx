// REACT
import { useState, useEffect } from "react";

// COMPONENTS
import About from "/src/components/terminal/About";
import CommandLine from "/src/components/terminal/CommandLine";
import Help from "/src/components/terminal/Help";
import Home from "/src/components/terminal/home/Home";
import Projects from "/src/components/terminal/Projects";

// JS FUNCTIONS
// import boolToggle from "./components/boolToggle";

// STYLES
import "/src/styles/terminal/Terminal.css";

function App() {
  const [command, setCommand] = useState("");
  const [commandHist, setCommandHist] = useState([]);
  const [renderComp, setRenderComp] = useState([Home]);
  const [index, setIndex] = useState(0);
  const [cdIndex, setCdIndex] = useState(0);
  const [os, setOs] = useState();
  const usersOS = navigator.userAgent;

  const cdCommands = [
    "windfall-matchup",
    "video-game-archive",
    "cv-maker",
    "email",
    "linkedin",
    "github",
  ];

  useEffect(() => {
    console.log(navigator.userAgent);
    if (usersOS.includes("Windows")) setOs("windows");
    if (usersOS.includes("Mac")) setOs("mac");
    if (usersOS.includes("X11" || "Linux")) setOs("linux");
  }, [usersOS]);

  useEffect(() => {
    console.log("window scroll run");
    window.scrollTo(0, document.body.scrollHeight);
  }, [renderComp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = command;
    const adjustedStr = handleString(input);
    clearCommandInput();
    setCommandHist([...commandHist, adjustedStr]);
    return handleCommand(adjustedStr);
  };

  const clearCommandInput = () => {
    setCommand("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") cycleHistoryUp();
    if (e.key === "ArrowDown") cycleHistoryDown();
    if (e.key === "Tab") e.preventDefault(), checkAutoComplete();
  };

  const checkAutoComplete = () => {
    if (command.includes("cd")) cycleCdComms();
    if (command.includes("ab")) setCommand("about");
    if (command.includes("pro")) setCommand("projects");
    if (command.includes("ex")) setCommand("exit");
    if (command.includes("cl")) setCommand("clear");
    if (command.includes("he")) setCommand("help");
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

  const cycleCdComms = () => {
    let arr = cdCommands;
    if (cdIndex === 5) {
      const input = arr.at(0);
      setCommand("cd " + input);
      setCdIndex(1);
    } else {
      const input = arr.at(cdIndex + 1);
      setCommand("cd " + input);
      setCdIndex(cdIndex + 1);
    }
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
        setRenderComp([...renderComp, Help]);
        break;
      }

      case "cd ~": {
        setRenderComp([...renderComp, Home]);
        break;
      }

      case "cd windfall-matchup": {
        window.open(
          "https://main--relaxed-medovik-632ef4.netlify.app/",
          "_blank"
        );
        break;
      }

      case "cd video-game-archive": {
        window.open("https://dmychel.github.io/game-archive/", "_blank");
        break;
      }

      case "cd cv-maker": {
        window.open("https://creative-gumption-e93819.netlify.app/", "_blank");
        break;
      }

      case "cd email": {
        window.open("mailto:dyloncrowley86@gmail.com");
        break;
      }

      case "cd github": {
        window.open("https://github.com/dmychel", "_blank");
        break;
      }

      case "cd linkedin": {
        window.open(
          "https://www.linkedin.com/in/dylon-crowley-perez-248b0823b/",
          "_blank"
        );
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
          return <CompName key={crypto.randomUUID()} os={os} />;
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
