import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ali Shehral | Mechanistic Interpretability",
  description: "My research and resources on mechanistic interpretability",
}

function ResourceCard({
  title,
  href,
  description,
  tag,
}: { title: string; href: string; description: string; tag?: string }) {
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
          <CardDescription className="text-gray-400">{description}</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-400 p-4">Click to explore this resource</CardContent>
      </Link>
    </Card>
  )
}

export default function InterpretabilityPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-5xl md:text-6xl font-sora font-extrabold mb-8 text-gradient">Mechanistic Interpretability</h1>

      <p className="text-xl mb-8">Below are the most influential primers I recommend:</p>

      <div className="grid gap-6 not-prose">
        <ResourceCard
          title="Distill — Circuits"
          href="https://distill.pub/2020/circuits/"
          description="Chris Olah's deep-dive into neuron circuits and feature visualization."
        />

        <ResourceCard
          title="Neel Nanda — Quickstart Guide"
          href="https://www.neelnanda.io/mechanistic-interpretability/quickstart"
          description="A 2022 guide (continuously updated) to get hands-on fast."
        />

        <ResourceCard
          title="Chris Olah & Anthropic Research"
          href="https://www.anthropic.com/index/interpretability"
          description="Anthropic's latest work on transformer interpretability."
        />

        <h2 className="text-3xl font-sora font-bold text-white mt-12 mb-6">Key Research Papers</h2>

        <ResourceCard
          tag="Paper"
          title="Attribution Graphs for Biological Circuits"
          href="https://transformer-circuits.pub/2025/attribution-graphs/biology.html"
          description="Exploring attribution graphs in biological neural circuits and their implications for mechanistic interpretability."
        />

        <ResourceCard
          tag="Paper"
          title="A Mathematical Framework for Transformer Circuits"
          href="https://transformer-circuits.pub/2021/framework/index.html"
          description="Foundational mathematical framework for understanding transformer neural networks as circuits."
        />

        <ResourceCard
          tag="Paper"
          title="Scaling Monosemanticity"
          href="https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html"
          description="Research on how monosemantic features scale in large language models."
        />

        <ResourceCard
          tag="Paper"
          title="Mechanistic Interpretability for Large Language Models"
          href="https://arxiv.org/pdf/2503.11926"
          description="Comprehensive overview of mechanistic interpretability techniques for LLMs."
        />

        <ResourceCard
          tag="Method"
          title="Attribution Patching"
          href="https://www.neelnanda.io/mechanistic-interpretability/attribution-patching"
          description="Neel Nanda's technique for understanding causal relationships in neural networks."
        />

        <ResourceCard
          tag="Paper"
          title="Layer-wise Relevance Propagation"
          href="https://arxiv.org/pdf/1606.03490"
          description="Technique for visualizing the contributions of individual neurons to predictions."
        />

        <ResourceCard
          tag="Paper"
          title="A Unified Approach to Interpreting Model Predictions"
          href="https://arxiv.org/pdf/1703.03717"
          description="SHAP (SHapley Additive exPlanations) framework for model interpretability."
        />
      </div>

      <blockquote className="my-8 border-l-4 border-red-700 pl-4 italic">
        🛠️ <em>Coming soon</em>: my own neuron-lens experiments & code notebooks.
      </blockquote>
    </div>
  )
}
