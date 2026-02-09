import type { Metadata } from "next"
import LibraryClientPage from "./LibraryClientPage"

export const metadata: Metadata = {
  title: "Ali Shehral | Library",
  description:
    "A personal knowledge index of papers, posts, videos, and tools on interpretability, agents, safety, and AI foundations.",
}

export default function LibraryPage() {
  return <LibraryClientPage />
}
