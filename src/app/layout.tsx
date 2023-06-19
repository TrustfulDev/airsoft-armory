import './globals.css';
import { Navbar, Footer } from "@/components";

export const metadata = {
  title: 'Toy Soldiers',
  description: 'The Best Bay Area Airsoft Group.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link as="style" rel="stylesheet preload prefetch" href="https://use.typekit.net/lgn2vho.css" />
      </head>
      
      <body>
        <Navbar />

        <main id="main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
