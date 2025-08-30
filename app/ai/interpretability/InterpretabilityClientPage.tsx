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
      title: "The Mythos of Model Interpretability",
      href: "https://arxiv.org/pdf/1606.03490",
      description:
        "Zachary Lipton's seminal paper examining what interpretability means and challenging common assumptions.",
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
      title: "Sparse Autoencoders",
      href: "https://arxiv.org/pdf/2309.08600",
      description: "Research on using sparse autoencoders for mechanistic interpretability and feature extraction.",
      tag: "method",
    },
    {
      id: "10",
      title: "Understanding SAE Features with the Logit Lens",
      href: "https://www.lesswrong.com/posts/qykrYY6rXXM7EEs8Q/understanding-sae-features-with-the-logit-lens",
      description: "Practical approach to interpreting sparse autoencoder features using the logit lens technique.",
      tag: "method",
    },
    {
      id: "11",
      title: "Open Problems in Mechanistic Interpretability",
      href: "https://arxiv.org/abs/2501.16496",
      description: "Comprehensive survey of key open problems and research directions in the field.",
      tag: "research-agenda",
    },
    {
      id: "12",
      title: "The Urgency of Interpretability",
      href: "https://www.darioamodei.com/post/the-urgency-of-interpretability",
      description: "Dario Amodei, CEO of Anthropic, on why interpretability research is crucial for AI safety.",
      tag: "perspective",
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
        <p className="text-xl mb-4">
          Below are some of the resources recommended for someone looking to learn more about the space:
        </p>
      </FilterableResourceGrid>

      <section className="mt-12 space-y-8">
        <h2 className={`text-3xl font-sora font-bold ${isDark ? "text-white" : "text-gray-800"}`}>
          Featured Research & Perspectives
        </h2>

        {/* Dario Amodei's Essay */}
        <div
          className={`p-6 rounded-lg ${
            isDark
              ? "bg-gradient-to-br from-red-900 to-black border border-[#d30000] shadow-[0_0_15px_rgba(211,0,0,0.5)]"
              : "bg-gradient-to-br from-blue-100 to-white border border-[#2563eb] shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-3/4">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${isDark ? "bg-red-950 text-white" : "bg-blue-100 text-blue-700"}`}
                >
                  Industry Perspective
                </span>
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${isDark ? "bg-red-950 text-white" : "bg-blue-100 text-blue-700"}`}
                >
                  2025
                </span>
              </div>
              <h3 className={`text-2xl font-sora font-bold ${isDark ? "text-red-500" : "text-blue-600"}`}>
                The Urgency of Interpretability
              </h3>
              <p className={`mt-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                In this compelling essay, Dario Amodei, CEO of Anthropic, makes a powerful case for why interpretability
                research is not just academically interesting but urgently necessary for AI safety. He argues that as AI
                systems become more powerful, our ability to understand their internal mechanisms becomes critical for
                ensuring alignment with human values and preventing unintended consequences.
              </p>
              <div className="mt-4">
                <Link
                  href="https://www.darioamodei.com/post/the-urgency-of-interpretability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md ${isDark ? "bg-red-700 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-500"} text-white transition-colors`}
                >
                  Read the Essay
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
            <div className="md:w-1/4 flex items-center justify-center">
              <div
                className={`rounded-full overflow-hidden ${isDark ? "border-red-700" : "border-blue-500"} border-2 p-1`}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">Anthropic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Open Problems Paper */}
        <div
          className={`p-6 rounded-lg ${
            isDark
              ? "bg-gradient-card border border-[#d30000] shadow-[0_0_15px_rgba(211,0,0,0.5)]"
              : "bg-gradient-card-light border border-[#2563eb] shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          }`}
        >
          <h3 className={`text-2xl font-sora font-bold ${isDark ? "text-red-500" : "text-blue-600"}`}>
            Open Problems in Mechanistic Interpretability
          </h3>
          <p className={`mt-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            This comprehensive survey by Nanda et al. (2025) outlines the key challenges and research directions in
            mechanistic interpretability. The paper categorizes open problems into theoretical foundations, empirical
            methods, and scaling challenges, providing a roadmap for future research.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span
              className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${isDark ? "bg-red-950 text-white" : "bg-blue-100 text-blue-700"}`}
            >
              Research Agenda
            </span>
            <span
              className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${isDark ? "bg-red-950 text-white" : "bg-blue-100 text-blue-700"}`}
            >
              2025
            </span>
            <span
              className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${isDark ? "bg-red-950 text-white" : "bg-blue-100 text-blue-700"}`}
            >
              Must Read
            </span>
          </div>
          <div className="mt-6">
            <Link
              href="https://arxiv.org/abs/2501.16496"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-md ${isDark ? "bg-red-700 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-500"} text-white transition-colors`}
            >
              Read the Paper
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      <blockquote className={`my-8 border-l-4 ${isDark ? "border-red-700" : "border-blue-500"} pl-4 italic`}>
        🛠️ <em>Coming soon</em>: my own neuron-lens experiments & code notebooks.
      </blockquote>

      <div className={`mt-16 pt-8 border-t ${isDark ? "border-gray-800" : "border-blue-100"} text-center`}>
        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>Last Updated: 7th June 2025</p>
      </div>
    </div>
  )
}
