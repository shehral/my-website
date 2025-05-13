"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/react"

export function EnhancedAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track page views when the route changes
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // You can add custom tracking here if needed in the future
    console.log(`Page view: ${url}`)

    // This is just for debugging - remove in production
  }, [pathname, searchParams])

  return <Analytics debug={process.env.NODE_ENV === "development"} />
}
