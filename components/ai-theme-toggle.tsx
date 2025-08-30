"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function AIThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-12 w-12 rounded-full bg-black/20"></div>
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative h-12 w-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
        isDark
          ? "border-red-500 bg-gradient-to-br from-red-950 to-black hover:border-red-400"
          : "border-blue-500 bg-gradient-to-br from-blue-100 to-white hover:border-blue-400"
      }`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-6 w-6 text-red-400" fill="currentColor" />
          ) : (
            <Sun className="h-6 w-6 text-blue-600" />
          )}
        </motion.div>
      </div>

      {/* Subtle glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-full ${isDark ? "bg-red-500/20" : "bg-blue-500/20"}`}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </button>
  )
}
