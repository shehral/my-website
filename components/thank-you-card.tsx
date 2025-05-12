import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ThankYouCardProps {
  title: string
  description: string
  children?: ReactNode
}

export function ThankYouCard({ title, description, children }: ThankYouCardProps) {
  return (
    <Card className="bg-gradient-card border-gray-800 hover-glow overflow-hidden group">
      <CardHeader className="pb-2 border-b border-gray-800/50">
        <CardTitle className="text-xl group-hover:text-[#ff3333] transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-300 leading-relaxed">{description}</p>
        {children}
      </CardContent>
    </Card>
  )
}
