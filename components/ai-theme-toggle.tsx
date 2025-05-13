"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

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
      className="relative h-12 w-12 rounded-full overflow-hidden border transition-colors duration-300"
      style={{
        borderColor: isDark ? "#3a0000" : "#2563eb",
        background: isDark ? "linear-gradient(145deg, #1a0000, #000)" : "linear-gradient(145deg, #f0f9ff, #e0f2fe)",
      }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Neural Network Visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-8 w-8">
          {/* Central Node */}
          <motion.div
            className={`absolute h-3 w-3 rounded-full ${
              isDark ? "bg-red-500" : "bg-blue-500"
            } left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
            initial={false}
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          />

          {/* Outer Nodes */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.div
              key={i}
              className={`absolute h-2 w-2 rounded-full ${isDark ? "bg-red-600" : "bg-blue-600"}`}
              style={{
                left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 12}px)`,
                top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 12}px)`,
                transform: "translate(-50%, -50%)",
              }}
              initial={false}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Connection Lines */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute left-1/2 top-1/2 h-[1px] origin-left"
              style={{
                width: "12px",
                backgroundColor: isDark ? "#ff6666" : "#93c5fd",
                transform: `rotate(${angle}deg)`,
              }}
              initial={false}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                backgroundColor: isDark ? ["#ff6666", "#ff3333", "#ff6666"] : ["#93c5fd", "#3b82f6", "#93c5fd"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Sun/Moon Icon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30" aria-hidden="true">
        {isDark ? (
          <motion.div
            className="h-5 w-5 rounded-full bg-red-300"
            initial={false}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
          />
        ) : (
          <motion.div className="relative h-5 w-5">
            <motion.div
              className="h-5 w-5 rounded-full bg-blue-300"
              initial={false}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
            />
            <motion.div
              className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-blue-100"
              initial={false}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            />
          </motion.div>
        )}
      </div>
    </button>
  )
}
