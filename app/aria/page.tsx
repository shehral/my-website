import type { Metadata } from "next"
import { getAllRoundups } from "./data/roundups"
import AriaClientPage from "./AriaClientPage"

const SITE_URL = "https://shehral.com"

export const metadata: Metadata = {
  title: "Ali & ARIA | Internet Roundups",
  description:
    "Internet roundups co-authored by Ali Shehral and ARIA. Research papers, tools, hot takes, and commentary on AI.",
  alternates: {
    canonical: `${SITE_URL}/aria`,
  },
  openGraph: {
    type: "website",
    title: "Ali & ARIA | Internet Roundups",
    description:
      "Internet roundups co-authored by Ali Shehral and ARIA. Research papers, tools, hot takes, and commentary on AI.",
    url: `${SITE_URL}/aria`,
    siteName: "Ali Shehral",
  },
  twitter: {
    card: "summary",
    title: "Ali & ARIA | Internet Roundups",
    description:
      "Internet roundups co-authored by Ali Shehral and ARIA. Research papers, tools, hot takes, and commentary on AI.",
    creator: "@shehral_",
  },
}

export default function AriaPage() {
  const roundups = getAllRoundups()

  // CollectionPage JSON-LD — tells Google this is an index of articles.
  // All values sourced from our own TypeScript data files, not user input.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Ali & ARIA — Internet Roundups",
    description:
      "Internet roundups co-authored by Ali Shehral and ARIA. Research papers, tools, hot takes, and commentary on AI.",
    url: `${SITE_URL}/aria`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: roundups.map((roundup, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/aria/${roundup.slug}`,
        name: `Ali & ARIA #${roundup.number} — ${roundup.title}`,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        // Safe: JSON.stringify escapes special chars; data is from our own TS files
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AriaClientPage />
    </>
  )
}
