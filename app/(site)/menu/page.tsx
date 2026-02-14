import { MenuTabs } from "@/components/site/menu-tabs"

export default function Menu() {
  return (
    <main className="min-h-screen py-16 md:py-20 px-4 sm:px-6">
      <div className="text-center mb-16">
        <h1 className="font-serif text-3xl md:text-4xl tracking-[0.35em] uppercase gold-text mb-4">
          Our Menu
        </h1>
        <div className="gold-divider-h w-24 mx-auto mb-4" />
        <p className="font-sans text-muted-foreground text-sm tracking-widest uppercase">
          Signature Shisha
        </p>
      </div>

      <MenuTabs />
    </main>
  )
}
