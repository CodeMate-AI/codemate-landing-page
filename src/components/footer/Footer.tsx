import { InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Pinned from '../shared/Pinned'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='mx-auto mt-36'>
      <Pinned link="https://discord.com/invite/WM55rRufNP" buttonTitle='Discord' title='Join our awesome community' description='Share work, seek support, vote on components, stay updated and network with other code mates.' />
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <Image src={"/logo.png"} width={200} height={100} alt='Codemate' className='bg-black dark:bg-none mb-6' />
              <a href='https://app.codemate.ai' className="text-lg mt-0 mb-2 text-blueGray-600">
                Made by <span className='underline'>Team Codemate</span>
              </a>
              <p className='text-sm text-gray-700 dark:text-zinc-400'>CodeMate is still in early Beta, so please keep in mind that there may be some imperfections as we continue to work on improving it.</p>
              <div className=" flex mt-6 lg:mb-0 mb-6">
                <Link href={"https://instagram.com/codemate.ai"}>
                  <InstagramIcon size={15} className=' text-blueGray-800 shadow-lg font-normal h-8 w-8 items-center justify-center align-center  outline-none focus:outline-none mr-2' />
                </Link>
                <Link href={"https://twitter.com/codemateai"}>
                  <TwitterIcon size={15} className=' text-blueGray-800 shadow-lg font-normal h-8 w-8 items-center justify-center align-center  outline-none focus:outline-none mr-2' />
                </Link>
                <Link href={"https://www.youtube.com/@codemateai"}>
                  <YoutubeIcon size={15} className=' text-blueGray-800 shadow-lg font-normal h-8 w-8 items-center justify-center align-center  outline-none focus:outline-none mr-2' />
                </Link>
                <Link href={"https://www.linkedin.com/company/codemateai/"}>
                  <LinkedinIcon size={15} className=' text-blueGray-800 shadow-lg font-normal h-8 w-8 items-center justify-center align-center  outline-none focus:outline-none mr-2' />
                </Link>

              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground " href="https://app.codemate.ai/">Install</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground " href="https://www.youtube.com/watch?v=JOSp19Ggc9M">Watch Announcement</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground " href="/features">Features</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground " href="/pricing">Pricing</a>
                    </li>
                    <li>
                      <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground " href="/resources/awards-and-recognition">Awards</ Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">

                  <ul className="list-unstyled">
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground" href="mailto:contact@codemate.ai">Feedback</a>
                    </li>
                    <li>
                      <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground" href="/resources/refund-policy">Refund Policy</Link>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground" href="https://discord.com/invite/WM55rRufNP">Discord</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground" href="https://marketplace.visualstudio.com/items?itemName=AyushSinghal.Code-Mate">Vs Code</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2023 CodeMate. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
