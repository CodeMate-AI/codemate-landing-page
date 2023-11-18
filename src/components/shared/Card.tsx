/* eslint-disable @next/next/no-img-element */
import React from 'react'
type Props = {
  title: string
  description: string
  imgSrc: string
}

const Card = ({ description, imgSrc, title }: Props) => {
  return (
    <div className="flex w-full flex-col md:flex-row  rounded-lg shadow-lg max-w-6xl mt-10 mx-auto">

      <div className="flex items-center justify-center md:w-1/2 md:items-start p-4">
        <div className="text-center md:text-left mx-3">
          <h2 className="text-2xl font-semibold mt-4">{title}</h2>
          <div className="mt-4 text-gray-400">
            {description}
          </div>
        </div>
      </div>
      <div className="md:w-1/2 p-4">

        <img style={{ width: "100%" }} src={imgSrc} alt='' />

      </div>
    </div>
  )
}

export default Card
