import styles from "./NavbarDesktop.module.scss";
import Link from "next/link";

function NavbarDesktop() {
  return (
    <nav className={styles.navDesktop}>
      <img src="/assets/shared/desktop/logo.svg" alt="Main logo" />
      <div className={styles.navDesktop__linksContainer}>
        <Link href="/">
          <a className={styles.navDesktop__navLink}>HOME</a>
        </Link>
        <Link href="/stories">
          <a className={styles.navDesktop__navLink}>STORIES</a>
        </Link>
        <Link href="/features">
          <a className={styles.navDesktop__navLink}>FEATURES</a>
        </Link>
        <Link href="/pricing">
          <a className={styles.navDesktop__navLink}>PRICING</a>
        </Link>
      </div>
      <button type="button" className={styles.navDesktop__navButton}>
        GET AN INVITE
      </button>
    </nav>
  );
}

export default NavbarDesktop;
