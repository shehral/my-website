import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface ResourceCardProps {
  title: string
  href: string
  description?: string
  tag?: string
}

export function ResourceCard({ title, href, description, tag }: ResourceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover-glow bg-gradient-card group">
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardHeader className="pb-2 border-b border-gray-800/50">
          {tag && (
            <div className="inline-block px-3 py-1 text-xs font-medium bg-[#3a0000] text-white rounded-full mb-2">
              {tag}
            </div>
          )}
          <CardTitle className="flex items-center gap-2 group-hover:text-[#ff3333] transition-colors">
            {title}
            <ExternalLink size={16} className="text-gray-400 group-hover:text-[#ff3333] transition-colors" />
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
