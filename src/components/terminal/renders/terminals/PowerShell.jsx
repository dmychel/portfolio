import RenderContent from "../RenderContent";

import PropTypes from "prop-types";

const PowerShell = ({ renderComp }) => {
  return (
    <div className="terminal">
      <RenderContent renderComp={renderComp} />
    </div>
  );
};

PowerShell.propTypes = {
  renderComp: PropTypes.array,
};

export default PowerShell;
