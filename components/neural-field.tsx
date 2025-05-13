"use client"

import { useCallback, useEffect, useState } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"
import { useTheme } from "next-themes"

export default function NeuralField() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: isDark ? "#000000" : "#ffffff",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: isDark ? ["#d30000", "#ff3333", "#ff6666"] : ["#2563eb", "#3b82f6", "#60a5fa"],
            },
            links: {
              color: isDark ? "#d30000" : "#2563eb",
              distance: 180,
              enable: true,
              opacity: 0.3,
              width: 1.2,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.2,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 6 },
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 1,
                sync: false,
              },
            },
          },
          detectRetina: true,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10,
                },
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 180,
                links: {
                  opacity: 0.8,
                  color: isDark ? "#ff3333" : "#3b82f6",
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
        }}
      />
    </div>
  )
}
