"use client"

import { useState } from "react"
import { ASSETS } from "@/lib/assets"
import { cn } from "@/lib/utils"

type PipeVariant = "classic" | "smokingBear"

interface PipeImageProps {
  variant: PipeVariant
  alt?: string
  className?: string
}

const PIPE_CONFIG = {
  classic: { src: ASSETS.pipes.classic, alt: "Classic pipes" },
  smokingBear: { src: ASSETS.pipes.smokingBear, alt: "Smoking Bear standing pipe" },
} as const

export function PipeImage({ variant, alt, className }: PipeImageProps) {
  const [imgError, setImgError] = useState(false)
  const { src, alt: defaultAlt } = PIPE_CONFIG[variant]

  if (imgError) {
    return (
      <div
        className={cn(
          "rounded-lg min-h-[200px] flex items-center justify-center gold-border bg-space-black",
          className
        )}
      >
        <span className="text-sm text-muted-foreground">{alt ?? defaultAlt}</span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? defaultAlt}
      width={600}
      height={600}
      className={cn("rounded-lg object-cover w-full h-auto gold-border", className)}
      onError={() => setImgError(true)}
    />
  )
}
