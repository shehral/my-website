"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function ClientPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className={`${isDark ? "text-red-500" : "text-blue-600"} font-space tracking-wider`}>
                MSCS STUDENT AT NORTHEASTERN UNIVERSITY
              </p>
              <h1
                className={`text-6xl md:text-7xl lg:text-8xl font-sora font-extrabold ${isDark ? "text-gradient" : "text-gradient-light"} animate-gradient`}
              >
                Ali Shehral
              </h1>
              <p className={`text-xl md:text-2xl max-w-2xl ${isDark ? "text-gray-300" : "text-gray-700"} font-space`}>
                President of NEURAI Lab · Builder of AI & Quant Finance tools · Guitarist & Ducati rider
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className={`${isDark ? "bg-red-700 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-500"} text-white border-none`}
              >
                <Link href="/ai" className="group">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className={`rounded-full ${isDark ? "border-gray-700 hover:border-red-500 hover:bg-red-950" : "border-blue-200 hover:border-blue-500 hover:bg-blue-50"}`}
                >
                  <a href="https://github.com/shehral" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className={`rounded-full ${isDark ? "border-gray-700 hover:border-red-500 hover:bg-red-950" : "border-blue-200 hover:border-blue-500 hover:bg-blue-50"}`}
                >
                  <a href="https://x.com/shehral_" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className={`rounded-full ${isDark ? "border-gray-700 hover:border-red-500 hover:bg-red-950" : "border-blue-200 hover:border-blue-500 hover:bg-blue-50"}`}
                >
                  <a href="https://www.linkedin.com/in/shehral/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[300px] mx-auto lg:mx-0">
            <div
              className={`aspect-square rounded-full ${isDark ? "bg-gradient-to-br from-red-700 to-red-950" : "bg-gradient-to-br from-blue-400 to-blue-600"} p-1 animate-float`}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-black">
                <Image
                  src="/ali-shehral-portrait.jpg"
                  alt="Ali Shehral"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
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
