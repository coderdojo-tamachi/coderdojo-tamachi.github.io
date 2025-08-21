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
  keywords: [
    'CoderDojo', '子ども', 'たまち', '港区', '田町', '三田', '東京都', 'プログラミング道場',
    'Scratch', 'HTML', 'CSS', 'Python', 'マイクロビット', '無料', 'プログラミング',
    'IT教育', '小学生', '中学生', '高校生'
  ],
  authors: [{ name: 'CoderDojoたまち' }],
  creator: 'CoderDojoたまち',
  publisher: 'CoderDojoたまち',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://coderdojo-tamachi.github.io',
    siteName: 'CoderDojoたまち',
    title: 'CoderDojoたまち - 子どものためのプログラミング道場',
    description: 'CoderDojoたまちは、7〜17歳の子どもたちを対象にした、無料のプログラミング道場です。',
    images: [
      {
        url: 'https://coderdojo-tamachi.github.io/coderdojo-tamachi-logo.svg',
        width: 800,
        height: 600,
        alt: 'CoderDojoたまちロゴ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@coderdojo',
    creator: '@coderdojo',
    title: 'CoderDojoたまち - 子どものためのプログラミング道場',
    description: 'CoderDojoたまちは、7〜17歳の子どもたちを対象にした、無料のプログラミング道場です。',
    images: ['https://coderdojo-tamachi.github.io/coderdojo-tamachi-logo.svg'],
  },
  verification: {
    google: 'kPLEiPDqeUsTypXdTPLXKaSW8xFhcG4rFL3K1knJdXY',
  },
  alternates: {
    canonical: 'https://coderdojo-tamachi.github.io',
  },
  icons: {
    icon: [
      { url: 'favicon.svg', type: 'image/svg+xml' },
      { url: 'coderdojo-tamachi-logo.svg', type: 'image/svg+xml' }
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
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="coderdojo-tamachi-logo.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "CoderDojoたまち",
              "alternateName": "CoderDojo Tamachi",
              "description": "CoderDojoたまちは、7〜17歳の子どもたちを対象にした、無料のプログラミング道場です。Scratch、HTML/CSS、Python、マイクロビットなど、様々なプログラミングを学ぶことができます。",
              "url": "https://coderdojo-tamachi.github.io",
              "logo": "https://coderdojo-tamachi.github.io/coderdojo-tamachi-logo.svg",
              "image": "https://coderdojo-tamachi.github.io/coderdojo-tamachi-logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "東京都港区",
                "addressCountry": "JP"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Japanese"
              },
              "educationalCredentialAwarded": "プログラミング",
              "educationalLevel": "小学生・中学生・高校生",
              "teaches": [
                "Scratch",
                "HTML",
                "CSS", 
                "Python",
                "マイクロビット",
                "プログラミング"
              ],
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "student",
                "audienceType": "children",
                "suggestedMinAge": 7,
                "suggestedMaxAge": 17
              },
              "isAccessibleForFree": true,
              "inLanguage": "ja"
            })
          }}
        />
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
