import './globals.css'

export const metadata = {
  title: 'TRAVEL TRIAL',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" data-theme="light">
      <body className="antialiased bg-body-light dark:bg-body-dark">
        {children}
      </body>
    </html>
  )
}
