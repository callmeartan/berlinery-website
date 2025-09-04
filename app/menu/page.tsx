"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Coffee, Snowflake, Cookie, Donut, Instagram, Phone } from "lucide-react"

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("donuts-berlinery")

  const menuItems = {
    "cold-drinks": [
      { name: "Ice Americano", description: "Uzun içimli espresso, buzla dengelenmiş", price: "145 TL", prepTime: "", image: "" },
      { name: "Ice Latte", description: "Süt köpüğü ve espresso dengesi", price: "155 TL", prepTime: "", image: "" },
      { name: "Ice Mocha", description: "Çikolata ve espresso'nun soğuk uyumu", price: "195 TL", prepTime: "", image: "" },
      { name: "Ice White Mocha", description: "Beyaz çikolata ve espresso; yumuşak tatlı", price: "195 TL", prepTime: "", image: "" },
      { name: "Ice Caramel Mocha", description: "Karamel ve espresso karışımı", price: "195 TL", prepTime: "", image: "" },
      { name: "Mojito", description: "Nane, lime ve gaz; enerjik ferahlık", price: "150 TL", prepTime: "", image: "" },
      { name: "Churchill", description: "Klasik limon gazozu", price: "130 TL", prepTime: "", image: "" },
      { name: "Limonata", description: "Doğal limon ve tatlılık dengesi", price: "130 TL", prepTime: "", image: "" },
      { name: "Çilekli limonata", description: "Çilek ve limon uyumu", price: "140 TL", prepTime: "", image: "" },
      { name: "Elmali limonata", description: "Elma ve limon dengesi", price: "140 TL", prepTime: "", image: "" },
      { name: "Naneli limonata", description: "Limon ve nane uyumu; ferahlatıcı", price: "140 TL", prepTime: "", image: "" },
      { name: "Şeftali Ice Tea", description: "Şeftali aromalı buzlu çay", price: "50 TL", prepTime: "", image: "" },
      { name: "Limonlu Ice Tea", description: "Limon ve buzlu çay dengesi", price: "40 TL", prepTime: "", image: "" },
      { name: "Sade soda", description: "Gazlı suyun basit hali", price: "30 TL", prepTime: "", image: "" },
      { name: "Su", description: "Temiz ve soğuk su", price: "15 TL", prepTime: "", image: "" },
    ],
    "hot-drinks": [
      { name: "Çay", description: "Demli klasik Türk çayı", price: "30 TL", prepTime: "", image: "" },
      { name: "Çaydanlık servisi ( iki kişilik)", description: "İki kişilik çay servisi", price: "80 TL", prepTime: "", image: "" },
      { name: "Green Tea (yeşil çay)", description: "Temiz içim, doğal antioksidan", price: "90 TL", prepTime: "", image: "/Tea/Green Tea.jpg" },
      { name: "Bluebella Tea (mavi kelebek çayı)", description: "Meyvemsi ve çiçeksi notalar", price: "120 TL", prepTime: "", image: "/Tea/Bluebella_Tea.jpeg" },
      { name: "Turmella Tea (zerdeçal çayı)", description: "Zerdeçal ve baharat karışımı", price: "150 TL", prepTime: "", image: "/Tea/Turmella_Tea.JPG" },
      { name: "Jasmine Tea (yasemin çayı)", description: "Yasemin aromalı yumuşak içim", price: "120 TL", prepTime: "", image: "/Tea/Jasmine Tea.jpg" },
      { name: "Orange flower Tea (portakal çiçeği çayı)", description: "Portakal çiçeği aroması", price: "110 TL", prepTime: "", image: "/Tea/Orange_Flower_Tea.jpeg" },
      { name: "Ginglow Tea (zencefil çayı)", description: "Zencefil dokunuşlu bitki çayı", price: "120 TL", prepTime: "", image: "/Tea/Ginglow_Tea.JPG" },
      { name: "Türk kahvesi", description: "Geleneksel damla kahve", price: "80 TL", prepTime: "", image: "" },
      { name: "Espresso", description: "Yoğun ve kısa kahve", price: "90 TL", prepTime: "", image: "" },
      { name: "Americano", description: "Uzun içimli espresso", price: "140 TL", prepTime: "", image: "" },
      { name: "Cappuccino", description: "Kadife köpük ve espresso", price: "155 TL", prepTime: "", image: "" },
      { name: "Latte", description: "Süt köpüğü ve espresso dengesi", price: "155 TL", prepTime: "", image: "" },
      { name: "Mocha", description: "Çikolata ve espresso karışımı", price: "195 TL", prepTime: "", image: "" },
      { name: "White Mocha", description: "Beyaz çikolata ve espresso", price: "195 TL", prepTime: "", image: "" },
      { name: "Caramel Mocha", description: "Karamel ve espresso dengesi", price: "195 TL", prepTime: "", image: "" },
    ],
    sweets: [
      { name: "Macaron", description: "Fındık kremalı Fransız klasik", price: "250 TL", prepTime: "", image: "" },
      { name: "Tiramisu", description: "Kahveli İtalyan katmanlı tatlı", price: "150 TL", prepTime: "", image: "" },
    ],
    "donuts-berlinery": [
      {
        name: "Frambuaz Berliner",
        description: "Gerçek frambuaz dolgulu, hafif pudra dokunuşu",
        price: "110 TL",
        image: "/berlinery & donut images/berlinery_frambuaz.JPG",
      },
      {
        name: "Karamelli Berliner",
        description: "Karamel dolgulu, çikolata kaplı",
        price: "110 TL",
        image: "/berlinery & donut images/caramel_berliner.JPG",
      },
      {
        name: "Bavaria kremalı Berliner",
        description: "Bavaria krema dolgusu, çikolata kaplı",
        price: "110 TL",
        image: "/berlinery & donut images/cikolatli_bavaria_berlinery.JPG",
      },
      {
        name: "Gurme Kitkat Berliner",
        description: "Fındık krema dolgulu, Kitkat parçalı",
        price: "120 TL",
        image: "/berlinery & donut images/gurme_kitkat_berlinery.JPG",
      },
      {
        name: "Gurme Lotus Berliner",
        description: "Lotus krema dolgulu, bisküvi kaplı",
        price: "120 TL",
        image: "/berlinery & donut images/gurme_lotus_berlinery.JPG",
      },
      {
        name: "Nutty Berliner",
        description: "Kakaolu fındık kremalı, çikolata kaplı",
        price: "110 TL",
        image: "/berlinery & donut images/Nutty_berliner.JPG",
      },
      {
        name: "Süslü pembe şekerli Donut",
        description: "Pembe çikolata kaplı, renkli şekerlerle süslü",
        price: "110 TL",
        image: "/berlinery & donut images/pempe_suslu_sekerli_donut.JPG",
      },
      {
        name: "Red velvet vişne Berliner",
        description: "Vişne dolgulu, pudra şekerli",
        price: "120 TL",
        image: "/berlinery & donut images/Red_velvet_visne.JPG",
      },
      {
        name: "Special Berliner",
        description: "Özel tasarım dolgular; mangolu, jelibonlu vb",
        price: "120 TL / 130 TL",
        image: "",
      },
      {
        name: "Süslü şekerli Donut",
        description: "Renkli şekerlerle süslü, sade içli",
        price: "110 TL",
        image: "/berlinery & donut images/suslu_sekerli_donat.JPG",
      },
      {
        name: "Tiramisu Berliner",
        description: "Tiramisu krema dolgulu, kahve kaplı",
        price: "110 TL",
        image: "/berlinery & donut images/tiramisu_berliner.JPG",
      },
      {
        name: "Oreo Berliner",
        description: "Oreo dolgulu, parçalı kaplama",
        price: "110 TL",
        image: "",
      },
    ],
  }

  const categories = [
    { id: "donuts-berlinery", name: "Donutlar & Berliner", icon: Donut },
    { id: "sweets", name: "Tatlılar", icon: Cookie },
    { id: "hot-drinks", name: "Sıcak İçecekler", icon: Coffee },
    { id: "cold-drinks", name: "Soğuk İçecekler", icon: Snowflake },
  ]

  const [search, setSearch] = useState("")

  const normalizedSearch = search.trim().toLowerCase()

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
              ← Berlinery
            </Link>
            <h2 className="text-2xl font-bold text-deep-sage font-sans">Menu</h2>
            <div className="flex items-center gap-2">
              {/* Mobile call button */}
              <a href="tel:+905526659573" className="sm:hidden flex items-center justify-center w-12 h-12 bg-pastel-green rounded-full text-deep-sage shadow-lg hover:bg-deep-sage hover:text-white transition-colors" aria-label="Telefon ile ara">
                <Phone className="w-5 h-5" />
              </a>
              <div className="hidden sm:block w-16" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation + Search */}
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
          <div className="mt-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Ara: donut, kahve, lotus..."
              className="w-full h-12 px-4 rounded-xl border border-pastel-green focus:outline-none focus:ring-2 focus:ring-[rgba(168,213,186,0.35)]"
            />
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {(() => {
            const items = (menuItems[activeCategory as keyof typeof menuItems] as Array<any>).filter((i) => {
              if (!normalizedSearch) return true
              const hay = `${i.name || ""} ${i.description || ""}`.toLowerCase()
              return hay.includes(normalizedSearch)
            })
            const renderItem = (item: any, index: number) => (
              <Card key={index} className="menu-card p-6 rounded-2xl subtle-shadow">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden shadow-md">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className={`w-full h-full object-cover ${activeCategory === "donuts-berlinery" ? "scale-[1.65]" : ""}`}
                    />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold text-deep-sage font-sans">{item.name}</h3>
                        </div>
                        {item.description && (
                          <p className="text-deep-sage/70 font-serif leading-relaxed text-base">{item.description}</p>
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

      <footer className="bg-warm-gray mt-16 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center space-y-4">
            <p className="text-deep-sage/60 font-serif text-lg">
              The Berlinery'yi tercih ettiğiniz için teşekkürler
            </p>
            <p className="text-deep-sage/40 font-serif text-sm">
              Taze malzemeler, özenle hazırlanır
            </p>
            <div className="flex justify-center items-center gap-6 pt-4">
              <a
                href="https://www.instagram.com/theberlinerybeylikduzu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-sage/50 hover:text-deep-sage transition-colors"
                aria-label="Instagram'da bizi takip edin"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <span className="text-deep-sage/30 text-sm">•</span>
              <a
                href="tel:+905526659573"
                className="text-deep-sage/50 hover:text-deep-sage transition-colors text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +90 552 665 95 73
              </a>
            </div>
            <div className="border-t border-deep-sage/10 pt-6 mt-6">
              <p className="text-deep-sage/40 text-xs font-serif">
                © 2025 The Berlinery
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


