"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, ExternalLink } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

interface ReadingItem {
  title: string
  author: string
  progress: string
  url?: string
}

interface ReadingListProps {
  items: ReadingItem[]
}

export function ReadingList({ items }: ReadingListProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="space-y-6 not-prose mt-8">
      {items.map((item, index) => (
        <Card
          key={index}
          className={`${isDark ? "border-gray-800 hover-glow bg-gradient-card" : "border-blue-200 hover-glow-light bg-gradient-card-light"} overflow-hidden`}
        >
          <Link href={item.url || "#"} target="_blank" rel="noopener noreferrer" className="block">
            <CardHeader
              className={`pb-2 border-b ${isDark ? "border-gray-800/50" : "border-blue-200/50"} flex flex-row items-center gap-4`}
            >
              <div
                className={`h-12 w-12 rounded-full ${isDark ? "bg-red-950" : "bg-blue-100"} flex items-center justify-center`}
              >
                <Book className={`h-6 w-6 ${isDark ? "text-red-500" : "text-blue-600"}`} />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl flex items-center gap-2">
                  {item.title}
                  {item.url && (
                    <ExternalLink
                      size={16}
                      className={`text-gray-400 group-hover:text-${isDark ? "red-500" : "blue-600"} transition-colors`}
                    />
                  )}
                </CardTitle>
                <p className="text-gray-400 text-sm">{item.author}</p>
              </div>
              <div
                className={`px-3 py-1 ${isDark ? "bg-red-950" : "bg-blue-100"} rounded-full text-sm font-medium ${isDark ? "text-white" : "text-blue-700"}`}
              >
                {item.progress}
              </div>
            </CardHeader>
          </Link>
        </Card>
      ))}
    </div>
  )
}
