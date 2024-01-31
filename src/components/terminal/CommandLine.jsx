import "/src/styles/terminal/command.css";
import PropTypes from "prop-types";

const CommandLine = ({ handleSubmit, handleKeyDown, command, setCommand }) => {
  return (
    <section className="command-line">
      <form onSubmit={handleSubmit}>
        <label>[visitor@OS ~]$</label>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </form>
    </section>
  );
};

CommandLine.propTypes = {
  handleSubmit: PropTypes.func,
  handleKeyDown: PropTypes.func,
  command: PropTypes.string,
  setCommand: PropTypes.func,
};

export default CommandLine;
