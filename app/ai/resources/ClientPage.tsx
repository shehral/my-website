"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { FilterableResourceGrid } from "@/components/filterable-resource-grid"

interface ResourceCardProps {
  title: string
  href: string
  description?: string
  tag?: string
}

function ResourceCard({ title, href, description, tag }: ResourceCardProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card
      className={`overflow-hidden transition-all ${isDark ? "hover-glow bg-gradient-card border-gray-800" : "hover-glow-light bg-gradient-card-light border-blue-200"} group`}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardHeader className={`pb-2 border-b ${isDark ? "border-gray-800/50" : "border-blue-200/50"}`}>
          {tag && (
            <div
              className={`inline-block px-3 py-1 text-xs font-medium ${isDark ? "bg-red-950" : "bg-blue-100"} ${isDark ? "text-white" : "text-blue-700"} rounded-full mb-2`}
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

export default function ResourcesPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Resource data with tags
  const resources = [
    {
      id: "1",
      title: "Full-stack Deep Learning (FS-DL)",
      href: "https://fullstackdeeplearning.com/",
      tag: "course",
      description: "A comprehensive course on deep learning engineering",
    },
    {
      id: "2",
      title: "OpenAI Neuron Viewer",
      href: "https://platform.openai.com/docs/guides/vision",
      tag: "tool",
      description: "Interactive tool for visualizing neural network activations",
    },
    {
      id: "3",
      title: "Attention Is All You Need",
      href: "https://arxiv.org/abs/1706.03762",
      tag: "paper",
      description: "The original transformer architecture paper",
    },
    {
      id: "4",
      title: "Grokking Deep Learning",
      href: "https://www.manning.com/books/grokking-deep-learning",
      tag: "book",
      description: "A beginner-friendly introduction to deep learning concepts",
    },
    {
      id: "5",
      title: "Neural Networks and Deep Learning",
      href: "http://neuralnetworksanddeeplearning.com/",
      tag: "book",
      description: "Free online book explaining neural networks fundamentals",
    },
    {
      id: "6",
      title: "Distill.pub",
      href: "https://distill.pub/",
      tag: "tool",
      description: "Interactive visualizations and explanations of ML concepts",
    },
  ]

  return (
    <div className="prose prose-invert max-w-none">
      <h1
        className={`text-5xl md:text-6xl font-sora font-extrabold mb-8 ${isDark ? "text-gradient" : "text-gradient-light"}`}
      >
        Resource Library
      </h1>

      <FilterableResourceGrid
        resources={resources}
        renderResource={(resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            href={resource.href}
            description={resource.description}
            tag={resource.tag}
          />
        )}
      >
        <p className={`${isDark ? "text-gray-300" : "text-gray-700"} mt-2`}>
          Filter resources by category or search by keyword to find exactly what you need.
        </p>
      </FilterableResourceGrid>
    </div>
  )
}
