import styles from "./TopImage.module.scss";
import { useContext } from "react";
import { WidthContext } from "../../../pages/_app.js";

function TopImage() {
  const width = useContext(WidthContext);
  return (
    <div className={styles.container}>
      {width <= 480 && (
        <img
          className={styles.container__image}
          src="/assets/stories/mobile/moon-of-appalacia.jpg"
        ></img>
      )}
      {width > 480 && width < 1008 && (
        <img
          className={styles.container__image}
          src="/assets/stories/tablet/moon-of-appalacia.jpg"
        ></img>
      )}
      {width >= 1008 && (
        <img
          className={styles.container__image}
          src="/assets/stories/desktop/moon-of-appalacia.jpg"
        ></img>
      )}
      <div
        className={
          width <= 480
            ? styles["container__text--mobile"]
            : styles["container__text--desktop"]
        }
      >
        <h4 className={styles["container__preamble"]}>
          LAST MONTH'S FEATURED STORY
        </h4>
        <h1 className={styles["container__title"]}>
          HAZY FULL MOON OF APPALACHIA
        </h1>
        <div className={styles["container__attribution"]}>
          <p className={styles.container__date}>March 2nd 2020</p>
          <p className={styles.container__author}>by John Appleseed</p>
        </div>
        <p className={styles["container__body-content"]}>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <div className={styles.container__linkContainer}>
          <p className={styles.container__link}>READ THE STORY</p>
          <img
            className={styles.container__linkArrow}
            src="/assets/shared/desktop/arrow.svg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default TopImage;
