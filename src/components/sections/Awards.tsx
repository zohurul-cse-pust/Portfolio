import { useState } from 'react';
import { Trophy, Calendar, Medal, ZoomIn, X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { awards } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Awards() {
  const { ref, revealed } = useScrollReveal();
  const [selectedAwardIndex, setSelectedAwardIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const getImageUrl = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const openLightbox = (awardIndex: number, imgIndex: number = 0) => {
    setSelectedAwardIndex(awardIndex);
    setSelectedImageIndex(imgIndex);
  };

  const closeLightbox = () => {
    setSelectedAwardIndex(null);
    setSelectedImageIndex(0);
  };

  const currentAward = selectedAwardIndex !== null ? awards[selectedAwardIndex] : null;
  const currentImages = currentAward?.images || (currentAward?.image ? [currentAward.image] : []);

  const nextImage = () => {
    if (currentImages.length > 0) {
      setSelectedImageIndex((prev) => (prev + 1) % currentImages.length);
    }
  };

  const prevImage = () => {
    if (currentImages.length > 0) {
      setSelectedImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    }
  };

  return (
    <section id="awards" className="py-24 lg:py-32 bg-neutral-50 relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-100/40 to-primary-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative" ref={ref}>
        <div className={`mb-14 reveal ${revealed ? 'revealed' : ''}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center shadow-sm">
              <Trophy size={22} />
            </div>
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Recognition & Achievements</span>
          </div>
          <h2 className="text-4xl font-bold text-neutral-900">Awards & Certifications</h2>
          <p className="text-neutral-600 mt-2">Honors, programming contest achievements, and award moments.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, awardIdx) => {
            const awardImages = award.images || (award.image ? [award.image] : []);

            return (
              <div
                key={awardIdx}
                className={`reveal ${revealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${awardIdx * 150}ms` }}
              >
                <div className="group bg-white rounded-2xl border border-neutral-200 p-7 hover:shadow-xl hover:border-accent-300 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden">
                  {/* Decorative backdrop */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-accent-50 to-primary-50 opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white shadow-lg shadow-accent-500/20 group-hover:rotate-12 transition-transform">
                          <Medal size={24} />
                        </div>
                        <span className="text-2xl font-bold gradient-text">{award.title}</span>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full">
                        <Calendar size={13} />
                        {award.date}
                      </span>
                    </div>

                    <p className="text-neutral-800 font-semibold text-lg mb-4 leading-snug">{award.event}</p>

                    {/* Image Thumbnails Gallery */}
                    {awardImages.length > 0 && (
                      <div className="mt-5 pt-4 border-t border-neutral-100">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                            <ImageIcon size={14} className="text-accent-500" />
                            Award Photo{awardImages.length > 1 ? `s (${awardImages.length})` : ''}
                          </span>
                          <span
                            className="text-xs text-accent-600 font-semibold cursor-pointer hover:text-accent-700 flex items-center gap-1 transition-colors"
                            onClick={() => openLightbox(awardIdx, 0)}
                          >
                            <ZoomIn size={14} />
                            Full Screen
                          </span>
                        </div>

                        <div
                          className={`grid gap-3 ${
                            awardImages.length === 1
                              ? 'grid-cols-1'
                              : awardImages.length === 2
                              ? 'grid-cols-2'
                              : 'grid-cols-3'
                          }`}
                        >
                          {awardImages.map((img, imgIdx) => (
                            <div
                              key={imgIdx}
                              onClick={() => openLightbox(awardIdx, imgIdx)}
                              className={`relative group/img rounded-xl overflow-hidden cursor-pointer border border-neutral-200/80 bg-neutral-900/5 shadow-sm hover:shadow-md transition-all duration-300 ${
                                awardImages.length === 1
                                  ? 'h-56 sm:h-64'
                                  : awardImages.length === 2
                                  ? 'h-44 sm:h-48'
                                  : 'h-36 sm:h-40'
                              }`}
                            >
                              <img
                                src={getImageUrl(img)}
                                alt={`${award.title} photo ${imgIdx + 1}`}
                                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-neutral-950/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex items-center justify-center text-white">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg group-hover/img:scale-110 transition-transform">
                                  <ZoomIn size={20} />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedAwardIndex !== null && currentAward && (
        <div className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Modal Container */}
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            {/* Image Box */}
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl">
              <img
                src={getImageUrl(currentImages[selectedImageIndex])}
                alt={currentAward.title}
                className="max-h-[75vh] max-w-full object-contain select-none"
              />

              {/* Prev / Next Controls */}
              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Caption */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold">{currentAward.title}</h3>
              <p className="text-neutral-400 text-sm">{currentAward.event} — {currentAward.date}</p>
              {currentImages.length > 1 && (
                <p className="text-xs text-neutral-500 mt-1">
                  Photo {selectedImageIndex + 1} of {currentImages.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
