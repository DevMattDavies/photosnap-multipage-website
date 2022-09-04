import { useContext } from "react";
import { WidthContext } from "../../pages/_app";
import NavbarMobile from "./Mobile/NavbarMobile";
import NavbarDesktop from "./Desktop/NavbarDesktop";

function Navbar() {
  const width = useContext(WidthContext);

  return <>{width <= 480 ? <NavbarMobile /> : <NavbarDesktop />}</>;
}
export default Navbar;
