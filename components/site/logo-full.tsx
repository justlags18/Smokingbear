"use client"

import Link from "next/link"
import { ASSETS } from "@/lib/assets"
import { cn } from "@/lib/utils"

interface LogoFullProps {
  href?: string
  size?: "md" | "hero"
  className?: string
}

const SIZES = {
  md: { w: 280, h: 120 },
  hero: { w: 576, h: 248 },
} as const

export function LogoFull({ href = "/", size = "md", className }: LogoFullProps) {
  const { w, h } = SIZES[size]
  const content = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={size === "hero" ? ASSETS.logo.hero : ASSETS.logo.full}
      alt="The Smoking Bear"
      width={w}
      height={h}
      className={cn("object-contain", className)}
    />
  )
  return href ? (
    <Link href={href} aria-label="The Smoking Bear - Home">
      {content}
    </Link>
  ) : (
    content
  )
}
