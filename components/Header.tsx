import React from 'react'
import { HeaderProps } from '@/types'

const Header = ({title,icon}:HeaderProps) => {
  return (
    <div className='px-6 py-3 flex gap-3 rounded-full bg-[#00bd5e18] border border-[#00bd5e] backdrop-blur-xl max-sm:py-4 '>
      {icon}
      <p className='text-md text-[#00bd5e] font-semibold max-sm:text-xs '>{title}</p>
    </div>
  )
}

export default Header
