import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Ali Shehral | With Love & Gratitude",
  description: "Expressing gratitude to those who have supported my journey",
}

interface ThankYouCardProps {
  title: string
  description: string
}

function ThankYouCard({ title, description }: ThankYouCardProps) {
  return (
    <Card className="bg-gradient-card border-gray-800 hover-glow overflow-hidden group">
      <CardHeader className="pb-2 border-b border-gray-800/50">
        <CardTitle className="text-xl group-hover:text-red-500 transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function GratitudePage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-sora font-extrabold mb-4 text-gradient animate-gradient">
          With Love & Gratitude
        </h1>
        <p className="text-xl text-gray-300 mb-12 font-space">
          Started on Mother's Day — 11 May 2025.
          <br />
          <br />
          <span className="text-red-500 italic">
            To Salma, my aunt and de facto mother: thanks for being my unpaid life coach, IT support, and late-night
            snack supplier—you made this site and all my academic adventures possible. Consider this digital bouquet
            your official Mother's Day gift!
          </span>
        </p>

        <div className="mb-12">
          <p className="text-gray-400 italic">
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
      </div>
    </div>
  )
}
