import { useContext } from "react";
import { WidthContext } from "../../../pages/_app";
import styles from "./MidSectionImages.module.scss";
import Link from "next/link";

function MidSectionImages() {
  const width = useContext(WidthContext);

  return (
    <div className={styles.grid}>
      {/* --- Mountains --- */}
      <div className={styles.grid__itemContainer}>
        <div className={styles.grid__item}>
          {width <= 480 && (
            <img
              className={styles.grid__image}
              src="/assets/stories/mobile/mountains.jpg"
            ></img>
          )}
          {width > 480 && (
            <img
              className={styles.grid__image}
              src="/assets/stories/desktop/mountains.jpg"
            ></img>
          )}
          <div className={styles.grid__textContainer}>
            <h4 className={styles.grid__title}>The Mountains</h4>
            <p className={styles.grid__attribution}>by John Appleseed</p>
            <hr />
            <div className={styles.grid__linkContainer}>
              <Link href="#">
                <a className={styles.grid__link}>READ STORY</a>
              </Link>
              <img
                className={styles["grid__arrow--white"]}
                src="/assets/shared/desktop/arrow.svg"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* --- Sunset --- */}
      <div className={styles.grid__item}>
        {width <= 480 && (
          <img
            className={styles.grid__image}
            src="/assets/stories/mobile/cityscapes.jpg"
          ></img>
        )}
        {width > 480 && (
          <img
            className={styles.grid__image}
            src="/assets/stories/desktop/cityscapes.jpg"
          ></img>
        )}
        <div className={styles.grid__textContainer}>
          <h4 className={styles.grid__title}>Sunset Cityscapes</h4>
          <p className={styles.grid__attribution}>by Benjamin Cruz</p>
          <hr />
          <div className={styles.grid__linkContainer}>
            <Link href="#">
              <a className={styles.grid__link}>READ STORY</a>
            </Link>
            <img
              className={styles["grid__arrow--white"]}
              src="/assets/shared/desktop/arrow.svg"
            ></img>
          </div>
        </div>
      </div>
      {/* --- Voyage --- */}
      <div className={styles.grid__item}>
        {width <= 480 && (
          <img
            className={styles.grid__image}
            src="/assets/stories/mobile/18-days-voyage.jpg"
          ></img>
        )}
        {width > 480 && (
          <img
            className={styles.grid__image}
            src="/assets/stories/desktop/18-days-voyage.jpg"
          ></img>
        )}
        <div className={styles.grid__textContainer}>
          <h4 className={styles.grid__title}>Sunset Cityscapes</h4>
          <p className={styles.grid__attribution}>by Alexei Borodin</p>
          <hr />
          <div className={styles.grid__linkContainer}>
            <Link href="#">
              <a className={styles.grid__link}>READ STORY</a>
            </Link>
            <img
              className={styles["grid__arrow--white"]}
              src="/assets/shared/desktop/arrow.svg"
            ></img>
          </div>
        </div>
      </div>
      {/* --- Architecturals --- */}
      <div className={styles.grid__item}>
        {width <= 480 && (
          <img
            className={styles.grid__image}
            src="/assets/stories/mobile/architecturals.jpg"
          ></img>
        )}
        {width > 480 && (
          <img
            className={styles.grid__image}
            src="/assets/stories/desktop/architecturals.jpg"
          ></img>
        )}
        <div className={styles.grid__textContainer}>
          <h4 className={styles.grid__title}>Architecturals</h4>
          <p className={styles.grid__attribution}>by Samantha Brooke</p>
          <hr />
          <div className={styles.grid__linkContainer}>
            <Link href="#">
              <a className={styles.grid__link}>READ STORY</a>
            </Link>
            <img
              className={styles["grid__arrow--white"]}
              src="/assets/shared/desktop/arrow.svg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidSectionImages;
