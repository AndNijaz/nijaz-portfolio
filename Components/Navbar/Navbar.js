import classes from "./Navbar.module.css";
import NijazAndelicLogo from "../../assets/NijazAndelicLogo.svg";

import React from "react";

const Navbar = () => {
  console.log(NijazAndelicLogo);
  return (
    <nav className={classes["main-navbar"]}>
      <img src={NijazAndelicLogo.src} alt="Nijaz Andelić Logo" />
      <a href="#main-page">Home</a>
      <a href="#main-page">AboutMe</a>
      <a href="#main-page">Resume</a>
      <a href="#main-page">Projects</a>
      <a href="#main-page">Contact</a>
    </nav>
  );
};

export default Navbar;
