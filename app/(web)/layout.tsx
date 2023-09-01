import './index.css';
import type { Metadata } from 'next'
import Script from 'next/script';


export const metadata: Metadata = {
  robots: "index, follow",
}

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  )
}
