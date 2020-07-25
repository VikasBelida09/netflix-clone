import React, { useEffect, useState } from "react";
import "./Nav.css";
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
        src="https://lh3.googleusercontent.com/proxy/ztzxIk8kPBP2UkvgAd6dhUguNT5ZJki1mrceD5z1n4cGq65tqA9mITKQKz_EoaHuIWQcliGpY2eXleywxd7BYda4YriISYosKAsaNifES5QXLhSHNOU"
        alt="netflix logo"
      />
    </div>
  );
};

export default Navbar;
