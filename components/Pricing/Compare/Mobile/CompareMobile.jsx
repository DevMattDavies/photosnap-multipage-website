import styles from "./CompareMobile.module.scss";
import CompareSection from "../CompareSection/CompareSection";

function CompareMobile() {
  return (
    <div className={styles.compare}>
      <h4 className={styles.compare__title}>THE FEATURES</h4>
      <hr />
      <CompareSection
        title="UNLIMITED STORY POSTING"
        ticks={["basic", "pro", "business"]}
      />
      <CompareSection
        title="UNLIMITED PHOTO UPLOAD"
        ticks={["basic", "pro", "business"]}
      />
      <CompareSection
        title="EMBEDDING CUSTOM CONTENT"
        ticks={["pro", "business"]}
      />
      <CompareSection title="CUSTOMISE METADATA" ticks={["pro", "business"]} />
      <CompareSection title="ADVANCED METRICS" ticks={["business"]} />
      <CompareSection title="PHOTO DOWNLOADS" ticks={["business"]} />
      <CompareSection title="SEARCH ENGINE INDEXING" ticks={["business"]} />
      <CompareSection title="CUSTOM ANALYTICS" ticks={["business"]} />
    </div>
  );
}

export default CompareMobile;
