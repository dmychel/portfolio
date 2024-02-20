import styles from "/src/styles/terminal/commandList.module.scss";

const CommandList = () => {
  return (
    <section className={styles.commandList}>
      <div className={styles.typeCommands}>
        <span>
          <p className={styles.command}>&apos;about&apos;</p>
          <p>About this cool guy</p>
        </span>
        <span>
          <p className={styles.command}>&apos;projects&apos;</p>
          <p>A reason for you to hire me</p>
        </span>
        <span>
          <p className={styles.command}>&apos;resume&apos;</p>
          <p>View my resume</p>
        </span>
        <span>
          <p className={styles.command}>&apos;cd&apos;</p>
          <p>Change directory</p>
        </span>
        <span>
          <p className={styles.command}>&apos;exit&apos;</p>
          <p>Normie view</p>
        </span>
        <span>
          <p className={styles.command}>&apos;theme set&apos;</p>
          <p>Change terminal style</p>
        </span>
        <span>
          <p className={styles.command}>&apos;clear&apos;</p>
          <p>Clear the terminal</p>
        </span>
      </div>
      <div className={styles.keyboardShortcuts}>
        <div>
          Press <span style={{ color: "rgb(153, 153, 0)" }}>[Tab]</span> to auto
          complete
        </div>
        <div>
          Press{" "}
          <span style={{ color: "rgb(153, 153, 0)" }}>[Ctrl] + [Bck]</span> to
          clear input
        </div>
        <div>
          Press{" "}
          <span style={{ color: "rgb(153, 153, 0)" }}>[&#8593;] [&darr;]</span>{" "}
          to cycle through command history
        </div>
      </div>
    </section>
  );
};

export default CommandList;
