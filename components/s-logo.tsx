"use client"

import { useTheme } from "next-themes"

export function SLogo({ className = "w-8 h-8" }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const color = isDark ? "#ff0000" : "#2563eb"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className={className} aria-label="S Logo">
      <g fill={color}>
        {/* Top row nodes */}
        <circle cx="500" cy="180" r="60" />
        <circle cx="270" cy="280" r="60" />
        <circle cx="730" cy="280" r="60" />

        {/* Middle row nodes */}
        <circle cx="270" cy="500" r="60" />
        <circle cx="730" cy="500" r="60" />
        <circle cx="500" cy="580" r="60" />

        {/* Bottom row nodes */}
        <circle cx="270" cy="720" r="60" />
        <circle cx="500" cy="820" r="60" />
        <circle cx="730" cy="720" r="60" />

        {/* Connecting lines */}
        <path d="M270,280 L500,180 L730,280" stroke={color} strokeWidth="30" fill="none" />
        <path d="M270,280 L270,500" stroke={color} strokeWidth="30" fill="none" />
        <path d="M730,280 L730,500" stroke={color} strokeWidth="30" fill="none" />
        <path d="M270,500 L500,580 L730,500" stroke={color} strokeWidth="30" fill="none" />
        <path d="M270,500 L270,720" stroke={color} strokeWidth="30" fill="none" />
        <path d="M730,500 L730,720" stroke={color} strokeWidth="30" fill="none" />
        <path d="M270,720 L500,820 L730,720" stroke={color} strokeWidth="30" fill="none" />
      </g>
    </svg>
  )
}
