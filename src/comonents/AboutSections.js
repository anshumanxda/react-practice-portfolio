import React from "react";
import home1 from "../img/home1.png";
//import styled component
// import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage, Hide } from "../styles";
//framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription className="description">
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any kind of photography or videography work, we have
          the potential professionals to work towards your dream.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage className="image">
        <motion.img variants={photoAnim} src={home1} alt="" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
