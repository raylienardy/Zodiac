# ✨ Celestial Zodiac – Astrology Sign Finder

Sebuah website interaktif untuk menemukan zodiak berdasarkan tanggal lahir. Dibangun dengan HTML, CSS, dan JavaScript murni, tampilannya modern dan memukau berkat efek glassmorphism, animasi bintang bertaburan, serta elemen visual khas astrologi.

---

## 🌌 Fitur Utama

- **Penentuan Zodiak Akurat** – Masukkan tanggal & bulan, sistem akan menampilkan zodiak yang sesuai (12 tanda).
- **UI Mewah & Responsif** – Desain gelap dengan latar bintang animasi, partikel melayang, dan efek kaca (glassmorphism).
- **Gambar Default & Fallback** – Jika gambar zodiak belum tersedia, placeholder berupa bola kristal dengan simbol zodiak tetap tampil elegan.
- **Animasi Halus** – Efek getar pada kesalahan input, animasi kemunculan kartu, dan transisi shimmer saat gambar dimuat.
- **Dukungan Keyboard** – Tekan `Enter` untuk langsung mencari, tanpa perlu klik tombol.
- **Struktur File Terpisah** – HTML, CSS, dan JavaScript masing-masing dalam file sendiri untuk kemudahan pengelolaan.

---

## 🔮 Cara Kerja

1. Pengguna memilih **tanggal** (1–31) dan **bulan** (Januari–Desember).
2. JavaScript memvalidasi input, memeriksa apakah tanggal valid untuk bulan yang dipilih.
3. Fungsi `searchZodiac()` menentukan zodiak berdasarkan rentang tanggal yang sudah ditentukan.
4. Nama zodiak ditampilkan, dan gambar terkait (dari folder `img/`) dimuat.
5. Jika gambar tidak ditemukan, **fallback SVG** akan menampilkan simbol zodiak secara otomatis.

Logika zodiak mengikuti pembagian standar:

| Zodiak      | Rentang Tanggal |
| ----------- | --------------- |
| Capricorn   | 22 Des – 19 Jan |
| Aquarius    | 20 Jan – 18 Feb |
| Pisces      | 19 Feb – 20 Mar |
| Aries       | 21 Mar – 19 Apr |
| Taurus      | 20 Apr – 20 Mei |
| Gemini      | 21 Mei – 21 Jun |
| Cancer      | 22 Jun – 22 Jul |
| Leo         | 23 Jul – 22 Ags |
| Virgo       | 23 Ags – 22 Sep |
| Libra       | 23 Sep – 23 Okt |
| Scorpio     | 24 Okt – 21 Nov |
| Sagittarius | 22 Nov – 21 Des |

---

## 🚀 Cara Menjalankan

1. **Clone atau unduh repositori ini** ke komputer Anda.
2. Pastikan struktur folder seperti ini:

```
📁 proyek-zodiak/
├── index.html
├── style.css
├── script.js
├── img/
│   ├── default.png
│   ├── aries.png
│   ├── taurus.png
│   ├── gemini.png
│   ├── cancer.png
│   ├── leo.png
│   ├── virgo.png
│   ├── libra.png
│   ├── scorpio.png
│   ├── sagittarius.png
│   ├── capricorn.png
│   ├── aquarius.png
│   └── pisces.png
└── README.md
```

3. **Buka `index.html`** di browser modern (Chrome, Firefox, Edge, Safari).  
   Tidak diperlukan server lokal, karena semua file statis.

> **Catatan:** File gambar (`*.png`) bersifat opsional. Website tetap berfungsi tanpa gambar karena sudah disediakan fallback SVG. Tetapi untuk pengalaman terbaik, lengkapi dengan gambar-gambar zodiakmu sendiri.

---

## 🧪 Teknologi

- **HTML5** – Struktur semantik, canvas untuk starfield.
- **CSS3** – Flexbox, Grid, animasi keyframes, backdrop-filter, variabel kustom.
- **JavaScript (ES6+)** – DOM manipulation, event handling, logika zodiak, animasi canvas, partikel dinamis.
- **Tidak ada library/framework eksternal** – semuanya murni vanilla.

---

## 🖼️ Kebutuhan Gambar

Seluruh gambar harus ditempatkan di folder `img/`. Nama file harus sesuai dengan nama zodiak (lowercase) dan format `.png`:

- `capricorn.png`
- `aquarius.png`
- `pisces.png`
- `aries.png`
- `taurus.png`
- `gemini.png`
- `cancer.png`
- `leo.png`
- `virgo.png`
- `libra.png`
- `scorpio.png`
- `sagittarius.png`

Serta **`default.png`** sebagai placeholder awal.  
Rekomendasi resolusi: **500×500 px** dengan latar transparan.

Gunakan prompt di bawah ini untuk menghasilkan gambar default yang cocok menggunakan AI image generator:

> _“A mystical crystal ball floating with a glowing golden zodiac wheel around it, galaxy inside the ball, 12 tiny zodiac constellation symbols in gold, transparent background, digital art, soft golden and purple glow, symmetrical, elegant, no text.”_

---

## ✍️ Kustomisasi

- **Warna & Tema** – Ubah variabel di `:root` pada `style.css` untuk menyesuaikan palet warna.
- **Teks** – Semua teks (judul, label, footer) mudah diganti langsung di `index.html`.
- **Logika Zodiak** – Jika ada penyesuaian tanggal, modifikasi fungsi `searchZodiac()` di `script.js`.

---

## 📄 Lisensi

© 2023 Alphocado.  
Dibuat dengan ✨ oleh Alphocado. Silakan digunakan untuk keperluan pribadi maupun pembelajaran.  
Jangan ragu untuk mengembangkan dan menyesuaikan lebih lanjut.

---

## 💫 Kontribusi

Merasa ada yang bisa diperbaiki atau ditambahkan?  
Silakan ajukan _pull request_ atau laporkan _issue_ di repositori. Setiap saran sangat dihargai!

---

**Selamat menjelajahi bintang-bintang!** 🌟
