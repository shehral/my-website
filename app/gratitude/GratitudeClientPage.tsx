"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"

interface ThankYouCardProps {
  title: string
  description: string
}

function ThankYouCard({ title, description }: ThankYouCardProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card
      className={`${isDark ? "bg-gradient-card border-gray-800" : "bg-gradient-card-light border-blue-200"} ${isDark ? "hover-glow" : "hover-glow-light"} overflow-hidden group`}
    >
      <CardHeader className={`pb-2 border-b ${isDark ? "border-gray-800/50" : "border-blue-200/50"}`}>
        <CardTitle className={`text-xl group-hover:text-${isDark ? "red-500" : "blue-600"} transition-colors`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className={`${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>{description}</p>
      </CardContent>
    </Card>
  )
}

export default function GratitudePage() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1
          className={`text-5xl md:text-6xl font-sora font-extrabold mb-4 ${isDark ? "text-gradient" : "text-gradient-light"} animate-gradient`}
        >
          With Love & Gratitude
        </h1>
        <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-700"} mb-12 font-space`}>
          Started on Mother's Day — 11 May 2025.
          <br />
          <br />
          <span className={`${isDark ? "text-red-500" : "text-blue-600"} italic`}>
            To Salma, my aunt and de facto mother: thanks for being my unpaid life coach, IT support, and late-night
            snack supplier—you made this site and all my academic adventures possible. Consider this digital bouquet
            your official Mother's Day gift!
          </span>
        </p>

        <div className="mb-12">
          <p className={`${isDark ? "text-gray-400" : "text-gray-500"} italic`}>
            This wall of gratitude celebrates the people who have made a difference in my journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          <ThankYouCard
            title="My Mentors"
            description="For guiding me through the complex landscape of AI research and academia. Your wisdom continues to light my path."
          />

          <ThankYouCard
            title="Open-Source Community"
            description="For creating and sharing knowledge freely. Standing on the shoulders of giants."
          />

          <ThankYouCard
            title="NEURAI Lab Team"
            description="For the collaborative spirit and shared passion for advancing AI research."
          />

          <ThankYouCard
            title="My Friends"
            description="For the late-night debugging sessions, the encouragement, and the much-needed breaks."
          />
        </div>

        <div className={`mt-16 pt-8 border-t ${isDark ? "border-gray-800" : "border-blue-100"} text-center`}>
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>Last Updated: 7th June 2025</p>
        </div>
      </div>
    </div>
  )
}
