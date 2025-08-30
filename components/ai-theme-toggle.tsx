"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AIThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative h-12 w-12 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
        isDark
          ? "border-red-500 bg-gradient-to-br from-red-950 to-black hover:border-red-400"
          : "border-blue-500 bg-gradient-to-br from-blue-100 to-white hover:border-blue-400"
      }`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Robot Head */}
      <div className="absolute inset-1 flex flex-col items-center justify-center">
        {/* Head outline */}
        <div
          className={`w-8 h-8 rounded-lg border transition-colors duration-300 ${
            isDark ? "border-red-400/60" : "border-blue-500/60"
          } relative`}
        >
          {/* Eyes */}
          <div className="absolute top-2 left-1.5 right-1.5 flex justify-between">
            {/* Left Eye */}
            <motion.div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                isDark ? "bg-red-400" : "bg-blue-500"
              }`}
              animate={{
                scaleY: isDark ? (isHovered ? 0.3 : 0.8) : isHovered ? 1.2 : 1,
                opacity: isDark ? (isHovered ? 0.6 : 0.9) : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            {/* Right Eye */}
            <motion.div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                isDark ? "bg-red-400" : "bg-blue-500"
              }`}
              animate={{
                scaleY: isDark ? (isHovered ? 0.3 : 0.8) : isHovered ? 1.2 : 1,
                opacity: isDark ? (isHovered ? 0.6 : 0.9) : 1,
              }}
              transition={{ duration: 0.2 }}
            />
          </div>

          {/* Mouth/Status Indicator */}
          <motion.div
            className={`absolute bottom-1.5 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
              isDark ? "bg-red-400/40" : "bg-blue-500/60"
            }`}
            animate={{
              width: isDark ? "8px" : "12px",
              height: "1px",
              borderRadius: isDark ? "0px" : "2px",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Antenna/Signal indicator */}
          <motion.div
            className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 transition-all duration-300 ${
              isDark ? "bg-red-400/30" : "bg-blue-500/50"
            }`}
            animate={{
              height: isDark ? "2px" : "4px",
              opacity: isHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Activity dots (processing indicators) */}
          <div className="absolute -right-1 top-1 flex flex-col space-y-0.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-0.5 h-0.5 rounded-full ${isDark ? "bg-red-400/40" : "bg-blue-500/60"}`}
                animate={{
                  opacity: isDark ? [0.2, 0.6, 0.2] : [0.4, 1, 0.4],
                  scale: isDark ? [0.8, 1, 0.8] : [1, 1.2, 1],
                }}
                transition={{
                  duration: isDark ? 2 : 1,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * (isDark ? 0.3 : 0.2),
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-xl ${isDark ? "bg-red-500/10" : "bg-blue-500/10"}`}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: isDark ? 3 : 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Hover effect */}
      {isHovered && (
        <motion.div
          className={`absolute inset-0 rounded-xl ${isDark ? "bg-red-500/20" : "bg-blue-500/20"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </button>
  )
}
