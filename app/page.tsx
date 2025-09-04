"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Instagram, Menu, Coffee, Donut, Star, MapPin, Clock, Phone, Navigation, ArrowRight } from "lucide-react"

export default function LandingPage() {
  const featured = [
    {
      name: "Frambuaz Berliner",
      description: "Gerçek frambuaz dolgulu, hafif pudra dokunuşu",
      price: "110 TL",
      image: "/berlinery & donut images/berlinery_frambuaz.JPG",
    },
    {
      name: "Gurme Lotus Berliner",
      description: "Lotus krema dolgulu, bisküvi kaplı",
      price: "120 TL",
      image: "/berlinery & donut images/gurme_lotus_berlinery.JPG",
    },
    {
      name: "Süslü pembe şekerli Donut",
      description: "Pembe çikolata kaplı, renkli şekerlerle süslü",
      price: "110 TL",
      image: "/berlinery & donut images/pempe_suslu_sekerli_donut.JPG",
    },
  ]

  const gallery = [
    "/gallery/IMG_6757.JPG",
    "/gallery/IMG_6761.JPG",
    "/gallery/IMG_6764.JPG",
    "/gallery/IMG_6766.JPG",
    "/gallery/IMG_6767.JPG",
    "/gallery/IMG_6768.JPG",
  ]

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const galleryRef = useRef<HTMLDivElement | null>(null)

  const scrollGallery = (direction: 1 | -1) => {
    const el = galleryRef.current
    if (!el) return
    const amount = Math.round(el.clientWidth * 0.8) * direction
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null)
      if (lightboxIndex !== null) {
        if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? null : (i + 1) % gallery.length))
        if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length))
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxIndex, gallery.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#f7f7f5]">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 border-b border-pastel-green/20">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-deep-sage font-sans font-semibold text-lg">The Berlinery</Link>
          <nav className="hidden sm:flex items-center gap-2">
            <a href="#featured" className="chip">Öne Çıkanlar</a>
            <a href="#gallery" className="chip">Galeri</a>
            <a href="#testimonials" className="chip">Yorumlar</a>
            <a href="#visit" className="chip">Ziyaret</a>
          </nav>
          <div className="hidden sm:flex items-center gap-2">
            <a href="/menu" className="chip chip-active"><Menu className="w-5 h-5" /> Menü</a>
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
          <p className="text-deep-sage/70 font-sans text-sm sm:text-base tracking-wide uppercase mt-2">Taze ve Lezzetli</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-sans tracking-tight mt-2">The Berlinery</h1>
          <p className="text-gray-600 font-serif text-lg sm:text-xl mt-3">The Berlinery’de klasik Alman Berliners’ı ve Amerikan donutlarını modern dokunuşlarla deneyimle!</p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <a href="/menu" className="btn-primary inline-flex items-center">
              <Menu className="w-5 h-5 mr-2" /> Menü
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

        {/* Gallery */}
        <section id="gallery" className="max-w-5xl mx-auto px-4 pb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-deep-sage font-sans">Berlinery’den Kareler</h2>
            <div className="hidden sm:flex items-center gap-2">
              <button className="chip" onClick={() => scrollGallery(-1)} aria-label="Önceki">‹</button>
              <button className="chip" onClick={() => scrollGallery(1)} aria-label="Sonraki">›</button>
            </div>
          </div>
          <div className="relative">
            <div
              ref={galleryRef}
              className="overflow-x-auto scrollbar-none snap-x snap-mandatory"
            >
              <div className="flex gap-3 sm:gap-4">
                {gallery.map((src, idx) => (
                  <button
                    key={src}
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative snap-center shrink-0 w-[72%] sm:w-[380px] aspect-[4/3] rounded-xl overflow-hidden bg-warm-gray focus:outline-none focus:ring-2 focus:ring-pastel-green"
                    aria-label={`Fotoğraf ${idx + 1}`}
                  >
                    <img src={src} alt={"Galeri görseli " + (idx + 1)} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/10" />
                  </button>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[var(--color-background)] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[var(--color-background)] to-transparent" />
          </div>
          <div className="sm:hidden flex items-center justify-center gap-2 mt-4">
            <button className="chip" onClick={() => scrollGallery(-1)} aria-label="Önceki">‹</button>
            <button className="chip" onClick={() => scrollGallery(1)} aria-label="Sonraki">›</button>
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

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-40 bg-black/80 flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[lightboxIndex]} alt="Büyük görsel" className="w-full h-auto rounded-xl shadow-2xl" />
            <div className="absolute inset-x-0 -bottom-12 flex items-center justify-center gap-4">
              <button
                className="chip bg-white/90"
                onClick={() => setLightboxIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length))}
                aria-label="Önceki"
              >
                ‹ Önceki
              </button>
              <button className="chip bg-white/90" onClick={() => setLightboxIndex(null)} aria-label="Kapat">Kapat</button>
              <button
                className="chip bg-white/90"
                onClick={() => setLightboxIndex((i) => (i === null ? null : (i + 1) % gallery.length))}
                aria-label="Sonraki"
              >
                Sonraki ›
              </button>
            </div>
          </div>
        </div>
      )}

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

