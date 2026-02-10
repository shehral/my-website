"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { AIThemeToggle } from "./ai-theme-toggle"
import { useTheme } from "next-themes"
import { SLogo } from "./s-logo"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Handle hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Library", href: "/library" },
    { name: "Ali & ARIA", href: "/aria" },
    { name: "Gratitude", href: "/gratitude" },
  ]

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="fixed top-0 right-0 z-50 w-full py-4 bg-black/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-sora font-bold text-gradient">Ali Shehral</div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-black/70"></div>
            <div className="p-2 rounded-full bg-black/70 border border-gray-800">
              <div className="h-6 w-6"></div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 right-0 z-50 w-full transition-all duration-300",
          scrolled ? "py-2" : "py-4",
          isDark ? "bg-black/70" : "bg-white/70",
          "backdrop-blur-sm",
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/s-logo.png"
              alt="S Logo"
              className="h-8 w-8"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.style.display = "none"
                const fallbackEl = e.currentTarget.parentElement?.querySelector(".fallback-logo")
                if (fallbackEl) fallbackEl.style.display = "block"
              }}
            />
            <div className="fallback-logo" style={{ display: "none" }}>
              <SLogo className="h-8 w-8" />
            </div>
            <span className={`text-xl font-sora font-bold ${isDark ? "text-gradient" : "text-gradient-light"}`}>
              Ali Shehral
            </span>
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
              className={`md:hidden p-2 rounded-full backdrop-blur-sm border ${isDark ? "bg-black/70 border-gray-800" : "bg-white/70 border-blue-200"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} className={isDark ? "text-white" : "text-gray-700"} /> : <Menu size={24} className={isDark ? "text-white" : "text-gray-700"} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu - Separate from the main content */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-40 ${isDark ? "bg-black/95" : "bg-white/95"} backdrop-blur-md pt-20`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6">
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
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
