'use client'

import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { HEADER_LINKS } from '@/constants/header-links'
import { Separator } from '../ui/separator'
import ThemeSwitch from './MobileToggleTheme'

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className='flex h-9 w-9 items-center justify-center p-0 md:hidden'
          type='button'
          aria-label='Toggle menu'
          variant='ghost'
        >
          <MenuIcon size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='min-w-[10rem]'>
        {HEADER_LINKS.map((link) => (
          <div key={link.title}>
            <DropdownMenuItem asChild>
              <Link href={link.path} className='flex items-center gap-4 text-xl'>
                <div className='text-xl'>{link.title}</div>
              </Link>
            </DropdownMenuItem>
            <Separator />
          </div>
        ))}
        <DropdownMenuItem asChild>
          <Link href={"https://app.codemate.ai"} className='flex items-center gap-4 text-xl'>
            <div className='text-xl'>Get Started</div>
          </Link>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MobileNav
