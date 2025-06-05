##**🪨📄✂️ Batu Gunting Kertas**##

Proyek ini adalah implementasi game Batu-Gunting-Kertas klasik di mana AI (komputer) mencoba memprediksi pilihan pengguna berdasarkan histori permainan sebelumnya. Program ini dibuat dengan JavaScript dan menggunakan pendekatan sederhana dari machine learning dan logika seperti decision tree.

#**🎮 Cara Kerja**##

Pengguna memilih salah satu: batu, kertas, atau gunting.
AI akan menganalisis histori pilihan pengguna sebelumnya.
Berdasarkan frekuensi, AI akan memprediksi kemungkinan pilihan selanjutnya dan memilih opsi terbaik untuk mengalahkannya.
Skor akan diperbarui sesuai hasil:
1. Menang
2. Kalah
3. Seri

#**🧠 Algoritma AI**#

Meskipun tidak menggunakan machine learning kompleks atau model yang dilatih, program ini menggunakan strategi prediksi sederhana yang menyerupai pohon keputusan (decision tree):

AI menyimpan jumlah masing-masing pilihan pengguna (batu, gunting, kertas).
Ketika pengguna bermain, AI melihat pilihan yang paling sering dilakukan pengguna.
Lalu AI memilih counter move (misalnya, jika pengguna paling sering memilih batu, maka AI akan memilih kertas).
Jika belum ada histori, AI memilih secara acak.
Strategi ini membuat AI seolah-olah belajar dari kebiasaan pemain — meskipun menggunakan pendekatan rule-based dan bukan model ML sesungguhnya
