import styles from "./StoriesandImages.module.scss";
import { useContext } from "react";
import { WidthContext } from "../../../pages/_app";

function StoriesandImages() {
  const width = useContext(WidthContext);
  return (
    <div className={styles.grid}>
      {/* --- Row 1 --- */}
      <div className={styles["grid__row-1-column-1"]}>
        {width < 480 && (
          <img
            className={styles.grid__image}
            src="/assets/home/mobile/create-and-share.jpg"
          ></img>
        )}
        {width > 480 && width < 1008 && (
          <img
            className={styles.grid__image}
            src="/assets/home/tablet/create-and-share.jpg"
          ></img>
        )}
        {width >= 1008 && (
          <img
            className={styles.grid__image}
            src="/assets/home/desktop/create-and-share.jpg"
          ></img>
        )}
      </div>
      <div className={styles["grid__row-1-column-2"]}>
        <div className={styles["grid__textContainer--black"]}>
          <h1 className={styles.grid__title}>
            CREATE AND SHARE YOUR PHOTO STORIES.
          </h1>
          <p className={styles["grid__textBody--grey"]}>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <div className={styles.grid__linkContainer}>
            <p className={styles["grid__link--white"]}>GET AN INVITE</p>
            <img
              className={styles["grid__arrow--white"]}
              src="/assets/shared/desktop/arrow.svg"
              alt="arrow icon"
            ></img>
          </div>
        </div>
      </div>
      {/* --- Row 2 --- */}
      <div className={styles["grid__row-2-column-1"]}>
        {width < 480 && (
          <img
            className={styles.grid__image}
            src="/assets/home/mobile/beautiful-stories.jpg"
          ></img>
        )}
        {width > 480 && width < 1008 && (
          <img
            className={styles.grid__image}
            src="/assets/home/tablet/beautiful-stories.jpg"
          ></img>
        )}
        {width >= 1008 && (
          <img
            className={styles.grid__image}
            src="/assets/home/desktop/beautiful-stories.jpg"
          ></img>
        )}
      </div>
      <div className={styles["grid__row-2-column-2"]}>
        <div className={styles["grid__textContainer--white"]}>
          <h1 className={styles.grid__title}>BEAUTIFUL STORIES EVERY TIME.</h1>
          <p className={styles["grid__textBody--black"]}>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <div className={styles.grid__linkContainer}>
            <p className={styles["grid__link--black"]}>VIEW THE STORIES</p>
            <img
              className={styles["grid__arrow--black"]}
              src="/assets/shared/desktop/arrow.svg"
              alt="arrow icon"
            ></img>
          </div>
        </div>
      </div>
      {/* --- Row 3 --- */}
      <div className={styles["grid__row-3-column-1"]}>
        {width < 480 && (
          <img
            className={styles.grid__image}
            src="/assets/home/mobile/designed-for-everyone.jpg"
          ></img>
        )}
        {width > 480 && width < 1008 && (
          <img
            className={styles.grid__image}
            src="/assets/home/tablet/designed-for-everyone.jpg"
          ></img>
        )}
        {width >= 1008 && (
          <img
            className={styles.grid__image}
            src="/assets/home/desktop/designed-for-everyone.jpg"
          ></img>
        )}{" "}
      </div>
      <div className={styles["grid__row-3-column-2"]}>
        <div className={styles["grid__textContainer--white"]}>
          <h1 className={styles.grid__title}>DESIGNED FOR EVERYONE.</h1>
          <p className={styles["grid__textBody--black"]}>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <div className={styles.grid__linkContainer}>
            <p className={styles["grid__link--black"]}>VIEW THE STORIES</p>
            <img
              className={styles["grid__arrow--black"]}
              src="/assets/shared/desktop/arrow.svg"
              alt="arrow icon"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoriesandImages;
