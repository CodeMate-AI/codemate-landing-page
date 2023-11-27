"use client"
import { LanguageImages } from "@/constants/languages"
import { useIsVisible } from "@/lib/useIsVisible"
import { useTheme } from "next-themes"
import { Icon } from '@iconify/react';
import React from "react"

const LanguageSupport = () => {
  const { theme } = useTheme()
  const ref1 = React.useRef(null)
  const isVisible1 = useIsVisible(ref1)
  return (
    <div ref={ref1} className={`mt-32 mb-32 transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}  `}>
      <h1 className='uppercase font-bold text-2xl md:text-5xl text-center text-zinc-300'>Codemate AI Supports  <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text '>50+ languages </span></h1>
      <div className="flex flex-wrap justify-center md:justify-start mt-7">
        <div className="w-full flex flex-row justify-center items-center gap-1 md:gap-16 mx-auto p-2">
          {LanguageImages.map((lngImage) => (
            <div key={lngImage.id}>
            <div className="hidden md:flex " >
              <Icon icon={lngImage.icon} fontSize={80}  />
            </div>
            <div className="flex md:hidden " >
              <Icon icon={lngImage.icon} fontSize={40}  />
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageSupport
