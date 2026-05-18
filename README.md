# 🌿 CompoNet — Compost Network

> **Menghubungkan pedagang pasar dengan pengelola limbah organik secara langsung, efisien, dan berdampak nyata.**

CompoNet adalah platform web yang dirancang untuk menghubungkan **pedagang pasar tradisional** selaku penyedia limbah organik dengan **pegiat kompos, peternak maggot, dan komunitas urban farming** selaku pengelola limbah organik. Nama CompoNet merupakan gabungan dari kata *Compost* (kompos) dan *Network* (jaringan) yang mencerminkan misi utama platform ini — membangun jaringan pengelolaan sampah organik yang terhubung dan berdampak nyata bagi masyarakat dan lingkungan.

---

## 🚀 Demo

🔗 **Live:** https://componet-web.netlify.app

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🔐 **Autentikasi Multi-Role** | Login terpisah untuk Pedagang, Pengelola, dan Admin dengan dashboard masing-masing |
| 📋 **Waste Listing** | Pedagang posting ketersediaan limbah secara real-time dengan foto, jenis, berat, dan lokasi |
| 🔍 **Cari & Filter Limbah** | Pengelola cari listing berdasarkan kategori, lokasi, dan ketersediaan waktu |
| 📅 **Penjadwalan Pickup** | Pengelola jadwalkan pickup langsung dari platform, pedagang konfirmasi otomatis |
| 📊 **Dashboard Dampak** | Visualisasi total limbah teralihkan dari TPA dan estimasi pengurangan emisi CO₂ |
| ⭐ **Rating & Ulasan** | Penilaian dua arah setelah setiap pickup selesai untuk membangun kepercayaan ekosistem |

---

## 🛠️ Teknologi yang Digunakan

### Frontend
![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Next.js API](https://img.shields.io/badge/Next.js_API_Routes-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

### Database & Auth
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)

### Hosting & Tools
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

---

## 📁 Struktur Folder

```
componet-app/
├── app/
│   ├── page.tsx                    ← Root (redirect ke /landing)
│   ├── layout.tsx
│   ├── landing/page.tsx            ← Landing page publik
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   ├── role-selection/page.tsx
│   ├── dashboard/page.tsx          ← Dashboard pengelola
│   ├── pedagang-dashboard/page.tsx ← Dashboard pedagang
│   ├── cari-limbah/page.tsx
│   ├── jadwal-saya/page.tsx
│   ├── rating-ulasan/page.tsx
│   ├── dampak-saya/page.tsx
│   ├── profil/page.tsx
│   └── pengaturan/page.tsx
├── components/
│   ├── ui/                         ← Komponen dasar (Button, Card, dll)
│   └── layout/                     ← Sidebar, Navbar
├── constants/
│   └── mockData.ts                 ← Data mock untuk development
├── lib/
│   ├── supabase.ts                 ← Koneksi Supabase
│   ├── auth-store.ts               ← State autentikasi
│   └── utils.ts                    ← Helper functions
├── public/
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## 🗄️ Skema Database

```sql
-- Profil pengguna
profiles (id, nama, role, nama_pasar, nomor_kios, no_hp, foto_url, created_at)

-- Listing limbah organik
waste_listings (id, pedagang_id, jenis_limbah, berat_kg, foto_url, waktu_tersedia, catatan, status, created_at)

-- Jadwal pickup
pickups (id, listing_id, pengelola_id, tanggal_pickup, waktu_pickup, catatan, status, created_at)

-- Rating dan ulasan
ratings (id, pickup_id, dari_user_id, untuk_user_id, nilai, komentar, created_at)
```

**Role pengguna:** `pedagang` · `pengelola` · `admin`

**Status listing:** `aktif` · `dijadwalkan` · `selesai`

**Status pickup:** `menunggu` · `dikonfirmasi` · `selesai`

---

## 📱 Rencana Pengembangan

- [ ] Peta interaktif lokasi pasar aktif
- [ ] Notifikasi otomatis via WhatsApp
- [ ] Panel admin dan laporan dampak
- [ ] Aplikasi mobile Android & iOS (React Native + Expo)

---

## 👥 Tim Pengembang

Dikembangkan sebagai bagian dari **TechSprint Competition** oleh:

| Nama | Role |
|---|---|
| Zuvika Dwi Yustina | Fullstack Developer |
| Balqis Safitri | UI/UX Design & Frontend Developer |

---

## 📄 Lisensi

Project ini dikembangkan untuk keperluan kompetisi TechSprint.

---

<div align="center">
  <strong>🌿 CompoNet — Compost Network untuk Indonesia yang lebih bersih</strong>
</div>
