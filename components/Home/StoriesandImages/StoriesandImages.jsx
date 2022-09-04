import styles from "./StoriesandImages.module.scss";

function StoriesandImages() {
  return (
    <div className={styles.grid}>
      <div className={styles.grid__row}>
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
            className={styles.grid__image}
            src="/assets/home/mobile/create-and-share.jpg"
            alt="Create and share"
          ></img>
        </picture>
        <div className={styles.grid__textContainer}>
          <h1 className={styles.grid__title}>
            CREATE AND SHARE YOUR PHOTO STORIES.
          </h1>
          <p className={styles.grid__textBody}>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <div className={styles.grid__linkContainer}>
            <p className={styles.grid__link}>GET AN INVITE</p>
            <img
              className={styles.grid__whiteArrow}
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
