import { FC } from 'react'
import Image from 'next/image'

interface ProductCardProps {
  name: string
  imageUrl: string
  isUsers: boolean
}

export const ProductCard: FC<ProductCardProps> = ({ name, imageUrl, isUsers = false }) => {
  return (
    <div className="flex w-full flex-col justify-center items-center overflow-hidden rounded-lg bg-black shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <Image src={imageUrl} width={200} height={200} className="object-cover w-full" alt="product" />
      </div>
      <div className="mt-4 px-5 pb-5 flex flex-col w-full">
        <h5 className="text-xl tracking-tight text-white mb-7 text-center">{name}</h5>
        {!isUsers && (
          <button className="inline-block px-12 py-3 text-sm font-medium text-white hover:bg-violet-600 border border-white hover:border-violet-600 rounded active:text-violet-500 bg-transparent hover:text-white focus:outline-none focus:ring transition-all">
            Добавить
          </button>
        )}
      </div>
    </div>
  )
}
