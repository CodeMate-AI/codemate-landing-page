import FeatureCard from '@/components/FeatureCard'
import HeadingAnimator from '@/components/HeadingAnimator'
import React from 'react'


const page = () => {
  return (
    <div className='mt-32 mb-10'>
      <HeadingAnimator title="An AI debugging tool made for " animatedTitle={["Developers", "Students", "Enterprises"]} description="Focus on solving problems, not debugging." />
      <FeatureCard />
    </div>
  )
}

export default page
