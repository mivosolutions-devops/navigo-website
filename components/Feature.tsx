import React from "react";
import { FeaturesProps } from "@/types";
import { TypeAnimation } from "react-type-animation";
import { Fade, Slide } from "react-awesome-reveal";

const Feature = ({
  icon,
  title,
  description,
  isActive,
  onClick,
}: FeaturesProps) => {
  return (
    <div
      className={`w-full rounded-3xl border border-[#059669] bg-gradient-to-br cursor-pointer flex transition-all duration-300 ease-out justify-start gap-3 p-3 backdrop-blur-xl overflow-hidden ${
        isActive
          ? "from-green-500/20 to-green-900/0"
          : "hover:bg-gradient-to-br hover:from-green-500/20 hover:to-green-900/0 items-center"
      }`}
      onClick={onClick}
    >
      <div className="bg-gradient-to-b from-green-800 to-[#059669] rounded-full min-w-14 max-sm:min-w-10 w-14 h-14 flex items-center justify-center max-sm:w-10 max-sm:h-10 transition-transform duration-300 ease-out">
        <img
          src={icon}
          alt={title}
          className="max-sm:w-[16px] max-sm:h-[16px] w-[50%] h-[50%]"
        />
      </div>
      <div className="flex flex-col items-start w-fit justify-center gap-2 transition-opacity duration-300 ease-out">
        <h1
          className={`font-semibold w-full text-lg max-sm:text-sm transition-colors duration-300 ease-out ${
            isActive ? "text-[#059669]" : "text-white"
          }`}
        >
          {title}
        </h1>
        {isActive && (
          <TypeAnimation
            sequence={[`${description}`, 0]}
            wrapper="span"
            speed={75}
            repeat={0}
            className="font-light w-full text-white max-sm:text-xs transition-opacity duration-300 ease-out"
          />
        )}
      </div>
    </div>
  );
};

export default Feature;
