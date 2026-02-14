"use client"

import { motion } from "framer-motion"

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 20%, hsl(var(--ice-blue) / 0.12) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 70% 80%, hsl(var(--gold) / 0.08) 0%, transparent 45%)",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(1.5px 1.5px at 15% 25%, white 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 85% 15%, white 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 60%, white 0%, transparent 100%),
            radial-gradient(1px 1px at 75% 70%, white 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 85%, white 0%, transparent 100%)`,
          backgroundSize: "100% 100%",
          opacity: 0.6,
        }}
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[200px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(ellipse, hsl(var(--ice-blue) / 0.06) 0%, transparent 70%)",
          left: "10%",
          top: "30%",
        }}
        animate={{ x: [0, 30, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[180px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(ellipse, hsl(var(--gold) / 0.04) 0%, transparent 70%)",
          right: "15%",
          top: "50%",
        }}
        animate={{ x: [0, -25, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
