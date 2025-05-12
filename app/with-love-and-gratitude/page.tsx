import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ali Shehral | With Love & Gratitude",
  description: "Expressing gratitude to those who have supported my journey",
}

export default function WithLoveAndGratitude() {
  return (
    <main className="container mx-auto py-24 px-4">
      <h1 className="text-5xl md:text-6xl font-sora font-extrabold mb-8">With Love & Gratitude</h1>
      <div className="prose prose-invert max-w-3xl">
        <p className="text-xl text-gray-300">
          This page is dedicated to expressing my gratitude to the people, communities, and resources that have
          supported my journey.
        </p>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-3xl font-sora font-bold text-white">Mentors & Advisors</h2>
            <p className="text-gray-300 mt-4">
              I'm deeply grateful to the mentors and advisors who have guided me through my academic and professional
              journey. Their wisdom, patience, and support have been invaluable.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-sora font-bold text-white">Communities</h2>
            <p className="text-gray-300 mt-4">
              The AI research community, open-source contributors, and fellow students have created an environment of
              collaboration and growth that has significantly accelerated my learning.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-sora font-bold text-white">Family & Friends</h2>
            <p className="text-gray-300 mt-4">
              None of this would be possible without the unwavering support of my family and friends, who have believed
              in me even when I doubted myself.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
