import React from "react";
import "./css/features.css";
import Data from "../Data";
import googleLogo from "../assets/images/logo-google.png"
import IBMLogo from "../assets/images/logo-ibm.png"
import microsoftLogo from "../assets/images/logo-microsoft.png"
import hpLogo from "../assets/images/logo-hp.png"
import VGlogo from "../assets/images/logo-vector-graphics.png"

function Features() {
  return (
    <div className="features-container">
      <div className="features-heading">
        <h4>Supercharge your workflow</h4>
        <p>We've got the tools to boost your productivity</p>
      </div>
      <div className="tools-container">
        {Data.map(({ id, img, title, description }) => (
          <div key={id} className="tool">
            <img src={img} alt="icon" />
            <div className="heading">
              <p className="title">{title}</p>
              <p className="description">{description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="logo-container">
      <img src={googleLogo} alt="google-logo"/>
      <img src={IBMLogo} alt="IBM-logo"/>
      <img src={microsoftLogo} alt="microsoft-logo"/>
      <img src={hpLogo} alt="hp-logo"/>
      <img src={VGlogo} alt="VG-logo"/>
      </div>
    </div>
  );
}

export default Features;
