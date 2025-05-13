"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { useTheme } from "next-themes"

interface SidebarLinkProps {
  href: string
  children: ReactNode
  className?: string
}

function SidebarLink({ href, children, className }: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Link
      href={href}
      className={cn(
        "block py-3 px-4 transition-all duration-300 rounded-lg relative overflow-hidden group",
        isActive
          ? isDark
            ? "text-white font-medium bg-red-950"
            : "text-white font-medium bg-blue-600"
          : isDark
            ? "text-gray-400 hover:text-white"
            : "text-gray-600 hover:text-blue-700",
        className,
      )}
    >
      <div className="relative z-10 flex items-center">
        <span
          className={`mr-2 ${isDark ? "text-red-500" : "text-blue-400"} opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {isActive ? "●" : "○"}
        </span>
        {children}
      </div>
    </Link>
  )
}

export default function AILayout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="md:hidden sticky top-20 z-20 mb-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`w-full flex items-center justify-between ${isDark ? "bg-gradient-to-r from-red-950 to-black" : "bg-gradient-to-r from-blue-100 to-white"} p-4 rounded-xl ${isDark ? "border-gray-800" : "border-blue-200"} border shadow-lg`}
          >
            <h3 className={`font-sora font-bold text-lg ${isDark ? "text-gradient" : "text-gradient-light"}`}>
              AI Universe
            </h3>
            {mobileMenuOpen ? (
              <ChevronUp className={`h-5 w-5 ${isDark ? "text-red-500" : "text-blue-500"}`} />
            ) : (
              <ChevronDown className={`h-5 w-5 ${isDark ? "text-red-500" : "text-blue-500"}`} />
            )}
          </button>
        </div>

        {/* Sidebar */}
        <aside
          className={`${isDark ? "bg-gradient-to-b from-red-950 to-black" : "bg-gradient-to-b from-blue-50 to-white"} rounded-xl md:sticky md:top-24 h-fit ${isDark ? "border-gray-800" : "border-blue-200"} border shadow-lg ${mobileMenuOpen ? "block" : "hidden md:block"}`}
        >
          <div className={`p-4 border-b ${isDark ? "border-gray-800" : "border-blue-200"} hidden md:block`}>
            <h3 className={`font-sora font-bold text-lg ${isDark ? "text-gradient" : "text-gradient-light"}`}>
              AI Universe
            </h3>
          </div>
          <nav className="py-4">
            <SidebarLink href="/ai">Overview</SidebarLink>
            <SidebarLink href="/ai/interpretability">Mechanistic Interpretability</SidebarLink>
            <SidebarLink href="/ai/reading">Currently Reading</SidebarLink>
            <SidebarLink href="/ai/resources">Resources</SidebarLink>
          </nav>
        </aside>

        {/* Main content */}
        <main
          className={`min-h-[70vh] ${isDark ? "bg-gradient-to-b from-black to-black" : "bg-gradient-to-b from-white to-white"} rounded-xl p-6 ${isDark ? "border-gray-800" : "border-blue-200"} border shadow-lg`}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
