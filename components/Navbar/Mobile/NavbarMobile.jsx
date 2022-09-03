import styles from "./NavbarMobile.module.scss";
import { useState } from "react";
import NavbarModal from "./NavbarModal";

function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function menuToggleHandler() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }
  console.log(isMenuOpen);

  return (
    <nav id={styles.navMobile}>
      <img src="/assets/shared/desktop/logo.svg" alt="Main logo SVG" />
      <img
        onClick={menuToggleHandler}
        src={
          isMenuOpen
            ? "assets/shared/mobile/close.svg"
            : "/assets/shared/mobile/menu.svg"
        }
        alt="Hamburger menu SVG"
      />
      {isMenuOpen && <NavbarModal />}
    </nav>
  );
}

export default NavbarMobile;
