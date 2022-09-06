import styles from "./FooterMobile.module.scss";
import footerIcons from "../Icons/FooterIcons";

function FooterMobile() {
  return (
    <div className={styles.footer}>
      <img
        className={styles.footer__logo}
        src="/assets/shared/desktop/logo-white.svg"
      ></img>
      <div className={styles.footer__iconContainer}>{footerIcons()}</div>
      <div className={styles.footer__linksContainer}>
        <p className={styles.footer__link}>HOME</p>
        <p className={styles.footer__link}>STORIES</p>
        <p className={styles.footer__link}>FEATURES</p>
        <p className={styles.footer__link}>PRICING</p>
      </div>
      <div className={styles.footer__invite}>
        <p className={styles.footer__link}>GET AN INVITE</p>
        <img
          className={styles["footer__arrow--white"]}
          src="/assets/shared/desktop/arrow.svg"
        ></img>
      </div>
      <p className={styles.footer__copyright}>
        Copyright 2022. All Rights Reserved
      </p>
    </div>
  );
}

export default FooterMobile;
