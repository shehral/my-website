"use client"

import { useTheme } from "next-themes"

export default function AIClientPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="prose prose-invert max-w-none">
      <h1
        className={`text-5xl md:text-6xl font-sora font-extrabold mb-8 ${isDark ? "text-gradient" : "text-gradient-light"}`}
      >
        My AI Universe
      </h1>
      <p className="text-xl">
        I'm interested in{" "}
        <strong>AI interpretability, RL-based trading strategies, quantum computing, AI governance</strong> and
        everything in between.
      </p>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className={`text-3xl font-sora font-bold ${isDark ? "text-white" : "text-gray-800"}`}>Research Focus</h2>
          <p className={`${isDark ? "text-gray-300" : "text-gray-700"} mt-4`}>
            My research primarily focuses on mechanistic interpretability and explainable AI safety. I'm particularly
            interested in understanding the internal mechanisms of neural networks and developing methods to make AI
            systems more transparent and aligned with human values.
          </p>
        </section>

        <section>
          <h2 className={`text-3xl font-sora font-bold ${isDark ? "text-white" : "text-gray-800"}`}>NEURAI Lab</h2>
          <p className={`${isDark ? "text-gray-300" : "text-gray-700"} mt-4`}>
            As the President of NEURAI Lab, I lead a team of researchers and engineers working on cutting-edge AI
            projects. We regularly host workshops and seminars in the Bay Area focused on interpretability and AI
            safety.
          </p>
        </section>

        <section>
          <h2 className={`text-3xl font-sora font-bold ${isDark ? "text-white" : "text-gray-800"}`}>
            Quant Finance & AI
          </h2>
          <p className={`${isDark ? "text-gray-300" : "text-gray-700"} mt-4`}>
            I'm building retail quantitative trading strategies using reinforcement learning and quantum machine
            learning approaches. These projects aim to democratize access to sophisticated trading algorithms previously
            only available to institutional investors.
          </p>
        </section>
      </div>
    </div>
  )
}
