import { motion } from 'motion/react';
import { Award, Layers, Users, ShieldCheck, ArrowRight, CornerRightDown } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onGetQuote: () => void;
}

export default function Hero({ onExploreProducts, onGetQuote }: HeroProps) {
  const stats = [
    {
      id: 'stat-exp',
      icon: <Award className="w-6 h-6 text-[#CFA15D]" />,
      value: '20+',
      label: 'Years Experience',
      desc: 'Crafting fine prints since 2005'
    },
    {
      id: 'stat-proj',
      icon: <Layers className="w-6 h-6 text-[#D72638]" />,
      value: '5,000+',
      label: 'Projects Delivered',
      desc: 'Packaging, books & stationery'
    },
    {
      id: 'stat-clients',
      icon: <Users className="w-6 h-6 text-[#CFA15D]" />,
      value: '1,000+',
      label: 'Happy Clients',
      desc: 'Top brands & design houses'
    },
    {
      id: 'stat-quality',
      icon: <ShieldCheck className="w-6 h-6 text-[#D72638]" />,
      value: '100%',
      label: 'Quality Audit',
      desc: 'Hand-inspected under D50 light'
    },
  ];

  const trustedBrands = [
    { name: 'Taj Hotels', logo: 'TAJ HOTELS' },
    { name: 'Apollo Hospitals', logo: 'APOLLO' },
    { name: 'MRF Tyres', logo: 'MRF' },
    { name: 'CSK Cricket', logo: 'CSK ACADEMY' },
    { name: 'Titan Watches', logo: 'TITAN ELITE' },
    { name: 'TVS Group', logo: 'TVS RACING' },
    { name: 'Lancôme Chennai', logo: 'LANCÔME' },
  ];

  return (
    <>
      {/* Viewport-contained above-the-fold Hero Section */}
      <section
        id="home-hero-section"
        className="relative min-h-[100svh] lg:h-[100svh] lg:min-h-[640px] lg:max-h-[960px] flex items-center pt-24 pb-12 lg:py-0 bg-[#FAFAF8] overflow-hidden"
      >
        {/* Dynamic Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CFA15D]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D72638]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Hero Text Copy Block */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#111111]/5 border border-[#111111]/10 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D72638] animate-pulse" />
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#111111]/80">
                    CHENNAI’S PREMIER ART PRINTING PRESS
                  </span>
                </div>
                
                <h1 className="font-sans text-fluid-hero font-black text-[#111111] tracking-tight uppercase leading-[0.95]">
                  Printing Ideas. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D72638] to-[#CFA15D]">
                    Creating Impressions.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-sm md:text-base lg:text-lg text-[#111111]/70 leading-relaxed max-w-xl"
              >
                For over two decades, we have merged precision heavy German offset engineering with artisanal manual bindery to deliver sensory-rich packaging, books, and brand collateral.
              </motion.p>

              {/* Call to Actions - Guaranteed above fold with clean touch targets */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <button
                  id="hero-get-quote-btn"
                  onClick={onGetQuote}
                  className="flex items-center space-x-3 px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-[#111111] hover:bg-[#D72638] text-white text-xs md:text-sm font-black uppercase tracking-widest transition-all duration-300 shadow-xl shadow-black/10 hover:scale-105 cursor-pointer min-h-[48px]"
                >
                  <span>Get Premium Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  id="hero-explore-btn"
                  onClick={onExploreProducts}
                  className="flex items-center space-x-3 px-6 md:px-8 py-3.5 md:py-4 rounded-full bg-white hover:bg-gray-100 text-[#111111] text-xs md:text-sm font-bold uppercase tracking-widest border border-gray-200 transition-all duration-300 hover:scale-105 cursor-pointer min-h-[48px]"
                >
                  <span>Explore Catalog</span>
                  <CornerRightDown className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Hero Visual Container - Proportionally scaling */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full max-h-[45vh] lg:max-h-[60vh] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-2xl border border-white/40 group"
              >
                <img
                  src="https://cdn.phototourl.com/free/2026-07-13-f9e9f777-e49b-49b9-a618-c2c9cf5a3c5a.png"
                  alt="Poonguzhali Industrial Offset Facility"
                  className="w-full h-full object-cover transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <p className="text-[#CFA15D] text-[10px] font-bold tracking-widest uppercase">FACTORY SPOTLIGHT</p>
                  <h3 className="font-sans text-sm md:text-base font-bold tracking-tight">Heidelberg Speedmaster Multi-Color Line</h3>
                  <p className="text-white/70 text-[11px] leading-tight">Real-time laser spectral calibration running on 600gsm stock.</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Standalone Statistics and Brand Marquee Section */}
      <section
        id="hero-stats-brand-section"
        className="py-12 md:py-20 bg-white border-y border-gray-200/40"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Statistics Grid - Fluid Column Layout */}
          <div
            id="hero-stats-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-5 md:p-6 rounded-2xl bg-white border border-gray-200/50 shadow-sm space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-[#111111]/5">
                    {stat.icon}
                  </div>
                  <span className="font-sans text-2xl md:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-bold text-xs md:text-sm text-[#111111] tracking-wide uppercase">{stat.label}</p>
                  <p className="text-[11px] md:text-xs text-[#111111]/60 mt-0.5 leading-tight">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infinite Trusted Clients Logo Marquee */}
          <div className="mt-12 md:mt-16 overflow-hidden relative py-4 border-t border-gray-200/30">
            <p className="text-center text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-[#111111]/40 mb-6">
              TRUSTED PRINT PARTNER TO EXQUISITE BRAND HOUSES
            </p>
            <div className="flex w-full overflow-hidden">
              <div className="flex space-x-12 animate-[marquee_25s_linear_infinite] whitespace-nowrap min-w-full justify-around items-center">
                {trustedBrands.concat(trustedBrands).map((brand, index) => (
                  <div
                    key={`${brand.name}-${index}`}
                    className="flex items-center space-x-2 text-[#111111]/40 hover:text-[#111111] transition-colors duration-300 font-sans font-black tracking-widest text-xs md:text-sm uppercase px-4 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D72638] rounded-full inline-block mr-2" />
                    {brand.logo}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tailwind marquee animation style injected */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
