"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Filter, Search } from 'lucide-react'
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface Resource {
  id: string
  title: string
  href: string
  description?: string
  tag?: string
}

interface FilterableResourceGridProps {
  resources: Resource[]
  children: React.ReactNode
  renderResource: (resource: Resource) => React.ReactNode
}

export function FilterableResourceGrid({ resources, children, renderResource }: FilterableResourceGridProps) {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredResources, setFilteredResources] = useState(resources)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Get unique tags from resources
  const tags = [
    "all",
    ...Array.from(new Set(resources.map((resource) => resource.tag?.toLowerCase() || "other"))),
  ].filter(Boolean)

  // Filter resources when filter or search changes
  useEffect(() => {
    let result = [...resources]

    // Apply tag filter
    if (activeFilter !== "all") {
      result = result.filter(
        (resource) => resource.tag?.toLowerCase() === activeFilter || (!resource.tag && activeFilter === "other"),
      )
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (resource) =>
          resource.title.toLowerCase().includes(query) || resource.description?.toLowerCase().includes(query),
      )
    }

    setFilteredResources(result)
  }, [activeFilter, searchQuery, resources])

  return (
    <div className="space-y-6 not-prose">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search resources..."
            className={`pl-10 ${isDark ? "bg-black border-gray-800 focus:border-red-700" : "bg-white border-blue-200 focus:border-blue-600"} rounded-lg h-11`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button
          className={`${isDark ? "bg-red-700 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-500"} text-white h-11`}
        >
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all" value={activeFilter} onValueChange={setActiveFilter} className="w-full">
        <TabsList
          className={cn(
            "w-full flex flex-row",
            isDark ? "bg-black border border-gray-800" : "bg-white border border-blue-200",
            "p-1 rounded-lg"
          )}
        >
          {tags.map((tag) => (
            <TabsTrigger
              key={tag}
              value={tag}
              className={cn(
                "flex-1 capitalize",
                isDark
                  ? "data-[state=active]:bg-red-950 data-[state=active]:text-white"
                  : "data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
              )}
            >
              {tag}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {children}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => renderResource(resource))
        ) : (
          <div className={`col-span-2 text-center py-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            No resources found matching your criteria.
          </div>
        )}
      </div>
    </div>
  )
}
