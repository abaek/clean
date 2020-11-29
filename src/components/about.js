import React from "react";
import Img from "gatsby-image";

const Header = ({ data }) => (
  <div className="about section" id="About">
    <div className="container">
      <div className="about-main row">
        <div className="left col-md-5 col-lg-4 mb-3">
          <Img
            fixed={data.photo.fluid}
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
        <div className="left col-md-7 col-lg-8">
          <div className="about-details">
            <h2 className="sub-position">
              About
            </h2>
            <span className="name">15+ years of professional cleaning experience in Orleans</span>
              <span className="name">Imagine the sheer delight of coming home to a sparkling clean house. As the number one house cleaning company in Canada, let MOLLY MAID take care of all your cleaning needs. We’ve been providing superior cleaning services for decades.</span>
              <span className="name">Imagine the sheer delight of coming home to a sparkling clean house. As the number one house cleaning company in Canada, let MOLLY MAID take care of all your cleaning needs. We’ve been providing superior cleaning services for decades.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
