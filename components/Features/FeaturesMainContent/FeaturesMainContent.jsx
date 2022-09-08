import styles from "./FeaturesMainContent.module.scss";

function FeaturesMainContent() {
  return (
    <div className={styles.grid}>
      {/* Responsive */}
      <div className={styles.grid__item}>
        <img
          className={styles["grid__image--responsive"]}
          src="/assets/features/desktop/responsive.svg"
        ></img>
        <h4 className={styles.grid__title}>100% Responsive</h4>
        <p className={styles.grid__text}>
          {`No matter which the device you're on, our site is fully responsive
            and stories look beautiful on any screen.`}
        </p>
      </div>
      {/* Upload */}
      <div className={styles.grid__item}>
        <img
          className={styles["grid__image--responsive"]}
          src="/assets/features/desktop/no-limit.svg"
        ></img>
        <h4 className={styles.grid__title}>No Photo Upload Limit</h4>
        <p className={styles.grid__text}>
          {`Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.`}
        </p>
      </div>
      {/* Embed */}
      <div className={styles.grid__item}>
        <img
          className={styles["grid__image--responsive"]}
          src="/assets/features/desktop/embed.svg"
        ></img>
        <h4 className={styles.grid__title}>Available to Embed</h4>
        <p className={styles.grid__text}>
          {`Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. `}
        </p>
      </div>
      {/* Custom Domain */}
      <div className={styles.grid__item}>
        <img
          className={styles["grid__image--responsive"]}
          src="/assets/features/desktop/custom-domain.svg"
        ></img>
        <h4 className={styles.grid__title}>Custom Domain</h4>
        <p className={styles.grid__text}>
          {`With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!`}
        </p>
      </div>
      {/* Boost */}
      <div className={styles.grid__item}>
        <img
          className={styles["grid__image--responsive"]}
          src="/assets/features/desktop/boost-exposure.svg"
        ></img>
        <h4 className={styles.grid__title}>Boost Your Exposure</h4>
        <p className={styles.grid__text}>
          {`Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.`}
        </p>
      </div>
      {/* Drag and Drop */}
      <div className={styles.grid__item}>
        <img
          className={styles["grid__image--responsive"]}
          src="/assets/features/desktop/drag-drop.svg"
        ></img>
        <h4 className={styles.grid__title}>Drag & Drop Image</h4>
        <p className={styles.grid__text}>
          {`Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.`}
        </p>
      </div>
    </div>
  );
}

export default FeaturesMainContent;
