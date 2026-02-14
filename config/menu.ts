/**
 * Menu configuration — edit this file to add, remove, or reorder menu items.
 * Changes will automatically appear on the website in the order defined here.
 */

export type MenuTabId = string

export interface MenuItem {
  name: string
  desc: string
  /** Price in GBP, e.g. 12.50 or "12.50" */
  price?: number | string
}

export interface MenuTab {
  id: MenuTabId
  label: string
  items: MenuItem[]
  /** Show pipe images below the items (for shisha tabs) */
  showPipeImages?: boolean
}

/**
 * Menu tabs appear in this order. Add new tabs by appending to the array.
 * Each tab's items appear in the order they're listed.
 */
export const MENU_CONFIG: MenuTab[] = [
  {
    id: "signature",
    label: "Signature Shisha",
    showPipeImages: true,
    items: [
      { name: "Orbit Blend", desc: "Our house blend — honey, mint, rose", price: 18 },
      { name: "Smoking Bear Special", desc: "Exclusive mix of tropical fruits", price: 20 },
      { name: "Feltham Fog", desc: "Cool menthol with berry undertones", price: 18 },
    ],
  },
  {
    id: "classic",
    label: "Classic Flavors",
    showPipeImages: true,
    items: [
      { name: "Double Apple", desc: "Classic apple with anise", price: 15 },
      { name: "Mint", desc: "Fresh spearmint", price: 14 },
      { name: "Grape & Mint", desc: "Sweet grape with cooling mint", price: 15 },
      { name: "Strawberry", desc: "Ripe strawberry", price: 14 },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails & Drinks",
    showPipeImages: false,
    items: [
      { name: "Bear's Old Fashioned", desc: "Bourbon, bitters, gold leaf", price: 14 },
      { name: "Orbit Martini", desc: "Vodka, elderflower, citrus", price: 13 },
      { name: "Feltham Fizz", desc: "Gin, cucumber, soda", price: 12 },
      { name: "Mocktails", desc: "Virgin options available", price: 8 },
    ],
  },
]
