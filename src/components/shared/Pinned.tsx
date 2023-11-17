"use client"

import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

type Props = {
  buttonTitle: string
  description: string
  title?: string
  link: string
}

const Pinned = ({ buttonTitle, description, title, link }: Props) => {
  return (
    <div className='relative mb-12 overflow-hidden rounded-lg border px-4 py-6 flex flex-col md:flex-row items-center'>
      <div className='flex-grow mb-3 md:mb-0 md:mr-3'>
        <div>
          <h1 className='text-2xl font-sans font-semibold'>{title} </h1>

          <p className='text-sm font-mono font-normal'>{description}</p>
        </div>
      </div>
      <div className='flex-none'>
        <Link href={link} className={buttonVariants()}>
          {buttonTitle}
        </Link>
      </div>
    </div>

  )
}

export default Pinned
