'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Produk', href: '#products' },
    { label: 'Kontak', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-10 h-10 mr-3">
              <img
                src="/company-logo.png"
                alt="PT KHAIRIAH BERKAH AMANAH"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PT KHAIRIAH BERKAH AMANAH
              </h1>
              <p className="text-xs text-gray-600">Fashion Retail Terpercaya</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 mr-3">
                    <img
                      src="/company-logo.png"
                      alt="PT KHAIRIAH BERKAH AMANAH"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      PT KHAIRIAH BERKAH AMANAH
                    </h2>
                    <p className="text-sm text-gray-600">Fashion Retail</p>
                  </div>
                </div>
                
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-purple-600" />
                    085353887288
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                    Kendari, Sultra
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full">
                  Hubungi Kami
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}