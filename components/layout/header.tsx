'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg"
            alt="Dharma Down Under"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold">Dharma Down Under</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="text-sm font-medium hover:text-orange-500 flex items-center">
              Get Involved <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block border border-gray-100 z-50">
              <Link href="#volunteer" className="block px-4 py-2 text-sm hover:bg-orange-100">Volunteer</Link>
              <Link href="#donate" className="block px-4 py-2 text-sm hover:bg-orange-100">Donate</Link>
              <Link href="#contact-us" className="block px-4 py-2 text-sm hover:bg-orange-100">Contact Us</Link>
            </div>
          </div>
          <Link href="/community" className="text-sm font-medium hover:text-orange-500">
            DDU Community Space
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-orange-500 flex items-center">
              About Us <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block border border-gray-100 z-50">
              <Link href="#who-we-are" className="block px-4 py-2 text-sm hover:bg-orange-100">Who We Are</Link>
              <Link href="#what-we-do" className="block px-4 py-2 text-sm hover:bg-orange-100">What We Do</Link>
              <Link href="#our-vision" className="block px-4 py-2 text-sm hover:bg-orange-100">Our Vision</Link>
              <Link href="#our-founder" className="block px-4 py-2 text-sm hover:bg-orange-100">Our Founder</Link>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:opacity-90">
            Donate Now
          </Button>
        </nav>
      </div>
    </header>
  )
}