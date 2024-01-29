import PropTypes from "prop-types";
import "/src/styles/ascii.css";

const Ascii = ({ os }) => {
  return (
    <section className="ascii-wrapper">
      {os.map((comp) => {
        const CompName = comp;
        return <CompName key={crypto.randomUUID()} />;
      })}
    </section>
  );
};

Ascii.propTypes = {
  os: PropTypes.array,
};

export default Ascii;
