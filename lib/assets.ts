/**
 * Centralized asset paths for The Smoking Bear.
 * Files live in public/assets/
 */
const ASSETS_BASE = "/assets"

export const ASSETS = {
  logo: {
    full: `${ASSETS_BASE}/logo-full.png`,
    hero: `${ASSETS_BASE}/logo-hero-transparent.png`,
    badge: `${ASSETS_BASE}/logo-badge.png`,
  },
  pipes: {
    classic: `${ASSETS_BASE}/pipe-classic.png`,
    smokingBear: `${ASSETS_BASE}/pipe-smokingbear.png`,
  },
  backgrounds: {
    galaxy: `${ASSETS_BASE}/galaxy-bg.jpg`,
  },
} as const
