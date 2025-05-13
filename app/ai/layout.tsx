"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface SidebarLinkProps {
  href: string
  children: ReactNode
  className?: string
}

function SidebarLink({ href, children, className }: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "block py-3 px-4 transition-all duration-300 rounded-lg relative overflow-hidden group",
        isActive ? "text-white font-medium bg-red-950" : "text-gray-400 hover:text-white",
        className,
      )}
    >
      <div className="relative z-10 flex items-center">
        <span className="mr-2 text-red-500 opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          {isActive ? "●" : "○"}
        </span>
        {children}
      </div>
    </Link>
  )
}

export default function AILayout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="md:hidden sticky top-20 z-20 mb-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full flex items-center justify-between bg-gradient-to-r from-red-950 to-black p-4 rounded-xl border border-gray-800 shadow-lg"
          >
            <h3 className="font-sora font-bold text-lg text-gradient">AI Universe</h3>
            {mobileMenuOpen ? (
              <ChevronUp className="h-5 w-5 text-red-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-red-500" />
            )}
          </button>
        </div>

        {/* Sidebar */}
        <aside
          className={`bg-gradient-to-b from-red-950 to-black rounded-xl md:sticky md:top-24 h-fit border border-gray-800 shadow-lg ${mobileMenuOpen ? "block" : "hidden md:block"}`}
        >
          <div className="p-4 border-b border-gray-800 hidden md:block">
            <h3 className="font-sora font-bold text-lg text-gradient">AI Universe</h3>
          </div>
          <nav className="py-4">
            <SidebarLink href="/ai">Overview</SidebarLink>
            <SidebarLink href="/ai/interpretability">Mechanistic Interpretability</SidebarLink>
            <SidebarLink href="/ai/reading">Currently Reading</SidebarLink>
            <SidebarLink href="/ai/resources">Resources</SidebarLink>
          </nav>
        </aside>

        {/* Main content */}
        <main className="min-h-[70vh] bg-gradient-to-b from-black to-black rounded-xl p-6 border border-gray-800 shadow-lg">
          {children}
        </main>
      </div>
    </div>
  )
}
