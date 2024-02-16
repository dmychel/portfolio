import RenderContent from "../RenderContent";

import PropTypes from "prop-types";

const MacTerm = ({ renderComp }) => {
  return (
    <div className="terminal">
      <RenderContent renderComp={renderComp} />
    </div>
  );
};

MacTerm.propTypes = {
  renderComp: PropTypes.array,
};

export default MacTerm;
