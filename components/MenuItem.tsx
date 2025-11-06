"use client"
import React from "react";
import Link from "next/link";
import { MenuItemProps } from "@/types";

const MenuItem: React.FC<MenuItemProps> = ({
    to,
    label,
    isActive,
  }: MenuItemProps) => { 
    return (
      <Link
        href={to}
        className={"relative flex items-center flex-col justify-center text-center py-2 px-4 rounded-md text-white/50 transition-all group duration-300 font-normal hover:text-white max-lg:text-sm"}
      >
        {label}
        <div className="w-0 h-1 bg-[#00BD5E] rounded-full group-hover:w-1/2 duration-300 "></div>
      </Link>
    );
  };
  
  export default MenuItem;
