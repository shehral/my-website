"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Artificial Intelligence", href: "/ai" },
    { name: "With Love & Gratitude", href: "/gratitude" },
  ]

  return (
    <nav className={cn("fixed top-0 right-0 z-50 w-full transition-all duration-300", scrolled ? "py-2" : "py-4")}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-sora font-bold text-gradient">
          Ali Shehral
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full bg-black/70 backdrop-blur-sm border border-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex space-x-1 bg-black/70 backdrop-blur-sm px-1 py-1 rounded-full border border-gray-800">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full transition-colors ${
                    isActive ? "text-white bg-red-900" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center">
            <div className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-2xl font-sora transition-colors ${
                      isActive ? "text-red-500" : "text-gray-300 hover:text-red-500"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
