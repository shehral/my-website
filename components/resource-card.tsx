"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"

interface ResourceCardProps {
  title: string
  href: string
  description?: string
  tag?: string
}

export function ResourceCard({ title, href, description, tag }: ResourceCardProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card
      className={`overflow-hidden transition-all ${isDark ? "hover-glow bg-gradient-card" : "hover-glow-light bg-gradient-card-light"} border-${isDark ? "gray-800" : "blue-200"} group`}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardHeader className={`pb-2 border-b border-${isDark ? "gray-800/50" : "blue-200/50"}`}>
          {tag && (
            <div
              className={`inline-block px-3 py-1 text-xs font-medium ${isDark ? "bg-[#3a0000]" : "bg-blue-100"} text-${isDark ? "white" : "blue-700"} rounded-full mb-2`}
            >
              {tag}
            </div>
          )}
          <CardTitle
            className={`flex items-center gap-2 group-hover:text-${isDark ? "red-500" : "blue-600"} transition-colors`}
          >
            {title}
            <ExternalLink
              size={16}
              className={`text-gray-400 group-hover:text-${isDark ? "red-500" : "blue-600"} transition-colors`}
            />
          </CardTitle>
          {description && <CardDescription className="text-gray-400">{description}</CardDescription>}
        </CardHeader>
        <CardContent className="text-sm text-gray-400 p-4">
          {!description && <p>Click to explore this resource</p>}
        </CardContent>
      </Link>
    </Card>
  )
}
