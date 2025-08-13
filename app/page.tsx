"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Instagram, Menu, Coffee, Donut, Star, MapPin, Clock, Phone, Navigation, ArrowRight } from "lucide-react"

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
    <div className="min-h-screen bg-gradient-to-br from-white to-[#f7f7f5]">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 border-b border-pastel-green/20">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-deep-sage font-sans font-semibold text-lg">The Berlinery</Link>
          <nav className="hidden sm:flex items-center gap-2">
            <a href="#featured" className="chip">Öne Çıkanlar</a>
            <a href="#testimonials" className="chip">Yorumlar</a>
            <a href="#visit" className="chip">Ziyaret</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="/menu" className="chip chip-active"><Menu className="w-5 h-5" /> Menu</a>
            <a
              href="https://www.instagram.com/theberlinerybeylikduzu/"
              target="_blank"
              rel="noopener noreferrer"
              className="chip"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a href="tel:+905526659573" className="chip" aria-label="Telefon ile ara">
              <Phone className="w-5 h-5" /> Ara
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 py-6 sm:py-10 text-center fade-in-up">
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
        <section id="featured" className="max-w-5xl mx-auto px-4 pb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-deep-sage font-sans">Öne Çıkanlar</h2>
            <a href="/menu" className="inline-flex items-center text-deep-sage font-semibold hover:underline">
              Tüm Menü <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
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

        {/* Testimonials */}
        <section id="testimonials" className="max-w-5xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-deep-sage font-sans mb-5">Misafirlerimiz Ne Diyor</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Ece",
                quote: "Şehrin en iyi berlineri! Taze ve inanılmaz lezzetli.",
              },
              {
                name: "Mert",
                quote: "Kahveler harika, donutlarla müthiş bir ikili.",
              },
              {
                name: "Zeynep",
                quote: "Her ziyaretimde farklı bir favorim oluyor!",
              },
            ].map((t, i) => (
              <Card key={i} className="p-5 rounded-2xl subtle-shadow">
                <div className="flex items-center gap-1 text-soft-coral">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-deep-sage/80 font-serif mt-3">“{t.quote}”</p>
                <p className="text-deep-sage font-sans font-semibold mt-4">{t.name}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Visit Us */}
        <section id="visit" className="max-w-5xl mx-auto px-4 pb-14">
          <div className="rounded-2xl bg-warm-gray p-6 subtle-shadow">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="sm:col-span-2 space-y-3">
                <h2 className="text-2xl font-bold text-deep-sage font-sans">Bizi Ziyaret Edin</h2>
                <div className="flex items-center gap-2 text-deep-sage/80">
                  <MapPin className="w-5 h-5" />
                  <span>Beylikdüzü Yaşam Sokağı</span>
                </div>
                <div className="flex items-center gap-2 text-deep-sage/80">
                  <Clock className="w-5 h-5" />
                  <span>Her gün: 16:00 — 00:00</span>
                </div>
                <div className="flex items-center gap-2 text-deep-sage/80">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+905526659573" className="hover:underline">+90 552 665 95 73</a>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <a
                  href="https://maps.google.com/?q=41.0045556,28.6366667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <Navigation className="w-5 h-5 mr-2" /> Yol Tarifi Al
                </a>
                <a
                  href="https://www.instagram.com/theberlinerybeylikduzu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center"
                >
                  <Instagram className="w-5 h-5 mr-2" /> Güncel Paylaşımlar
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-warm-gray mt-10 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-2">
          <p className="text-deep-sage/60 font-serif text-lg">The Berlinery'yi tercih ettiğiniz için teşekkürler</p>
          <p className="text-deep-sage/40 font-serif text-sm">Taze malzemeler, özenle hazırlanır</p>
          <p className="text-deep-sage/70 font-serif text-base">
            <a href="tel:+905526659573" className="hover:underline">+90 552 665 95 73</a>
          </p>
        </div>
      </footer>

      {/* Mobile call button */}
      <a
        href="tel:+905526659573"
        className="sm:hidden fixed bottom-5 right-5 btn-primary rounded-full h-12 px-5 inline-flex items-center shadow-lg"
        aria-label="Telefon ile ara"
      >
        <Phone className="w-5 h-5 mr-2" /> Ara
      </a>
    </div>
  )
}

