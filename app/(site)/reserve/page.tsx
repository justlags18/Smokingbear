import { ReserveForm } from "@/components/site/reserve-form"

export default function Reserve() {
  return (
    <main className="min-h-screen py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl gold-text text-center mb-4 tracking-[0.35em] uppercase">
          Reserve Your Table
        </h1>
        <p className="text-muted-foreground text-center mb-16">
          Book your experience at The Smoking Bear
        </p>
        <ReserveForm />
      </div>
    </main>
  )
}
