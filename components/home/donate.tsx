'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DollarSign } from 'lucide-react'

export function Donate() {
  return (
    <section id="donate" className="relative py-12 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-blue-600 opacity-5" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Support Our Mission</h2>
              <p className="text-muted-foreground md:text-xl">
                Your contribution helps us create more programs and events for young Australian Dharmics
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:opacity-90" size="lg">
                <DollarSign className="mr-2 size-5" />
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Learn More
              </Button>
            </div>
          </div>
          <div className="rounded-lg border bg-white/50 backdrop-blur-sm p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Quick Donation</h3>
              <div className="grid grid-cols-3 gap-2">
                {["$10", "$25", "$50"].map((amount, index) => (
                  <Button key={index} variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                    {amount}
                  </Button>
                ))}
              </div>
              <div className="space-y-2">
                <Input placeholder="Other amount" type="number" className="border-orange-200 focus-visible:ring-orange-500" />
                <Button className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:opacity-90">
                  Contribute
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}