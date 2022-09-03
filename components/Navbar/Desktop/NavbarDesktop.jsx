import styles from "./NavbarDesktop.module.scss";
import Link from "next/link";

function NavbarDesktop() {
  return (
    <nav id={styles.navDesktop}>
      <img src="/assets/shared/desktop/logo.svg" alt="Main logo SVG" />
      <div className={styles.linksContainer}>
        <Link href="#">
          <a className={styles.navLink}>STORIES</a>
        </Link>
        <Link href="#">
          <a className={styles.navLink}>FEATURES</a>
        </Link>
        <Link href="#">
          <a className={styles.navLink}>PRICING</a>
        </Link>
      </div>
      <button type="button" className={styles.navButton}>
        GET AN INVITE
      </button>
    </nav>
  );
}

export default NavbarDesktop;
