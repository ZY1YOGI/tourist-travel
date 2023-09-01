import type { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script';

export const metadata: Metadata = {
  robots: "index, follow",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" data-theme="light">
      <Head>
        <link rel="canonical" href="https://ma-holiday.vercel.app" />
      </Head>
      <body className="antialiased bg-body-light dark:bg-body-dark">
        {children}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E73YSXB1VL"></script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-E73YSXB1VL');
          `}
        </Script>
      </body>
    </html>
  )
}
