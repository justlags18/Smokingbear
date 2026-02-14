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

/** A subheader to separate sections within a tab */
export interface MenuSubheader {
  type: "subheader"
  label: string
}

export type MenuEntry = MenuItem | MenuSubheader

export interface MenuTab {
  id: MenuTabId
  label: string
  items: MenuEntry[]
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
      { name: "Orbit Blend", desc: "Our house blend — honey, mint, rose", price: 32 },
      { name: "Smoking Bear Special", desc: "Exclusive mix of tropical fruits", price: 35 },
      { name: "Feltham Fog", desc: "Cool menthol with berry undertones", price: 32 },
      { name: "Orion's Belt", desc: "Peach + Mango + Mint — tropical, balanced, refreshing", price: 33 },
      { name: "Andromeda Berry Storm", desc: "Blueberry + Raspberry + Fruity Blend — deep berry, juicy finish", price: 34 },
      { name: "Comet Cola Crash", desc: "Coca Cola + Lemon — sweet fizz vibes, sharp citrus edge", price: 32 },
      { name: "Nebula Kiwi Mirage", desc: "Paan + Kiwi + Mint — herbal-aromatic with bright fruit", price: 34 },
      { name: "Lychee Starwave", desc: "Watermelon + Lychee — soft sweetness, fragrant lift", price: 33 },
      { name: "Rocket Mojito Rush", desc: "Strawberry + Lime + Fruit Punch — fresh, sweet-tart", price: 34 },
      { name: "Galactic Sunrise", desc: "Orange + Mint + Grape — citrus pop with cool grape", price: 32 },
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
      { name: "Moonlit Double Apple", desc: "Double Apple, light anise sweetness, smooth and classic", price: 18 },
      { name: "Starlight Grape Mint", desc: "Grape + Mint, crisp and cooling", price: 17 },
      { name: "Solar Citrus Drift", desc: "Lemon + Orange, bright citrus with a zesty finish", price: 19 },
      { name: "Meteor Blue Mist", desc: "Blue Mist, icy berry-fresh profile", price: 18 },
      { name: "Aurora Watermelon", desc: "Watermelon + Mint, clean summer sweetness", price: 17 },
      { name: "Cosmic Paan Glow", desc: "Paan + Mint, aromatic, slightly spicy and cooling", price: 20 },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails & Drinks",
    showPipeImages: false,
    items: [
      { type: "subheader", label: "Nebula Classics — £9.50 each" },
      { name: "Solar Flare Mojito", desc: "Rum, lime, mint, soda — bright citrus twists with cooling mint", price: 9.5 },
      { name: "Starship Sour", desc: "Whiskey sour with zesty lemon — smooth, tart, and uplifting", price: 9.5 },
      { name: "Cosmic Cosmo", desc: "Vodka, triple sec, cranberry, lime — a vibrant, tangy classic", price: 9.5 },
      { name: "Galactic G&T", desc: "Gin and tonic with citrus peel — crisp and refreshing", price: 9.5 },
      { name: "Orbit Old Fashioned", desc: "Bourbon, bitters, orange zest — smoky, bold, timeless", price: 9.5 },
      { type: "subheader", label: "Signature Constellations — £12.35 each" },
      { name: "Andromeda Martini", desc: "Vodka, lychee liqueur, lychee juice — exotic sweetness with a clean finish", price: 12.35 },
      { name: "Meteor Mojito Fusion", desc: "Passionfruit Mojito mix — tropical zing + icy mint breeze", price: 12.35 },
      { name: "Nebula Negroni", desc: "Gin, vermouth, bitters swirl — bitter-sweet, rich amber notes", price: 12.35 },
      { name: "Aurora Colada", desc: "Rum, pineapple, coconut — creamy, dreamy tropical escape", price: 12.35 },
      { name: "Interstellar Spritz", desc: "Prosecco, aperol, soda, orange wheel — bubbly, bright, sunset hues", price: 12.35 },
      { type: "subheader", label: "Deep Space Specials — £14.25 each" },
      { name: "Black Hole Espresso", desc: "Espresso martini twist with cold brew infusion — deep coffee with velvet finish", price: 14.25 },
      { name: "Galactic Sunset Margarita", desc: "Tequila, triple sec, lime & passionfruit — tangy citrus layers", price: 14.25 },
      { name: "Cosmosphere Punch", desc: "Vodka, berry liqueurs, citrus juice, soda — fruity galaxy burst", price: 14.25 },
      { name: "Rocket Fuel Mule", desc: "Vodka, ginger beer, lime — sharp spice meets cosmic citrus", price: 14.25 },
      { type: "subheader", label: "Stars & Sips (Beer, Wine & Spirits)" },
      { name: "Pint of Lager / Pale Ale", desc: "Craft beer — crisp and refreshing", price: 5.2 },
      { name: "House Red / White (175ml)", desc: "House wine — smooth and balanced", price: 4.75 },
      { name: "Prosecco (200ml flute)", desc: "Italian sparkling — crisp and celebratory", price: 9.5 },
      { name: "Single Spirit with Mixer", desc: "Gin, Vodka, Rum or Whiskey with your choice of mixer", price: 6.15 },
      { type: "subheader", label: "Celestial Shots & Extras" },
      { name: "Supernova Shot Trio", desc: "3 mini signature shots — cosmic citrus, berry burst, starfire spice", price: 8.5 },
      { name: "Meteor Margarita Rim Upgrade", desc: "Salt or sugar shimmer rim", price: 0.75 },
      { name: "Prosecco Float Top", desc: "Sparkle topper for any drink", price: 2.25 },
      { name: "Mocktails", desc: "Virgin options available", price: 8 },
    ],
  },
]
