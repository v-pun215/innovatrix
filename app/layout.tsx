import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Rare Beauty x Justin Bieber | InnovateTrix",
  description: "Beauty for everyone. A collaboration redefining gender-neutral beauty through the lens of inclusivity, self-expression, and authenticity.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${nunitoSans.variable} bg-background`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
