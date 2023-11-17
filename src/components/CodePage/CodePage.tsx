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
      <Tabs defaultValue='nodejs'>
        <TabsList>
          <TabsTrigger value='nodejs' >NodeJS</TabsTrigger>
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
