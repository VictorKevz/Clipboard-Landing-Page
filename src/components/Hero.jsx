import React from "react";
import "./css/hero.css";
import imageComputer from "../assets/images/image-computer.png";
import imageDevices from "../assets/images/image-devices.png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-heading">
        <h2>Keep track of your snippets</h2>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <div className="hero-grid-container">
        <img src={imageComputer} alt="image-computer" className="hero-image computer"/>
        <div className="text-container">
          <div>
            <p className="title">Quick Search</p>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div>
            <p className="title">iCloud Sync</p>
            <p> Instantly saves and syncs snippets across all your devices.</p>
          </div>
          <div>
            <p className="title">Complete History</p>
            <p>
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-access-container">
        <div className="access-heading">
        <h3>Access Clipboard anywhere</h3>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        </div>
        <img src={imageDevices} alt="image-devices" className="hero-image devices" />
      </div>
    </div>
  );
}
export default Hero;
