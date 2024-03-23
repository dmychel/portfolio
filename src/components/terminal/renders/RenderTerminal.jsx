import PropTypes from "prop-types";
import LinuxTerm from "./terminals/LinuxTerm";
import PowerShell from "./terminals/PowerShell";
import MacTerm from "./terminals/MacTerm";
import AndroidTerm from "./terminals/AndroidTerm";

import styles from "/src/styles/terminal/terminal.module.scss";

const RenderTerminal = ({
  renderComp,
  os,
  handleSubmit,
  handleKeyDown,
  command,
  setCommand,
}) => {
  const dynamicTerm = () => {
    if (os === "Linux")
      return (
        <LinuxTerm
          renderComp={renderComp}
          os={os}
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
          command={command}
          setCommand={setCommand}
        />
      );
    if (os === "Windows")
      return (
        <PowerShell
          renderComp={renderComp}
          os={os}
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
          command={command}
          setCommand={setCommand}
        />
      );
    if (os === "Mac")
      return (
        <MacTerm
          renderComp={renderComp}
          os={os}
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
          command={command}
          setCommand={setCommand}
        />
      );
    else {
      return (
        <AndroidTerm
          renderComp={renderComp}
          os={os}
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
          command={command}
          setCommand={setCommand}
        />
      );
    }
  };
  return <section className={styles.terminal}>{dynamicTerm()}</section>;
};

RenderTerminal.propTypes = {
  renderComp: PropTypes.array,
  os: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleKeyDown: PropTypes.func,
  command: PropTypes.string,
  setCommand: PropTypes.func,
};

export default RenderTerminal;
