import React from 'react'
import Code from './Code'
import { nodejs } from '@/lib/documentation-code'

type Props = {}

const CodePage = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <div className='mt-11'>
        <h1 className='text-3xl font-bold'>Write Code faster than ever</h1>
        <p className='text-xl dark:text-gray-600 text-center'>Join us on our Journey </p>
      </div>
      <div className='mt-11'>
        <Code language='typescript' code={nodejs} animated show />

      </div>
    </div>
  )
}

export default CodePage
