import { useContext } from "react";
import { WidthContext } from "../../pages/_app.js";
import FooterDesktop from "./Desktop/FooterDesktop";
import FooterTablet from "./Tablet/FooterTablet.jsx";
import FooterMobile from "./Mobile/FooterMobile.jsx";

function Footer() {
  const width = useContext(WidthContext);
  return (
    <>
      {width <= 480 && <FooterMobile />}
      {width > 480 && width < 1008 && <FooterTablet />}
      {width >= 1008 && <FooterDesktop />}
    </>
  );
}

export default Footer;
