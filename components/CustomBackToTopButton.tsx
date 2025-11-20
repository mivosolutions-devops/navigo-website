import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import {
    ChevronUpIcon
} from "@heroicons/react/20/solid";

const CustomBackToTopButton = ({
    className = '',
    toShow = 300,
    fontSize = 16,
    showIcon = true,
    icon = <ChevronUpIcon className="w-[36px] fill-white max-sm:w-[24px] " />,
    style = {},
    backgroundColor = '#059669',
    color = '#fff',
    borderRadius = 100,
    children = null
}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > toShow);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [toShow]);

    const backToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    return (
        <CSSTransition
            in={show}
            timeout={500} 
            classNames={{
                enter: 'backToTopButton-enter',
                enterActive: 'backToTopButton-enter-active',
                exit: 'backToTopButton-exit',
                exitActive: 'backToTopButton-exit-active',
            }}
            unmountOnExit
        >
            <button
                style={{
                    backgroundColor,
                    color,
                    borderRadius,
                    fontSize,
                    ...style
                }}
                className={`CustomBackToTopButton ${className} fixed z-40 items-center flex justify-center  w-[54px] h-[54px] max-sm:right-[20px] max-sm:bottom-[20px] bottom-[45px] right-[45px]`}
                onClick={backToTop}
            >
                {showIcon && icon}
                {children}
            </button>
        </CSSTransition>
    );
};

export default CustomBackToTopButton;
