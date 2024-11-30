'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section id="newsletter" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Stay Connected</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Subscribe to our newsletter for updates on events and community news
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input placeholder="Enter your email" type="email" className="border-orange-200 focus-visible:ring-orange-500" />
              <Button type="submit" className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:opacity-90">
                <Mail className="mr-2 size-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}