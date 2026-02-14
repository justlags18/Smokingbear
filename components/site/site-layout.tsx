"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { LogoBadge } from "./logo-badge"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const

const PHONE = "(020) 1234 5678"
const HOURS = "Tue–Sun 4pm–2am"

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex flex-col relative z-[10000]">
      <header className="border-b gold-border glass-panel sticky top-0 z-50 overflow-visible">
        <div className="border-b gold-border border-opacity-50 overflow-visible">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="hidden md:grid md:grid-cols-3 md:items-center h-12 gap-4 overflow-visible">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="hover:text-gold hover:drop-shadow-[0_0_8px_hsl(var(--gold)/0.4)] transition-all duration-300"
                >
                  {PHONE}
                </a>
                <div className="gold-divider" aria-hidden />
                <span>{HOURS}</span>
              </div>

              <div className="flex justify-center items-center overflow-visible">
                <LogoBadge href="/" size="md" noBorder className="scale-[2] origin-center" />
              </div>

              <div className="flex items-center justify-end gap-8">
                <nav className="flex items-center gap-8">
                  {NAV_LINKS.map(({ href, label }) => {
                    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))
                    return (
                      <Link
                        key={href}
                        href={href}
                        className={cn(
                          "text-sm transition-colors duration-300 hover:drop-shadow-[0_0_8px_hsl(var(--gold)/0.3)] focus-visible:outline-none focus-visible:ring-0",
                          isActive ? "gold-text" : "text-muted-foreground hover:text-gold"
                        )}
                      >
                        {label}
                      </Link>
                    )
                  })}
                </nav>
                <Link
                  href="/reserve"
                  className="px-3 py-1.5 text-xs font-medium rounded gold-border bg-gold/10 text-gold hover:bg-gold hover:text-space-black transition-all duration-300 gold-hover-glow whitespace-nowrap"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>

            <div className="md:hidden flex items-center justify-between h-14 px-4 overflow-visible">
              <LogoBadge href="/" size="sm" noBorder className="scale-[2] origin-center" />
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="p-2 text-muted-foreground hover:text-gold transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-[60] md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm glass-panel gold-border-l z-[70] md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b gold-border">
                <span className="text-lg font-semibold gold-text">Menu</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-muted-foreground hover:text-gold transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col flex-1 p-6 gap-1">
                {NAV_LINKS.map(({ href, label }) => {
                  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href))
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "py-4 px-4 rounded-lg transition-all duration-300 border-b gold-border border-opacity-30 last:border-0 focus-visible:outline-none focus-visible:ring-0",
                        isActive ? "gold-text" : "text-muted-foreground hover:text-gold hover:bg-gold/5"
                      )}
                    >
                      {label}
                    </Link>
                  )
                })}
                <div className="mt-6 pt-6 gold-divider-h" />
                <Link
                  href="/reserve"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 py-4 px-6 text-center font-medium rounded gold-border bg-gold/10 text-gold hover:bg-gold hover:text-space-black transition-all duration-300 gold-hover-glow"
                >
                  BOOK NOW
                </Link>
              </nav>
              <div className="p-6 border-t gold-border space-y-2 text-sm text-muted-foreground">
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="block hover:text-gold transition-colors">
                  {PHONE}
                </a>
                <span>{HOURS}</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 overflow-visible">{children}</main>
    </div>
  )
}
