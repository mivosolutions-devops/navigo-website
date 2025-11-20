import React from 'react'
import { HeaderProps } from '@/types'

const Header = ({title,icon}:HeaderProps) => {
  return (
    <div className='px-6 py-3 flex gap-3 rounded-full bg-[#05966918] border border-[#059669] backdrop-blur-xl max-sm:py-4 '>
      {icon}
      <p className='text-md text-[#059669] font-semibold max-sm:text-xs '>{title}</p>
    </div>
  )
}

export default Header
