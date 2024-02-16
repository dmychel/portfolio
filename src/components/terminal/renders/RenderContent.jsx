import PropTypes from "prop-types";
import CommandLine from "/src/components/terminal/CommandLine";

const RenderContent = ({ renderComp }) => {
  console.log(renderComp);
  return (
    <>
      {renderComp.map((comp) => {
        const CompName = comp;
        return <CompName key={crypto.randomUUID()} />;
      })}
      <CommandLine />
    </>
  );
};

RenderContent.propTypes = {
  renderComp: PropTypes.array,
};

export default RenderContent;

// handleSubmit={handleSubmit}
//           handleKeyDown={handleKeyDown}
//           command={command}
//           setCommand={setCommand}
//           os={os}
