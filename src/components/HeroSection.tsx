import { ArrowRight, Star, ShoppingBag, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-2" />
                Fashion Retail Terpercaya di Kendari
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  PT KHAIRIAH BERKAH AMANAH
                </span>
                <br />
                <span className="text-gray-900 text-3xl md:text-5xl">
                  Fashion Berkualitas untuk Anda
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Temukan koleksi pakaian terkini dengan kualitas terbaik dan harga terjangkau. 
                Kami menyediakan berbagai pilihan fashion untuk segala usaha dan gaya hidup Anda.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg">
                Lihat Koleksi Kami
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg">
                Hubungi Kami
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-sm text-gray-600">Produk Fashion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="relative w-32 h-32 mx-auto">
                      <img
                        src="/company-logo.png"
                        alt="PT KHAIRIAH BERKAH AMANAH"
                        className="w-full h-full object-contain bg-white rounded-2xl p-4 shadow-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900">Kualitas Terjamin</h3>
                      <p className="text-gray-600">100% Original Product</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 z-20">
              <Card className="bg-white shadow-lg border-purple-200">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Trending</p>
                    <p className="text-xs text-gray-600">Koleksi Terbaru</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="absolute -bottom-4 -left-4 z-20">
              <Card className="bg-white shadow-lg border-pink-200">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <ShoppingBag className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Best Seller</p>
                    <p className="text-xs text-gray-600">Produk Unggulan</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}