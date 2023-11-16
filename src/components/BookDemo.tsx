import React from 'react'
import { Button, buttonVariants } from './ui/button'
import Link from 'next/link'

type Props = {}

const BookDemo = (props: Props) => {
  return (
    <div className='flex mt-10 justify-between items-center w-full rounded-lg border dark:border-white border-black blur-0 h-28 mx-6 p-6'>
      <div>
        <h2 className='text-2xl text-gray-900 font-semibold'>For Teams and Enterprises</h2>
        <p className='text-gray-600'>Make your teams 10x more productive while programming by automating debugging and code review process in your organisation.</p>
      </div>
      <Link href={"https://cal.com/AyushSinghal/30min"} className={buttonVariants({
        size: 'lg',
      })}>
        Book a Demo
      </Link>
    </div>

  )
}

export default BookDemo
