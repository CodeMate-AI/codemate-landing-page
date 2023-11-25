"use client"
import { useIsVisible } from '@/lib/useIsVisible'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useRef } from 'react'

const UsedByDevelopers = () => {
  const { theme } = useTheme()
  const ref1 = useRef()
  const isVisible1 = useIsVisible(ref1)
  return (
    <div ref={ref1} className={`transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
      <h1 className='uppercase font-semibold md:text-2xl text-xl text-center mt-12 '>USED BY DEVELOPERS FROM   <span className='text-blue-600'>  STARTUPS</span>  TO  <span className='text-blue-600'>  FORTUNE 500 COMPANIES</span> </h1>
      <div className="flex mx-6 flex-col items-center md:flex-row mt-10 gap-10 space-x-8 justify-center  mb-24">
        <Image src={"/images/Adobe.png"} width={120} height={60} alt='adobe' />
        <Image src={"/images/amazon.png"} width={130} height={50} alt='adobe' />
        <Image src={"/images/cred.png"} width={120} height={60} alt='adobe' />
        {theme === "dark" ? <Image src={"/images/fampay.png"} width={100} height={60} alt='adobe' /> : <Image src={"/images/fampay-light.avif"} width={100} height={60} alt='adobe' />}
        <Image src={"/images/google.png"} width={90} height={50} alt='adobe' />
        <Image src={"/images/microsoft.png"} width={120} height={60} alt='adobe' />
      </div>
    </div>
  )
}

export default UsedByDevelopers
