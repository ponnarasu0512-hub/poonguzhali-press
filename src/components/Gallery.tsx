import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ArrowUpRight, Grid } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface GalleryProps {
  onPreFillQuote: (productName: string) => void;
}

export default function Gallery({ onPreFillQuote }: GalleryProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'books', label: 'Books & Binding' },
    { id: 'packaging', label: 'Luxury Packaging' },
    { id: 'wedding', label: 'Wedding Suite' },
    { id: 'large', label: 'Large Format' },
  ];

  const filteredItems = useMemo(() => {
    if (selectedFilter === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="portfolio-gallery-section" className="py-24 bg-[#FAFAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Heading Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D72638]">
              PHYSICAL ARTIFACTS
            </span>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight uppercase leading-none">
              The Imprint <br />
              <span className="text-[#CFA15D]">Gallery.</span>
            </h2>
            <p className="text-[#111111]/60 text-lg leading-relaxed">
              Browse through our visual museum of gold foil stamping, deep-cut debossing, rigid structural cases, and high-fidelity Giclée exhibition prints.
            </p>
          </div>
        </div>

        {/* Categories Chips Filters */}
        <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.id}
              id={`gallery-filter-btn-${f.id}`}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap ${
                selectedFilter === f.id
                  ? 'bg-[#111111] text-white shadow-md'
                  : 'bg-white text-[#111111]/70 border border-gray-200/50 hover:bg-gray-100 hover:text-[#111111]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Dynamic True CSS Column Masonry Grid */}
        <motion.div
          layout
          id="gallery-masonry-grid"
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid relative rounded-[24px] overflow-hidden bg-white border border-gray-200/50 shadow-sm group cursor-pointer inline-block w-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay hover effect block */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end space-y-3">
                
                {/* Expand click button in top corner of overlay */}
                <button
                  id={`gallery-expand-${item.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxItem(item);
                  }}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-[#D72638] transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="space-y-1 text-white">
                  <span className="text-[9px] font-black tracking-widest text-[#CFA15D] uppercase">
                    {item.categoryLabel}
                  </span>
                  <h4 className="font-sans font-bold text-base uppercase leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                  <button
                    id={`gallery-quote-${item.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onPreFillQuote(item.title);
                    }}
                    className="flex items-center space-x-1.5 text-[10px] font-black tracking-widest uppercase text-[#CFA15D] hover:text-white transition-colors"
                  >
                    <span>Request Similar Style</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 space-y-4 bg-white rounded-3xl p-8 border border-gray-200/50">
            <Grid className="w-12 h-12 text-[#D72638] mx-auto animate-pulse" />
            <p className="text-[#111111] font-bold text-lg">No gallery matches</p>
            <p className="text-gray-400 max-w-sm mx-auto">Try checking your filter category chip to display physical print examples.</p>
          </div>
        )}

      </div>

      {/* Lightbox zoomed modal overlay */}
      <AnimatePresence>
        {lightboxItem && (
          <div
            id="gallery-lightbox-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full bg-[#111111] rounded-[32px] overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Close Button top corner */}
              <button
                id="close-gallery-lightbox"
                onClick={() => setLightboxItem(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#D72638] transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Zoom image box */}
                <div className="lg:col-span-8 bg-black/40 flex items-center justify-center relative aspect-[4/3] lg:aspect-auto max-h-[70vh]">
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right Text Spec detailing */}
                <div className="lg:col-span-4 p-8 md:p-12 text-white flex flex-col justify-between space-y-8 bg-[#111111]">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-[#CFA15D] uppercase">
                        {lightboxItem.categoryLabel} Project Showcase
                      </span>
                      <h3 className="font-sans text-2xl font-black text-white tracking-tight uppercase mt-2">
                        {lightboxItem.title}
                      </h3>
                    </div>

                    <p className="text-white/70 text-sm leading-relaxed">
                      {lightboxItem.description}
                    </p>

                    <div className="space-y-4 pt-6 border-t border-white/10">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-white/40 uppercase font-bold tracking-wider">Printing Method:</span>
                        <span className="font-semibold text-[#CFA15D] uppercase">Heavy Spot Offset / Foil</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-white/40 uppercase font-bold tracking-wider">Calibrated Stock:</span>
                        <span className="font-semibold">700gsm Cotton Blend</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-white/40 uppercase font-bold tracking-wider">Production time:</span>
                        <span className="font-semibold">3 Business Days</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <button
                      id="lightbox-quote-trigger"
                      onClick={() => {
                        onPreFillQuote(lightboxItem.title);
                        setLightboxItem(null);
                      }}
                      className="w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-full bg-white hover:bg-[#D72638] text-[#111111] hover:text-white text-xs font-black tracking-widest uppercase transition-all duration-300"
                    >
                      <span>Custom print project quote</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-[10px] text-white/40">
                      * Physical print proofs can be requested before production.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
