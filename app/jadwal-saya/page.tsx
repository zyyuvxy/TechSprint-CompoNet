'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockPickupSchedules } from '@/constants/mockData';

const daysOfWeek = ['Sen', 'Sel', 'Rab', 'Kam', 'Jun', 'Sab', 'Min'];
const dateNumbers = [14, 15, 16, 17, 18, 19, 20];
const filterOptions = ['Semua(3)', 'Terkonfirmasi (2)', 'Menunggu (1)', 'Selesai'];

export default function JadwalSayaPage() {
  const [selectedFilter, setSelectedFilter] = useState('Semua(3)');

  const filteredSchedules = mockPickupSchedules.filter((schedule) => {
    if (selectedFilter === 'Semua(3)') return true;
    if (selectedFilter === 'Terkonfirmasi (2)') return schedule.status === 'Terjadwal';
    if (selectedFilter === 'Menunggu (1)') return schedule.status === 'Menunggu';
    if (selectedFilter === 'Selesai') return schedule.status === 'Selesai';
    return true;
  });

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Jadwal Saya</h1>
          <p className="text-muted-foreground">Semua pickup yang sudah dijadwalkan</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Download className="w-4 h-4 mr-2" />
          Ekspor
        </Button>
      </div>

      {/* Calendar Navigation */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Pilih Tanggal</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="border-border text-foreground">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="border-border text-foreground">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-3">
          {dateNumbers.map((date, idx) => (
            <button
              key={date}
              className={`py-3 rounded-lg text-center transition-colors ${
                date === 17
                  ? 'bg-primary text-primary-foreground border-2 border-primary'
                  : 'border-2 border-border text-foreground hover:bg-muted'
              }`}
            >
              <p className="text-xs font-semibold">{daysOfWeek[idx]}</p>
              <p className="text-lg font-bold mt-1">{date}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedFilter(option)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedFilter === option
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Schedules */}
      <div className="space-y-4">
        {filteredSchedules.map((schedule) => (
          <Card key={schedule.id} className="border-border bg-card overflow-hidden">
            <CardContent className="p-6">
              <div className="grid grid-cols-6 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Nama Pedagang</p>
                  <p className="font-semibold text-foreground mt-1">{schedule.pengelola}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Jam</p>
                  <p className="font-semibold text-foreground mt-1">{schedule.jam}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lokasi</p>
                  <p className="font-semibold text-foreground mt-1">{schedule.pasar}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Jenis</p>
                  <p className="font-semibold text-foreground mt-1">{schedule.limbah.split(' ')[0]}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">No. HP</p>
                  <p className="font-semibold text-foreground mt-1">0856XXXXXXXX</p>
                </div>
                <div className="flex items-end gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    schedule.status === 'Terjadwal' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {schedule.status}
                  </span>
                  <Button variant="outline" size="sm" className="border-border text-foreground">
                    Hubungi
                  </Button>
                  <Button variant="outline" size="sm" className="border-border text-foreground">
                    Batalkan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
