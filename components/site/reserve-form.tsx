"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type TableType = "standard" | "vip"

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  date?: string
  time?: string
  guests?: string
}

const INPUT_STYLES =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"

export function ReserveForm() {
  const [tableType, setTableType] = useState<TableType>("standard")
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = (formData: FormData): FormErrors => {
    const err: FormErrors = {}
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const guests = formData.get("guests") as string

    if (!name?.trim()) err.name = "Name is required"
    if (!email?.trim()) err.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = "Invalid email"
    if (!phone?.trim()) err.phone = "Phone is required"
    else if (!/^[\d\s\-+()]{10,}$/.test(phone.replace(/\s/g, ""))) err.phone = "Invalid phone"
    if (!date?.trim()) err.date = "Date is required"
    if (!time?.trim()) err.time = "Time is required"
    const g = parseInt(guests || "0", 10)
    if (!guests || isNaN(g) || g < 1) err.guests = "Enter number of guests"
    else if (g > 20) err.guests = "Max 20 guests online. Call for larger parties."

    return err
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const formErrors = validate(formData)
    setErrors(formErrors)
    if (Object.keys(formErrors).length > 0) return

    setSubmitting(true)
    try {
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        date: formData.get("date"),
        time: formData.get("time"),
        guests: formData.get("guests"),
        notes: formData.get("notes") || "",
        tableType,
      }

      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Booking failed")
      setSubmitted(true)
    } catch {
      setErrors({ email: "Something went wrong. Please try again or call us." })
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="glass-panel gold-border rounded-xl p-12 text-center">
        <h2 className="font-serif text-2xl gold-text mb-4">Booking Request Received</h2>
        <p className="text-muted-foreground mb-6">
          We&apos;ll confirm your reservation shortly. For parties of 8+, please call us directly.
        </p>
        <a href="/" className="gold-text hover:text-ice-blue-glow transition-colors text-sm">
          ← Back to Home
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel gold-border rounded-xl p-8 md:p-12 max-w-lg mx-auto">
      <h2 className="font-serif text-2xl gold-text text-center mb-8">Reserve Your Table</h2>

      <div className="flex gap-2 mb-8">
        <button
          type="button"
          onClick={() => setTableType("standard")}
          className={cn(
            "flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all",
            tableType === "standard"
              ? "gold-border bg-gold/10 text-gold gold-hover-glow"
              : "border border-input bg-background text-muted-foreground hover:border-gold/50"
          )}
        >
          Standard Table
        </button>
        <button
          type="button"
          onClick={() => setTableType("vip")}
          className={cn(
            "flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all",
            tableType === "vip"
              ? "gold-border bg-gold/10 text-gold gold-hover-glow"
              : "border border-input bg-background text-muted-foreground hover:border-gold/50"
          )}
        >
          VIP
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={cn(INPUT_STYLES, errors.name && "border-destructive")}
          />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={cn(INPUT_STYLES, errors.email && "border-destructive")}
          />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 123-4567"
            className={cn(INPUT_STYLES, errors.phone && "border-destructive")}
          />
          {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm text-muted-foreground mb-2">
              Date *
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              min={new Date().toISOString().split("T")[0]}
              className={cn(INPUT_STYLES, errors.date && "border-destructive")}
            />
            {errors.date && <p className="mt-1 text-sm text-destructive">{errors.date}</p>}
          </div>
          <div>
            <label htmlFor="time" className="block text-sm text-muted-foreground mb-2">
              Time *
            </label>
            <input
              id="time"
              name="time"
              type="time"
              required
              className={cn(INPUT_STYLES, errors.time && "border-destructive")}
            />
            {errors.time && <p className="mt-1 text-sm text-destructive">{errors.time}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm text-muted-foreground mb-2">
            Guests *
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            max={20}
            required
            placeholder="2"
            className={cn(INPUT_STYLES, errors.guests && "border-destructive")}
          />
          {errors.guests && <p className="mt-1 text-sm text-destructive">{errors.guests}</p>}
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm text-muted-foreground mb-2">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder="Special requests, dietary requirements..."
            className={cn(INPUT_STYLES, "resize-none")}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="gold-metallic-btn gold-hover-glow w-full py-4 mt-8 text-sm font-medium tracking-[0.2em] uppercase rounded transition-all duration-300 disabled:opacity-50"
      >
        {submitting ? "Booking..." : "Book Now"}
      </button>

      <p className="mt-8 text-xs text-muted-foreground text-center leading-relaxed">
        For parties of 8 or more, please call us directly.
      </p>
    </form>
  )
}
