import Image from 'next/image'
import React from 'react'

type Props = {}

const KeyFeatures = (props: Props) => {
  return (
    <div className='mt-10 '>
      <h1 className='text-center text-5xl font-semibold'>Say <span className='text-blue-600'>goodbye</span>  to Overloading Tabs</h1>
      <p className='text-gray-700 text-center text-xl mt-4' >Say hello to smarter coding- CodeMate's Intuitive Interface makes Coding a Breeze!</p>
      <div className="flex flex-wrap justify-center md:gap-32">

        <div className="flex flex-col  rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

          <Image src="/images/Group-3.png" width={140} height={90} alt="" className="h-30 m-6" />

          <h2 className="text-center px-2 pb-5">Prevent project delays, get paid sooner</h2>
        </div>

        <div className="flex flex-col  rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

          <Image src="/images/Group-2.png" width={140} height={90} alt="" className="h-30 m-6" />

          <h2 className="text-center px-2 pb-5">Code with Confidence</h2>


        </div>

        <div className="flex flex-col  rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

          <Image src="/images/Group-4.png" alt="" width={140} height={90} className="h-30 m-6" />

          <h2 className="text-center px-2 pb-5">Streamline Your Workflow with 10x productivity</h2>


        </div>

      </div>

    </div>
  )
}

export default KeyFeatures
