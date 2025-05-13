"use client"

import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"

interface ThankYouCardProps {
  title: string
  description: string
  children?: ReactNode
}

export function ThankYouCard({ title, description, children }: ThankYouCardProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card
      className={`${isDark ? "bg-gradient-card border-gray-800" : "bg-gradient-card-light border-blue-200"} ${isDark ? "hover-glow" : "hover-glow-light"} overflow-hidden group`}
    >
      <CardHeader className={`pb-2 border-b ${isDark ? "border-gray-800/50" : "border-blue-200/50"}`}>
        <CardTitle className={`text-xl group-hover:text-${isDark ? "red-500" : "blue-600"} transition-colors`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className={`${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>{description}</p>
        {children}
      </CardContent>
    </Card>
  )
}
