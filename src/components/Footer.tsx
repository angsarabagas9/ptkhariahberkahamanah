import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-3">
                <img
                  src="/company-logo.png"
                  alt="PT KHAIRIAH BERKAH AMANAH"
                  className="w-full h-full object-contain bg-white rounded-lg p-1"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">PT KHAIRIAH BERKAH AMANAH</h3>
                <p className="text-purple-200 text-sm">Fashion Retail Terpercaya</p>
              </div>
            </div>
            <p className="text-purple-100 mb-4 leading-relaxed">
              Perusahaan perdagangan eceran pakaian terkemuka di Kendari yang menyediakan berbagai pilihan fashion berkualitas dengan harga terjangkau.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-purple-100 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-purple-100 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#products" className="text-purple-100 hover:text-white transition-colors">Produk</a></li>
              <li><a href="#contact" className="text-purple-100 hover:text-white transition-colors">Kontak</a></li>
              <li><a href="/privacy" className="text-purple-100 hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="/terms" className="text-purple-100 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-purple-300 mt-0.5" />
                <div>
                  <p className="text-purple-100">Telepon</p>
                  <p className="text-white font-medium">085353887288</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-purple-300 mt-0.5" />
                <div>
                  <p className="text-purple-100">Email</p>
                  <p className="text-white font-medium">info@khairiahberkahamanah.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-purple-300 mt-0.5" />
                <div>
                  <p className="text-purple-100">Alamat</p>
                  <p className="text-white text-sm leading-relaxed">
                    Jalan Kolonel Sugiono<br />
                    Perumahan Graha Wikafuri Indah<br />
                    Blok E Nomor 1, Korumba, Mandonga<br />
                    Kota Kendari, Sulawesi Tenggara<br />
                    Kode Pos: 93111
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-200">
            © {new Date().getFullYear()} PT KHAIRIAH BERKAH AMANAH. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}