import Banner from "./components/Banner/index";
import Aboutus from "./components/Aboutus/index";

import Dedicated from "./components/Dedicated/index";
import Digital from "./components/Digital/index";
import Beliefs from "./components/Beliefs/index";
import Wework from "./components/Wework/index";
import Ourteam from "./components/Ourteam/index";
import Featured from "./components/Featured/index";
import Manage from "./components/Manage/index";
import FAQ from "./faqs/index";
import Testimonials from "./components/Testimonials/index";
import Articles from "./components/Articles/index";
import Joinus from "./components/Joinus/index";
import Insta from "./components/Insta/index";
import OverlayImage from "./components/OverlayImage/index";
import "./globals.css";
// import VideoCarousel from "./components/VideoCarousel";
import dynamic from "next/dynamic";

const VideoCarousel = dynamic(() => import("./components/VideoCarousel"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Banner />
      <Aboutus />
      <Dedicated />
      {/* <Digital /> */}
      {/* <Beliefs /> */}
      {/* <Wework /> */}
      <OverlayImage />
      <VideoCarousel />

      {/* <Ourteam /> */}
      {/* <Featured /> */}
      {/* <Manage /> */}
      {/* <FAQ /> */}
      <Testimonials />
      {/* <Articles /> */}
      {/* <Joinus /> */}

      {/* <Insta /> */}
    </main>
  );
}
