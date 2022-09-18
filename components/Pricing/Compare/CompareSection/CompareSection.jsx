import styles from "./CompareSection.module.scss";

function CompareSection({ title, ticks }) {
  return (
    <div className={styles.section}>
      <h4 className={styles.section__title}>{title}</h4>
      <div className={styles.section__options}>
        <div className={styles.section__tickBox}>
          <h5 className={styles.section__levels}>BASIC</h5>
          {ticks.includes("basic") && (
            <img
              className={styles.section__tick}
              src="/assets/pricing/desktop/check.svg"
              alt="check mark"
            ></img>
          )}
        </div>
        <div className={styles.section__tickBox}>
          <h5 className={styles.section__levels}>PRO</h5>
          {ticks.includes("pro") && (
            <img
              className={styles.section__tick}
              src="/assets/pricing/desktop/check.svg"
              alt="check mark"
            ></img>
          )}
        </div>
        <div className={styles.section__tickBox}>
          <h5 className={styles.section__levels}>BUSINESS</h5>
          {ticks.includes("business") && (
            <img
              className={styles.section__tick}
              src="/assets/pricing/desktop/check.svg"
              alt="check mark"
            ></img>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CompareSection;
