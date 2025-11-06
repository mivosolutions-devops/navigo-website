import React, { useState } from 'react';
import Header from './Header';
import Feature from './Feature';
import { FeaturesList } from '@/constants';
import { RectangleGroupIcon } from "@heroicons/react/20/solid";
import { Fade, Slide } from 'react-awesome-reveal';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);


    const toggleFeature = (index:any) => {
        setActiveFeature(index === activeFeature ? null : index);
    };

    return (
        <div className='flex flex-row items-center relative pt-20 pb-20 max-md:pt-5 max-md:pb-5 gap-36 px-[20%] max-lg:px-6  max-md:gap-10 overflow-hidden bg-[#001209]' id="features">

            <img src="/images/dots.svg" alt="dots" className='absolute -left-7 bottom-4 z-30' />



            <div className='w-full flex flex-col items-center justify-center gap-10 z-40'>
                <Fade>
                <Header title='Features' icon={<RectangleGroupIcon className="fill-[#00BD5E] w-6 h-6 max-sm:w-4 max-sm:h-4"/>}/>
                <h1 className='text-[#ffffff] font-bold text-5xl text-center max-md:text-4xl max-sm:text-3xl '>Introducing <span className='text-[#00BD5E]'>Our</span> Features</h1>
                <p className='tmd:text-md max-sm:text-xs text-white/60 font-normal z-10  text-center lg:w-full max-sm:w-11/12'>Explore our cutting-edge solutions designed to improve traffic management, route planning, and bus tracking for a smarter and more efficient transportation experience.</p>
                </Fade>
                
                {FeaturesList.map((feature, index) => (

                        <Feature
                        key={index}
                        icon={`/images/` + feature.icon + `.svg`}
                        title={feature.title}
                        description={feature.description}
                        isActive={index === activeFeature}
                        onClick={() => toggleFeature(index)} // Pass toggle function
                    /> 


                ))}
            </div>
        </div>
    );
};

export default Features;
