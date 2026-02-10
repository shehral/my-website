"use client"

import { type ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { getRoundupBySlug, getAdjacentRoundups, type RoundupVideo } from "../data/roundups"

/**
 * Parses markdown-style [text](url) links within prose into <a> tags.
 * This enables Gwern-style inline annotations in roundup prose sections.
 */
function renderProseWithLinks(text: string, isDark: boolean): ReactNode[] {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: ReactNode[] = []
  let lastIndex = 0
  let result: RegExpExecArray | null = null

  // Reset lastIndex to ensure clean iteration
  linkPattern.lastIndex = 0

  while ((result = linkPattern.exec(text)) !== null) {
    // Text before the link
    if (result.index > lastIndex) {
      parts.push(text.slice(lastIndex, result.index))
    }
    // The link itself
    const linkText = result[1]
    const href = result[2]
    const isExternal = href.startsWith("http")
    parts.push(
      <a
        key={`link-${result.index}`}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`underline decoration-1 underline-offset-2 transition-colors ${
          isDark
            ? "text-red-400 hover:text-red-300 decoration-red-800 hover:decoration-red-400"
            : "text-blue-600 hover:text-blue-500 decoration-blue-300 hover:decoration-blue-500"
        }`}
      >
        {linkText}
      </a>
    )
    lastIndex = result.index + result[0].length
  }

  // Remaining text after last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

interface Props {
  slug: string
}

export default function RoundupClientPage({ slug }: Props) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const roundup = getRoundupBySlug(slug)
  if (!roundup) return null

  const { prev, next } = getAdjacentRoundups(slug)

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/aria"
          className={`inline-flex items-center gap-2 text-sm mb-8 transition-colors ${isDark ? "text-gray-400 hover:text-red-400" : "text-gray-500 hover:text-blue-600"}`}
        >
          <ArrowLeft size={16} />
          All Roundups
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-block px-3 py-1 text-sm font-mono font-bold rounded-full ${isDark ? "bg-red-900 text-red-300" : "bg-blue-200 text-blue-700"}`}
            >
              #{roundup.number}
            </span>
            <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              {roundup.date}
            </span>
          </div>

          <h1
            className={`text-4xl md:text-5xl font-sora font-extrabold mb-6 ${isDark ? "text-gradient" : "text-gradient-light"}`}
          >
            {roundup.title}
          </h1>

          <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            {roundup.intro}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {roundup.sections.map((section) => (
            <section key={section.heading}>
              <h2
                className={`text-2xl font-sora font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                {section.emoji} {section.heading}
              </h2>

              {/* Prose content — supports [text](url) inline links */}
              {section.prose && (
                <div className={`space-y-4 ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
                  {section.prose.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{renderProseWithLinks(paragraph, isDark)}</p>
                  ))}
                </div>
              )}

              {/* Images (memes, screenshots, diagrams) */}
              {section.images && section.images.length > 0 && (
                <div className={`flex flex-col items-center gap-6 ${section.prose ? "mt-6" : ""}`}>
                  {section.images.map((image) => {
                    const img = (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={600}
                        className="w-full h-auto"
                      />
                    )
                    return (
                      <figure
                        key={image.src}
                        className={`rounded-xl overflow-hidden border max-w-md w-full ${isDark ? "border-gray-800 bg-black/30" : "border-blue-200 bg-white/50"}`}
                      >
                        {image.href ? (
                          <a href={image.href} target="_blank" rel="noopener noreferrer" className="block relative group">
                            {img}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
                                ▶ Watch
                              </span>
                            </div>
                          </a>
                        ) : (
                          img
                        )}
                        {image.caption && (
                          <figcaption className={`px-3 py-2 text-xs text-center ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    )
                  })}
                </div>
              )}

              {/* Videos (YouTube embeds or self-hosted clips) */}
              {section.videos && section.videos.length > 0 && (
                <div className={`flex flex-col items-center gap-6 ${section.prose || section.images ? "mt-6" : ""}`}>
                  {section.videos.map((video, i) => (
                    <figure
                      key={`video-${i}`}
                      className={`rounded-xl overflow-hidden border max-w-lg w-full ${isDark ? "border-gray-800 bg-black/30" : "border-blue-200 bg-white/50"}`}
                    >
                      {video.type === "youtube" ? (
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${video.src}`}
                            title={video.caption || "Embedded video"}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                      ) : (
                        <video
                          src={video.src}
                          controls
                          preload="metadata"
                          playsInline
                          className="w-full h-auto"
                        />
                      )}
                      {video.caption && (
                        <figcaption className={`px-3 py-2 text-xs text-center ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                          {video.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}

              {/* Link items */}
              {section.items && section.items.length > 0 && (
                <div className={`grid grid-cols-1 gap-4 ${section.prose ? "mt-6" : ""}`}>
                  {section.items.map((item) => (
                    <Card
                      key={item.title}
                      className={`overflow-hidden transition-all ${isDark ? "hover-glow bg-gradient-card border-gray-800" : "hover-glow-light bg-gradient-card-light border-blue-200"} group`}
                    >
                      <CardHeader className={`pb-2 border-b ${isDark ? "border-gray-800/50" : "border-blue-200/50"}`}>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${isDark ? "bg-red-950 text-white" : "bg-blue-100 text-blue-700"}`}
                              >
                                {item.source}
                              </span>
                            </div>
                            <CardTitle className="text-lg">
                              <Link
                                href={item.href}
                                target={item.href.startsWith("/") ? undefined : "_blank"}
                                rel={item.href.startsWith("/") ? undefined : "noopener noreferrer"}
                                className={`inline-flex items-center gap-2 transition-colors ${isDark ? "hover:text-red-400" : "hover:text-blue-600"}`}
                              >
                                {item.title}
                                <ExternalLink size={14} className="flex-shrink-0 text-gray-400" />
                              </Link>
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-3">
                        <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                          <span className={`font-medium ${isDark ? "text-red-400" : "text-blue-600"}`}>
                            ARIA:
                          </span>{" "}
                          {item.aria}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Sign-off */}
        <div
          className={`mt-12 p-6 rounded-xl border ${isDark ? "bg-gradient-to-br from-red-950 to-black border-gray-800" : "bg-gradient-to-br from-blue-50 to-white border-blue-200"}`}
        >
          <div className={`space-y-4 text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            {roundup.signoff.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <p className={`text-right font-sora font-bold mt-4 ${isDark ? "text-red-400" : "text-blue-600"}`}>
            — Ali &amp; ARIA
          </p>
        </div>

        {/* Prev / Next Navigation */}
        <div className={`mt-12 pt-8 border-t ${isDark ? "border-gray-800" : "border-blue-100"} flex justify-between items-center`}>
          {prev ? (
            <Link
              href={`/aria/${prev.slug}`}
              className={`inline-flex items-center gap-2 text-sm transition-colors ${isDark ? "text-gray-400 hover:text-red-400" : "text-gray-500 hover:text-blue-600"}`}
            >
              <ArrowLeft size={16} />
              #{prev.number} {prev.title}
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/aria/${next.slug}`}
              className={`inline-flex items-center gap-2 text-sm transition-colors ${isDark ? "text-gray-400 hover:text-red-400" : "text-gray-500 hover:text-blue-600"}`}
            >
              #{next.number} {next.title}
              <ArrowRight size={16} />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}
