import React from "react";
import CustomButton from "./CustomButton";
import AnalyticItem from "./AnalyticItem";
import { Analytics } from "@/constants";
import { Fade } from "react-awesome-reveal";

import TagButton from "./TagButton";

const HeroSection = () => {
  return (
    <div
      className="w-full  h-fit items-center lg:pb-20  max-md:pt-36 max-sm:pb-10 sm:pb-3 max-sm:pt-36 pt-44 gap-20 max-md:gap-10 justify-center flex  flex-col bg-[#001209]"
      id="home"
    >
      <div className="w-full flex justify-between z-40">
        <Fade className="lg:pl-[10%] lg:w-2/3 lg:pr-0 lg:py-0 px-6 max-sm:px-4 z-40">
         <div className="flex flex-col lg:gap-12 md:gap-6  max-sm:gap-4 sm:gap-4  lg:items-start lg:justify-start   items-center justify-center relative w-full z-40">
          <img
            src="/images/gradient.svg"
            alt="Gradient"
            className="w-full absolute z-0 lg:-top-64 max-md:opacity-50 "
          />
          
            <h1 className="text-white font-bold lg:text-6xl z-20 md:text-5xl max-sm:text-4xl sm:text-4xl sm:w-5/6  lg:w-full md:w-5/6 lg:text-start text-center ">
              The{" "}
              <span className="text-[#00BD5E] inline-block relative items-center justify-center">
                <img
                  src="/images/circles.svg"
                  alt=""
                  className="absolute w-[300x] self-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
                />
                <span className="z-40 relative">Solution</span>
              </span>{" "}
              To Your Transport{" "}
              <span className="text-[#00BD5E] inline-block relative items-center justify-center">
                <img
                  src="/images/circles.svg"
                  alt=""
                  className="absolute w-[300x] self-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
                  style={{ width: "calc(100% + 100px)" }}
                />
                <span className="z-40 relative">Problems</span>
              </span>
            </h1>


          <p className="md:text-xl max-sm:text-xs text-white/60 font-normal z-10 lg:text-start text-center lg:w-full max-sm:w-11/12">
            Effortlessly Navigate Through Traffic Hassles With NaviGO, Save Up
            to 90% of Your Time Stuck in Traffic
          </p>
          <div className="flex w-fit gap-5 z-40">
            <TagButton
              tagLogo="/images/GooglePlay.svg"
              tagText="/images/GoogleText.svg"
            />
            <TagButton
              tagLogo="/images/Apple.svg"
              tagText="/images/AppleText.svg"
            />
          </div>
        </div> 
        </Fade>
        

        <img
          src="/images/map.svg"
          alt="map"
          className="absolute right-0 top-0 z-0 max-w-[1200px]  lg:opacity-100 opacity-50"
        />
        
      </div>

        <div className="bg-[#001209] border-[#00BD5E] flex border h-fit p-10 gap-10 max-sm:p-5 inset-0 bg-opacity-20 rounded-full backdrop-blur-lg justify-between w-2/3 z-40 max-lg:w-11/12 max-md:flex-col max-md:rounded-3xl max-md:flex-wrap max-md:gap-5 ">
        {Analytics.map((item, index) => (
          <AnalyticItem
            title={item.title}
            key={index}
            description={item.description}
          />
        ))}
      </div>

      
    </div>
  );
};

export default HeroSection;
