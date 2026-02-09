import type { Metadata } from "next"
import AriaClientPage from "./AriaClientPage"

export const metadata: Metadata = {
  title: "Ali & ARIA | Internet Roundups",
  description:
    "Internet roundups co-authored by Ali Shehral and ARIA (Ali's Research & Internet Assistant). Research papers, tools, hot takes, and commentary on AI.",
}

export default function AriaPage() {
  return <AriaClientPage />
}
