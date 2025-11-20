

import React from 'react'
import { TestimonyProps } from '@/types'

const Testimony = ({name, ratings, description, postDate, profilePic, bgColor}:TestimonyProps) => {
  return (
    <div className="shadow-shadow-400 hover:shadow-shadow-500 hover:shadow-3xl flex w-full h-fit flex-col items-start justify-center gap-6 rounded-lg p-4 max-sm:p-3 px-8 shadow-xl ring-1 ring-[#f0efef] transition-shadow 3xl-max:px-3 md-min3:items-center xsm-min:gap-3 max-sm:w-full">
       <div className="grid h-20 w-20 max-sm:h-14 max-sm:w-14 place-items-center overflow-hidden rounded-full border-[3px] border-green-500" style={{ backgroundColor: bgColor || '#F5F5F5' }}>
         <img src={profilePic} alt="" className="h-full w-full rounded-full object-cover" />
       </div>
       <div className="flex w-full flex-col items-start justify-center gap-2 md-min3:items-center">
         <span className="text-lg font-black text-black xsm-min:text-base">{name}</span>
         <div className="flex items-center justify-center gap-2">
           {new Array(Math.floor(ratings)).fill(null).map((_, idx) => {
             return (
               <img src="/images/star.svg" alt="" className="h-5 w-5 xsm-min:h-3 xsm-min:w-3 max-sm:w-3 max-sm:h-3" key={idx} />
             );
           })}
         </div>
       </div>
       <span className="text-base font-medium text-gray-600 md-min3:text-center xsm-min:text-sm max-sm:text-sm">{description}</span>
      <span className="text-lg text-gray-600 xsm-min:text-base max-sm:text-sm">{postDate}</span>
     </div>
  )
}

export default Testimony
