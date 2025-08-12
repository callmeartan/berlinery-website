"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Menu, Coffee, Snowflake, Cookie, Donut, Star, Clock } from "lucide-react"

export default function RestaurantApp() {
  const [currentView, setCurrentView] = useState<"landing" | "menu">("landing")
  const [activeCategory, setActiveCategory] = useState("cold-drinks")

  const menuItems = {
    "cold-drinks": [
      {
        name: "Iced Matcha Latte",
        description: "Ceremonial grade matcha with oat milk and vanilla",
        price: "$5.50",
        popular: true,
        prepTime: "3-5 min",
        image: "/placeholder-7k10t.png",
      },
      {
        name: "Cold Brew Tonic",
        description: "House cold brew with tonic water and fresh lime",
        price: "$4.75",
        prepTime: "2-3 min",
        image: "/placeholder-asax1.png",
      },
      {
        name: "Hibiscus Lemonade",
        description: "Refreshing hibiscus tea with fresh lemon and mint",
        price: "$4.25",
        prepTime: "2-3 min",
        image: "/hibiscus-lemonade-mint.png",
      },
      {
        name: "Cucumber Mint Cooler",
        description: "Sparkling water with muddled cucumber and mint",
        price: "$3.95",
        prepTime: "2-3 min",
        image: "/cucumber-mint-sparkling-water.png",
      },
    ],
    "hot-drinks": [
      {
        name: "Signature Cappuccino",
        description: "Double shot espresso with steamed milk and cinnamon",
        price: "$4.50",
        popular: true,
        prepTime: "4-6 min",
        image: "/placeholder-wed11.png",
      },
      {
        name: "Golden Turmeric Latte",
        description: "Warming turmeric blend with coconut milk and honey",
        price: "$5.25",
        prepTime: "5-7 min",
        image: "/placeholder-ewdw7.png",
      },
      {
        name: "Chai Spice Tea",
        description: "Traditional chai blend with cardamom and ginger",
        price: "$4.00",
        prepTime: "4-5 min",
        image: "/spiced-chai-tea.png",
      },
      {
        name: "Hot Chocolate Deluxe",
        description: "Rich Belgian chocolate with whipped cream and marshmallows",
        price: "$4.75",
        prepTime: "5-7 min",
        image: "/hot-chocolate-marshmallows.png",
      },
    ],
    sweets: [
      {
        name: "Lemon Lavender Tart",
        description: "Buttery pastry with lemon curd and lavender honey",
        price: "$6.50",
        popular: true,
        prepTime: "Ready now",
        image: "/lemon-lavender-tart.png",
      },
      {
        name: "Chocolate Avocado Mousse",
        description: "Silky smooth mousse with fresh berries",
        price: "$5.95",
        prepTime: "Ready now",
        image: "/chocolate-mousse-berries.png",
      },
      {
        name: "Tiramisu Cup",
        description: "Classic Italian dessert with espresso and mascarpone",
        price: "$6.25",
        prepTime: "Ready now",
        image: "/tiramisu-glass-cup.png",
      },
      {
        name: "Seasonal Fruit Tart",
        description: "Vanilla custard with fresh seasonal fruits",
        price: "$5.75",
        prepTime: "Ready now",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    "donuts-berlinery": [
      {
        name: "Classic Glazed Donut",
        description: "Light and fluffy with vanilla glaze",
        price: "$3.25",
        popular: true,
        prepTime: "Ready now",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Raspberry Berliner",
        description: "Traditional German pastry filled with raspberry jam",
        price: "$4.50",
        prepTime: "Ready now",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Chocolate Berliner",
        description: "Filled with rich chocolate cream and dusted with sugar",
        price: "$4.75",
        prepTime: "Ready now",
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        name: "Cinnamon Sugar Donut",
        description: "Warm donut rolled in cinnamon sugar",
        price: "$3.50",
        prepTime: "Ready now",
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
  }

  const categories = [
    { id: "cold-drinks", name: "Cold Drinks", icon: Snowflake },
    { id: "hot-drinks", name: "Hot Drinks", icon: Coffee },
    { id: "sweets", name: "Sweets", icon: Cookie },
    { id: "donuts-berlinery", name: "Donuts & Berlinery", icon: Donut },
  ]

  if (currentView === "landing") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-warm-gray flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-8 fade-in-up">
          {/* Logo/Brand */}
          <div className="space-y-4">
            <div className="w-24 h-24 mx-auto pastel-green rounded-full flex items-center justify-center pulse-gentle shadow-lg">
              <div className="text-deep-sage text-3xl font-bold font-sans">V</div>
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-deep-sage font-sans tracking-tight">Welcome to Verde</h1>
              <p className="text-deep-sage/70 font-serif text-xl leading-relaxed">
                Scan, browse, and enjoy — your dining experience, simplified.
              </p>
            </div>
          </div>

          {/* Main Action Buttons */}
          <div className="space-y-4">
            <Button
              onClick={() => setCurrentView("menu")}
              className="w-full h-18 text-xl font-semibold bg-deep-sage hover:bg-deep-sage/90 text-white rounded-2xl hover-scale shadow-xl border-0"
            >
              <Menu className="w-7 h-7 mr-4" />
              View Menu
            </Button>

            <Button
              onClick={() => window.open("https://instagram.com", "_blank")}
              variant="outline"
              className="w-full h-18 text-xl font-semibold border-2 border-pastel-green text-deep-sage hover:bg-pastel-green/10 rounded-2xl hover-scale shadow-lg"
            >
              <Instagram className="w-7 h-7 mr-4" />
              Follow on Instagram
            </Button>
          </div>

          <div className="pt-4">
            <p className="text-sm text-deep-sage/50 font-serif italic">See what's fresh today</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-pastel-green/20 z-10">
        <div className="max-w-4xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentView("landing")}
              className="text-deep-sage hover:text-deep-sage/70 font-sans font-semibold text-lg transition-colors"
            >
              ← Verde
            </button>
            <h2 className="text-2xl font-bold text-deep-sage font-sans">Menu</h2>
            <div className="w-16"></div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-20 bg-white/95 backdrop-blur-sm border-b border-pastel-green/10 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`category-button flex items-center gap-3 px-6 py-3 rounded-full whitespace-nowrap font-serif font-medium transition-all ${
                    activeCategory === category.id
                      ? "pastel-green text-deep-sage shadow-md"
                      : "text-deep-sage/60 hover:text-deep-sage hover:bg-pastel-green/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <Card key={index} className="menu-card p-6 rounded-2xl">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover shadow-md"
                  />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-deep-sage font-sans">{item.name}</h3>
                        {item.popular && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-pastel-green text-deep-sage text-xs font-medium">
                            <Star className="w-3 h-3 fill-current" />
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-deep-sage/70 font-serif leading-relaxed text-base">{item.description}</p>
                      <div className="flex items-center gap-1 text-deep-sage/50 text-sm">
                        <Clock className="w-4 h-4" />
                        {item.prepTime}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-deep-sage font-sans">{item.price}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-warm-gray mt-16 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
          <p className="text-deep-sage/60 font-serif text-lg">Thank you for choosing Verde</p>
          <p className="text-deep-sage/40 font-serif text-sm">Fresh ingredients, crafted with care</p>
        </div>
      </div>
    </div>
  )
}


