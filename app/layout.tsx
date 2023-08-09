import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Marsa Alam Holiday',
  keywords: ['Marsa Alam', 'Egypt', 'Trips', 'shore', 'Trips to Egypt'],
  applicationName: 'MA-HOLIDAY',
  authors: [{ name: 'Youssef Amjad', url: 'https://www.facebook.com/ZY1YOGi' }],
  creator: 'Youssef Amjad',
  verification: { google: 'wZO1kaaUlZm8cLkM3C_dSzZu_XEW4XNbS7D_Xmjwpw4' },
  category: '',
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0E1422" },
    { media: "(prefers-color-scheme: light)", color: "#E4E9F7" }
  ],
  manifest: "/manifest.json",
  robots: "index, follow",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" data-theme="light">
      <Head>
        <link rel="canonical" href="https://ma-holiday.vercel.app" />
      </Head>
      <body className="antialiased bg-body-light dark:bg-body-dark">
        {children}
      </body>
    </html>
  )
}
