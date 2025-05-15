"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { useTheme } from "next-themes"
import { ProfileImage } from "@/components/profile-image"
import { useState } from "react"

export default function ClientPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [hoverExplore, setHoverExplore] = useState(false)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className={`${isDark ? "text-red-500" : "text-blue-600"} font-space tracking-wider`}>
                MSCS STUDENT · PRESIDENT OF NEURAI LAB · AI & QUANT FINANCE MECHANIC · GUITARIST · DUCATI RIDER
              </p>
              <h1
                className={`text-6xl md:text-7xl lg:text-8xl font-sora font-extrabold ${isDark ? "text-gradient" : "text-gradient-light"} animate-gradient`}
              >
                Ali Shehral
              </h1>
              <p className={`text-xl md:text-2xl max-w-2xl ${isDark ? "text-gray-300" : "text-gray-700"} font-space`}>
                Writes code so the robots behave; rides bikes so he remembers he's squishy; riffs on guitar so he knows
                he's neither AI nor Achilles.
              </p>
              <p className={`text-xl md:text-2xl max-w-2xl ${isDark ? "text-gray-300" : "text-gray-700"} font-space`}>
                This site is part tinkerer's journal, part jam-session setlist, part curated reading list—a peek at
                what's driving my experiments and whims.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between border-t border-b py-4 mt-8 mb-2 border-opacity-20 border-gray-500">
              <Link
                href="/ai"
                className={`group flex items-center text-2xl font-medium ${isDark ? "text-white" : "text-gray-900"} transition-all duration-300`}
                onMouseEnter={() => setHoverExplore(true)}
                onMouseLeave={() => setHoverExplore(false)}
              >
                <span className="relative">
                  Explore My Work
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDark ? "bg-red-500" : "bg-blue-500"} transition-all duration-300 ${hoverExplore ? "w-full" : ""}`}
                  ></span>
                </span>
                <ArrowRight
                  className={`ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${isDark ? "group-hover:text-red-500" : "group-hover:text-blue-500"}`}
                />
              </Link>

              <div className="flex space-x-8">
                <a
                  href="https://github.com/shehral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? "text-white hover:text-red-500" : "text-gray-900 hover:text-blue-500"} transition-colors duration-300 transform hover:scale-110`}
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://x.com/shehral_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? "text-white hover:text-red-500" : "text-gray-900 hover:text-blue-500"} transition-colors duration-300 transform hover:scale-110`}
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://linkedin.com/in/shehral/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? "text-white hover:text-red-500" : "text-gray-900 hover:text-blue-500"} transition-colors duration-300 transform hover:scale-110`}
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[300px] mx-auto lg:mx-0">
            <div
              className={`aspect-square rounded-full ${isDark ? "bg-gradient-to-br from-red-700 to-red-950" : "bg-gradient-to-br from-blue-400 to-blue-600"} p-1 animate-float`}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black">
                <ProfileImage />
              </div>
            </div>
          </div>
        </div>

        <section className="mt-24 max-w-3xl space-y-6">
          <h2 className={`text-3xl ${isDark ? "text-gradient" : "text-gradient-light"} font-sora font-bold`}>
            What I'm doing now
          </h2>
          <div className={`space-y-4 ${isDark ? "text-gray-300" : "text-gray-700"} text-lg`}>
            <div
              className={`flex items-start gap-3 p-4 rounded-lg ${isDark ? "bg-gradient-card hover-glow border-gray-800" : "bg-gradient-card-light hover-glow-light border-blue-200"} border`}
            >
              <div className={`${isDark ? "text-red-500" : "text-blue-600"} font-bold`}>•</div>
              <p>Researching mechanistic interpretability & XAI safety</p>
            </div>
            <div
              className={`flex items-start gap-3 p-4 rounded-lg ${isDark ? "bg-gradient-card hover-glow border-gray-800" : "bg-gradient-card-light hover-glow-light border-blue-200"} border`}
            >
              <div className={`${isDark ? "text-red-500" : "text-blue-600"} font-bold`}>•</div>
              <p>Building retail quant strategies with RL & quantum ML</p>
            </div>
            <div
              className={`flex items-start gap-3 p-4 rounded-lg ${isDark ? "bg-gradient-card hover-glow border-gray-800" : "bg-gradient-card-light hover-glow-light border-blue-200"} border`}
            >
              <div className={`${isDark ? "text-red-500" : "text-blue-600"} font-bold`}>•</div>
              <p>Growing NEURAI Lab & hosting Bay Area interpretability workshops</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
