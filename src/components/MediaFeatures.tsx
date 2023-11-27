"use client"
import { useIsVisible } from '@/lib/useIsVisible'
import React, { useRef } from 'react'

const MediaFeatures = () => {
  const ref1 = useRef(null)
  const isVisible1 = useIsVisible(ref1)
  return (
    <div ref={ref1} className={`transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <h1 className='text-2xl uppercase md:text-5xl font-bold text-center mt-20 my-8 bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text'>Media Features </h1>

      <div className=" h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 card-animation">

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/logo/dainik.png" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dainik Bhaskar</span>
            </a>



            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="/logo/dainik.png" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dainik Bhaskar</span>
            </a>



            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="/logo/dainik.png" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dainik Bhaskar</span>
            </a>



            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/logo/dainik.png" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dainik Bhaskar</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaFeatures
