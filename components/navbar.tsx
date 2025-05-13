"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { AIThemeToggle } from "./ai-theme-toggle"
import { useTheme } from "next-themes"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

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
    <nav
      className={cn(
        "fixed top-0 right-0 z-50 w-full transition-all duration-300",
        scrolled ? "py-2" : "py-4",
        isDark ? "bg-black/70" : "bg-white/70",
        "backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className={`text-xl font-sora font-bold ${isDark ? "text-gradient" : "text-gradient-light"}`}>
          Ali Shehral
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            <div
              className={`flex space-x-1 ${isDark ? "bg-black/70" : "bg-white/70"} backdrop-blur-sm px-1 py-1 rounded-full ${isDark ? "border-gray-800" : "border-blue-200"} border`}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-full transition-colors ${
                      isActive
                        ? isDark
                          ? "text-white bg-red-900"
                          : "text-white bg-blue-600"
                        : isDark
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-blue-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Theme Toggle */}
          <AIThemeToggle />

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full bg-black/70 backdrop-blur-sm border border-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden fixed inset-0 top-16 ${isDark ? "bg-black/95" : "bg-white/95"} backdrop-blur-md z-40 flex flex-col items-center justify-center`}
          >
            <div className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-2xl font-sora transition-colors ${
                      isActive
                        ? isDark
                          ? "text-red-500"
                          : "text-blue-600"
                        : isDark
                          ? "text-gray-300 hover:text-red-500"
                          : "text-gray-700 hover:text-blue-600"
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
