import React from "react";
import "./css/footer.css";
import logo from "../assets/images/logo.svg"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <section className="footer-outer-container">
    <div className="footer-container">
      <img src={logo} alt="company-logo" className="logo" />
      <ul>
        <li>FAQs</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <li>Privacy Policy</li>
        <li>Press Kit</li>
      </ul>
      <ul>
      <li>Install guide</li>
      <li><a href="https://www.frontendmentor.io/profile/VictorKevz" target="_blank">By ❤️ Victor.Kevz</a></li>
      </ul>
      <div className="social-links">
      <IconContext.Provider value={{ className: "react-icons" }}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </IconContext.Provider>
      </div>
    </div>
    </section>
  );
}
export default Footer;
