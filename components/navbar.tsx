"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blush/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-heading text-2xl font-bold text-purple-deep tracking-wide">
            Rare Beauty <span className="text-gold">x</span> JB
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="font-body text-purple-deep hover:text-gold transition-colors">
              About
            </Link>
            <Link href="#problem" className="font-body text-purple-deep hover:text-gold transition-colors">
              The Mission
            </Link>
            <Link href="#approach" className="font-body text-purple-deep hover:text-gold transition-colors">
              Our Approach
            </Link>
            <Link href="#products" className="font-body text-purple-deep hover:text-gold transition-colors">
              Products
            </Link>
            <Link
              href="/shop"
              className="font-body bg-purple-deep text-white px-6 py-2 rounded-full hover:bg-purple-light transition-colors"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-purple-deep"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-light/30">
            <div className="flex flex-col gap-4">
              <Link
                href="#about"
                className="font-body text-purple-deep hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#problem"
                className="font-body text-purple-deep hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                The Mission
              </Link>
              <Link
                href="#approach"
                className="font-body text-purple-deep hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Our Approach
              </Link>
              <Link
                href="#products"
                className="font-body text-purple-deep hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/shop"
                className="font-body bg-purple-deep text-white px-6 py-2 rounded-full text-center hover:bg-purple-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
