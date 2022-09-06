import styles from "./ImageGrid.module.scss";
import { desktopImages, mobileImages } from "./Images";
import { imageContent } from "./ImageContent";
import { useContext } from "react";
import { WidthContext } from "../../../pages/_app";
import Link from "next/link";

function gridContent(image, index) {
  return (
    <div className={styles.grid__item}>
      <img className={styles.grid__image} src={image}></img>
      <div className={styles.grid__textContainer}>
        <p className={styles.grid__date}>
          {Object.values(imageContent)[index].date}
        </p>
        <h2 className={styles.grid__title}>
          {Object.values(imageContent)[index].title}
        </h2>
        <p className={styles.grid__attribution}>
          {Object.values(imageContent)[index].attr}
        </p>
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
  );
}

function ImageGrid() {
  const width = useContext(WidthContext);
  return (
    <div className={styles.grid}>
      {width <= 480
        ? mobileImages.map((image, index) => {
            return <>{gridContent(image, index)}</>;
          })
        : desktopImages.map((image, index) => {
            return <>{gridContent(image, index)}</>;
          })}
    </div>
  );
}

export default ImageGrid;
