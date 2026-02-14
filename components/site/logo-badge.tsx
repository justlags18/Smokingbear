"use client"

import Link from "next/link"
import { ASSETS } from "@/lib/assets"
import { cn } from "@/lib/utils"

interface LogoBadgeProps {
  href?: string
  size?: "sm" | "md" | "lg"
  noBorder?: boolean
  className?: string
}

const SIZES = { sm: 32, md: 48, lg: 64 } as const

export function LogoBadge({ href = "/", size = "md", noBorder, className }: LogoBadgeProps) {
  const px = SIZES[size]
  const content = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={ASSETS.logo.badge}
      alt="The Smoking Bear"
      width={px}
      height={px}
      className={cn(
        "object-contain",
        !noBorder && "gold-border rounded-full p-0.5",
        className
      )}
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
