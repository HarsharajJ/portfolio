import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import ClientLayout from "./client-layout"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Harsharaj - AI & Data Science Engineer",
  description:
    "Portfolio of Harsharaj - AI & Data Science Engineer specializing in Machine Learning, Deep Learning, and AI applications.",
  keywords: "Harsharaj, AI Engineer, Data Science, Machine Learning, Deep Learning, Portfolio",
  authors: [{ name: "Harsharaj" }],
  creator: "Harsharaj",
    generator: 'v0.app',
  icons: {
    icon: [
      { url: '/placeholder-logo.png' },
      { url: '/placeholder-logo.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/placeholder-logo.png',
    apple: '/placeholder-logo.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased dark`}>
      <body className="font-sans bg-background text-foreground">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
