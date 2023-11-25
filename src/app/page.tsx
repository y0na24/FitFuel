import { Benefits } from '@/components/sections/Benefits'
import { Hero } from '@/components/sections/Hero'
import { Line } from '@/components/ui/Line'

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <Hero />
      <Line />
      <Benefits />
    </div>
  )
}
