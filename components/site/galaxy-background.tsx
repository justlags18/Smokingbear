"use client"

import { ASSETS } from "@/lib/assets"

/**
 * Optional galaxy texture overlay for the background.
 */
export function GalaxyBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      style={{
        backgroundImage: `url(${ASSETS.backgrounds.galaxy})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-hidden
    />
  )
}
