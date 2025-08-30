"use client"
import { useTheme } from "next-themes"
import { ReadingList } from "@/components/reading-list"

export default function ReadingClientPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const readingItems = [
    {
      title: "Dive into Deep Learning",
      author: "Zhang et al.",
      progress: "40%",
      url: "https://d2l.ai",
    },
    {
      title: "The GenAI Handbook",
      author: "Generative AI Community",
      progress: "25%",
      url: "https://genai-handbook.github.io/",
    },
    {
      title: "Advances and Challenges in Foundation Agents",
      author: "Hugging Face",
      progress: "75%",
      url: "https://huggingface.co/papers/2504.01990",
    },
  ]

  return (
    <div className="prose prose-invert max-w-none">
      <h1
        className={`text-5xl md:text-6xl font-sora font-extrabold mb-8 ${isDark ? "text-gradient" : "text-gradient-light"}`}
      >
        Currently Reading
      </h1>
      <p className={`${isDark ? "text-gray-300" : "text-gray-700"} text-xl`}>
        Here's what I'm currently reading to stay on top of the latest in AI.
      </p>

      <ReadingList items={readingItems} />

      <div className={`mt-16 pt-8 border-t ${isDark ? "border-gray-800" : "border-blue-100"} text-center`}>
        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>Last Updated: 7th June 2025</p>
      </div>
    </div>
  )
}
