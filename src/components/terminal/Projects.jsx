import styles from "/src/styles/terminal/projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.tip}>
        <span>Tip:</span> Try typing
        <span style={{ marginLeft: "1%" }}>
          &apos;<span style={{ color: "cyan" }}>cd windfall-matchup</span>&apos;
        </span>
      </div>
      <span>Windfall Matchup</span>
      <span>Video Game Archive</span>
      <span>CV Maker</span>
      <span>Serena Shopping</span>
    </section>
  );
};

export default Projects;
