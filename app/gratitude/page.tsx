import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

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
          Started on Mother's Day — 11 May 2025.{" "}
          <span className="text-red-500">
            To my aunt — for the unwavering support that's let me chase GPUs, guitars, and grand ideas. This site is my
            tiny Mother's Day gift to you.
          </span>
        </p>

        <div className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 italic">
            This wall of gratitude will continue to grow as I add more names of people who have made a difference in my
            journey.
          </p>
          <Button className="bg-red-700 hover:bg-red-600 text-white">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Your Name
          </Button>
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
