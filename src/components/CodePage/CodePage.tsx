"use client"
import React from 'react'
import Code from './Code'
import { nodejs } from '@/lib/documentation-code'
import { python } from '@/lib/documentation-code'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import SimpleBar from 'simplebar-react'

type Props = {}

const CodePage = (props: Props) => {
  return (
    <>

      <div className='flex flex-col justify-center items-center mt-10 max-w-4xl w-full'>
        <div className='mt-11'>
          <h1 className='text-xl md:text-3xl font-bold'>Write Code faster than ever</h1>
          <p className='text-lg md:text-xl dark:text-gray-600 text-center'>Join us on our Journey </p>
        </div>
        <div className='mt-11 ' />
      </div>
      <Tabs defaultValue='nodejs'>
        <TabsList>
          <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
          <TabsTrigger value='python'>Python</TabsTrigger>
        </TabsList>
        <TabsContent value='nodejs'>
          <SimpleBar forceVisible='y'>
            <Code animated code={nodejs} language='javascript' show />
          </SimpleBar>
        </TabsContent>
        <TabsContent value='python'>
          <SimpleBar forceVisible='y'>
            <Code animated code={python} language='python' show />
          </SimpleBar>
        </TabsContent>
      </Tabs>
    </>
  )
}

export default CodePage
