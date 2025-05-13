import type { Metadata } from "next"
import GratitudeClientPage from "./GratitudeClientPage"

export const metadata: Metadata = {
  title: "Ali Shehral | With Love & Gratitude",
  description: "Expressing gratitude to those who have supported my journey",
}

export default function GratitudePage() {
  return <GratitudeClientPage />
}
