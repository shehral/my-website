import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book } from "lucide-react"

export const metadata: Metadata = {
  title: "Ali Shehral | Currently Reading",
  description: "Books and papers I'm currently reading",
}

interface ReadingItem {
  title: string
  author: string
  progress: string
  percentage: number
}

function ReadingCard({ item }: { item: ReadingItem }) {
  return (
    <Card className="border-gray-800 hover-glow bg-gradient-card overflow-hidden">
      <CardHeader className="pb-2 border-b border-gray-800/50 flex flex-row items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-red-950 flex items-center justify-center">
          <Book className="h-6 w-6 text-red-500" />
        </div>
        <div>
          <CardTitle className="text-xl">{item.title}</CardTitle>
          <p className="text-gray-400 text-sm">{item.author}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-700 to-red-500" style={{ width: `${item.percentage}%` }} />
          </div>
          <div className="px-3 py-1 bg-red-950 rounded-full text-sm font-medium text-white">{item.progress}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ReadingPage() {
  const readingItems: ReadingItem[] = [
    { title: "Toward Monosemanticity", author: "Elhage et al.", progress: "💬 40%", percentage: 40 },
    { title: "Hands-On RL with FinRL", author: "Liu et al.", progress: "📖 10%", percentage: 10 },
    { title: "Deep Learning", author: "Goodfellow, Bengio, Courville", progress: "🔖 90%", percentage: 90 },
  ]

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl md:text-6xl font-sora font-extrabold mb-8 text-gradient">Currently Reading</h1>
      <div className="space-y-4 not-prose">
        {readingItems.map((item, index) => (
          <ReadingCard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}
