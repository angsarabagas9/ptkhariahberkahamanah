import { ShoppingBag, Star, TrendingUp, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const productCategories = [
  {
    id: 1,
    name: "Pakaian Pria",
    description: "Koleksi pakaian pria modern dan stylish",
    icon: Package,
    image: "/api/placeholder/400/300",
    products: 150,
    rating: 4.8
  },
  {
    id: 2,
    name: "Pakaian Wanita",
    description: "Fashion wanita trendy dan elegan",
    icon: ShoppingBag,
    image: "/api/placeholder/400/300",
    products: 200,
    rating: 4.9
  },
  {
    id: 3,
    name: "Pakaian Anak",
    description: "Pakaian anak nyaman dan berkualitas",
    icon: Star,
    image: "/api/placeholder/400/300",
    products: 120,
    rating: 4.7
  },
  {
    id: 4,
    name: "Aksesoris",
    description: "Pelengkap gaya fashion Anda",
    icon: TrendingUp,
    image: "/api/placeholder/400/300",
    products: 80,
    rating: 4.6
  }
]

const featuredProducts = [
  {
    id: 1,
    name: "Kemeja Batik Premium",
    category: "Pakaian Pria",
    price: "Rp 150.000",
    rating: 4.9,
    reviews: 234,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Dress Muslimah Modern",
    category: "Pakaian Wanita",
    price: "Rp 200.000",
    rating: 4.8,
    reviews: 189,
    badge: "New"
  },
  {
    id: 3,
    name: "Setelan Anak Karakter",
    category: "Pakaian Anak",
    price: "Rp 120.000",
    rating: 4.7,
    reviews: 156,
    badge: "Sale"
  },
  {
    id: 4,
    name: "Tas Fashion Import",
    category: "Aksesoris",
    price: "Rp 180.000",
    rating: 4.8,
    reviews: 201,
    badge: "Limited"
  }
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Koleksi <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Produk Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan berbagai pilihan fashion berkualitas untuk segala usia dan gaya. 
            Kami menyediakan koleksi terbaru dengan harga terjangkau.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {productCategories.map((category) => (
            <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-purple-100 overflow-hidden">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <category.icon className="h-16 w-16 text-purple-600" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{category.rating}</span>
                    <span className="text-sm text-gray-500">({category.products} produk)</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                    Lihat
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Produk Unggulan</h3>
            <p className="text-gray-600">Koleksi pilihan dengan penjualan tertinggi</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-purple-100 overflow-hidden">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <ShoppingBag className="h-20 w-20 text-purple-400" />
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.badge === 'Best Seller' ? 'bg-red-500 text-white' :
                      product.badge === 'New' ? 'bg-green-500 text-white' :
                      product.badge === 'Sale' ? 'bg-orange-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button size="sm" className="bg-white text-purple-700 hover:bg-purple-50">
                      Quick View
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-purple-600 font-medium">{product.category}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h4>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-700">{product.price}</span>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      + Keranjang
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold mb-4">
                Tertarik dengan Koleksi Kami?
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Kunjungi toko kami atau hubungi untuk informasi lebih lanjut tentang produk dan penawaran menarik lainnya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                  Lihat Semua Produk
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
                  Hubungi Kami
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}