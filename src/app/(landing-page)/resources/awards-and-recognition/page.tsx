import Card from '@/components/shared/Card'
import { Button } from '@/components/ui/button'
import { awardsContent } from '@/constants/awards-content'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='min-h-[40vh] mt-28'>
        <h1 className='text-center text-5xl font-semibold'>Awards & Recognitons</h1>
        <p className='text-center text-2xl mt-3'>Our team is overjoyed to share our recent awards and recognitions.</p>
        <div className='flex justify-center items-center'>

          <Button className='mt-11 text-center'>
            Get Started
          </Button>
        </div>
      </div>
      <div className='mb-8'>

        {awardsContent.map((item) => (
          <Card description={item.description} title={item.description} imgSrc={item.imgSrc} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default page
