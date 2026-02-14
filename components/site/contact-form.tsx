"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const INPUT_STYLES =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = (formData: FormData): FormErrors => {
    const err: FormErrors = {}
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    if (!name?.trim()) err.name = "Name is required"
    if (!email?.trim()) err.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = "Invalid email"
    if (!phone?.trim()) err.phone = "Phone is required"
    else if (!/^[\d\s\-+()]{10,}$/.test(phone.replace(/\s/g, ""))) err.phone = "Invalid phone"
    if (!message?.trim()) err.message = "Message is required"

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
        message: formData.get("message"),
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Send failed")
      setSubmitted(true)
    } catch {
      setErrors({ email: "Something went wrong. Please try again or call us." })
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="glass-panel gold-border rounded-lg p-8 text-center shadow-[0_0_20px_hsl(var(--ice-blue)/0.08)]">
        <h2 className="font-serif text-xl gold-text mb-4">Message Sent</h2>
        <p className="text-muted-foreground text-sm">We&apos;ll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="block text-sm text-muted-foreground mb-2">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={cn(INPUT_STYLES, errors.name && "border-destructive")}
        />
        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm text-muted-foreground mb-2">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={cn(INPUT_STYLES, errors.email && "border-destructive")}
        />
        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm text-muted-foreground mb-2">
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          required
          placeholder="(555) 123-4567"
          className={cn(INPUT_STYLES, errors.phone && "border-destructive")}
        />
        {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm text-muted-foreground mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder="Your message..."
          className={cn(INPUT_STYLES, "resize-none", errors.message && "border-destructive")}
        />
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="gold-metallic-btn gold-hover-glow w-full py-4 text-sm font-medium tracking-[0.2em] uppercase rounded transition-all duration-300 disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
