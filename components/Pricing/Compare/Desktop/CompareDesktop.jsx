import styles from "./CompareDesktop.module.scss";

function CompareDesktop() {
  return (
    <div className={styles.compare}>
      <h2 className={styles.compare__title}>COMPARE</h2>
      <div className={styles.compare__table}>
        <h4 className={styles.compare__subheading}>THE FEATURES</h4>
        <h4 className={styles.compare__subheading}>BASIC</h4>
        <h4 className={styles.compare__subheading}>PRO</h4>
        <h4 className={styles.compare__subheading}>BUSINESS</h4>
        <hr />
        <h4 className={styles.compare__subheading}>UNLIMITED STORY POSTING</h4>
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <hr />
        <h4 className={styles.compare__subheading}>UNLIMITED PHOTO UPLOAD</h4>
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <hr />
        <h4 className={styles.compare__subheading}>EMBEDDING CUSTOM CONTENT</h4>
        <p />
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <hr />
        <h4 className={styles.compare__subheading}>CUSTOMISE METADATA</h4>
        <p />
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <hr />
        <h4 className={styles.compare__subheading}>ADVANCED METRICS</h4>
        <p />
        <p />
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <hr />
        <h4 className={styles.compare__subheading}>PHOTO DOWNLOADS</h4>
        <p />
        <p />
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <hr />
        <h4 className={styles.compare__subheading}>SEARCH ENGINE INDEXING</h4>
        <p />
        <p />
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <hr />
        <h4 className={styles.compare__subheading}>CUSTOM ANALYTICS</h4>
        <p />
        <p />
        <img
          className={styles.compare__tick}
          src="/assets/pricing/desktop/check.svg"
          alt="check mark"
        ></img>
        <hr />
      </div>
    </div>
  );
}

export default CompareDesktop;
