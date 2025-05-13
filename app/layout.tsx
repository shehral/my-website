import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import NeuralField from "@/components/neural-field"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["800"],
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ali Shehral | Portfolio",
  description: "MSCS student · President of NEURAI Lab · Builder of AI & Quant Finance tools",
  icons: {
    icon: "/s-logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <NeuralField />
          <Navbar />
          <div className="flex-grow mt-20">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
