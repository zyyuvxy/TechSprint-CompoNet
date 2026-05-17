'use client';

import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Mock reviews data
const reviews = [
  {
    id: 1,
    trader: 'Bu Sari',
    market: 'Pasar Wage',
    rating: 5,
    date: '21 Apr 2025',
    feedback: 'Pengambilan tepat waktu dan sangat ramah!',
  },
  {
    id: 2,
    trader: 'Bu Wati',
    market: 'Pasar Pon',
    rating: 4,
    date: '19 Apr 2025',
    feedback: 'Baik, tapi ada limbah yang tidak sesuai pesanan.',
  },
  {
    id: 3,
    trader: 'Pak Slamet',
    market: 'Pasar Manis',
    rating: 5,
    date: '15 Apr 2025',
    feedback: 'Pelayanan excellent, limbah organik berkualitas tinggi.',
  },
  {
    id: 4,
    trader: 'Bu Sari',
    market: 'Pasar Wage',
    rating: 4,
    date: '10 Apr 2025',
    feedback: 'Pickup cepat, volume sesuai ekspektasi.',
  },
  {
    id: 5,
    trader: 'Bu Wati',
    market: 'Pasar Pon',
    rating: 5,
    date: '05 Apr 2025',
    feedback: 'Sangat memuaskan, pengelola limbah yang bertanggung jawab.',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-accent text-accent' : 'text-muted-foreground'
        }`}
      />
    ))}
  </div>
);

export default function RatingUlasanPage() {
  const totalReviews = reviews.length;
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1);
  const ratingDistribution = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="p-6 md:p-8 max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="mb-8" variants={itemVariants}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Rating & Ulasan</h1>
        <p className="text-muted-foreground">Lihat penilaian dari pengelola limbah yang telah bekerja sama dengan Anda</p>
      </motion.div>

      {/* Summary Card */}
      <motion.div variants={itemVariants} className="mb-8">
        <Card className="border-border bg-card overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Overall Rating */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-5xl font-bold text-foreground mb-2">{avgRating}</div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(parseFloat(avgRating))
                          ? 'fill-accent text-accent'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">dari 5 bintang</p>
              </div>

              {/* Total Reviews */}
              <div className="flex flex-col items-center justify-center border-l border-r border-border">
                <div className="text-4xl font-bold text-foreground mb-2">{totalReviews}</div>
                <p className="text-sm text-muted-foreground">total ulasan</p>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                      ))}
                    </div>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all"
                        style={{
                          width: `${(ratingDistribution[rating as keyof typeof ratingDistribution] / totalReviews) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-foreground w-8">
                      {ratingDistribution[rating as keyof typeof ratingDistribution]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Reviews List */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-bold text-foreground mb-4">Ulasan dari Pengelola Limbah</h2>
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {reviews.map((review, index) => (
            <motion.div key={review.id} variants={itemVariants}>
              <Card className="border-border bg-card hover:shadow-md transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-start">
                    {/* Trader Avatar */}
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-accent-foreground">
                        {review.trader.charAt(0)}
                      </span>
                    </div>

                    {/* Review Content */}
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{review.trader}</h3>
                          <p className="text-sm text-muted-foreground">{review.market}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>

                      {/* Rating */}
                      <div className="mb-3">
                        <StarRating rating={review.rating} />
                      </div>

                      {/* Feedback */}
                      <p className="text-sm text-foreground leading-relaxed">{review.feedback}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
