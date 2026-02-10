import type { Metadata } from "next"
import LibraryClientPage from "./LibraryClientPage"

const SITE_URL = "https://shehral.com"

export const metadata: Metadata = {
  title: "Ali Shehral | Library",
  description:
    "A personal knowledge index of papers, posts, videos, and tools on interpretability, agents, safety, and AI foundations.",
  alternates: {
    canonical: `${SITE_URL}/library`,
  },
  openGraph: {
    type: "website",
    title: "Ali Shehral | Library",
    description:
      "A personal knowledge index of papers, posts, videos, and tools on interpretability, agents, safety, and AI foundations.",
    url: `${SITE_URL}/library`,
    siteName: "Ali Shehral",
  },
  twitter: {
    card: "summary",
    title: "Ali Shehral | Library",
    description:
      "A personal knowledge index of papers, posts, videos, and tools on interpretability, agents, safety, and AI foundations.",
    creator: "@shehral_",
  },
}

export default function LibraryPage() {
  return <LibraryClientPage />
}
