import styles from "./NavbarModal.module.scss";
import Link from "next/link";

function NavbarModal() {
  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <Link href="#">
            <a className={styles.navLink}>STORIES</a>
          </Link>
          <Link href="#">
            <a className={styles.navLink}>FEATURES</a>
          </Link>
          <Link href="#">
            <a className={styles.navLink}>PRICING</a>
          </Link>
          <hr />
          <button type="button" className={styles.navButton}>
            GET AN INVITE
          </button>
        </div>
        <div className={styles.background}></div>
      </div>
    </>
  );
}

export default NavbarModal;
