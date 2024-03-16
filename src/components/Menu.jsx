import { Link } from "react-router-dom";
import styles from "/src/styles/menu.module.scss";

const Menu = () => {
  return (
    <section className={styles.menu}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src="/assets/imgs/terminal-preview.jpg" alt="" />
        </div>

        <div className={styles.info}>
          <h2>Normal View</h2>
          <p>kvlsfvkljfvb;vnzfj</p>
        </div>

        <div className={styles.button}>
          <Link to="/normie">
            <button>View Now</button>
          </Link>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image}>
          <img src="/assets/imgs/terminal-preview.jpg" alt="" />
        </div>

        <div className={styles.info}>
          <h2>Terminal View</h2>
          <p>kvlsfvkljfvb;vnzfj</p>
        </div>

        <div className={styles.button}>
          <Link to="/terminal">
            <button>View Now</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
