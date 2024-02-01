import PropTypes from "prop-types";
import "/src/styles/terminal/ascii.css";
import Windows from "./Windows";
import Mac from "./Mac";
import Linux from "./Linux";

const Ascii = ({ os }) => {
  const dynamicComp = () => {
    if (os === "Windows") return <Windows />;
    if (os === "Mac") return <Mac />;
    if (os === "Linux") return <Linux />;
    console.log("run");
  };
  return <section className="ascii-wrapper">{dynamicComp()}</section>;
};

Ascii.propTypes = {
  os: PropTypes.string,
};

export default Ascii;
