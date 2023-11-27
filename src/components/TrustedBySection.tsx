"use client"

import { useIsVisible } from '@/lib/useIsVisible'
import React, { useRef } from 'react'

const TrustedBySection = () => {
  const ref1 = useRef(null)
  const isVisible = useIsVisible(ref1)
  return (
    <div ref={ref1} className={`transition-opacity ease-in duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <h1 className='mt-60 md:mt-14 font-bold text-2xl md:text-5xl mb-7 text-gray-700 dark:text-zinc-200 text-center uppercase'>Trusted by <span className='bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent'>500+ Companies</span> </h1>
      <div className="slider mt-9 my-7 ">
        {/* need transparent bg svg */}
        <div className="slide-track">
          <div className="slide">
            <img src="/logo/companies/adobe.png" height="100" width="200" alt="" className="grayscale-img" />
          </div>
          <div className="slide">
            <img src="/logo/companies/amazon.webp" height="100" width="200" alt="" className="grayscale-img" />
          </div>
          <div className="slide">
            <img src="/logo/companies/amazon.webp" height="100" width="200" alt="" className="grayscale-img" />
          </div>
          <div className="slide">
            <img src="/logo/companies/amazon.webp" height="100" width="200" alt="" className="grayscale-img" />
          </div>
          <div className="slide">
            <img src="/logo/companies/google.png" height="100" width="200" alt="" className="grayscale-img" />
          </div>
          <div className="slide">
            <img src="/logo/companies/netflix.png" height="100" width="200" alt="" className="grayscale-img" />
          </div>
          <div className="slide">
            <img src="/logo/companies/adobe.png" height="100" width="200" alt="" className="grayscale-img" />
          </div>
          <div className="slide">
            <img src="/logo/companies/amazon.webp" height="100" width="200" alt="" className="grayscale-img" />
          </div>
          <div className="slide">
            <img src="/logo/companies/amazon.webp" height="100" width="200" alt="" className="grayscale-img" />
          </div>
          <div className="slide">
            <img src="/logo/companies/amazon.webp" height="100" width="200" alt="" className="grayscale-img" />
          </div>
          <div className="slide">
            <img src="/logo/companies/google.png" height="100" width="200" alt="" className="grayscale-img" />
          </div>
          <div className="slide">
            <img src="/logo/companies/netflix.png" height="100" width="200" alt="" className="grayscale-img" />
          </div>
          <div className="slide">
            <img src="/logo/companies/cisco.png" height="100" width="200" alt="" className="grayscale-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedBySection
