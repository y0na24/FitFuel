import { FC, ReactElement } from 'react'
import { SpeedIcon } from './SpeedIcon'
import { QualIcon } from './QualIcon'

interface CardProps {
  icon: ReactElement
  title: string
  description: string
}

export const Card: FC<CardProps> = ({ icon, title, description }) => {
  return (
    <a href="#" className="transition-all  duration-1000 bg-black hover:bg-white  hover:shadow-xl m-2 p-4 relative z-40 group  ">
      <div className=" absolute  bg-white top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-purple-700 group-hover:w-1/2  "></div>
      <div className="py-2 px-9 relative  ">
        {icon}
        <h3 className="mt-8 text-lg font-semibold text-white group-hover:text-black">{title}</h3>
        <p className="mt-4 text-base text-white group-hover:text-black">{description}</p>
      </div>
    </a>
  )
}
