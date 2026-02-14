"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { HeroBackground } from "./hero-background"
import { LogoFull } from "./logo-full"

const SOCIAL_LINKS = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
] as const

export function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-16 md:py-24 -mt-32 md:-mt-40">
      <HeroBackground />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="mb-0">
          <LogoFull href="/" size="hero" />
        </div>

        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.35em] uppercase gold-text mb-4 -mt-24 md:-mt-32">
          Enter the Orbit
        </h1>

        <p className="font-sans text-muted-foreground text-sm md:text-base tracking-widest mb-12">
          Luxury Shisha Lounge — Feltham
        </p>

        <Link
          href="/reserve"
          className="gold-metallic-btn gold-hover-glow inline-block px-8 py-4 text-sm font-medium tracking-[0.2em] uppercase rounded transition-all duration-300"
        >
          Reserve Your Table
        </Link>

        <div className="flex items-center gap-6 mt-10">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
