import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book } from "lucide-react"

interface ReadingItem {
  title: string
  author: string
  progress: string
}

interface ReadingListProps {
  items: ReadingItem[]
}

export function ReadingList({ items }: ReadingListProps) {
  return (
    <div className="space-y-4 not-prose">
      {items.map((item, index) => (
        <Card key={index} className="border-gray-800 hover-glow bg-gradient-card overflow-hidden">
          <CardHeader className="pb-2 border-b border-gray-800/50 flex flex-row items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#3a0000] flex items-center justify-center">
              <Book className="h-6 w-6 text-[#ff3333]" />
            </div>
            <div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <p className="text-gray-400 text-sm">{item.author}</p>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#d30000] to-[#ff3333]"
                  style={{
                    width: item.progress.includes("10%")
                      ? "10%"
                      : item.progress.includes("40%")
                        ? "40%"
                        : item.progress.includes("90%")
                          ? "90%"
                          : "50%",
                  }}
                />
              </div>
              <div className="px-3 py-1 bg-[#1a0000] rounded-full text-sm font-medium text-white">{item.progress}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
