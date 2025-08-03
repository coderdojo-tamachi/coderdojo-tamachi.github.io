import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CoderDojoたまち - 子どものためのプログラミング道場",
  description:
    "CoderDojoたまちは、7〜17歳の子どもたちを対象にした、無料のプログラミング道場です。Scratch、HTML/CSS、Python、マイクロビットなど、様々なプログラミングを学ぶことができます。",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/coderdojo-tamachi-logo.svg', type: 'image/svg+xml' }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/coderdojo-tamachi-logo.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e14ac0b3-453b-4afd-b211-a7f5e4160002"
        />
      </body>
    </html>
  )
}
