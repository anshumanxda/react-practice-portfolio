import React from "react";
//components
import AboutSection from "../comonents/AboutSections";
import ServicesSection from "../comonents/ServicesSection";
import FaqSection from "../comonents/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../comonents/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />;
      <ServicesSection />;
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
