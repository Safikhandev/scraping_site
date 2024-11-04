import React from "react";
import Index from "@/app/about-us/index";
import ContentSection from "@/app/about-us/contentSection";
import ReviewCarousel from "./reviewCarousel";
import Faq from "./faqs";
const page = () => {
  return (
    <>
      <Index />
      <ContentSection />
      <Faq />
      <ReviewCarousel />
    </>
  );
};

export default page;
