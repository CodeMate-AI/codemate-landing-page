import HeadingAnimator from '@/components/HeadingAnimator'
import React from 'react'
import Feature from './_components/Feature'


const page = () => {
  return (
    <div className='mt-32 mb-10'>
      <HeadingAnimator title="An AI debugging tool made for " animatedTitle={["Developers", "Students", "Enterprises"]} description="Focus on solving problems, not debugging." />
      {/* <FeatureCard /> */}
      <div className='mt-11'>

        <Feature title={"Codemate AI"} description={"Make your code production ready with a click of button"} imgSrc="https://cdn.loom.com/sessions/thumbnails/c527d3a6c0ac4901badfcc303cb61d0c-1683148735250-with-play.gif" />

        <Feature title={"Codemate AI"} description={"Instantly debug code to get the required output"} imgSrc="https://i.ytimg.com/vi/3w4LK4bXGK0/sddefault.jpg?s…D4gUihlMA8=&rs=AOn4CLAdmYWbzH0EwpHmYxQVd59HhcbUHQ" />

        <Feature title={"Codemate AI"} description={"Get a detailed report on your code performance and quality along with a programming score, helping you to improve your coding skills to write industry level code."} imgSrc="https://cdn.loom.com/sessions/thumbnails/e0a088559fca4604969244cf2a3ea04d-1683147357289-with-play.gif" />

        <Feature title={"Codemate AI"} description={"Ask any kind of questions and get answers tailored as per your own codebase. Use our AI powered chat functionality right inside your editor and end to end encrypted."} imgSrc="https://cdn.loom.com/sessions/thumbnails/4419a9a28a5c4ec4808330300f565b6d-1683151365725-with-play.gif" />
        <Feature title={"Codemate AI"} description={"Review your code as per best practices to be followed in software development through AI as if an experienced developer is sitting beside you"} imgSrc="https://i.ytimg.com/vi/x_QvwfXtz9U/sddefault.jpg?s…CogWShyMA8=&rs=AOn4CLAYUnFeBIgp1xprme0zIxgy2weTtQ" />
      </div>
    </div>
  )
}

export default page
