"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

export function ProfileImage() {
  const [imageError, setImageError] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  if (imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white text-center p-4">
        <div>
          <div className="text-2xl font-bold">AS</div>
          <div className="text-xs mt-2">Ali Shehral</div>
        </div>
      </div>
    )
  }

  return (
    <img
      src="/ali-shehral-portrait.jpg"
      alt="Ali Shehral"
      className="w-full h-full object-cover"
      onError={() => setImageError(true)}
    />
  )
}
