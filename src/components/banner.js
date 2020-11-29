import React, { Component } from "react";
import Img from "gatsby-image";

export default class Banner extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="banner">
        <Img
          fixed={data.bannerImage.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="container">
          <div className="banner-details">
            <h1>Judy's Cleaning Service</h1>
            <ul className="social">
              <li>
                <a
                  href="#Contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >Request Quote</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
