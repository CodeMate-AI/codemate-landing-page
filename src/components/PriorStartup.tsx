import Image from 'next/image'
import React from 'react'

type Props = {}

const PriorStartup = (props: Props) => {
  return (
    <div className='flex mx-6 flex-col md:flex-row mt-10 gap-10 space-x-8 justify-center dark:bg-zinc-800 mb-24'>
      <div className=" flex mx-6 mt-5 " >

        <Image src={"/images/Google-startup-badge.jpg"} className='rounded' width={420} height={169} alt="" />
        <Image src={"/images/American-Center-2.png"} className='rounded' width={420} height={169} alt="" />
        <Image src={"/images/yourstory.png"} className='rounded' width={420} height={169} alt="" />
      </div>
    </div>
  )
}

export default PriorStartup
