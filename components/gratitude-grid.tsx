import type { ReactNode } from "react"

interface GratitudeGridProps {
  children: ReactNode
}

export function GratitudeGrid({ children }: GratitudeGridProps) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">{children}</div>
}
