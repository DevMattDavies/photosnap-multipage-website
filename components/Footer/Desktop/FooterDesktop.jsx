import styles from "./FooterDesktop.module.scss";
import Link from "next/link";
import footerIcons from "../Icons/FooterIcons";

function FooterDesktop() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__left}>
        <img src="/assets/shared/desktop/logo-white.svg" alt="logo"></img>
        <div className={styles.footer__iconContainer}>{footerIcons()}</div>
      </div>
      <div className={styles.footer__mid}>
        <Link href="/">
          <a className={styles.footer__link}>HOME</a>
        </Link>
        <Link href="/stories">
          <a className={styles.footer__link}>STORIES</a>
        </Link>
        <Link href="/features">
          <a className={styles.footer__link}>FEATURES</a>
        </Link>
        <Link href="/pricing">
          <a className={styles.footer__link}>PRICING</a>
        </Link>
      </div>
      <div className={styles.footer__right}>
        <div className={styles.footer__invite}>
          <p className={styles.footer__link}>GET AN INVITE</p>
          <img
            className={styles["footer__arrow--white"]}
            src="/assets/shared/desktop/arrow.svg"
            alt="arrow"
          ></img>
        </div>
        <p className={styles.footer__copyright}>
          Copyright 2022. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default FooterDesktop;
