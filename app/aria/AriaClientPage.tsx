"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { getAllRoundups, getLatestRoundup } from "./data/roundups"

export default function AriaClientPage() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const latest = getLatestRoundup()
  const allRoundups = getAllRoundups()

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1
          className={`text-5xl md:text-6xl font-sora font-extrabold mb-4 ${isDark ? "text-gradient" : "text-gradient-light"}`}
        >
          Ali & ARIA
        </h1>

        <p className={`text-xl mb-12 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          Internet roundups co-authored by Ali and{" "}
          <span className={`font-medium ${isDark ? "text-red-400" : "text-blue-600"}`}>
            ARIA
          </span>{" "}
          (Ali&apos;s Research &amp; Internet Assistant). We sift through papers, repos,
          threads, and hot takes so you don&apos;t have to.
        </p>

        {/* Latest Roundup — Featured Card */}
        <div className="mb-16">
          <h2
            className={`text-sm font-medium uppercase tracking-wider mb-4 ${isDark ? "text-gray-500" : "text-gray-400"}`}
          >
            Latest Roundup
          </h2>

          <Link href={`/aria/${latest.slug}`} className="block group">
            <div
              className={`p-6 rounded-xl border transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-br from-red-950 via-red-950 to-black border-[#d30000] shadow-[0_0_15px_rgba(211,0,0,0.3)] hover:shadow-[0_0_25px_rgba(211,0,0,0.5)]"
                  : "bg-gradient-to-br from-blue-50 via-blue-100 to-white border-[#2563eb] shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-mono font-bold rounded-full ${isDark ? "bg-red-900 text-red-300" : "bg-blue-200 text-blue-700"}`}
                    >
                      #{latest.number}
                    </span>
                    <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      {latest.date}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl md:text-3xl font-sora font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {latest.title}
                  </h3>

                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"} line-clamp-2`}>
                    {latest.intro}
                  </p>
                </div>

                <ArrowRight
                  className={`mt-2 flex-shrink-0 transition-transform group-hover:translate-x-1 ${isDark ? "text-red-500" : "text-blue-500"}`}
                  size={24}
                />
              </div>

              <div className={`mt-4 pt-4 border-t ${isDark ? "border-red-900/50" : "border-blue-200/50"} flex flex-wrap gap-2`}>
                {latest.sections.map((section) => (
                  <span
                    key={section.heading}
                    className={`text-xs px-2 py-1 rounded-full ${isDark ? "bg-red-950/50 text-gray-400" : "bg-blue-50 text-gray-500"}`}
                  >
                    {section.emoji} {section.heading}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>

        {/* Archive */}
        {allRoundups.length > 1 && (
          <div>
            <h2
              className={`text-sm font-medium uppercase tracking-wider mb-4 ${isDark ? "text-gray-500" : "text-gray-400"}`}
            >
              Archive
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {allRoundups.slice(1).map((roundup) => (
                <Link key={roundup.slug} href={`/aria/${roundup.slug}`} className="block group">
                  <Card
                    className={`overflow-hidden transition-all ${isDark ? "hover-glow bg-gradient-card border-gray-800" : "hover-glow-light bg-gradient-card-light border-blue-200"}`}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-block px-2 py-0.5 text-xs font-mono font-bold rounded-full ${isDark ? "bg-red-950 text-red-300" : "bg-blue-100 text-blue-700"}`}
                        >
                          #{roundup.number}
                        </span>
                        <CardTitle
                          className={`group-hover:${isDark ? "text-red-500" : "text-blue-600"} transition-colors`}
                        >
                          {roundup.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                        {roundup.date}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t ${isDark ? "border-gray-800" : "border-blue-100"} text-center`}>
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Co-authored by Ali &amp; ARIA
          </p>
        </div>
      </div>
    </div>
  )
}
