import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gamifactive - Serious gamification for healthcare and education',
  description: 'Custom games and gamification for universities, hospitals, foundations and pharma. Consultancy, development and proven impact.',
  keywords: 'gamification, education, healthcare, university, hospital, pharma, serious games',
  authors: [{ name: 'Gamifactive' }],
  openGraph: {
    title: 'Gamifactive - Gamification that amplifies knowledge and impact',
    description: 'We develop educational and inspiring games for universities, hospitals, foundations and pharma',
    url: 'https://gamifactive.com',
    siteName: 'Gamifactive',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gamifactive - Gamification that amplifies knowledge and impact',
    description: 'We develop educational and inspiring games for universities, hospitals, foundations and pharma',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Gamifactive",
              "url": "https://gamifactive.com",
              "description": "Serious gamification for healthcare and education",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://gamifactive.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
