import { ProductCard } from '@/components/ui/ProductCard'

const userList = [
  {
    id: 1,
    name: 'Матвей',
    imageUrl: '/me.jpg',
  },
  {
    id: 2,
    name: 'Роман',
    imageUrl: '/roman.jpg',
  },
  {
    id: 3,
    name: 'Александр',
    imageUrl: '/alex.jpg',
  },
]

export default function Page() {
  return (
    <>
      <h1 className="text-center mb-7">Спасибо за внимание!</h1>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 max-w-[1000px] mx-auto">
        {userList.map((item) => (
          <ProductCard isUsers={true} imageUrl={item.imageUrl} name={item.name} key={item.id} />
        ))}
      </div>
    </>
  )
}
