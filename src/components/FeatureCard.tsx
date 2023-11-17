import { FeaturesContent } from '@/constants/features-content'
import React from 'react'

type Props = {
  id: number
  title: string
  icon: string
  link: string
  description: string
  imgSrc: string
}

const FeatureCard = () => {
  return (

    FeaturesContent.map((feature: Props) => (
      <Features key={feature.id} id={feature.id} title={feature.title} icon={feature.icon} description={feature.description} imgSrc={feature.imgSrc} link={feature.link} />
    ))

  )
}

const Features = ({ description, icon, id, imgSrc, link, title }: Props) => {
  return (
    <>
      <div className="flex w-full flex-col md:flex-row dark:bg-gray-900 rounded-lg shadow-lg max-w-6xl mt-10 mx-auto">

        <div className="flex items-center justify-center md:w-1/2 md:items-start p-4">
          <div className="text-center md:text-left">
            <h2 className="text-lg">{title}</h2>
            <div className="mt-4 text-gray-600">
              {description}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <a href={link}>
            <img style={{ width: "100%" }} src={imgSrc} />
          </a>
        </div>
      </div>
    </>
  )

}

export default FeatureCard
