import RenderContent from "../RenderContent";
import { useEffect } from "react";

import styles from "/src/styles/terminal/_PowerShell.module.scss";

import PropTypes from "prop-types";

const PowerShell = ({
  renderComp,
  os,
  handleSubmit,
  handleKeyDown,
  command,
  setCommand,
}) => {
  useEffect(() => {
    console.log("window scroll run");
    const termEL = document.getElementById("terminal");
    termEL.scrollTo(0, termEL.scrollHeight);
  }, [renderComp]);

  return (
    <div className={styles.terminal} id="terminal">
      <div className={styles.nav}>
        <div className={styles.title}>
          <img src="" alt="" />
          <span>Dogmas PowerShell</span>
        </div>
        <nav>
          <span>&minus;</span>
          <span>&#128470;</span>
          <span>&#128473;</span>
        </nav>
      </div>
      <RenderContent
        renderComp={renderComp}
        os={os}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        command={command}
        setCommand={setCommand}
      />
    </div>
  );
};

PowerShell.propTypes = {
  renderComp: PropTypes.array,
  os: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleKeyDown: PropTypes.func,
  command: PropTypes.string,
  setCommand: PropTypes.func,
};

export default PowerShell;
