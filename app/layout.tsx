import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./global.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "The Berlinery",
  description: "Fresh donuts and coffee — handcrafted daily.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "The Berlinery",
              telephone: "+905526659573",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Beylikdüzü Yaşam Sokağı",
                addressLocality: "İstanbul",
                addressCountry: "TR",
              },
              openingHours: "Mo-Su 16:00-24:00",
              sameAs: [
                "https://www.instagram.com/theberlinerybeylikduzu/",
                "https://maps.google.com/?q=41.0045556,28.6366667",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}


