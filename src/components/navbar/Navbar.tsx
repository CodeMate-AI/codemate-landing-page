"use client"

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import React from 'react'
import MobileNav from './Mobile-nav'
import { buttonVariants } from '../ui/button'
import { HEADER_LINKS } from '@/constants/header-links'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import ModeToggle from '../ui/toggle-theme'
import ThemeSwitch from './MobileToggleTheme'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const pathname = usePathname()
  const { theme } = useTheme()
  return (
    <nav className='sticky inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-full sm:max-w-5xl items-center justify-between rounded-2xl bg-gray-700/30  shadow-sm saturate-100  duration-500   w-full border-b  backdrop-blur-lg transition-all sm:w-auto'>
      <div className='flex items-center justify-start'>
        {theme === "dark" ? (
          <Link href='/' className='flex z-40'>
            <img src={"/logo.png"} height={100} width={200} alt='CodeMate' />
          </Link>
        ) : (
          <Link href='/' className='flex z-40'>
            <img src={"/logo.png"} height={100} width={200}
              alt='CodeMate' className='bg-black bg-opacity-60 rounded-xl px-2 mx-2 ' />
          </Link>
        )}
      </div>

      <div className='hidden items-center space-x-4 sm:flex justify-center flex-grow'>
        <>
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.title}
              className={cn(
                "rounded px-3 py-2 text-md font-medium space-y-2 transition-colors duration-150",
                {
                  ["text-zinc-900 dark:text-zinc-100 hover:text-foreground"]:
                    link.path !== pathname,
                },
                {
                  ["text-foreground"]: link.path === pathname,
                },
                `${pathname === link.path
                  ? "font-bold text-black dark:text-white"
                  : ""
                }`
                , buttonVariants({ variant: 'ghost' }))}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </>
      </div>


      <div className='md:flex justify-end mr-2 hidden '>
        <Link href={"https://app.codemate.ai/"} className={buttonVariants({
          size: "sm",
          className: "mr-2"
        })} >
          Get Started
        </Link>
        <ModeToggle />
      </div>
      <div className='md:hidden justify-end mr-2 flex '>
        <ThemeSwitch />
        <MobileNav />
      </div>

    </nav>


  )
}


export default Navbar
