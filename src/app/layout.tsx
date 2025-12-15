import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT KHAIRIAH BERKAH AMANAH - Fashion Retail Terpercaya",
  description: "PT KHAIRIAH BERKAH AMANAH adalah perusahaan perdagangan eceran pakaian terkemuka di Kendari yang menyediakan berbagai pilihan fashion berkualitas dengan harga terjangkau.",
  keywords: ["PT KHAIRIAH BERKAH AMANAH", "pakaian", "fashion", "retail", "Kendari", "Sulawesi Tenggara", "baju", "clothing"],
  authors: [{ name: "PT KHAIRIAH BERKAH AMANAH" }],
  icons: {
    icon: "/company-logo.png",
  },
  openGraph: {
    title: "PT KHAIRIAH BERKAH AMANAH - Fashion Retail Terpercaya",
    description: "Perusahaan perdagangan eceran pakaian terkemuka di Kendari dengan berbagai pilihan fashion berkualitas",
    url: "https://khairiahberkahamanah.com",
    siteName: "PT KHAIRIAH BERKAH AMANAH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT KHAIRIAH BERKAH AMANAH",
    description: "Fashion retail terpercaya di Kendari dengan koleksi pakaian berkualitas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
