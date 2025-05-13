"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/react"

export function EnhancedAnalytics() {
  const pathname = usePathname()

  // We'll use a safer approach that doesn't require useSearchParams
  // This avoids the Suspense boundary requirement

  return (
    <>
      <PageViewTracker pathname={pathname} />
      <Analytics debug={process.env.NODE_ENV === "development"} />
    </>
  )
}

// Separate component for tracking page views
function PageViewTracker({ pathname }: { pathname: string }) {
  useEffect(() => {
    // Track page view when pathname changes
    console.log(`Page view: ${pathname}`)
  }, [pathname])

  return null
}
