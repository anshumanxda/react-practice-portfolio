import React from "react";
import home1 from "../img/home1.png";
//import styled component
// import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage, Hide } from "../styles";

const AboutUs = () => {
  return (
    <StyledAbout>
      <StyledDescription className="description">
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any kind of photography or videography work, we have
          the potential professionals to work towards your dream.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage className="image">
        <img src={home1} alt="" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutUs;
