import { Heart, Award, Users, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Kualitas Terbaik",
      description: "Kami hanya menyediakan produk fashion dengan kualitas terbaik dan bahan yang nyaman."
    },
    {
      icon: Award,
      title: "Harga Terjangkau",
      description: "Menawarkan harga kompetitif untuk semua kalangan tanpa mengurangi kualitas."
    },
    {
      icon: Users,
      title: "Pelayanan Prima",
      description: "Tim kami siap membantu Anda menemukan pakaian yang sesuai dengan kebutuhan."
    },
    {
      icon: Target,
      title: "Kepuasan Pelanggan",
      description: "Kepuasan Anda adalah prioritas utama kami dalam setiap transaksi."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tentang <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">PT KHAIRIAH BERKAH AMANAH</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami adalah perusahaan perdagangan eceran pakaian yang berkomitmen untuk menyediakan produk fashion berkualitas 
            dengan harga terjangkau untuk masyarakat Kendari dan sekitarnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi retailer fashion terkemuka di Sulawesi Tenggara yang dikenal akan kualitas produk, 
                pelayanan terbaik, dan harga yang kompetitif.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Misi Kami</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Menyediakan koleksi fashion yang trendy dan berkualitas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Memberikan pengalaman berbelanja yang menyenangkan</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Menjadi mitra bisnis yang terpercaya untuk supplier dan pelanggan</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Berkontribusi pada perekonomian lokal</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
              <div className="aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="relative w-40 h-40 mx-auto">
                    <img
                      src="/company-logo.png"
                      alt="PT KHAIRIAH BERKAH AMANAH"
                      className="w-full h-full object-contain bg-white rounded-2xl p-6 shadow-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">Berkah Amanah</h4>
                    <p className="text-gray-600">Fashion Retail Terpercaya Sejak 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}