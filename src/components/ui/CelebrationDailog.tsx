"use client"
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { Button, buttonVariants } from './button'
import Link from 'next/link'

type Props = {}

const CelebrationDailog = (props: Props) => {
  const { width, height } = useWindowSize()

  return (
    <div className='mx-auto mb-4 flex cursor-pointer  items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all  hover:bg-white/50'>

      <Dialog>
        <DialogTrigger asChild>
          <p className='md:text-sm text-xs font-semibold dark:text-black  text-gray-700'>
            CodeMate is now used by 25,000+ users globally!🥳
          </p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="grid gap-4 py-4">
            <p className='md:text-lg text-sm font-semibold  text-gray-700 dark:text-white'>
              CodeMate is now used by 25,000+ users globally!🥳
            </p>
            <p className='text-zinc-800 dark:text-zinc-300 md:text-lg text-sm'>To celebrate this, we are offering <span className='text-blue-700 font-semibold'>FLAT 25%</span>  off on our Monthly and Annual plans. Click below to get the coupen code </p>
            <Link href={"/pricing"} className={buttonVariants({
              size: "lg"
            })}>
              Know more
            </Link>
          </div>
        </DialogContent>
      </Dialog>
      <Confetti
        width={width}
        height={height}
      />
    </div>
  )
}

export default CelebrationDailog


