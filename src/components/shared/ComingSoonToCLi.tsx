"use client"

import { useIsVisible } from '@/lib/useIsVisible'
import React, { useRef } from 'react'

const ComingSoonToCLi = () => {
  const ref1 = useRef(null)
  const isVisible1 = useIsVisible(ref1)
  return (
    <div ref={ref1} className={`transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>

      <div className="relative cursor-pointer mt-16 mb-14 rounded-lg flex flex-col md:flex-row hover:scale-105 transition duration-500 border-2 border-indigo-500">
        <div className="relative p-6 bg-white    flex-grow">
          <div className="flex  justify-center items-center mt-16">
            <span className='text-4xl'>😎</span>
            <h3 className="my-2 ml-3 text-2xl uppercase md:text-4xl font-bold text-gray-800">Coming Soon to CLI</h3>
          </div>
          <p className="text-gray-600 text-center">
            We are working on bringing CodeMate to CLI. Stay tuned!
          </p>
        </div>
        <div className="mt-4 md:mt-0 md:ml-4">
          <img src="/images/terminal.png" alt="Your description" className="rounded-lg w-full h-[300px]" />
        </div>
      </div>


    </div>
  )
}

export default ComingSoonToCLi
