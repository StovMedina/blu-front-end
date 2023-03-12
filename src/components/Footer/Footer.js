import React from "react";
import BluIlustration from "../Images/BluIlustration";
import FB_footer from "../../../src/media/FB_footer.png";
import IG_footer from "../../../src/media/IG_footer.png";
import WA_footer from "../../../src/media/WA_footer.png";

const Footer = () => {
  return (
    <div>
      <div className="container d-flex flex-row justify-content-between">
        <div className="footer-kodemia  ">BluMode powered by Kodemia</div>
        <div className="footer-text">
          transformacion, rescate e intervención de la mezclilla
        </div>
        <div className="footer-media d-flex flex-row">
          <BluIlustration src={FB_footer} />
          <BluIlustration src={IG_footer} />
          <BluIlustration src={WA_footer} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
