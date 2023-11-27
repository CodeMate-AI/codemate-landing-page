"use client"
import React from 'react'
import "../../styles/indus.css"
import { useTheme } from 'next-themes'
import { useIsVisible } from '@/lib/useIsVisible'

const IndustrialStandard = () => {
  const ref1 = React.useRef(null)
  const isVisible1 = useIsVisible(ref1)
  const { theme } = useTheme()
  return (
    <div ref={ref1} className={`mt-1 mb-56 transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <div className=" bg-image w-full min-h-screen flex flex-wrap justify-center items-center gap-3 py-5">
        <div>
          <h1 className='text-2xl mb-5 md:mb-3 md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-gray-500 bg-clip-text text-transparent uppercase'>  The industry standard.</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-9">
          <div className="z-10 backdrop backdrop-blur-sm w-10/12 md:w-[32%] bg-white bg-opacity-10 rounded-2xl p-3 text-gray-800 shadow-xl">

            <div className="w-full mb-3 pb-3 ">
              <h3 className="text-5xl font-semibold text-zinc-800 dark:text-white mx-4 mt-4 mb-3">37,000+</h3>
            </div>

            <div>
              <p className=" text-2xl text-gray-900 dark:text-zinc-300 mx-4 mb-20">
                Businesses have adopted GitHub Copilot
              </p>

            </div>
          </div>
          <div className="z-10 backdrop backdrop-blur-sm w-10/12 md:w-[32%] bg-white bg-opacity-10 rounded-2xl p-3 text-gray-800 shadow-xl">

            <div className="w-full mb-3 pb-3 ">
              <h3 className="text-5xl font-semibold text-zinc-800 dark:text-white mx-4 mt-4 mb-3">1 in 3</h3>
            </div>

            <div>
              <p className=" text-2xl text-gray-900 dark:text-zinc-300 mx-4 mb-20">
                Fortune 500 companies use GitHub Copilot
              </p>

            </div>
          </div>
          <div className="z-10 backdrop backdrop-blur-sm w-10/12 md:w-[32%] bg-white bg-opacity-10 rounded-2xl p-3 text-gray-800 shadow-xl">

            <div className="w-full mb-3 pb-3 ">
              <h3 className="text-5xl font-semibold text-zinc-800 dark:text-white mx-4 mt-4 mb-3">55%
              </h3>
            </div>

            <div>
              <p className=" text-2xl text-gray-900 dark:text-zinc-300 mx-4 mb-20">
                Developer preference for GitHub Copilot
              </p>

            </div>
          </div>
          <div className="bg hidden md:block absolute z-index-0 w-full opacity-100">
            <svg
              width="100%"
              height="100%"
              id="svg"
              w-full
              viewBox="0 0 1440 700"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-300 ease-in-out delay-150"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="5%" stopColor="black"></stop>
                  <stop offset="95%" stopColor="blue"></stop>
                </linearGradient>
              </defs>
              <path
                d="M 0,700 C 0,700 0,140 0,140 C 170.93333333333334,140.66666666666669 341.8666666666667,141.33333333333334 492,137 C 642.1333333333333,132.66666666666666 771.4666666666667,123.33333333333333 926,123 C 1080.5333333333333,122.66666666666667 1260.2666666666667,131.33333333333334 1440,140 C 1440,140 1440,700 1440,700 Z"
                stroke="none"
                strokeWidth="0"
                fill={`${theme === "dark" ? 'url(#gradient)' : "white"} `}
                fillOpacity="0.265"
                className="transition-all duration-300 ease-in-out delay-150 path-0"
              ></path>


              <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="5%" stopColor="white"></stop>
                  <stop offset="95%" stopColor="green"></stop>
                </linearGradient>
              </defs>
              <path
                d="M 0,700 C 0,700 0,560 0,560 C 153.7333333333333,541.5999999999999 307.4666666666666,523.1999999999999 457,527 C 606.5333333333334,530.8000000000001 751.8666666666666,556.8000000000001 915,566 C 1078.1333333333334,575.1999999999999 1259.0666666666666,567.5999999999999 1440,560 C 1440,560 1440,700 1440,700 Z"
                stroke="none"
                strokeWidth="0"
                fill="url(#gradient)"
                fillOpacity="1"
                className="transition-all duration-300 ease-in-out delay-150 path-3"
              ></path>
            </svg>

          </div>
        </div>

      </div>

    </div>
  )
}

export default IndustrialStandard
