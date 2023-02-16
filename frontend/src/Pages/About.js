import React from "react";
import Aboutmore from "../Components/Aboutmore";
import Aboutus from "../Components/Aboutus";
import Pageheading from "../Components/Pageheading";

const About = () => {
  return (
    <>
      <Pageheading heading="About Us" />
      <Aboutus />
      <Aboutmore />
    </>
  );
};

export default About;
