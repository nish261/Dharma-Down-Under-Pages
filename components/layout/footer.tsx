import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-4">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            alt="Dharma Down Under Logo"
            className="rounded-full"
            height={40}
            src="/placeholder.svg"
            width={40}
          />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ for the Australian Dharmic community.
          </p>
        </div>
        <div className="flex gap-4">
          <Link className="text-sm hover:text-orange-500" href="#">
            Privacy Policy
          </Link>
          <Link className="text-sm hover:text-orange-500" href="#">
            Terms
          </Link>
          <Link className="text-sm hover:text-orange-500" href="#">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}