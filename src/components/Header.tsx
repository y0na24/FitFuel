import { nunito } from '@/fonts/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header className={`${nunito.className} text-black px-5 py-3 bg-white mb-20`}>
      <div className="flex items-center justify-between mx-auto max-w-[1780px]">
        <Link href="/" className="flex items-center gap-2 md:gap-4">
          <Image width={50} height={50} alt="Логотип компании" src="/logo.png" />
          <h1 className={`text-2xl md:text-[36px]`}>FitFuel</h1>
        </Link>
        <nav>
          <ul className="flex items-center text-lg gap-6">
            <Link href="/aboutUs" className="group cursor-pointer transition duration-200">
              <span>О нас</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
            </Link>
            <a href="#contacts" className="group cursor-pointer transition duration-200">
              <span>Контакты</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  )
}
