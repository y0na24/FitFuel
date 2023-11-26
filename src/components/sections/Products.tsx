import { FC, useState } from 'react'
import { ProductCard } from '../ui/ProductCard'
import { useSearchParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs'

const productsList = {
  protein: [
    {
      id: 1,
      name: 'MAXLER GOLDEN WHEY',
      imageUrl: '/protein-1.jpeg',
    },
    {
      id: 2,
      name: 'ON WHEY GOLD',
      imageUrl: '/protein-2.jpeg',
    },
    {
      id: 3,
      name: 'MAXLER GOLDEN CASEIN',
      imageUrl: '/protein-3.jpeg',
    },
  ],
  creatine: [
    {
      id: 4,
      name: 'MAXLER CREATINE',
      imageUrl: '/creatine-1.jpeg',
    },
    {
      id: 5,
      name: 'ON CREATINE POWDER',
      imageUrl: '/creatine-2.jpeg',
    },
    {
      id: 6,
      name: 'BE FIRST CREATINE',
      imageUrl: '/creatine-3.jpeg',
    },
  ],
  minerals: [
    {
      id: 7,
      name: 'ON OPTI-MEN',
      imageUrl: '/minerals-1.jpeg',
    },
    {
      id: 8,
      name: 'MAXLER OMEGA-3 GOLD',
      imageUrl: '/minerals-2.jpeg',
    },
    {
      id: 9,
      name: 'NOW MELATONIN',
      imageUrl: '/minerals-3.jpeg',
    },
  ],
}

export const Products: FC = () => {
  return (
    <>
      <h1 className="text-center mb-7">Каталог</h1>
      <Tabs defaultValue="protein">
        <TabsList className="grid gap-3 mx-auto max-w-[1000px]  grid-cols-3 mb-8">
          <TabsTrigger className='text-lg' value="protein">Protein</TabsTrigger>
          <TabsTrigger className='text-lg' value="creatine">Creatine</TabsTrigger>
          <TabsTrigger className='text-lg' value="minerals">Minerals</TabsTrigger>
        </TabsList>
        <TabsContent value="protein">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 max-w-[1000px] mx-auto">
            {productsList.protein.map((item) => (
              <ProductCard imageUrl={item.imageUrl} name={item.name} key={item.id} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="creatine">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 max-w-[1000px] mx-auto">
            {productsList.creatine.map((item) => (
              <ProductCard imageUrl={item.imageUrl} name={item.name} key={item.id} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="minerals">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 max-w-[1000px] mx-auto">
            {productsList.minerals.map((item) => (
              <ProductCard imageUrl={item.imageUrl} name={item.name} key={item.id} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
