import React from "react";
import logo from "../assets/images/logo.svg";
import "./css/intro.css";
import Buttons from "./Buttons";

function Intro() {
  return (
    <div className="header-outer-container">
    <div className="header-container">
      <img src={logo} alt="clipboard-logo" />
      <h1>A history of everything you copy</h1>
      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly<br/> access your clipboard on all your devices.
      </p>
      <Buttons/>
    </div>
    </div>
  );
}
export default Intro;
