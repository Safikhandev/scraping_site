import React from "react";
import Index from "@/app/portfolio/index";
import ImgContent from "./imgContent";
import ServicesTypeCard from "./servicesTypeCard";
import ReviewCarousel from "./reviewCarousel";
const page = () => {
  return (
    <>
      <Index />
      <ImgContent />
      <ServicesTypeCard />
      <ReviewCarousel />
    </>
  );
};

export default page;
