import RenderContent from "../RenderContent";
import PropTypes from "prop-types";

import styles from "/src/styles/terminal/_LinuxTerm.module.scss";

const LinuxTerm = ({ renderComp, os }) => {
  return (
    <div className={styles.terminal}>
      <RenderContent renderComp={renderComp} os={os} />
    </div>
  );
};

LinuxTerm.propTypes = {
  renderComp: PropTypes.array,
  os: PropTypes.string,
};

export default LinuxTerm;
