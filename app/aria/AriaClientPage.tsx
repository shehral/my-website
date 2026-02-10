"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { getAllRoundups } from "./data/roundups"
import type { Roundup } from "./data/roundups"

function RoundupCard({ roundup, isLatest, isDark }: {
  roundup: Roundup
  isLatest: boolean
  isDark: boolean
}) {
  return (
    <Link href={`/aria/${roundup.slug}`} className="block group">
      <Card
        className={`overflow-hidden transition-all duration-300 ${
          isLatest
            ? isDark
              ? "bg-gradient-to-br from-red-950 via-red-950 to-black border-red-800/60 hover:border-red-500 hover:shadow-[0_0_25px_rgba(211,0,0,0.3)]"
              : "bg-gradient-to-br from-blue-50 via-blue-100 to-white border-blue-300 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]"
            : isDark
              ? "hover-glow bg-gradient-card border-gray-800"
              : "hover-glow-light bg-gradient-card-light border-blue-200"
        }`}
      >
        <CardHeader className="pb-2">
          {/* Top row: number + date + latest badge */}
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`inline-block px-2.5 py-0.5 text-xs font-mono font-bold rounded-full ${
                isDark ? "bg-red-950 text-red-300" : "bg-blue-100 text-blue-700"
              }`}
            >
              #{roundup.number}
            </span>
            <span className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              {roundup.date}
            </span>
            {isLatest && (
              <span
                className={`ml-auto text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                  isDark
                    ? "bg-red-900/50 text-red-400 border border-red-800/50"
                    : "bg-blue-100 text-blue-600 border border-blue-200"
                }`}
              >
                Latest
              </span>
            )}
          </div>

          {/* Title */}
          <div className="flex items-start justify-between gap-4">
            <h3
              className={`text-xl md:text-2xl font-sora font-bold transition-colors ${
                isDark
                  ? "text-white group-hover:text-red-400"
                  : "text-gray-900 group-hover:text-blue-600"
              }`}
            >
              {roundup.title}
            </h3>
            <ArrowRight
              className={`mt-1.5 flex-shrink-0 transition-all opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                isDark ? "text-red-500" : "text-blue-500"
              }`}
              size={20}
            />
          </div>
        </CardHeader>

        <CardContent>
          {/* Intro */}
          <p
            className={`text-sm leading-relaxed line-clamp-2 mb-4 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {roundup.intro}
          </p>

          {/* Section tags */}
          <div className="flex flex-wrap gap-1.5">
            {roundup.sections.map((section) => (
              <span
                key={section.heading}
                className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                  isDark
                    ? "bg-gray-900 text-gray-500 group-hover:bg-red-950/50 group-hover:text-gray-400"
                    : "bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-gray-500"
                }`}
              >
                {section.emoji} {section.heading}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function AriaClientPage() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const allRoundups = getAllRoundups()

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1
          className={`text-5xl md:text-6xl font-sora font-extrabold mb-4 ${
            isDark ? "text-gradient" : "text-gradient-light"
          }`}
        >
          Ali & ARIA
        </h1>

        <p className={`text-xl mb-16 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          Internet roundups co-authored by Ali and{" "}
          <span className={`font-medium ${isDark ? "text-red-400" : "text-blue-600"}`}>
            ARIA
          </span>{" "}
          (Ali&apos;s Research &amp; Internet Assistant). We sift through papers, repos,
          threads, and hot takes so you don&apos;t have to.
        </p>

        {/* All Roundups — Uniform Feed */}
        <div className="flex flex-col gap-4">
          {allRoundups.map((roundup, i) => (
            <RoundupCard
              key={roundup.slug}
              roundup={roundup}
              isLatest={i === 0}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Footer */}
        <div
          className={`mt-16 pt-8 border-t ${
            isDark ? "border-gray-800" : "border-blue-100"
          } text-center`}
        >
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Co-authored by Ali &amp; ARIA
          </p>
        </div>
      </div>
    </div>
  )
}
