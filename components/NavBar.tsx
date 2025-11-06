"use client";

import React from "react";
import { MenuLinks } from "@/constants";
import MenuItem from "./MenuItem";
import CustomButton from "./CustomButton";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const NavBar = () => {
  const handleClick = () => {
    // window.open(
    //   "https://github.com/navigohub/app-release/releases/download/v1.0.5/NaviGO-v1.0.5.apk",
    //   "_blank"
    // );
    if (window)
      window.alert(
        "Exciting things are coming! Our app will be available very soon—stay tuned!"
      );
  };
  return (
    <div className='w-full bg-[#00120934] backdrop-blur-xl z-50  py-5 px-6 lg:px-[10%] flex flex-row fixed items-center justify-between'>
      <Link href='/' className='w-fit h-fit '>
        <img
          src='images/logoextended.svg'
          alt='logo'
          width={1000}
          height={1000}
          className='w-32 max-sm:w-24'
        />
      </Link>

      <div className='hidden lg:flex '>
        {MenuLinks.map((menuLink, index) => (
          <MenuItem
            key={index}
            to={menuLink.link}
            label={menuLink.title}
            isActive={false}
          />
        ))}
      </div>

      <CustomButton
        title='Get our app'
        rightIcon={
          <ArrowDownOnSquareIcon className='group-hover:stroke-[#00BD5E] w-6 h-6 stroke-[#001209]' />
        }
        textStyles='max-sm:hidden'
        handleClick={handleClick}
      />
    </div>
  );
};

export default NavBar;
