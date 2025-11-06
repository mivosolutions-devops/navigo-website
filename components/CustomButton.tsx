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
      className={`bg-[#00BD5E] rounded-full flex gap-2 flex-row items-center justify-center max-sm:px-2 max-sm:py-2 px-6 py-4 hover:bg-[#00bd5e11] border-[#00BD5E] hover:shadow-sm hover:shadow-[#00BD5E45] ease-out duration-300 group border ${containerStyles} ${isLoading ? 'bounce' : ''}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <span
        className={`flex-1 text-[#001209] font-medium group-hover:text-[#00BD5E]  ${textStyles}`}
      >
        {isLoading ? 'Loading...' : title}
      </span>
      {rightIcon && <span className='w-fit h-fit'>{rightIcon}</span>}
    </button>
  );
};

export default CustomButton;

