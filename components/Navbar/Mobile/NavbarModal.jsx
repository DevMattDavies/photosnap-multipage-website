import styles from "./NavbarModal.module.scss";
import Link from "next/link";

function NavbarModal({ menuToggleHandler }) {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modal__content}>
          <Link href="/">
            <a className={styles.modal__navLink} onClick={menuToggleHandler}>
              HOME
            </a>
          </Link>
          <Link href="/stories">
            <a className={styles.modal__navLink} onClick={menuToggleHandler}>
              STORIES
            </a>
          </Link>
          <Link href="/features">
            <a className={styles.modal__navLink} onClick={menuToggleHandler}>
              FEATURES
            </a>
          </Link>
          <Link href="/pricing">
            <a className={styles.modal__navLink} onClick={menuToggleHandler}>
              PRICING
            </a>
          </Link>
          <hr />
          <button type="button" className={styles.modal__navButton}>
            GET AN INVITE
          </button>
        </div>
      </div>
    </>
  );
}

export default NavbarModal;
