import React from "react";
import "./css/intro.css";
import Buttons from "./Buttons";

function Outro() {
  return (
    <header className="outro-container">
      <h5>Clipboard for iOS and Mac OS</h5>
      <p>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you're ready to start adding to your Clipboard.
      </p>
      <Buttons />
    </header>
  );
}
export default Outro;
