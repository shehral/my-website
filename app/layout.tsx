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
  metadataBase: new URL("https://shehral.com"),
  alternates: {
    canonical: "/",
    types: {
      "application/xml": [{ url: "/sitemap.xml", title: "Sitemap" }],
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/s-logo.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.png",
        color: "#ff0000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  appleWebApp: {
    title: "Ali Shehral",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    url: "https://shehral.com",
    title: "Ali Shehral | Portfolio",
    description: "MSCS student · President of NEURAI Lab · Builder of AI & Quant Finance tools",
    siteName: "Ali Shehral",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali Shehral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Shehral | Portfolio",
    description: "MSCS student · President of NEURAI Lab · Builder of AI & Quant Finance tools",
    creator: "@shehral_",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code when you have one
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
