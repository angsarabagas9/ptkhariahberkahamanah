import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      content: "085353887288",
      description: "Senin - Sabtu, 08:00 - 20:00"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@khairiahberkahamanah.com",
      description: "Kami akan balas dalam 24 jam"
    },
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jalan Kolonel Sugiono, Perumahan Graha Wikafuri Indah Blok E Nomor 1",
      description: "Korumba, Mandonga, Kendari"
    },
    {
      icon: Clock,
      title: "Jam Buka",
      content: "Senin - Sabtu: 08:00 - 20:00",
      description: "Minggu: 09:00 - 18:00"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hubungi <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami siap membantu Anda menemukan produk fashion yang tepat. 
            Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-purple-100 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Kirim Pesan</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap
                      </label>
                      <Input 
                        placeholder="Masukkan nama Anda"
                        className="border-purple-200 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="email@example.com"
                        className="border-purple-200 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek
                    </label>
                    <Input 
                      placeholder="Subjek pesan Anda"
                      className="border-purple-200 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <Textarea 
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      className="border-purple-200 focus:border-purple-500 resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-purple-100 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-xl">
                        <info.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-700 text-sm mb-1">{info.content}</p>
                        <p className="text-gray-500 text-xs">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Card */}
            <Card className="border-purple-100 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Lokasi Kami</h3>
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-16 w-16 text-purple-400" />
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>PT KHAIRIAH BERKAH AMANAH</strong>
                  </p>
                  <p className="text-gray-600">
                    Jalan Kolonel Sugiono Perumahan Graha Wikafuri Indah<br />
                    Blok E Nomor 1, Desa/Kelurahan Korumba<br />
                    Kecamatan Mandonga, Kota Kendari<br />
                    Provinsi Sulawesi Tenggara, Kode Pos 93111
                  </p>
                </div>
                <Button variant="outline" className="w-full mt-4 border-purple-300 text-purple-700 hover:bg-purple-50">
                  Buka di Google Maps
                </Button>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Butuh Bantuan Cepat?</h3>
                <p className="text-purple-100 mb-4">
                  Hubungi kami langsung untuk respon lebih cepat
                </p>
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                  <Phone className="mr-2 h-5 w-5" />
                  085353887288
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}