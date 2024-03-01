import RenderContent from "../RenderContent";
import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "/src/styles/terminal/_MacTerm.module.scss";

const MacTerm = ({
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
        <nav>
          <span className={styles.exit}></span>
          <span className={styles.min}></span>
          <span className={styles.max}></span>
        </nav>
        <div className={styles.title}>
          <img src="" alt="" />
          <span>Pear Terminal</span>
        </div>
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

MacTerm.propTypes = {
  renderComp: PropTypes.array,
  os: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleKeyDown: PropTypes.func,
  command: PropTypes.string,
  setCommand: PropTypes.func,
};

export default MacTerm;
