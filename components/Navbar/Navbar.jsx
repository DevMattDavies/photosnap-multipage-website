import { useState, useEffect } from "react";
import NavbarMobile from "./Mobile/NavbarMobile";

function Navbar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return <NavbarMobile />;
}

export default Navbar;
