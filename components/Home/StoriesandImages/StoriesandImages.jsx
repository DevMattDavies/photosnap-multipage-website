import styles from "./StoriesandImages.module.scss";

function StoriesandImages() {
  return (
    <div className={styles.grid}>
    {/* --- Row 1 --- */}
      <div className={styles["grid__row-1-column-1"]}>
        <div className={styles["grid__create-and-share-image"]}></div>
      </div>
      <div className={styles["grid__row-1-column-2"]}>
        <div className={styles["grid__textContainer--black"]}>
          <h1 className={styles.grid__title}>
            CREATE AND SHARE YOUR PHOTO STORIES.
          </h1>
          <p className={styles.grid__textBody}>
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
        <div className={styles["grid__beautiful-stories-image"]}></div>
      </div>
      <div className={styles["grid__row-2-column-2"]}>
        <div className={styles["grid__textContainer--white"]}>
          <h1 className={styles.grid__title}>BEAUTIFUL STORIES EVERY TIME.</h1>
          <p className={styles.grid__textBody}>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <div className={styles.grid__linkContainer}>
            <p className={styles["grid__link--black"]}>VIEW THE STORIES</p>
            <img
              className={styles["grid__arrow"]}
              src="/assets/shared/desktop/arrow.svg"
              alt="arrow icon"
            ></img>
          </div>
        </div>
      </div>
      {/* --- Row 3 --- */}
      <div className={styles["grid__row-3-column-1"]}>
        <div className={styles["grid__designed-for-everyone-image"]}></div>
      </div>
      <div className={styles["grid__row-3-column-2"]}>
        <div className={styles["grid__textContainer--white"]}>
          <h1 className={styles.grid__title}>DESIGNED FOR EVERYONE.</h1>
          <p className={styles.grid__textBody}>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </p>
          <div className={styles.grid__linkContainer}>
            <p className={styles["grid__link--black"]}>VIEW THE STORIES</p>
            <img
              className={styles["grid__arrow"]}
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
