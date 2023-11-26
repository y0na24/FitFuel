import Image from 'next/image'
import { FC } from 'react'
import github_icon from '../../public/github-mark.svg'

export const Footer: FC = () => {
  return (
    <footer id="contacts" className={` text-black px-5 py-3 bg-white mt-20`}>
      <div className="flex items-center justify-between mx-auto max-w-[1780px]">
        <a href="https://github.com/y0na24" target='_blank' className="flex cursor-pointer items-center gap-2 md:gap-4">
          <Image src={github_icon} width={36} height={36} alt="Github icon" />
        </a>
        <nav>
          <ul className="flex items-center text-lg gap-6">
            <li className="group cursor-pointer transition duration-200">
              <span>+799999999</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
            </li>
            <li className="group cursor-pointer transition duration-200">
              <span>fitFuel@mail.ru</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
