import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllRoundups, getRoundupBySlug } from "../data/roundups"
import RoundupClientPage from "./RoundupClientPage"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllRoundups().map((roundup) => ({
    slug: roundup.slug,
  }))
}

export function generateMetadata({ params }: Props): Metadata {
  const roundup = getRoundupBySlug(params.slug)
  if (!roundup) return { title: "Not Found" }

  return {
    title: `Ali & ARIA #${roundup.number} — ${roundup.title}`,
    description: roundup.intro,
  }
}

export default function RoundupPage({ params }: Props) {
  const roundup = getRoundupBySlug(params.slug)
  if (!roundup) notFound()

  return <RoundupClientPage slug={params.slug} />
}
