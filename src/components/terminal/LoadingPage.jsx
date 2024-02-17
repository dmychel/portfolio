import { TypeAnimation } from "react-type-animation";
import PropTypes from "prop-types";
import styles from "/src/styles/terminal/loading.module.scss";

const Loading = ({ os, setLoading }) => {
  setTimeout(() => {
    setLoading(false);
  }, 12000);

  const determineMessage = () => {
    if (os === "Linux") return linuxMessage();
    if (os === "Windows") return windowsMessage();
    if (os === "Mac") return appleMessage();
  };

  const windowsMessage = () => {
    return (
      <TypeAnimation
        sequence={[
          "detecting operating system...",
          1000,
          "oh..",
          1000,
          `you're using windows..`,
          1000,
          `try Linux :D`,
          1000,
          "migrating you to the terminal now",
        ]}
        speed={75}
      />
    );
  };

  const appleMessage = () => {
    return (
      <TypeAnimation
        sequence={[
          "detecting operating system...",
          1000,
          "oh..",
          1000,
          `you're using apple..`,
          500,
          `you're using apple...`,
          500,
          `you're using apple....`,
          1000,
          "migrating you to the terminal now",
        ]}
        speed={75}
      />
    );
  };

  const linuxMessage = () => {
    return (
      <TypeAnimation
        sequence={[
          "detecting operating system...",
          1000,
          "oh.. I see.",
          500,
          `you're using Linux..`,
          800,
          `Linux the master race :)`,
          500,
          `Welcome friend`,
          1000,
          "migrating you to the terminal now",
        ]}
        speed={80}
      />
    );
  };

  return <section className={styles.loading}>{determineMessage()}</section>;
};

Loading.propTypes = {
  os: PropTypes.string,
  setLoading: PropTypes.func,
};

export default Loading;
