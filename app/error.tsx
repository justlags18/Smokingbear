"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-6 px-4">
      <h2 className="font-serif text-2xl gold-text">Something went wrong</h2>
      <button
        onClick={reset}
        className="px-6 py-3 gold-border rounded bg-gold/10 text-gold hover:bg-gold hover:text-black transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
