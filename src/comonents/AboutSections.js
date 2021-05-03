import React from "react";
import home1 from "../img/home1.png";
//import styled component
import styled from "styled-components";

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

//styled component
const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutUs;
