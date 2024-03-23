const CommandList = () => {
  return (
    <section>
      <div>
        <span>
          <p>&apos;about&apos;</p>
          <p>About this cool guy</p>
        </span>
        <span>
          <p>&apos;projects&apos;</p>
          <p>A reason for you to hire me</p>
        </span>
        <span>
          <p>&apos;resume&apos;</p>
          <p>View my resume</p>
        </span>
        <span>
          <p>&apos;cd&apos;</p>
          <p>Change directory</p>
        </span>
        <span>
          <p>&apos;exit&apos;</p>
          <p>Normal view</p>
        </span>
        <span>
          <p>&apos;theme set&apos;</p>
          <p>Change terminal style</p>
        </span>
        <span>
          <p>&apos;clear&apos;</p>
          <p>Clear the terminal</p>
        </span>
      </div>
      <div>
        <div>
          Press <span>[Tab]</span> to auto complete
        </div>
        <div>
          Press <span>[Ctrl] + [Bck]</span> to clear input
        </div>
        <div>
          Press{" "}
          <span style={{ color: "rgb(153, 153, 0)" }}>[&#8593;] [&darr;]</span>{" "}
          to cycle through command history
        </div>
      </div>
    </section>
  );
};

export default CommandList;
