import "/src/styles/commandList.css";

const CommandList = () => {
  return (
    <section className="command-list">
      <div className="type-commands">
        <span>
          <p>&quot;about &quot;</p>
          <p>About this cool guy</p>
        </span>
        <span>
          <p>&quot;projects &quot;</p>
          <p>A reason for you to hire me</p>
        </span>
        <span>
          <p>&quot;cd &quot;</p>
          <p>Change directory</p>
        </span>
        <span>
          <p>&quot;cd &quot;</p>
          <p>Normie view</p>
        </span>
        <span>
          <p>&quot;clear &quot;</p>
          <p>Clear the terminal</p>
        </span>
      </div>
      <div className="keyboard-shortcuts">
        <div>
          Press <span style={{ color: "cyan" }}>[Tab]</span> to auto complete
        </div>
        <div>
          Press <span style={{ color: "cyan" }}>[Ctrl] + [Bck]</span> to clear
          input
        </div>
        <div>
          Press <span style={{ color: "cyan" }}>[&#8593;] [&darr;]</span> to
          cycle through command history
        </div>
      </div>
    </section>
  );
};

export default CommandList;
