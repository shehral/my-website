"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"

export default function Footer() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <footer
      className={`border-t ${isDark ? "border-gray-800" : "border-blue-100"} py-8 px-4 ${isDark ? "bg-gradient-to-t from-black to-black" : "bg-gradient-to-t from-white to-white"}`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0">
          <div className={`text-xl font-sora font-bold ${isDark ? "text-gradient" : "text-gradient-light"}`}>
            Ali Shehral
          </div>
          <div className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <Link
            href="https://neurai.sites.northeastern.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 ${isDark ? "text-gray-300 hover:text-red-500" : "text-gray-600 hover:text-blue-600"} transition-colors`}
          >
            NEURAI Lab
            <ExternalLink size={14} />
          </Link>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/shehral"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDark ? "text-gray-400 hover:text-red-500 hover:bg-red-950" : "text-gray-500 hover:text-blue-600 hover:bg-blue-50"} transition-colors p-2 rounded-full`}
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://x.com/shehral_"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDark ? "text-gray-400 hover:text-red-500 hover:bg-red-950" : "text-gray-500 hover:text-blue-600 hover:bg-blue-50"} transition-colors p-2 rounded-full`}
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com/in/shehral/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDark ? "text-gray-400 hover:text-red-500 hover:bg-red-950" : "text-gray-500 hover:text-blue-600 hover:bg-blue-50"} transition-colors p-2 rounded-full`}
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
