import HeadingAnimator from '@/components/HeadingAnimator'
import React from 'react'


const page = () => {
  return (
    <div className='mt-32'>
      <HeadingAnimator title="An AI debugging tool made for " animatedTitle={["Developers", "Students", "Enterprises"]} />
    </div>
  )
}

export default page
