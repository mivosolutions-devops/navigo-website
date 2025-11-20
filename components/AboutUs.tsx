"use client";

import React from "react";
import Header from "./Header";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

import { BuildingOffice2Icon } from "@heroicons/react/20/solid";

import CustomButton from "./CustomButton";
import { Fade } from "react-awesome-reveal";
import VideoPlayer from "./VideoPlayer";

const AboutUs = () => {
  const handleClick = () => {
    // window.open(
    //   "https://github.com/navigohub/app-release/releases/download/v1.0.5/NaviGO-v1.0.5.apk",
    //   "_blank"
    // );
    if (window)
      window.alert(
        "Exciting things are coming! Our app will be available very soon, stay tuned!"
      );
  };

  return (
    <div
      className='flex max-lg:flex-col items-center relative py-20 gap-36 lg:pl-[10%] z-50 max max-md:gap-20 max-md:py-10 max-sm:gap-6 overflow-hidden bg-[#F2FAF6] lg:flex-row'
      id='aboutus'
    >
      <img
        src='/images/zigs.svg'
        alt='zigs'
        className='absolute w-2/5 -top-1/3 -left-1/4 z-0'
      />
      <img
        src='/images/zigs.svg'
        alt='zigs'
        className='absolute w-2/5 -bottom-1/3 -right-1/4 z-0'
      />
      <Fade className='w-1/2 max-lg:w-11/12'>
        <div className='flex flex-col max-lg:items-center items-start  justify-center gap-10 max-md:gap-5 w-full z-40'>
          <Header
            title='About Us'
            icon={
              <BuildingOffice2Icon className='fill-[#059669] w-6 h-6 max-sm:w-4 max-sm:h-4' />
            }
          />
          <h1 className='text-[#001209] font-bold text-5xl text-center lg:text-start max-md:text-4xl max-sm:text-4xl '>
            Get To <span className='text-[#059669]'>Know</span> Us.
          </h1>
          <p className='text-md text-[#001209]/70 text-center md:text-md max-sm:text-xs lg:text-start'>
            At NaviGO, we're on a mission to revolutionize the way people
            navigate through urban environments. With a team of passionate
            innovators, we're committed to providing cutting-edge solutions to
            transportation challenges. Our journey began with a simple idea: to
            create a platform that empowers individuals to reclaim their time
            spent in traffic congestions. Through relentless dedication and
            forward-thinking technology, we've developed a suite of tools that
            streamline commuting, reduce environmental impact, and enhance
            overall quality of life. Join us as we pave the way for a smarter,
            more efficient future of transportation.
          </p>
          {/* <p className="text-md text-[#001209]/50 text-center md:text-md max-sm:text-xs lg:text-start max-lg:hidden ">
          NaviGO isn't just about getting from point A to point B – it's about
          transforming the way communities connect and thrive. Rooted in our
          core values of innovation, sustainability, and accessibility, we're
          driven by a vision of a world where transportation is seamless,
          efficient, and inclusive for all. Whether you're a daily traveler
          navigating bustling city streets or a weekend adventurer exploring new
          horizons, NaviGO is your trusted partner in the journey towards a
          brighter tomorrow.
        </p> */}
          <CustomButton
            title='Get our app'
            rightIcon={
              <ArrowDownOnSquareIcon className='w-6 h-6 stroke-white' />
            }
            containerStyles='max-lg:hidden'
            handleClick={handleClick}
          />
        </div>
      </Fade>
      <VideoPlayer />
    </div>
  );
};

export default AboutUs;
