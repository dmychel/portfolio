import "/src/styles/command.css";
import PropTypes from "prop-types";

const CommandLine = ({ handleSubmit, command, setCommand }) => {
  const handleKeyDown = (key) => {
    if (key === "ArrowUp") {
      console.log("working");
    } else if (key === "ArrowDown") {
      console.log("working down");
    }
  };

  return (
    <section className="command-line">
      <form onSubmit={handleSubmit}>
        <label>[visitor@OS ~]$</label>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e.key)}
        />
      </form>
    </section>
  );
};

CommandLine.propTypes = {
  handleSubmit: PropTypes.func,
  command: PropTypes.string,
  setCommand: PropTypes.func,
};

export default CommandLine;
