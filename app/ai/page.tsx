import type { Metadata } from "next"
import AIClientPage from "./AIClientPage"

export const metadata: Metadata = {
  title: "Ali Shehral | AI Universe",
  description: "My work and research in AI and machine learning",
}

export default function AIPage() {
  return <AIClientPage />
}
