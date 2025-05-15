import type { Metadata } from "next"
import RationalRiffsClientPage from "./RationalRiffsClientPage"

export const metadata: Metadata = {
  title: "Ali Shehral | Rational Riffs",
  description: "Curated reads from the LessWrong community and rationalist discourse",
}

export default function RationalRiffsPage() {
  return <RationalRiffsClientPage />
}
