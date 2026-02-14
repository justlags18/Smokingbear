import { ContactForm } from "@/components/site/contact-form"
import { Instagram, MapPin } from "lucide-react"

const ADDRESS = "Feltham, London"
const PHONE = "(020) 1234 5678"
const EMAIL = "hello@thesmokingbear.com"

export default function Contact() {
  return (
    <main className="min-h-screen py-16 md:py-20 px-4 sm:px-6 starfield-bg">
      <div className="text-center mb-16">
        <h1 className="font-serif text-3xl md:text-4xl tracking-[0.35em] uppercase gold-text mb-4">
          Contact
        </h1>
        <div className="gold-divider-h w-24 mx-auto mb-4" />
        <p className="font-sans text-muted-foreground text-sm tracking-widest uppercase">
          Get in touch
        </p>
      </div>

      <div className="container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <div className="glass-panel gold-border rounded-lg overflow-hidden shadow-[0_0_20px_hsl(var(--ice-blue)/0.08)] aspect-[4/3] min-h-[240px] flex flex-col items-center justify-center bg-card/80">
              <MapPin className="w-12 h-12 text-muted-foreground/40 mb-4" strokeWidth={1} />
              <p className="text-muted-foreground/60 text-sm tracking-widest uppercase mb-2">
                Map
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm gold-text hover:underline"
              >
                View {ADDRESS} on Google Maps
              </a>
            </div>
            <div className="glass-panel gold-border rounded-lg p-6 shadow-[0_0_20px_hsl(var(--ice-blue)/0.08)]">
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">
                Find us
              </p>
              <p className="font-serif text-lg gold-text">{ADDRESS}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          <div className="glass-panel gold-border rounded-lg p-8 md:p-10 shadow-[0_0_20px_hsl(var(--ice-blue)/0.08)]">
            <h2 className="font-serif text-xl gold-text mb-6">Send a message</h2>
            <ContactForm />
          </div>
        </div>

        <footer className="mt-20 pt-12 border-t gold-border border-opacity-50">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-muted-foreground">
            <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="hover:text-gold transition-colors">
              {PHONE}
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors">
              {EMAIL}
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}
