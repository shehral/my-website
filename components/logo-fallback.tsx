"use client"

import { useTheme } from "next-themes"

export function LogoFallback({ className = "w-8 h-8" }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className}>
      <path
        fill={isDark ? "#ff0000" : "#2563eb"}
        d="M100 20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm50 30c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zM50 50c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm100 60c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zM50 110c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm50 30c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z"
      />
      <path
        fill={isDark ? "#ff0000" : "#2563eb"}
        d="M100 40l50 30M50 70l50-30M50 70l50 70M150 70l-50 70M100 140l-50-10M100 140l50-10"
      />
    </svg>
  )
}
