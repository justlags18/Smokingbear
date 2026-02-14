import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="font-serif text-4xl gold-text">404</h1>
      <p className="text-muted-foreground">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 gold-border rounded bg-gold/10 text-gold hover:bg-gold hover:text-black transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
