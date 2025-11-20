"use client";
import "ldrs/ring"; // Import the loader
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import CustomBackToTopButton from "@/components/CustomBackToTopButton";
import AnimatedCursor from "react-animated-cursor";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

// Create a Loader component
function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#001209] backdrop-blur flex-col !z-50">
      <div className="container">
        <div className="dot"></div>
      </div>
      {/* <TypeAnimation
            sequence={[`Starting engines...`, 0]}
            wrapper='p'
            speed={5}
            repeat={Infinity}
            className='font-bold w-full text-[#059669] text-lg transition-opacity duration-300 ease-out uppercase self-center flex items-center justify-center'
          /> */}
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate a loading time of 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <main className="flex flex-col w-full h-full bg-[#001209] overflow-hidden overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Features />
      <Reviews />
      <ContactUs />
      <Faq />
      <CallToAction />
      <Footer />
      <CustomBackToTopButton />
      <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color="70, 179, 90"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </main>
  );
}
