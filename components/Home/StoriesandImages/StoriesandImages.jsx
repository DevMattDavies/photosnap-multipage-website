import styles from "./StoriesandImages.module.scss";

function StoriesandImages() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.firstRow}>
        <picture>
          <source
            media="(min-width: 769px)"
            srcSet="/assets/home/desktop/create-and-share.jpg"
          ></source>
          <source
            media="(min-width: 481px)"
            srcSet="/assets/home/tablet/create-and-share.jpg"
          ></source>
          <img
            className={styles.imgContainer}
            src="/assets/home/mobile/create-and-share.jpg"
            alt="Create and share"
          ></img>
        </picture>
        <div className={styles.textContainer}>
          <h1 className={styles.titleStyle}>
            CREATE AND SHARE YOUR PHOTO STORIES.
          </h1>
          <p className={styles.textStyle}>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <div className={styles.linkContainer}>
            <p className={styles.linkStyle}>GET AN INVITE</p>
            <img
              className={styles.whiteArrow}
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
