"use client"

import React, { useRef } from 'react'

const DemoVideoSection = () => {

  return (
    <div className={`mt-9 `}>
      <div className='overflow-hidden rounded-xl shadow-white-sm'>
        <video autoPlay className="Hero-video d-none d-md-block hide-reduced-motion" width="1248" height="735" controls>
          <source src="/videos/demo.mp4" type="video/mp4; codecs=avc1.4d002a" />
        </video>
      </div>
    </div>
  )
}

export default DemoVideoSection
