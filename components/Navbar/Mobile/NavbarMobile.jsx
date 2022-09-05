import styles from "./NavbarMobile.module.scss";
import { useEffect, useState } from "react";
import NavbarModal from "./NavbarModal";

function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function menuToggleHandler() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no";
      document.getElementById("main").style.filter = "brightness(0.3)";
    } else {
      document.documentElement.style.overflow = "scroll";
      document.body.scroll = "yes";
      document.getElementById("main").style.filter = "brightness(1)";
    }
  }, [isMenuOpen]);

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
