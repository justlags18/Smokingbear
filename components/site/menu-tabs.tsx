"use client"

import { useState } from "react"
import { PipeImage } from "./pipe-image"
import { cn } from "@/lib/utils"
import { MENU_CONFIG, type MenuTabId } from "@/config/menu"

export function MenuTabs() {
  const [activeTab, setActiveTab] = useState<MenuTabId>(MENU_CONFIG[0]?.id ?? "")

  const activeTabData = MENU_CONFIG.find((tab) => tab.id === activeTab)

  return (
    <div className="max-w-4xl mx-auto relative z-[9999]">
      <div role="tablist" className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 relative">
        {MENU_CONFIG.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={activeTab === id}
            onClick={() => setActiveTab(id)}
            onPointerDownCapture={() => setActiveTab(id)}
            className={cn(
                "relative z-10 px-6 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer select-none",
                activeTab === id
                  ? "gold-text gold-border rounded bg-gold/5 gold-hover-glow"
                  : "text-muted-foreground hover:text-gold border border-transparent rounded hover:border-gold/50"
              )}
            >
              {label}
            </button>
        ))}
      </div>

      <div className="gold-divider-h mb-10" />

      <div className="relative min-h-[300px]">
        {activeTabData && (
          <div key={activeTab} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {activeTabData.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-5 px-5 border-b gold-border border-opacity-30"
                >
                  <div>
                    <h3 className="font-serif text-lg gold-text">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  {item.price != null && (
                    <span className="font-serif text-lg gold-text shrink-0 sm:text-right">
                      £{typeof item.price === "number" ? item.price.toFixed(2) : item.price}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {activeTabData.showPipeImages && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <PipeImage variant="classic" />
                <PipeImage variant="smokingBear" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
