import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllRoundups, getRoundupBySlug } from "../data/roundups"
import RoundupClientPage from "./RoundupClientPage"

interface Props {
  params: { slug: string }
}

const SITE_URL = "https://shehral.com"

/** Parse display date like "February 9, 2026" → "2026-02-09" */
function toISODate(displayDate: string): string {
  const parsed = new Date(displayDate)
  if (isNaN(parsed.getTime())) return new Date().toISOString().split("T")[0]
  return parsed.toISOString().split("T")[0]
}

export function generateStaticParams() {
  return getAllRoundups().map((roundup) => ({
    slug: roundup.slug,
  }))
}

export function generateMetadata({ params }: Props): Metadata {
  const roundup = getRoundupBySlug(params.slug)
  if (!roundup) return { title: "Not Found" }

  const title = `Ali & ARIA #${roundup.number} — ${roundup.title}`
  const description = roundup.intro
  const url = `${SITE_URL}/aria/${roundup.slug}`
  const isoDate = toISODate(roundup.date)
  const keywords = roundup.sections.map((s) => s.heading)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: "Ali Shehral",
      publishedTime: isoDate,
      authors: ["Ali Shehral", "ARIA"],
    },
    twitter: {
      card: "summary",
      title,
      description,
      creator: "@shehral_",
    },
    other: {
      "article:author": "Ali Shehral",
      "article:published_time": isoDate,
    },
  }
}

export default function RoundupPage({ params }: Props) {
  const roundup = getRoundupBySlug(params.slug)
  if (!roundup) notFound()

  const isoDate = toISODate(roundup.date)
  const url = `${SITE_URL}/aria/${roundup.slug}`
  const keywords = roundup.sections.map((s) => s.heading)

  // JSON-LD structured data for Google rich results.
  // All values come from our own roundup data (trusted, not user-generated).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Ali & ARIA #${roundup.number} — ${roundup.title}`,
    description: roundup.intro,
    datePublished: isoDate,
    author: [
      {
        "@type": "Person",
        name: "Ali Shehral",
        url: SITE_URL,
      },
      {
        "@type": "Person",
        name: "ARIA",
      },
    ],
    publisher: {
      "@type": "Person",
      name: "Ali Shehral",
      url: SITE_URL,
    },
    mainEntityOfPage: url,
    keywords,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RoundupClientPage slug={params.slug} />
    </>
  )
}
