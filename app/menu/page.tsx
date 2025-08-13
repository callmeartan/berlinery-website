"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Coffee, Snowflake, Cookie, Donut, Star, Clock } from "lucide-react"

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("donuts-berlinery")

  const menuItems = {
    "cold-drinks": [
      { name: "Ice Americano", description: "", price: "", prepTime: "", image: "" },
      { name: "Ice Latte", description: "", price: "", prepTime: "", image: "" },
      { name: "Ice Mocha", description: "", price: "", prepTime: "", image: "" },
      { name: "Ice White Mocha", description: "", price: "", prepTime: "", image: "" },
      { name: "Ice Caramel Mocha", description: "", price: "", prepTime: "", image: "" },
      { name: "Mojito", description: "", price: "", prepTime: "", image: "" },
      { name: "Churchill", description: "", price: "", prepTime: "", image: "" },
    ],
    "hot-drinks": [
      { name: "Green Tea", description: "", price: "", prepTime: "", image: "" },
      { name: "Bluebella Tea", description: "", price: "", prepTime: "", image: "" },
      { name: "Turmella Tea", description: "", price: "", prepTime: "", image: "" },
      { name: "Jasmine Tea", description: "", price: "", prepTime: "", image: "" },
      { name: "Orange Flower Tea", description: "", price: "", prepTime: "", image: "" },
      { name: "Ginglow Tea", description: "", price: "", prepTime: "", image: "" },
      { name: "Espresso", description: "", price: "", prepTime: "", image: "" },
      { name: "Americano", description: "", price: "", prepTime: "", image: "" },
      { name: "Cappuccino", description: "", price: "", prepTime: "", image: "" },
      { name: "Caffè Latte", description: "", price: "", prepTime: "", image: "" },
      { name: "Caffè Mocha", description: "", price: "", prepTime: "", image: "" },
      { name: "White Mocha", description: "", price: "", prepTime: "", image: "" },
      { name: "Caramel Mocha", description: "", price: "", prepTime: "", image: "" },
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
        name: "Frambuazlı Berliner",
        description: "",
        price: "100Tl",
        prepTime: "Ready now",
        image: "/berlinery & donut images/berlinery_frambuaz.JPG",
      },
      {
        name: "Karamelli Berliner",
        description: "",
        price: "100Tl",
        prepTime: "Ready now",
        image: "/berlinery & donut images/caramel_berliner.JPG",
      },
      {
        name: "Çikolatalı Bavaria Berliner",
        description: "",
        price: "100Tl",
        prepTime: "Ready now",
        image: "/berlinery & donut images/cikolatli_bavaria_berlinery.JPG",
      },
      {
        name: "Gurme KİTKAT Berliner",
        description: "",
        price: "100Tl",
        prepTime: "Ready now",
        image: "/berlinery & donut images/gurme_kitkat_berlinery.JPG",
      },
      {
        name: "Gurme LOTUS Berliner",
        description: "",
        price: "100Tl",
        prepTime: "Ready now",
        image: "/berlinery & donut images/gurme_lotus_berlinery.JPG",
      },
      {
        name: "Nutty Berliner",
        description: "",
        price: "100Tl",
        prepTime: "Ready now",
        image: "/berlinery & donut images/Nutty_berliner.JPG",
      },
      {
        name: "Pembe Süslü Şekerli Donut",
        description: "",
        price: "100Tl",
        prepTime: "Ready now",
        image: "/berlinery & donut images/pempe_suslu_sekerli_donut.JPG",
      },
      {
        name: "Red Velvet Vişne",
        description: "",
        price: "100Tl",
        prepTime: "Ready now",
        image: "/berlinery & donut images/Red_velvet_visne.JPG",
      },
      {
        name: "Süslü Şekerli Donat",
        description: "",
        price: "100Tl",
        prepTime: "Ready now",
        image: "/berlinery & donut images/suslu_sekerli_donat.JPG",
      },
      {
        name: "Tiremisu Berliner",
        description: "",
        price: "100Tl",
        prepTime: "Ready now",
        image: "/berlinery & donut images/tiramisu_berliner.JPG",
      },
    ],
  }

  const categories = [
    { id: "donuts-berlinery", name: "Donuts & Berlinery", icon: Donut },
    { id: "sweets", name: "Sweets", icon: Cookie },
    { id: "hot-drinks", name: "Hot Drinks", icon: Coffee },
    { id: "cold-drinks", name: "Cold Drinks", icon: Snowflake },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-pastel-green/20 z-10">
        <div className="max-w-4xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-deep-sage hover:text-deep-sage/70 font-sans font-semibold text-lg transition-colors"
            >
              ← The Berlinery
            </Link>
            <h2 className="text-2xl font-bold text-deep-sage font-sans">Menu</h2>
            <div className="w-16" />
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
                  className={`chip ${activeCategory === category.id ? "chip-active" : ""}`}
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
          {(() => {
            const items = menuItems[activeCategory as keyof typeof menuItems] as Array<any>
            const renderItem = (item: any, index: number) => (
              <Card key={index} className="menu-card p-6 rounded-2xl subtle-shadow">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden shadow-md">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover scale-[1.65]"
                    />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold text-deep-sage font-sans">{item.name}</h3>
                          {("popular" in item) && (item as any).popular && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-pastel-green text-deep-sage text-xs font-medium">
                              <Star className="w-3 h-3 fill-current" />
                              Popular
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-deep-sage/70 font-serif leading-relaxed text-base">{item.description}</p>
                        )}
                        {item.prepTime && (
                          <div className="flex items-center gap-1 text-deep-sage/50 text-sm">
                            <Clock className="w-4 h-4" />
                            {item.prepTime}
                          </div>
                        )}
                      </div>
                      {item.price && <div className="price-badge">{item.price}</div>}
                    </div>
                  </div>
                </div>
              </Card>
            )

            if (activeCategory === "donuts-berlinery") {
              const berliners = items.filter((i) => (i.name || "").toLowerCase().includes("berliner"))
              const donuts = items.filter((i) => !(i.name || "").toLowerCase().includes("berliner"))

              return (
                <>
                  <h3 className="text-lg font-semibold text-deep-sage font-sans">Berlinery</h3>
                  <div className="space-y-6">
                    {berliners.map((item, index) => renderItem(item, index))}
                  </div>
                  <h3 className="text-lg font-semibold text-deep-sage font-sans mt-8">Donuts</h3>
                  <div className="space-y-6">
                    {donuts.map((item, index) => renderItem(item, index))}
                  </div>
                </>
              )
            }

            if (activeCategory === "hot-drinks") {
              const teas = items.filter((i) => (i.name || "").toLowerCase().includes("tea"))
              const coffees = items.filter((i) => !(i.name || "").toLowerCase().includes("tea"))

              return (
                <>
                  <h3 className="text-lg font-semibold text-deep-sage font-sans">Tea</h3>
                  <div className="space-y-6">
                    {teas.map((item, index) => renderItem(item, index))}
                  </div>
                  <h3 className="text-lg font-semibold text-deep-sage font-sans mt-8">Coffee</h3>
                  <div className="space-y-6">
                    {coffees.map((item, index) => renderItem(item, index))}
                  </div>
                </>
              )
            }

            return items.map((item, index) => renderItem(item, index))
          })()}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-warm-gray mt-16 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
          <p className="text-deep-sage/60 font-serif text-lg">Thank you for choosing The Berlinery</p>
          <p className="text-deep-sage/40 font-serif text-sm">Fresh ingredients, crafted with care</p>
        </div>
      </div>
    </div>
  )
}


