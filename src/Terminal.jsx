// REACT
import { useState, useEffect } from "react";

// COMPONENTS
import About from "/src/components/terminal/About";
import Help from "/src/components/terminal/Help";
import Home from "/src/components/terminal/home/Home";
import Projects from "/src/components/terminal/Projects";
import RenderTerminal from "./components/terminal/renders/RenderTerminal";
import LoadingPage from "./components/terminal/LoadingPage";
import PrintTheme from "./components/terminal/renders/PrintTheme";

// STYLES

function App() {
  // useState
  const [command, setCommand] = useState("");
  const [commandHist, setCommandHist] = useState([]);
  const [renderComp, setRenderComp] = useState([Home]);
  const [index, setIndex] = useState(0);
  const [cdIndex, setCdIndex] = useState(0);
  const [os, setOs] = useState("");
  const [loading, setLoading] = useState(true);
  const usersOS = navigator.userAgent;

  // list of cd commands for autocomplete
  const cdCommands = [
    "windfall-matchup",
    "video-game-archive",
    "cv-maker",
    "email",
    "linkedin",
    "github",
    "serena-shopping",
  ];

  // all useEffect functions

  useEffect(() => {
    console.log(navigator.userAgent);
    if (usersOS.includes("Windows"))
      setOs("Windows"),
        (document.body.style.backgroundImage =
          "url('/assets/imgs/windows-background.jpg')");
    if (usersOS.includes("Mac"))
      setOs("Mac"),
        (document.body.style.backgroundImage =
          "url('/assets/imgs/apple-background.jpg')");
    if (usersOS.includes("X11" || "Linux"))
      setOs("Linux"),
        (document.body.style.backgroundImage =
          "url('/assets/imgs/arch-background.png')");
  }, [usersOS]);

  // EVENT HANDLERS
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = command;
    const adjustedStr = handleString(input);
    clearCommandInput();
    setCommandHist([...commandHist, adjustedStr]);
    return handleCommand(adjustedStr);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") cycleHistoryUp();
    if (e.key === "ArrowDown") cycleHistoryDown();
    if (e.key === "Tab") e.preventDefault(), checkAutoComplete();
  };

  const handleString = (string) => {
    return string.toLowerCase();
  };

  const clearCommandInput = () => {
    setCommand("");
  };

  const checkAutoComplete = () => {
    if (command.includes("cd")) cycleCdComms();
    if (command.includes("ab")) setCommand("about");
    if (command.includes("pro")) setCommand("projects");
    if (command.includes("ex")) setCommand("exit");
    if (command.includes("cl")) setCommand("clear");
    if (command.includes("he")) setCommand("help");
  };

  // COMMAND AUTOCOMPLETE/HISTORY FUNCTIONS
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
    if (cdIndex === 6) {
      const input = arr.at(0);
      setCommand("cd " + input);
      setCdIndex(1);
    } else {
      const input = arr.at(cdIndex + 1);
      setCommand("cd " + input);
      setCdIndex(cdIndex + 1);
    }
  };

  // COMMAND HANDLER
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
        window.open("/normie", "_self");
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
        window.open("https://windfall-matchup.netlify.app/", "_blank");
        break;
      }

      case "cd video-game-archive": {
        window.open("https://dmychel.github.io/game-archive/", "_blank");
        break;
      }

      case "cd cv-maker": {
        window.open("https://cv-maker-webapp.netlify.app/", "_blank");
        break;
      }

      case "cd serena-shopping": {
        window.open("https://serena-shop.netlify.app/", "_blank");
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

      case "theme set alacritty":
        {
          setOs("Linux");
          setRenderComp([...renderComp, PrintTheme]);
        }
        break;

      case "theme set powershell":
        {
          setOs("Windows");
          setRenderComp([...renderComp, PrintTheme]);
        }
        break;

      case "theme set mac":
        {
          setOs("Mac");
          setRenderComp([...renderComp, PrintTheme]);
        }
        break;

      default: {
        console.log(
          `'${input}' is not a command. Type 'help' for a list of commands`
        );
      }
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage os={os} setLoading={setLoading} />
      ) : (
        <RenderTerminal
          renderComp={renderComp}
          os={os}
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
          command={command}
          setCommand={setCommand}
        />
      )}
    </>
  );
}

export default App;
