"use client"

import { useTheme } from "next-themes"

export function LogoFallback({ className = "w-8 h-8" }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className} aria-label="S Logo">
      <g fill={isDark ? "#ff0000" : "#2563eb"}>
        {/* Nodes */}
        <circle cx="20" cy="20" r="5" />
        <circle cx="50" cy="20" r="5" />
        <circle cx="80" cy="20" r="5" />
        <circle cx="20" cy="50" r="5" />
        <circle cx="80" cy="50" r="5" />
        <circle cx="20" cy="80" r="5" />
        <circle cx="50" cy="80" r="5" />
        <circle cx="80" cy="80" r="5" />
        <circle cx="35" cy="35" r="5" />
        <circle cx="65" cy="65" r="5" />

        {/* Connections */}
        <path d="M20,20 L50,20" strokeWidth="3" stroke={isDark ? "#ff0000" : "#2563eb"} />
        <path d="M50,20 L80,20" strokeWidth="3" stroke={isDark ? "#ff0000" : "#2563eb"} />
        <path d="M20,20 L20,50" strokeWidth="3" stroke={isDark ? "#ff0000" : "#2563eb"} />
        <path d="M20,50 L20,80" strokeWidth="3" stroke={isDark ? "#ff0000" : "#2563eb"} />
        <path d="M20,80 L50,80" strokeWidth="3" stroke={isDark ? "#ff0000" : "#2563eb"} />
        <path d="M50,80 L80,80" strokeWidth="3" stroke={isDark ? "#ff0000" : "#2563eb"} />
        <path d="M80,20 L80,50" strokeWidth="3" stroke={isDark ? "#ff0000" : "#2563eb"} />
        <path d="M80,50 L80,80" strokeWidth="3" stroke={isDark ? "#ff0000" : "#2563eb"} />
        <path d="M20,20 L35,35" strokeWidth="3" stroke={isDark ? "#ff0000" : "#2563eb"} />
        <path d="M35,35 L80,80" strokeWidth="3" stroke={isDark ? "#ff0000" : "#2563eb"} />
        <path d="M20,80 L65,65" strokeWidth="3" stroke={isDark ? "#ff0000" : "#2563eb"} />
        <path d="M65,65 L80,20" strokeWidth="3" stroke={isDark ? "#ff0000" : "#2563eb"} />
      </g>
    </svg>
  )
}
