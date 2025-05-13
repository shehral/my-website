"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { FilterableResourceGrid } from "@/components/filterable-resource-grid"

function ResourceCard({
  title,
  href,
  description,
  tag,
}: { title: string; href: string; description: string; tag?: string }) {
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
          <CardDescription className="text-gray-400">{description}</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-400 p-4">Click to explore this resource</CardContent>
      </Link>
    </Card>
  )
}

export default function InterpretabilityClientPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Resource data with tags
  const resources = [
    {
      id: "1",
      title: "Distill — Circuits",
      href: "https://distill.pub/2020/circuits/",
      description: "Chris Olah's deep-dive into neuron circuits and feature visualization.",
      tag: "primer",
    },
    {
      id: "2",
      title: "Neel Nanda — Quickstart Guide",
      href: "https://www.neelnanda.io/mechanistic-interpretability/quickstart",
      description: "A 2022 guide to get hands-on fast.",
      tag: "primer",
    },
    {
      id: "3",
      title: "Chris Olah & Anthropic Research",
      href: "https://transformer-circuits.pub/",
      description: "Anthropic's latest work on transformer interpretability.",
      tag: "primer",
    },
    {
      id: "4",
      title: "Attribution Graphs for Biological Circuits",
      href: "https://transformer-circuits.pub/2025/attribution-graphs/biology.html",
      description:
        "Exploring attribution graphs in biological neural circuits and their implications for mechanistic interpretability.",
      tag: "paper",
    },
    {
      id: "5",
      title: "A Mathematical Framework for Transformer Circuits",
      href: "https://transformer-circuits.pub/2021/framework/index.html",
      description: "Foundational mathematical framework for understanding transformer neural networks as circuits.",
      tag: "paper",
    },
    {
      id: "6",
      title: "Scaling Monosemanticity",
      href: "https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html",
      description: "Research on how monosemantic features scale in large language models.",
      tag: "paper",
    },
    {
      id: "7",
      title: "Mechanistic Interpretability for Large Language Models",
      href: "https://arxiv.org/pdf/2503.11926",
      description: "Comprehensive overview of mechanistic interpretability techniques for LLMs.",
      tag: "paper",
    },
    {
      id: "8",
      title: "Attribution Patching",
      href: "https://www.neelnanda.io/mechanistic-interpretability/attribution-patching",
      description: "Neel Nanda's technique for understanding causal relationships in neural networks.",
      tag: "method",
    },
    {
      id: "9",
      title: "Layer-wise Relevance Propagation",
      href: "https://arxiv.org/pdf/1606.03490",
      description: "Technique for visualizing the contributions of individual neurons to predictions.",
      tag: "paper",
    },
    {
      id: "10",
      title: "A Unified Approach to Interpreting Model Predictions",
      href: "https://arxiv.org/pdf/1703.03717",
      description: "SHAP (SHapley Additive exPlanations) framework for model interpretability.",
      tag: "paper",
    },
  ]

  return (
    <div className="prose prose-invert max-w-none">
      <h1
        className={`text-5xl md:text-6xl font-sora font-extrabold mb-8 ${isDark ? "text-gradient" : "text-gradient-light"}`}
      >
        Mechanistic Interpretability
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
        <p className="text-xl mb-4">Below are the most influential resources I recommend:</p>
      </FilterableResourceGrid>

      <blockquote className={`my-8 border-l-4 ${isDark ? "border-red-700" : "border-blue-500"} pl-4 italic`}>
        🛠️ <em>Coming soon</em>: my own neuron-lens experiments & code notebooks.
      </blockquote>
    </div>
  )
}
