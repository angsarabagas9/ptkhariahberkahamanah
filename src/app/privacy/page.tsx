import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Kebijakan Privasi <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">PT KHAIRIAH BERKAH AMANAH</span>
            </h1>
            <p className="text-gray-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-purple max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Pendahuluan</h2>
              <p className="text-gray-700 leading-relaxed">
                PT KHAIRIAH BERKAH AMANAH ("kami", "perusahaan") sangat menjaga privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda saat Anda menggunakan layanan kami, mengunjungi website kami, atau berinteraksi dengan kami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">2.1 Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat pengiriman</li>
                    <li>Tanggal lahir</li>
                    <li>Informasi pembayaran (dengan enkripsi)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">2.2 Informasi Teknis</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Alamat IP</li>
                    <li>Jenis browser dan perangkat</li>
                    <li>Informasi sistem operasi</li>
                    <li>Cookies dan data tracking</li>
                    <li>Riwayat browsing di website kami</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Penggunaan Informasi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami menggunakan informasi yang kami kumpulkan untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Memproses dan menyelesaikan transaksi pembelian</li>
                <li>Menyediakan layanan pelanggan yang lebih baik</li>
                <li>Mengirimkan informasi produk dan promosi yang relevan</li>
                <li>Meningkatkan pengalaman berbelanja Anda</li>
                <li>Melindungi dari aktivitas penipuan dan keamanan</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
                <li>Menganalisis tren dan penggunaan website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pembagian Informasi</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk keperluan marketing. 
                Informasi Anda hanya akan dibagikan dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Dengan persetujuan Anda yang eksplisit</li>
                <li>Kepada mitra bisnis yang membantu kami mengoperasikan bisnis (jasa pengiriman, payment gateway)</li>
                <li>Jika diperlukan oleh hukum atau untuk melindungi hak-hak kami</li>
                <li>Dalam kasus penjualan atau merger perusahaan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Keamanan Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PT KHAIRIAH BERKAH AMANAH berkomitmen untuk melindungi keamanan informasi pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Enkripsi data sensitif dengan teknologi SSL</li>
                <li>Akses terbatas ke informasi pribadi</li>
                <li>System keamanan yang terus diperbarui</li>
                <li>Monitoring keamanan 24/7</li>
                <li>Training reguler untuk staf tentang keamanan data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Website kami menggunakan cookies untuk meningkatkan pengalaman browsing Anda. Cookies adalah file teks kecil yang disimpan di browser Anda. Kami menggunakan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                <li><strong>Cookies Performa:</strong> Membantu kami memahami cara penggunaan website</li>
                <li><strong>Cookies Fungsional:</strong> Mengingat preferensi Anda</li>
                <li><strong>Cookies Marketing:</strong> Menampilkan iklan yang relevan</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Anda dapat mengatur penggunaan cookies melalui pengaturan browser Anda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Hak Anda</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sebagai pemilik data, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda</li>
                <li>Menolak penggunaan informasi untuk marketing</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Membatasi pemrosesan data Anda</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Penyimpanan Data</h2>
              <p className="text-gray-700 leading-relaxed">
                Informasi pribadi Anda akan disimpan selama diperlukan untuk tujuan pengumpulan atau sesuai dengan periode retensi yang diwajibkan oleh hukum. 
                Setelah periode tersebut, informasi akan dihapus atau dianonimkan secara aman.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Perubahan Kebijakan</h2>
              <p className="text-gray-700 leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diinformasikan melalui website atau email Anda. 
                Penggunaan terus menerus layanan kami setelah perubahan berarti Anda menyetujui kebijakan yang diperbarui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Kontak Kami</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlakuan data pribadi Anda, silakan hubungi kami:
              </p>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="space-y-2">
                  <p className="font-semibold text-purple-900">PT KHAIRIAH BERKAH AMANAH</p>
                  <p className="text-gray-700">Email: privacy@khairiahberkahamanah.com</p>
                  <p className="text-gray-700">Telepon: 085353887288</p>
                  <p className="text-gray-700">
                    Alamat: Jalan Kolonel Sugiono Perumahan Graha Wikafuri Indah Blok E Nomor 1, 
                    Korumba, Mandonga, Kota Kendari, Provinsi Sulawesi Tenggara, Kode Pos 93111
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}