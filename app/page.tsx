"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Instagram, Menu, Coffee, Donut, Star } from "lucide-react"

export default function LandingPage() {
  const featured = [
    {
      name: "Frambuazlı Berliner",
      description: "İçi frambuazlı, üzeri pudra şekerli",
      price: "100 TL",
      image: "/berlinery & donut images/berlinery_frambuaz.JPG",
    },
    {
      name: "Gurme LOTUS Berlinery",
      description: "İçi lotus kreması, üzeri lotus bisküvi",
      price: "110 TL",
      image: "/berlinery & donut images/gurme_lotus_berlinery.JPG",
    },
    {
      name: "Pembe Süslü Şekerli Donut",
      description: "İçi sade, üzeri pembe çikolata; renkli şekerlerle",
      price: "100 TL",
      image: "/berlinery & donut images/pempe_suslu_sekerli_donut.JPG",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-warm-gray">
      <header className="border-b border-pastel-green/20">
        <div className="max-w-5xl mx-auto px-4 py-5 flex items-center justify-between">
          <Link href="/" className="text-deep-sage font-sans font-semibold text-lg">The Berlinery</Link>
          <nav className="flex items-center gap-3">
            <a href="/menu" className="chip chip-active"><Menu className="w-5 h-5" /> Menu</a>
            <a
              href="https://www.instagram.com/theberlinerybeylikduzu/"
              target="_blank"
              rel="noopener noreferrer"
              className="chip"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 py-4 sm:py-6 text-center fade-in-up">
          <div className="mx-auto">
            <Image
              src="/berlinery-logo.png"
              alt="Berlinery logo"
              width={320}
              height={320}
              unoptimized
              priority
              className="mx-auto h-36 w-auto object-contain drop-shadow"
            />
          </div>
          <p className="text-deep-sage/70 font-sans text-sm sm:text-base tracking-wide uppercase mt-2">Taze, Sıcak ve Lezzetli</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-sans tracking-tight mt-2">The Berlinery</h1>
          <p className="text-gray-600 font-serif text-lg sm:text-xl mt-3">The Berlinery’de klasik Alman Berliners’ı ve Amerikan donutlarını modern dokunuşlarla deneyimle!</p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <a href="/menu" className="btn-primary inline-flex items-center">
              <Menu className="w-5 h-5 mr-2" /> Menu
            </a>
            <a
              href="https://www.instagram.com/theberlinerybeylikduzu/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center"
            >
              <Instagram className="w-5 h-5 mr-2" /> Instagram
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-deep-sage/80">
            <div className="flex items-center justify-center gap-2 rounded-xl bg-warm-gray p-3 subtle-shadow">
              <Donut className="w-5 h-5" />
              <span className="font-serif">Her gün taze</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-warm-gray p-3 subtle-shadow">
              <Coffee className="w-5 h-5" />
              <span className="font-serif">Özel kahveler</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-warm-gray p-3 subtle-shadow">
              <Star className="w-5 h-5" />
              <span className="font-serif">Sevilen lezzetler</span>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="max-w-5xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-deep-sage font-sans mb-5">Öne Çıkanlar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featured.map((item, idx) => (
              <Card key={idx} className="p-5 rounded-2xl subtle-shadow">
                <div className="w-full h-44 rounded-xl overflow-hidden bg-warm-gray">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-deep-sage font-sans">{item.name}</h3>
                    <p className="text-deep-sage/70 font-serif text-sm mt-1">{item.description}</p>
                  </div>
                  <div className="price-badge">{item.price}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-warm-gray mt-10 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-2">
          <p className="text-deep-sage/60 font-serif text-lg">The Berlinery'yi tercih ettiğiniz için teşekkürler</p>
          <p className="text-deep-sage/40 font-serif text-sm">Taze malzemeler, özenle hazırlanır</p>
        </div>
      </footer>
    </div>
  )
}

