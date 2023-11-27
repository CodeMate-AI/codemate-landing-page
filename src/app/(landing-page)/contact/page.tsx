import FAQ from '@/components/FAQ'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='mt-32 mb-16 mx-6'>
      <h1 className='text-4xl text-center font-bold'>Frequently asked questions(FAQs)</h1>
      <FAQ />
      <div className='text-center mt-14'>
        <h1 className='text-2xl font-semibold'>Still have questions?</h1>
        <p className='text-xl text-zinc-500 mt-5'>Get in touch with our team.</p>
        <Link href={"mailto:contact@codemate.ai"} className={buttonVariants({
          size: "lg",
          className: "text-xl mt-6"
        })}>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default page
