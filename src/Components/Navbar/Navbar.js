import React, { useEffect, useState } from "react";
import "./Nav.css";
import myImage from '../../../public/580b57fcd9996e24bc43c529.png'
const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src={myImage}
        alt="netflix logo"
      />
    </div>
  );
};

export default Navbar;
