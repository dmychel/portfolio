import RenderContent from "../RenderContent";

import PropTypes from "prop-types";

const LinuxTerm = ({ renderComp }) => {
  return (
    <div className="terminal">
      <RenderContent renderComp={renderComp} />
    </div>
  );
};

LinuxTerm.propTypes = {
  renderComp: PropTypes.array,
};

export default LinuxTerm;
