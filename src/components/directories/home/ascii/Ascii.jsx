import PropTypes from "prop-types";
import "/src/styles/ascii.css";
import Windows from "./Windows";

const Ascii = ({ os }) => {
  const dynamicComp = () => {
    if (os === "windows") return <Windows />;
    console.log("run");
  };
  return <section className="ascii-wrapper">{dynamicComp()}</section>;
};

Ascii.propTypes = {
  os: PropTypes.string,
};

export default Ascii;
