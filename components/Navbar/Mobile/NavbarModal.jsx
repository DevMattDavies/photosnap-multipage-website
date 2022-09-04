import styles from "./NavbarModal.module.scss";
import Link from "next/link";

function NavbarModal() {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modal__content}>
          <Link href="#">
            <a className={styles.modal__navLink}>STORIES</a>
          </Link>
          <Link href="#">
            <a className={styles.modal__navLink}>FEATURES</a>
          </Link>
          <Link href="#">
            <a className={styles.modal__navLink}>PRICING</a>
          </Link>
          <hr />
          <button type="button" className={styles.modal__navButton}>
            GET AN INVITE
          </button>
        </div>
        {/* <div className={styles.background}></div> */}
      </div>
    </>
  );
}

export default NavbarModal;
