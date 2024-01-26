import "/src/styles/command.css";

const CommandLine = () => {
  return (
    <section className="command-line">
      <form>
        <label>[visitor@OS ~]$</label>
        <input type="text" />
      </form>
    </section>
  );
};

export default CommandLine;
