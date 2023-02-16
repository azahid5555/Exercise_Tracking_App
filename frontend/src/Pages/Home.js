import React from "react";
import Aboutmore from "../Components/Aboutmore";
import Aboutus from "../Components/Aboutus";
import Coaches from "../Components/Coaches";
import Cta from "../Components/Cta";
import Excercises from "../Components/Excercises";
import Herocarousel from "../Components/Herocarousel";
import Testimonial from "../Components/Testimonial";
import Whychooseus from "../Components/Whychooseus";
import img from "../imgs/h4-icon.png";

const Home = () => {
  return (
    <>
      <Herocarousel img={img} />
      <Excercises />
      <Aboutus />
      <Whychooseus />
      <Aboutmore />
      <Coaches />
      <Testimonial />
      <Cta />
    </>
  );
};

export default Home;
