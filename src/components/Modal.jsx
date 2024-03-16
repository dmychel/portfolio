import { Link } from "react-router-dom";
import styles from "/src/styles/normie.module.scss";

const Modal = () => {
  const handleClick = () => {
    console.log("clicked");
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  };

  return (
    <div className={styles.modal} id="modal">
      <span className={styles.exit} onClick={handleClick}>
        &#10006;
      </span>
      <p>Welcome!</p>
      <p>
        I&apos;d recommend trying out developer view by{" "}
        <span>
          <Link to="/terminal">clicking here</Link>
        </span>
        , or by navigating to the title in the header of the page.
      </p>
    </div>
  );
};

export default Modal;
