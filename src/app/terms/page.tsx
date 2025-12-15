import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Syarat dan Ketentuan <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">PT KHAIRIAH BERKAH AMANAH</span>
            </h1>
            <p className="text-gray-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-purple max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Penerimaan Syarat</h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di PT KHAIRIAH BERKAH AMANAH. Syarat dan Ketentuan ini mengatur penggunaan website, layanan, dan produk yang kami sediakan. 
                Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informasi Perusahaan</h2>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="space-y-2">
                  <p className="font-semibold text-purple-900">PT KHAIRIAH BERKAH AMANAH</p>
                  <p className="text-gray-700">Bidang Usaha: Perdagangan Eceran Pakaian</p>
                  <p className="text-gray-700">
                    Alamat: Jalan Kolonel Sugiono Perumahan Graha Wikafuri Indah Blok E Nomor 1, 
                    Korumba, Mandonga, Kota Kendari, Provinsi Sulawesi Tenggara, Kode Pos 93111
                  </p>
                  <p className="text-gray-700">Telepon: 085353887288</p>
                  <p className="text-gray-700">Email: info@khairiahberkahamanah.com</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Layanan Kami</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PT KHAIRIAH BERKAH AMANAH menyediakan layanan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Penjualan eceran pakaian untuk pria, wanita, dan anak-anak</li>
                <li>Aksesoris fashion dan pelengkap gaya</li>
                <li>Konsultasi fashion dan styling</li>
                <li>Layanan pelanggan dan purnajual</li>
                <li>Pengiriman produk ke seluruh Indonesia</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pendaftaran Akun</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">4.1 Persyaratan Pendaftaran</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Usia minimal 18 tahun atau dengan persetujuan orang tua</li>
                    <li>Memberikan informasi yang benar dan akurat</li>
                    <li>Menjaga kerahasiaan informasi akun</li>
                    <li> Bertanggung jawab atas semua aktivitas di akun Anda</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">4.2 Keamanan Akun</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Anda bertanggung jawab untuk menjaga keamanan akun Anda. Kami tidak bertanggung jawab atas kerugian yang disebabkan oleh penggunaan akun yang tidak sah.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Produk dan Harga</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">5.1 Ketersediaan Produk</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kami berusaha untuk menyajikan informasi produk yang akurat, namun ketersediaan stok dapat berubah sewaktu-waktu. 
                    Kami berhak membatasi jumlah pembelian untuk produk tertentu.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">5.2 Harga</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Harga yang tercantum dapat berubah tanpa pemberitahuan sebelumnya. 
                    Harga belum termasuk biaya pengiriman dan biaya lainnya yang mungkin timbul.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">5.3 Kualitas Produk</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kami berkomitmen untuk menyediakan produk berkualitas tinggi. 
                    Semua produk melalui proses quality control sebelum dikirim kepada pelanggan.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Proses Pembelian</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">6.1 Pemesanan</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Pilih produk yang diinginkan</li>
                    <li>Tambahkan ke keranjang belanja</li>
                    <li>Isi informasi pengiriman yang lengkap</li>
                    <li>Pilih metode pembayaran</li>
                    <li>Konfirmasi pesanan</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">6.2 Pembayaran</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kami menerima berbagai metode pembayaran termasuk transfer bank, e-wallet, dan pembayaran tunai di toko. 
                    Pembayaran harus diselesaikan sesuai dengan batas waktu yang ditentukan.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Pengiriman</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">7.1 Waktu Pengiriman</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Estimasi waktu pengiriman adalah 1-7 hari kerja tergantung lokasi. 
                    Kami akan memberikan nomor resi untuk tracking pengiriman.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">7.2 Biaya Pengiriman</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Biaya pengiriman dihitung berdasarkan berat produk dan lokasi pengiriman. 
                    Kami menawarkan gratis ongkir untuk pembelian minimum tertentu.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Kebijakan Pengembalian</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">8.1 Syarat Pengembalian</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Produk dikembalikan dalam 7 hari setelah penerimaan</li>
                    <li>Produk masih dalam kondisi asli dan tidak digunakan</li>
                    <li>Label dan tag produk masih terpasang</li>
                    <li>Disertai dengan bukti pembelian</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">8.2 Proses Pengembalian</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hubungi layanan pelanggan kami untuk memulai proses pengembalian. 
                    Pengembalian dana akan diproses dalam 3-5 hari kerja setelah produk diterima.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Hak Kekayaan Intelektual</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Semua konten di website ini termasuk namun tidak terbatas pada logo, desain, teks, grafik, dan gambar 
                merupakan hak milik PT KHAIRIAH BERKAH AMANAH dan dilindungi oleh hukum hak kekayaan intelektual.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dilarang keras untuk menyalin, mendistribusikan, atau menggunakan konten kami tanpa izin tertulis dari PT KHAIRIAH BERKAH AMANAH.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Batasan Tanggung Jawab</h2>
              <p className="text-gray-700 leading-relaxed">
                PT KHAIRIAH BERKAH AMANAH tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial 
                yang timbul dari penggunaan website atau layanan kami, termasuk namun tidak terbatas pada kehilangan data atau keuntungan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Privasi</h2>
              <p className="text-gray-700 leading-relaxed">
                Privasi Anda sangat penting bagi kami. Penggunaan data pribadi Anda diatur dalam Kebijakan Privasi kami yang dapat diakses melalui link di footer website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-700 leading-relaxed">
                Kami berhak untuk mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan berlaku efektif segera setelah dipublikasikan di website. 
                Penggunaan terus menerus layanan kami setelah perubahan berarti Anda menyetujui syarat yang diperbarui.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Hukum yang Berlaku</h2>
              <p className="text-gray-700 leading-relaxed">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap sengketa akan diselesaikan melalui negosiasi yang baik atau melalui pengadilan yang berwenang di Kendari.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Kontak Kami</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="space-y-2">
                  <p className="font-semibold text-purple-900">PT KHAIRIAH BERKAH AMANAH</p>
                  <p className="text-gray-700">Email: legal@khairiahberkahamanah.com</p>
                  <p className="text-gray-700">Telepon: 085353887288</p>
                  <p className="text-gray-700">
                    Alamat: Jalan Kolonel Sugiono Perumahan Graha Wikafuri Indah Blok E Nomor 1, 
                    Korumba, Mandonga, Kota Kendari, Provinsi Sulawesi Tenggara, Kode Pos 93111
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl text-center">
                <p className="text-purple-900 font-medium">
                  Dengan menggunakan layanan PT KHAIRIAH BERKAH AMANAH, Anda menyatakan telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}