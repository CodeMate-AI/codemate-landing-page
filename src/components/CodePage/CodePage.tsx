"use client"
import React from 'react'
import Code from './Code'
import { nodejs } from '@/lib/documentation-code'
import { python } from '@/lib/documentation-code'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import SimpleBar from 'simplebar-react'
import { useIsVisible } from '@/lib/useIsVisible'

type Props = {}

const CodePage = (props: Props) => {
  const ref1 = React.useRef(null)
  const isVisible1 = useIsVisible(ref1)
  return (
    <div ref={ref1} >
      <Tabs defaultValue='nodejs'>
        <TabsList>
          <TabsTrigger value='nodejs' >NodeJS</TabsTrigger>
          <TabsTrigger value='python'>Python</TabsTrigger>
        </TabsList>
        <TabsContent value='nodejs'>
          <SimpleBar forceVisible='y'>
            <Code animated={isVisible1} code={nodejs} language='javascript' show />
          </SimpleBar>
        </TabsContent>
        <TabsContent value='python'>
          <SimpleBar forceVisible='y'>
            <Code  animated={isVisible1} code={python} language='python' show />
          </SimpleBar>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CodePage
