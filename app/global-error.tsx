"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col items-center justify-center gap-6 p-8">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <button
          onClick={reset}
          className="px-6 py-3 border border-amber-500 rounded hover:bg-amber-500 hover:text-black transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  )
}
