import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ali Shehral | Artificial Intelligence",
  description: "My work and research in AI and machine learning",
}

export default function ArtificialIntelligence() {
  return (
    <main className="container mx-auto py-24 px-4">
      <h1 className="text-5xl md:text-6xl font-sora font-extrabold mb-8">Artificial Intelligence</h1>
      <div className="prose prose-invert max-w-3xl">
        <p className="text-xl text-gray-300">
          This page will showcase my AI research, projects, and contributions to the field.
        </p>
        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-3xl font-sora font-bold text-white">Research Focus</h2>
            <p className="text-gray-300 mt-4">
              My research primarily focuses on mechanistic interpretability and explainable AI safety. I'm particularly
              interested in understanding the internal mechanisms of neural networks and developing methods to make AI
              systems more transparent and aligned with human values.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-sora font-bold text-white">NEURAI Lab</h2>
            <p className="text-gray-300 mt-4">
              As the President of NEURAI Lab, I lead a team of researchers and engineers working on cutting-edge AI
              projects. We regularly host workshops and seminars in the Bay Area focused on interpretability and AI
              safety.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-sora font-bold text-white">Quant Finance & AI</h2>
            <p className="text-gray-300 mt-4">
              I'm building retail quantitative trading strategies using reinforcement learning and quantum machine
              learning approaches. These projects aim to democratize access to sophisticated trading algorithms
              previously only available to institutional investors.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
