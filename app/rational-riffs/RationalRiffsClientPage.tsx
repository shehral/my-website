"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

interface RationalRiffCardProps {
  title: string
  href: string
  takeaway: string
  whyPicked: string
}

function RationalRiffCard({ title, href, takeaway, whyPicked }: RationalRiffCardProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card
      className={`overflow-hidden transition-all ${isDark ? "hover-glow bg-gradient-card border-gray-800" : "hover-glow-light bg-gradient-card-light border-blue-200"} group`}
    >
      <CardHeader className={`pb-2 border-b ${isDark ? "border-gray-800/50" : "border-blue-200/50"}`}>
        <CardTitle
          className={`flex items-center gap-2 group-hover:text-${isDark ? "red-500" : "blue-600"} transition-colors`}
        >
          <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            {title}
            <ExternalLink
              size={16}
              className={`text-gray-400 group-hover:text-${isDark ? "red-500" : "blue-600"} transition-colors`}
            />
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className={`p-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        <div className="space-y-3">
          <div>
            <span className={`font-medium ${isDark ? "text-red-500" : "text-blue-600"}`}>Takeaway:</span>{" "}
            <span>{takeaway}</span>
          </div>
          <div>
            <span className={`font-medium ${isDark ? "text-red-500" : "text-blue-600"}`}>Why I picked it:</span>{" "}
            <span>{whyPicked}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function RationalRiffsClientPage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const riffs = [
    {
      title: "New User's Guide to LessWrong",
      href: "https://www.lesswrong.com/posts/LbbrnRvc9QwjJeics/new-user-s-guide-to-lesswrong",
      takeaway: "Orientation to LW culture and norms.",
      whyPicked: "Perfect primer for readers new to rationalist discourse.",
    },
    {
      title: "Rationality: Start Here",
      href: "https://www.lesswrong.com/rationality",
      takeaway: "Gateway collection of the best essays on forming good beliefs.",
      whyPicked: "Foundational syllabus that shaped my AI-safety worldview.",
    },
    {
      title: "The Best Tacit Knowledge Videos on Every Subject",
      href: "https://www.lesswrong.com/posts/SXJGSPeQWbACveJhs/the-best-tacit-knowledge-videos-on-every-subject",
      takeaway: "Crowdsourced playlist for learning hard-to-explain skills.",
      whyPicked: 'Mirrors my "seeing the gears" approach to learning.',
    },
  ]

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1
          className={`text-5xl md:text-6xl font-sora font-extrabold mb-8 ${isDark ? "text-gradient" : "text-gradient-light"}`}
        >
          Rational Riffs
        </h1>

        <div className={`prose ${isDark ? "prose-invert" : ""} max-w-none mb-12`}>
          <p className="text-xl">
            I'm curating a few favourite reads from the LessWrong community here until I find the bandwidth to blend
            borrowed wisdom with my own thoughts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          {riffs.map((riff, index) => (
            <RationalRiffCard
              key={index}
              title={riff.title}
              href={riff.href}
              takeaway={riff.takeaway}
              whyPicked={riff.whyPicked}
            />
          ))}
        </div>

        <div
          className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"} italic text-center border-t ${isDark ? "border-gray-800" : "border-blue-100"} pt-6`}
        >
          Original riffs coming soon · External posts shared under CC-BY-SA 4.0.
        </div>
      </div>
    </div>
  )
}
