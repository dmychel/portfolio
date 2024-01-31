import PropTypes from "prop-types";
import "/src/styles/ascii.css";
import Windows from "./Windows";
import Mac from "./Mac";
import Linux from "./Linux";

const Ascii = ({ os }) => {
  const dynamicComp = () => {
    if (os === "windows") return <Windows />;
    if (os === "mac") return <Mac />;
    if (os === "linux") return <Linux />;
    console.log("run");
  };
  return <section className="ascii-wrapper">{dynamicComp()}</section>;
};

Ascii.propTypes = {
  os: PropTypes.string,
};

export default Ascii;
