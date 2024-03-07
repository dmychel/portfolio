import styles from "/src/styles/terminal/themeSet.module.scss";

const ThemeSet = () => {
  return (
    <div className={styles.themeSet}>
      <span>
        Theme options:
        <br />
        <br />
        <p>&apos;Alacritty&apos;</p>
        <br />
        <p>&apos;PowerShell&apos;</p>
        <br />
        <p>&apos;Mac&apos;</p>
      </span>
      <br />
      <br />
      <span>Tip: Try typing &apos;theme set alacritty&apos;</span>
    </div>
  );
};

export default ThemeSet;
