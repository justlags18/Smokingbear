import Link from "next/link"
import { PipeImage } from "@/components/site/pipe-image"

const EXPERIENCES = [
  {
    id: "orbit",
    title: "The Orbit",
    subtitle: "Standard Lounge",
    description:
      "Our main floor. Plush seating, ambient lighting, and the perfect atmosphere for unwinding. The heart of The Smoking Bear.",
  },
  {
    id: "vip",
    title: "VIP Booths",
    subtitle: "Premium Seating",
    description:
      "Private booths with dedicated service. Elevated comfort, exclusivity, and the finest shisha at your fingertips.",
  },
  {
    id: "pipe",
    title: "The Smoking Bear Pipe",
    subtitle: "Signature Experience",
    description:
      "Our house signature. A curated journey through premium blends, served in our iconic bear pipe. The definitive Smoking Bear moment.",
  },
] as const

export default function Experience() {
  return (
    <main className="min-h-screen py-16 md:py-20 px-4 sm:px-6 starfield-bg">
      <div className="text-center mb-16">
        <h1 className="font-serif text-3xl md:text-4xl tracking-[0.35em] uppercase gold-text mb-4">
          The Experience
        </h1>
        <div className="gold-divider-h w-24 mx-auto mb-4" />
        <p className="font-sans text-muted-foreground text-sm tracking-widest uppercase">
          Three ways to enter the orbit
        </p>
      </div>

      <div className="container max-w-4xl mx-auto space-y-6 md:space-y-8">
        {EXPERIENCES.map((exp) => (
          <article
            key={exp.id}
            className="glass-panel gold-border rounded-lg p-8 md:p-10 shadow-[0_0_20px_hsl(var(--ice-blue)/0.08)] transition-all duration-300 hover:shadow-[0_0_28px_hsl(var(--ice-blue)/0.18)]"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {exp.id === "pipe" && (
                <div className="md:w-48 flex-shrink-0">
                  <PipeImage
                    variant="smokingBear"
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
              )}
              <div className="flex-1">
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-1">
                  {exp.subtitle}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl gold-text mb-4">{exp.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="container max-w-4xl mx-auto mt-16 text-center">
        <Link
          href="/reserve"
          className="gold-metallic-btn gold-hover-glow inline-block px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase rounded transition-all duration-300"
        >
          Reserve VIP
        </Link>
      </div>
    </main>
  )
}
