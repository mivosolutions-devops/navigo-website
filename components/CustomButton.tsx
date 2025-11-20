import React from "react";
import { CustomButtonProps } from "@/types";


const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
  isLoading
}) => {
  return (
    <button
      type={btnType}
      className={`bg-[#059669] rounded-full flex gap-2 flex-row items-center justify-center max-sm:px-2 max-sm:py-2 px-6 py-4 hover:bg-[#05966911] border-[#059669] hover:shadow-sm hover:shadow-[#05966945] ease-out duration-300 group border ${containerStyles} ${isLoading ? 'bounce' : ''}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <span
        className={`flex-1 text-white font-medium  ${textStyles}`}
      >
        {isLoading ? 'Loading...' : title}
      </span>
      {rightIcon && <span className='w-fit h-fit'>{rightIcon}</span>}
    </button>
  );
};

export default CustomButton;

