"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Search } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import {
  allResources,
  getAllCategories,
  getAllTypes,
  getCategoryLabel,
  getTypeLabel,
  type ResourceCategory,
  type ResourceType,
  type LibraryResource,
} from "./data/resources"

function ImportanceStars({ level }: { level: number }) {
  return (
    <span className="text-amber-500 text-xs" title={`Importance: ${level}/3`}>
      {"★".repeat(level)}{"☆".repeat(3 - level)}
    </span>
  )
}

function ResourceCard({ resource, isDark }: { resource: LibraryResource; isDark: boolean }) {
  return (
    <Card
      className={`overflow-hidden transition-all h-full ${isDark ? "hover-glow bg-gradient-card border-gray-800" : "hover-glow-light bg-gradient-card-light border-blue-200"} group`}
    >
      <Link href={resource.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardHeader className={`pb-2 border-b ${isDark ? "border-gray-800/50" : "border-blue-200/50"}`}>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${isDark ? "bg-red-950 text-white" : "bg-blue-100 text-blue-700"}`}
            >
              {getTypeLabel(resource.type)}
            </span>
            <ImportanceStars level={resource.importance} />
          </div>
          <CardTitle
            className={`text-base flex items-center gap-2 transition-colors ${isDark ? "group-hover:text-red-400" : "group-hover:text-blue-600"}`}
          >
            {resource.title}
            <ExternalLink
              size={14}
              className={`flex-shrink-0 text-gray-400 transition-colors ${isDark ? "group-hover:text-red-400" : "group-hover:text-blue-600"}`}
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-3">
          <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {resource.annotation}
          </p>
          {resource.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {resource.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-0.5 rounded-full ${isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Link>
    </Card>
  )
}

export default function LibraryClientPage() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const [activeCategory, setActiveCategory] = useState<ResourceCategory | "all">("all")
  const [activeType, setActiveType] = useState<ResourceType | "all">("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = useMemo(() => {
    let results = allResources

    if (activeCategory !== "all") {
      results = results.filter((r) => r.category === activeCategory)
    }

    if (activeType !== "all") {
      results = results.filter((r) => r.type === activeType)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      results = results.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.annotation.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    // Sort by importance (highest first), then alphabetically
    return results.sort((a, b) => b.importance - a.importance || a.title.localeCompare(b.title))
  }, [activeCategory, activeType, searchQuery])

  const categories = getAllCategories()
  const types = getAllTypes()

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1
          className={`text-5xl md:text-6xl font-sora font-extrabold mb-4 ${isDark ? "text-gradient" : "text-gradient-light"}`}
        >
          Library
        </h1>

        <p className={`text-xl mb-8 ${isDark ? "text-gray-300" : "text-gray-700"} max-w-3xl`}>
          A personal knowledge index — papers, posts, videos, and tools I&apos;ve found
          valuable across interpretability, agents, safety, and AI foundations.
        </p>

        {/* Filter Bar */}
        <div className={`mb-8 p-4 rounded-xl border ${isDark ? "bg-black/50 border-gray-800" : "bg-white/50 border-blue-200"}`}>
          {/* Search */}
          <div className="relative mb-4">
            <Search
              size={16}
              className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? "text-gray-500" : "text-gray-400"}`}
            />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm ${
                isDark
                  ? "bg-black/50 border-gray-700 text-white placeholder-gray-500 focus:border-red-500"
                  : "bg-white border-blue-200 text-gray-900 placeholder-gray-400 focus:border-blue-500"
              } outline-none transition-colors`}
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-3">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                activeCategory === "all"
                  ? isDark
                    ? "bg-red-900 text-white"
                    : "bg-blue-600 text-white"
                  : isDark
                    ? "bg-gray-800 text-gray-400 hover:text-white"
                    : "bg-gray-100 text-gray-600 hover:text-blue-700"
              }`}
            >
              All ({allResources.length})
            </button>
            {categories.map((cat) => {
              const count = allResources.filter((r) => r.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    activeCategory === cat
                      ? isDark
                        ? "bg-red-900 text-white"
                        : "bg-blue-600 text-white"
                      : isDark
                        ? "bg-gray-800 text-gray-400 hover:text-white"
                        : "bg-gray-100 text-gray-600 hover:text-blue-700"
                  }`}
                >
                  {getCategoryLabel(cat)} ({count})
                </button>
              )
            })}
          </div>

          {/* Type filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveType("all")}
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                activeType === "all"
                  ? isDark
                    ? "border-red-700 text-red-400"
                    : "border-blue-500 text-blue-600"
                  : isDark
                    ? "border-gray-700 text-gray-500 hover:text-gray-300"
                    : "border-gray-200 text-gray-400 hover:text-gray-600"
              }`}
            >
              All types
            </button>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                  activeType === type
                    ? isDark
                      ? "border-red-700 text-red-400"
                      : "border-blue-500 text-blue-600"
                    : isDark
                      ? "border-gray-700 text-gray-500 hover:text-gray-300"
                      : "border-gray-200 text-gray-400 hover:text-gray-600"
                }`}
              >
                {getTypeLabel(type)}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className={`text-sm mb-6 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          Showing {filtered.length} of {allResources.length} resources
        </p>

        {/* Resource Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((resource, index) => (
              <ResourceCard key={`${resource.title}-${index}`} resource={resource} isDark={isDark} />
            ))}
          </div>
        ) : (
          <div className={`text-center py-16 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            <p className="text-lg">No resources match your filters.</p>
            <button
              onClick={() => {
                setActiveCategory("all")
                setActiveType("all")
                setSearchQuery("")
              }}
              className={`mt-4 text-sm underline ${isDark ? "text-red-400 hover:text-red-300" : "text-blue-600 hover:text-blue-500"}`}
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t ${isDark ? "border-gray-800" : "border-blue-100"} text-center`}>
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Last updated: February 2026
          </p>
        </div>
      </div>
    </div>
  )
}
