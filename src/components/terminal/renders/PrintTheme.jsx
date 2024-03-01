import styles from "/src/styles/terminal/printTheme.module.scss";

import PropTypes from "prop-types";

const PrintTheme = ({ os }) => {
  const parseOs = () => {
    if (os === "Linux") return <p>~theme set to Alacritty</p>;
    if (os === "Windows") return <p>~theme set to PowerShell</p>;
    if (os === "Mac") return <p>~theme set to Mac Terminal</p>;
    else  {
      return <p>~theme set to Default Terminal</p>
    }
  };

  return <div className={styles.themePrint}>{parseOs()}</div>;
};

PrintTheme.propTypes = {
  os: PropTypes.string,
};

export default PrintTheme;
