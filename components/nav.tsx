'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CLEOHN
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <Button variant="ghost" className="rounded-full text-base">
                Home
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="ghost" className="rounded-full text-base">
                Services
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="ghost" className="rounded-full text-base">
                Pricing
              </Button>
            </Link>
            <Link href="/videos">
              <Button variant="ghost" className="rounded-full text-base">
                Videos
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="rounded-full text-base">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full rounded-xl text-base justify-start">
                Home
              </Button>
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full rounded-xl text-base justify-start">
                Services
              </Button>
            </Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full rounded-xl text-base justify-start">
                Pricing
              </Button>
            </Link>
            <Link href="/videos" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full rounded-xl text-base justify-start">
                Videos
              </Button>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full rounded-xl text-base justify-start">
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
