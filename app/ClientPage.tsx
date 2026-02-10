"use client"

import Link from "next/link"
import { ArrowRight, ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { useTheme } from "next-themes"
import { ProfileImage } from "@/components/profile-image"
import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import { useRef, useEffect } from "react"
import { getLatestRoundup } from "./aria/data/roundups"

// ── Animation Variants ──────────────────────────

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 120 },
  },
}

const fadeUpSlow = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 30, stiffness: 80, duration: 0.8 },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 100, delay: 0.5 },
  },
}

const letterReveal = {
  hidden: { opacity: 0, y: 50, rotateX: -40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay: 0.1 + i * 0.05,
    },
  }),
}

// ── Scroll-Triggered Section Wrapper ────────────

function ScrollReveal({ children, className = "", delay = 0 }: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 80,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── Main Page ───────────────────────────────────

export default function ClientPage() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Imperative animation controls for the hero entrance
  const heroTextControls = useAnimation()
  const heroImageControls = useAnimation()
  const scrollIndicatorControls = useAnimation()

  useEffect(() => {
    heroTextControls.start("show")
    heroImageControls.start("show")
    scrollIndicatorControls.start({ opacity: 1, transition: { delay: 1.5 } })
  }, [heroTextControls, heroImageControls, scrollIndicatorControls])

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Parallax transforms
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const latest = getLatestRoundup()

  const nameLetters = "Ali Shehral".split("")

  const nowItems = [
    {
      label: "Continuum",
      href: "https://github.com/shehral/continuum",
      detail: "Research scholar at Northeastern's HCAI Lab, building Continuum — a system that extracts decision traces from AI-assisted coding sessions and visualizes them as an interactive knowledge graph. Turning ephemeral human-AI collaboration into durable, searchable knowledge.",
    },
    {
      label: "Persona Vectors",
      href: "https://github.com/shehral/PersonaSafe",
      detail: "Exploring how models maintain character through measurable directions in activation space. Inspired by Anthropic's assistant axis research — mapping persona drift and developing lightweight interventions.",
    },
    {
      label: "Ali & ARIA",
      href: "/aria",
      detail: "Building a daily internet roundup system with an AI co-author. Structured memory, collaborative writing, and zero RAG pipelines. Three posts in and the voice is locking in.",
    },
    {
      label: "NEURAI Lab",
      href: "https://neurai.sites.northeastern.edu/",
      detail: "Leading 100+ researchers at Northeastern's AI research lab. Hosting Bay Area interpretability workshops and reading groups on mechanistic interp.",
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* ─── HERO: Full Viewport ────────────────────── */}
      <section
        ref={heroRef}
        className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-4 relative"
      >
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="max-w-5xl w-full mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={heroTextControls}
              className="space-y-8"
            >
              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className={`${isDark ? "text-red-500" : "text-blue-600"} font-space tracking-wider text-sm md:text-base`}
              >
                MSCS STUDENT · NEURAI LAB · AI SAFETY · INTERPRETABILITY · QUANT FINANCE
              </motion.p>

              {/* Name — Letter-by-letter reveal */}
              <motion.h1
                className={`text-6xl md:text-7xl lg:text-8xl font-sora font-extrabold ${isDark ? "text-gradient" : "text-gradient-light"} leading-tight`}
                style={{ perspective: 400 }}
              >
                {nameLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterReveal}
                    initial="hidden"
                    animate={heroTextControls}
                    className="inline-block"
                    style={{ transformOrigin: "bottom" }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                variants={fadeUpSlow}
                className={`text-xl md:text-2xl max-w-2xl ${isDark ? "text-gray-300" : "text-gray-700"} font-space`}
              >
                Writes code so the robots behave; rides bikes so he remembers
                he&apos;s squishy; riffs on guitar so he knows he&apos;s neither AI nor
                Achilles.
              </motion.p>

              {/* CTA + Socials */}
              <motion.div
                variants={fadeUp}
                className={`flex flex-wrap items-center justify-between border-t border-b py-4 ${isDark ? "border-gray-800" : "border-gray-200"}`}
              >
                <Link
                  href="/aria"
                  className={`group flex items-center text-xl md:text-2xl font-medium ${isDark ? "text-white" : "text-gray-900"} transition-all duration-300`}
                >
                  <span className="relative">
                    Explore My Work
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 ${isDark ? "bg-red-500" : "bg-blue-500"} transition-all duration-300 w-0 group-hover:w-full`}
                    />
                  </span>
                  <ArrowRight
                    className={`ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${isDark ? "group-hover:text-red-500" : "group-hover:text-blue-500"}`}
                  />
                </Link>

                <div className="flex space-x-6">
                  {[
                    { href: "https://github.com/shehral", icon: Github, label: "GitHub" },
                    { href: "https://x.com/shehral_", icon: Twitter, label: "Twitter" },
                    { href: "https://linkedin.com/in/shehral/", icon: Linkedin, label: "LinkedIn" },
                  ].map(({ href, icon: Icon, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isDark ? "text-white hover:text-red-500" : "text-gray-900 hover:text-blue-500"} transition-colors duration-300`}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Profile Image */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate={heroImageControls}
              className="relative w-full max-w-[280px] mx-auto lg:mx-0"
            >
              <motion.div
                style={{ y: heroImageY }}
                className={`aspect-square rounded-full ${isDark ? "bg-gradient-to-br from-red-700 to-red-950" : "bg-gradient-to-br from-blue-400 to-blue-600"} p-1`}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-black">
                  <ProfileImage />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={scrollIndicatorControls}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`flex flex-col items-center gap-2 ${isDark ? "text-gray-600" : "text-gray-400"}`}
          >
            <span className="text-xs font-space tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SECTION 2: What I'm Building ────────── */}
      <section className="min-h-screen flex items-center py-32 px-4">
        <div className="max-w-4xl w-full mx-auto">
          <ScrollReveal>
            <p
              className={`text-sm font-space tracking-widest uppercase mb-4 ${isDark ? "text-red-500" : "text-blue-600"}`}
            >
              Currently
            </p>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold mb-6 ${isDark ? "text-gradient" : "text-gradient-light"}`}
            >
              What I&apos;m building
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mb-16 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Research, systems, and experiments I&apos;m running right now.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {nowItems.map((item, i) => {
              const isExternal = item.href?.startsWith("http")
              const cardStyles = isDark
                ? "bg-gradient-card border-gray-800 hover:border-red-900 hover:shadow-[0_0_20px_rgba(211,0,0,0.15)]"
                : "bg-gradient-card-light border-blue-200 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(37,99,235,0.12)]"

              const inner = (
                <div className="flex items-start gap-4">
                  <div
                    className={`w-2 h-2 rounded-full mt-2.5 flex-shrink-0 ${isDark ? "bg-red-500" : "bg-blue-500"}`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3
                        className={`text-lg font-sora font-bold mb-1 transition-colors ${
                          isDark ? "text-white group-hover:text-red-400" : "text-gray-900 group-hover:text-blue-600"
                        }`}
                      >
                        {item.label}
                      </h3>
                      {item.href && (
                        <ArrowRight
                          size={14}
                          className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${
                            isDark ? "text-red-500" : "text-blue-500"
                          }`}
                        />
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              )

              return (
                <ScrollReveal key={item.label} delay={i * 0.08}>
                  {item.href && !isExternal ? (
                    <Link
                      href={item.href}
                      className={`block group p-6 rounded-xl border transition-all duration-300 ${cardStyles}`}
                    >
                      {inner}
                    </Link>
                  ) : item.href && isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block group p-6 rounded-xl border transition-all duration-300 ${cardStyles}`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={`group p-6 rounded-xl border transition-all duration-300 ${cardStyles}`}>
                      {inner}
                    </div>
                  )}
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Latest from ARIA ─────────── */}
      <section className="py-32 px-4">
        <div className="max-w-4xl w-full mx-auto">
          <ScrollReveal>
            <p
              className={`text-sm font-space tracking-widest uppercase mb-4 ${isDark ? "text-red-500" : "text-blue-600"}`}
            >
              Latest
            </p>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold mb-16 ${isDark ? "text-gradient" : "text-gradient-light"}`}
            >
              From the roundups
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Link href={`/aria/${latest.slug}`} className="block group">
              <div
                className={`p-8 rounded-2xl border transition-all duration-500 ${
                  isDark
                    ? "bg-gradient-to-br from-red-950/60 via-black to-black border-gray-800 hover:border-red-800 hover:shadow-[0_0_40px_rgba(211,0,0,0.2)]"
                    : "bg-gradient-to-br from-blue-50 via-white to-white border-blue-200 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-mono font-bold rounded-full ${
                      isDark ? "bg-red-950 text-red-300" : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    #{latest.number}
                  </span>
                  <span className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                    {latest.date}
                  </span>
                </div>

                <h3
                  className={`text-2xl md:text-3xl font-sora font-bold mb-3 transition-colors ${
                    isDark ? "text-white group-hover:text-red-400" : "text-gray-900 group-hover:text-blue-600"
                  }`}
                >
                  {latest.title}
                </h3>

                <p className={`text-base leading-relaxed mb-6 line-clamp-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {latest.intro}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {latest.sections.map((section) => (
                    <span
                      key={section.heading}
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        isDark ? "bg-gray-900 text-gray-500" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {section.emoji} {section.heading}
                    </span>
                  ))}
                </div>

                <div
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-all ${
                    isDark ? "text-red-400 group-hover:text-red-300" : "text-blue-600 group-hover:text-blue-500"
                  }`}
                >
                  Read roundup
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Link to all roundups */}
          <ScrollReveal delay={0.3}>
            <div className="mt-8 text-center">
              <Link
                href="/aria"
                className={`inline-flex items-center gap-2 text-sm font-space tracking-wide transition-colors ${
                  isDark ? "text-gray-500 hover:text-red-400" : "text-gray-400 hover:text-blue-600"
                }`}
              >
                View all roundups
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Footer spacer ───────────────────────── */}
      <div className={`mx-auto max-w-4xl px-4 pt-8 pb-4 border-t ${isDark ? "border-gray-800" : "border-blue-100"} text-center`}>
        <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          Last updated: February 2026
        </p>
      </div>
    </main>
  )
}
