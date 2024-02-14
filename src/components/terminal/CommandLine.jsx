import "/src/styles/terminal/command.scss";
import PropTypes from "prop-types";

const CommandLine = ({
  handleSubmit,
  handleKeyDown,
  command,
  setCommand,
  os,
}) => {
  return (
    <section className="command-line">
      <form onSubmit={handleSubmit}>
        <label>[visitor@{os} ~]$</label>
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
  os: PropTypes.string,
};

export default CommandLine;
