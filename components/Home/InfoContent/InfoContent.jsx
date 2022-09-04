import styles from "./InfoContent.module.scss";

function InfoContent() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.flexContainer__itemsContainer}>
        <div className={styles.flexContainer__item}>
          <img
            className={styles["flexContainer__image--responsive"]}
            src="/assets/features/desktop/responsive.svg"
          ></img>
          <h4 className={styles.flexContainer__title}>100% Responsive</h4>
          <p className={styles.flexContainer__text}>
            No matter which the device you're on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
        <div className={styles.flexContainer__item}>
          <img
            className={styles["flexContainer__image--no-limit"]}
            src="/assets/features/desktop/no-limit.svg"
          ></img>
          <h4 className={styles.flexContainer__title}>No Photo Upload Limit</h4>
          <p className={styles.flexContainer__text}>
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
        <div className={styles.flexContainer__item}>
          <img
            className={styles["flexContainer__image--embed"]}
            src="/assets/features/desktop/embed.svg"
          ></img>
          <h4 className={styles.flexContainer__title}>Available to Embed</h4>
          <p className={styles.flexContainer__text}>
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoContent;
