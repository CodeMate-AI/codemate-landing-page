"use client"
import { LanguageImages, LanguageImagesLight } from "@/constants/languages"
import { useIsVisible } from "@/lib/useIsVisible"
import { useTheme } from "next-themes"
import Image from "next/image"
import React from "react"

const LanguageSupport = () => {
  const { theme } = useTheme()
  const ref1 = React.useRef(null)
  const isVisible1 = useIsVisible(ref1)
  return (
    <div ref={ref1} className={`mt-32 mb-32 transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}  `}>
      <h1 className='uppercase font-bold text-3xl md:text-5xl text-center text-zinc-300'>Codemate AI Supports  <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text '>50+ languages </span></h1>
      <div className="flex flex-wrap justify-center md:justify-start mt-7">
        <div className="w-full flex flex-row justify-center items-center gap-1 md:gap-16 mx-auto p-2">
          {theme === "dark" && LanguageImages.map((lngImage) => (
            <Image src={lngImage.src} key={lngImage.id} alt="icon" width={50} height={50} className="text-white " />
          ))}
          {theme !== "dark" && LanguageImagesLight.map((lngImage) => (
            <Image src={lngImage.src} key={lngImage.id} alt="icon" width={50} height={50} className="md:h-50 md:w-50 h-30 w-30" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageSupport
