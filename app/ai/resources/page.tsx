import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ExternalLink, Filter, Search } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ali Shehral | AI Resources",
  description: "Curated resources for AI research and learning",
}

interface ResourceCardProps {
  title: string
  href: string
  description?: string
  tag?: string
}

function ResourceCard({ title, href, description, tag }: ResourceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover-glow bg-gradient-card border-gray-800 group">
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardHeader className="pb-2 border-b border-gray-800/50">
          {tag && (
            <div className="inline-block px-3 py-1 text-xs font-medium bg-red-950 text-white rounded-full mb-2">
              {tag}
            </div>
          )}
          <CardTitle className="flex items-center gap-2 group-hover:text-red-500 transition-colors">
            {title}
            <ExternalLink size={16} className="text-gray-400 group-hover:text-red-500 transition-colors" />
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

export default function ResourcesPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl md:text-6xl font-sora font-extrabold mb-8 text-gradient">Resource Library</h1>

      <div className="space-y-6 not-prose">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search resources..."
              className="pl-10 bg-black border-gray-800 focus:border-red-700 rounded-lg h-11"
            />
          </div>
          <Button className="bg-red-700 hover:bg-red-600 text-white h-11">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-5 bg-black border border-gray-800 p-1 rounded-lg">
            {["all", "papers", "courses", "tools", "books"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="capitalize data-[state=active]:bg-red-950 data-[state=active]:text-white"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 not-prose">
        <ResourceCard tag="Course" title="Full-stack Deep Learning (FS-DL)" href="https://fullstackdeeplearning.com/" />
        <ResourceCard tag="Tool" title="OpenAI Neuron Viewer" href="https://platform.openai.com/docs/guides/vision" />
        <ResourceCard tag="Paper" title="Attention Is All You Need" href="https://arxiv.org/abs/1706.03762" />
        <ResourceCard
          tag="Book"
          title="Grokking Deep Learning"
          href="https://www.manning.com/books/grokking-deep-learning"
        />
      </div>
    </div>
  )
}
