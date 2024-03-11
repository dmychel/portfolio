import { TypeAnimation } from "react-type-animation";
import PropTypes from "prop-types";
import styles from "/src/styles/terminal/loading.module.scss";

const Loading = ({ os, setLoading }) => {
  setTimeout(() => {
    setLoading(false);
  }, 12000);

  const determineMessage = () => {
    if (os === "Linux") {
      console.log('Linux')
      return linuxMessage()
    }

    if (os === "Windows") {
      console.log('Windows')
      return windowsMessage()
    }

    if (os === "Mac") {
      console.log('Mac')
      return appleMessage()
    }

    if (os === 'Android') {
      console.log('android')
      return androidMessage()
    }
    else {
      return
    }
  }

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
          `you're using windows...`,
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
          `you're using Linux...`,
          500,
          `Welcome friend`,
          1000,
          "migrating you to the terminal now",
        ]}
        speed={80}
      />
    );
  };

  const androidMessage = () => {
    return (
      <TypeAnimation
        sequence={[
          "detecting operating system...",
          1000,
          "oh..",
          1000,
          `you're using a version of android..`,
          1000,
          `you're using a version of android...?`,
          1000,
          "migrating you to the terminal now",
        ]}
        speed={75}
      />
    );
  };

  return (
    <section className={styles.loading} > {determineMessage()}</section >
  )

};






Loading.propTypes = {
  os: PropTypes.string,
  setLoading: PropTypes.func,
};

export default Loading;
