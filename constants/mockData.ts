// 1. DEFINISI INTERFACE DATA
export interface UserProfile {
  nama: string;
  jenis_pengelola: string[];
  lokasi: string;
  rating: number;
  pickup: number;
  dialihkan: string;
  pasar_aktif: number;
  limbah_bisa_kelola: string[];
  kapasitas_harian: number;
  frekuensi_pickup_per_minggu: string;
  jangkauan_km: number;
  keterangan: string;
}

export interface PickupSchedule {
  id: string;
  tanggal: string;
  jam: string;
  limbah: string;
  pengelola: string;
  status: 'Terjadwal' | 'Menunggu';
}

export interface ActivityLog {
  id: string;
  aksi: string;
  waktu: string;
}

export interface LimbahItem {
  id: string;
  judul: string;
  kategori: 'Sayuran' | 'Ampas';
  berat: string;
  lokasi: string;
  waktu: string;
  gambarUrl: string;
}

export interface ImpactStats {
  limbah_dialihkan: number;
  target_bulanan: number;
  sisa_target: number;
  pencapaian_persen: number;
  total_pickup: number;
  co2_berkurang: number;
  bulan_ini: string;
}

export interface UserPreferences {
  notifikasi_posting_limbah: boolean;
  notifikasi_jadwal_pickup: boolean;
  notifikasi_hari_ini: boolean;
  notifikasi_rating: boolean;
  notifikasi_dampak: boolean;
  tampilkan_hp: boolean;
  profil_publik: boolean;
}

// ==========================================================================
// 2. EXPORT DATA DUMMY UTUH COMPONET (WAJIB ADA SEMUA)
// ==========================================================================

// Data Profil Lengkap Balqis (Memperbaiki Error Profil)
export const mockUserProfile: UserProfile = {
  nama: 'Balqis Safitri',
  jenis_pengelola: ['Pegiat kompos'],
  lokasi: 'Sokaraja, Banyumas',
  rating: 4.8,
  pickup: 32,
  dialihkan: '320 kg',
  pasar_aktif: 2,
  limbah_bisa_kelola: ['Sisa Sayuran', 'Kulit Buah', 'Ampas Kelapa'],
  kapasitas_harian: 50,
  frekuensi_pickup_per_minggu: '3-4 kali',
  jangkauan_km: 10,
  keterangan: 'Siap mengambil limbah organik pasar skala kecil hingga menengah setiap pagi jam 08.00-10.00 WIB.'
};

// Data Jadwal Dashboard
export const mockPickupSchedules: PickupSchedule[] = [
  { id: 's1', tanggal: '2025-04-21', jam: '09:00', limbah: 'Sayuran 25kg', pengelola: 'Bu Sari', status: 'Terjadwal' },
  { id: 's2', tanggal: '2025-04-21', jam: '13:00', limbah: 'Sisa sayuran', pengelola: 'Pasar Pon', status: 'Menunggu' },
  { id: 's3', tanggal: '2025-04-21', jam: '14:20', limbah: 'Batang jagung', pengelola: 'Pak Tono', status: 'Terjadwal' },
];

// Data Notifikasi / Log Aktivitas
export const mockActivityLog: ActivityLog[] = [
  { id: 'a1', aksi: 'Pickup selesai — Bu Sari, Pasar Wage - 14 kg sayuran diambil', waktu: '2 jam lalu' },
  { id: 'a2', aksi: 'Jadwal baru dikonfirmasi — Pasar Pon, sore ini 15.00', waktu: '4 jam lalu' },
  { id: 'a3', aksi: 'Posting baru cocok untukmu — Sisa rempah & bumbu, 5kg', waktu: '19 jam lalu' },
];

// Data Dampak Lingkungan (Memperbaiki Error Dampak Saya)
export const mockImpactStats: ImpactStats = {
  limbah_dialihkan: 124,
  target_bulanan: 180,
  sisa_target: 56,
  pencapaian_persen: 69,
  total_pickup: 31,
  co2_berkurang: 62,
  bulan_ini: 'April'
};

// Data Pengaturan (Memperbaiki Error Pengaturan)
export const mockUserPreferences: UserPreferences = {
  notifikasi_posting_limbah: true,
  notifikasi_jadwal_pickup: true,
  notifikasi_hari_ini: false,
  notifikasi_rating: true,
  notifikasi_dampak: true,
  tampilkan_hp: true,
  profil_publik: true
};

// Data Halaman Cari Limbah (4 Item Terpilih Paling Rapi)
export const mockLimbahLengkap: LimbahItem[] = [
  {
    id: 'l1',
    judul: 'Sisa sayuran hijau',
    kategori: 'Sayuran',
    berat: '12 kg',
    lokasi: 'Kios A3 - Tersedia pagi ini',
    waktu: 'Tersedia',
    gambarUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'l2',
    judul: 'Ampas buah campuran',
    kategori: 'Ampas',
    berat: '9 kg',
    lokasi: 'Pasar Kliwon - Sore ini',
    waktu: 'Tersedia sore',
    gambarUrl: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'l3',
    judul: 'Batang sayuran hijau',
    kategori: 'Sayuran',
    berat: '12 kg',
    lokasi: 'Kios A3 - Tersedia pagi ini',
    waktu: 'Lapak 7',
    gambarUrl: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'l4',
    judul: 'Kulit jeruk',
    kategori: 'Ampas',
    berat: '5 kg',
    lokasi: 'Los Jeruk - Tersedia pagi ini',
    waktu: 'Tersedia',
    gambarUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'l5',
    judul: 'Ampas kopi',
    kategori: 'Ampas',
    berat: '5-20 kg',
    lokasi: 'Coffee Booth - Tersedia pagi ini',
    waktu: 'Ampas',
    gambarUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'l6',
    judul: 'Kulit pisang',
    kategori: 'Ampas',
    berat: '5-10 kg',
    lokasi: 'Los Pisang - Tersedia pagi ini',
    waktu: 'Diambil',
    gambarUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=500&q=80'
  }
];