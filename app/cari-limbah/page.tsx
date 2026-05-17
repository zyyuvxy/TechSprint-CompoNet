'use client';

import { useState } from 'react';
import { MapPin, SlidersHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockLimbahLengkap, LimbahItem } from '@/constants/mockData';

export default function CariLimbahPage() {
  const [selectedKategori, setSelectedKategori] = useState<string>('Semua');

  const filteredLimbah = mockLimbahLengkap.filter((item) => {
    return selectedKategori === 'Semua' || item.kategori === selectedKategori;
  });

  // Ambil 2 data teratas untuk Highlight Utama (Normal size)
  const highlightItems = filteredLimbah.slice(0, 2);
  // Sisanya mengalir ke listing bawah secara otomatis
  const listingItems = filteredLimbah.slice(2);

  return (
    <div className="max-w-7xl mx-auto space-y-6">

      {/* ── 1. Filter Kategori ── */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2 overflow-x-auto py-1">
          {['Semua', 'Sayuran', 'Ampas'].map((kat) => (
            <button
              key={kat}
              onClick={() => setSelectedKategori(kat)}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                selectedKategori === kat
                  ? 'bg-[#EB8A31] text-white shadow-sm'
                  : 'bg-white border border-[#1E3B2F]/10 text-[#1E3B2F] hover:bg-[#EAF3E7]'
              }`}
            >
              {kat}
            </button>
          ))}
        </div>
        <Button variant="outline" className="flex items-center gap-2 border-[#1E3B2F]/10 text-[#1E3B2F] bg-white rounded-xl text-xs md:text-sm">
          <SlidersHorizontal className="w-4 h-4" /> Filter Lanjutan
        </Button>
      </div>

      {/* ── 2. Highlight Atas: 2 Kartu Ukuran Normal & Pas ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlightItems.map((item: LimbahItem) => (
          <Card key={item.id} className="border border-[#1E3B2F]/10 bg-white overflow-hidden rounded-2xl flex flex-col max-w-xl mx-auto w-full">
            {/* Gambar Kunci Tinggi Maksimal agar tidak memanjang raksasa */}
            <div className="relative h-44 w-full bg-[#EAF3E7]">
              <img src={item.gambarUrl} alt={item.judul} className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-5 flex flex-col justify-between flex-1 gap-2">
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-[#1E3B2F]">{item.judul}</h3>
                <div className="flex items-center gap-1 text-xs text-[#5A7365]">
                  <MapPin className="w-3.5 h-3.5 text-[#EB8A31] flex-shrink-0" />
                  <span>{item.lokasi}</span>
                </div>
                <p className="text-base font-bold text-[#1E3B2F]">{item.berat}</p>
                <span className="inline-block bg-[#EB8A31]/10 text-[#EB8A31] text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {item.kategori}
                </span>
              </div>
              <Button className="w-full bg-[#EB8A31] hover:bg-[#EB8A31]/90 text-white font-bold rounded-xl py-2 mt-2 text-xs">
                Jadwalkan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ── 3. Listing Lainnya ── */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[#1E3B2F]">Listing lainnya</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {listingItems.map((item: LimbahItem) => (
            <Card key={item.id} className="border border-[#1E3B2F]/10 bg-white overflow-hidden rounded-2xl p-4 flex items-center justify-between gap-4">
              
              {/* Gambar Kotak Mini Sebelah Kiri */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-[#EAF3E7] flex-shrink-0">
                <img src={item.gambarUrl} alt={item.judul} className="w-full h-full object-cover" />
              </div>

              {/* Informasi Tengah */}
              <div className="flex-1 min-w-0 space-y-1">
                <h3 className="font-bold text-sm md:text-base text-[#1E3B2F] truncate">{item.judul}</h3>
                <div className="flex items-center gap-1 text-xs text-[#5A7365]">
                  <MapPin className="w-3.5 h-3.5 text-[#EB8A31] flex-shrink-0" />
                  <span className="truncate">{item.lokasi}</span>
                </div>
                <span className="inline-block bg-[#5A7365]/10 text-[#5A7365] text-[10px] font-semibold px-2 py-0.5 rounded-md">
                  {item.kategori}
                </span>
              </div>

              {/* Timbangan & Tombol Kanan */}
              <div className="flex-shrink-0 flex flex-col items-end gap-2 pl-2">
                <div className="text-right">
                  <p className="text-sm font-bold text-[#1E3B2F]">{item.berat}</p>
                  <p className="text-[10px] text-[#5A7365]">{item.waktu}</p>
                </div>
                <Button size="sm" className="bg-[#EB8A31] hover:bg-[#EB8A31]/90 text-white font-bold rounded-lg px-4 h-7 text-xs">
                  Lihat
                </Button>
              </div>

            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}