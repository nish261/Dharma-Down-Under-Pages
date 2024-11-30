import { Hero } from '@/components/home/hero'
import { Events } from '@/components/home/events'
import { Donate } from '@/components/home/donate'
import { Newsletter } from '@/components/home/newsletter'

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Events />
      <Donate />
      <Newsletter />
    </main>
  )
}