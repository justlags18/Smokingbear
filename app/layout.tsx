import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { GalaxyBackground } from "@/components/site/galaxy-background"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "The Smoking Bear",
  description: "Luxury Shisha Lounge — Feltham",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${cormorant.variable} ${inter.className} font-sans starfield-bg min-h-screen relative`}
      >
        <div className="fixed inset-0 z-0 pointer-events-none noise-overlay vignette-overlay" aria-hidden>
          <GalaxyBackground />
          <div className="star-twinkle" aria-hidden />
        </div>
        <div className="relative z-[2] min-h-screen isolate">
          {children}
        </div>
      </body>
    </html>
  )
}
