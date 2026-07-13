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
    <section id="home-hero-section" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FAFAF8] overflow-hidden">
      {/* Dynamic Ambient Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CFA15D]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D72638]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text Copy Block */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#111111]/5 border border-[#111111]/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D72638] animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#111111]/80">
                  CHENNAI’S PREMIER ART PRINTING PRESS
                </span>
              </div>
              
              <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-black text-[#111111] tracking-tight leading-[0.95] uppercase">
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
              className="font-sans text-lg md:text-xl text-[#111111]/70 leading-relaxed max-w-xl"
            >
              For over two decades, we have merged precision heavy German offset engineering with artisanal manual bindery to deliver sensory-rich packaging, books, and brand collateral.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                id="hero-get-quote-btn"
                onClick={onGetQuote}
                className="flex items-center space-x-3 px-8 py-4 rounded-full bg-[#111111] hover:bg-[#D72638] text-white text-sm font-black uppercase tracking-widest transition-all duration-300 shadow-xl shadow-black/10 hover:scale-105 cursor-pointer"
              >
                <span>Get Premium Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                id="hero-explore-btn"
                onClick={onExploreProducts}
                className="flex items-center space-x-3 px-8 py-4 rounded-full bg-white hover:bg-gray-100 text-[#111111] text-sm font-bold uppercase tracking-widest border border-gray-200 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span>Explore Catalog</span>
                <CornerRightDown className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Hero Visual Container */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-white/40 group"
            >
              <img
                src="https://images.unsplash.com/photo-1616077168712-fc6c788bf4ee?auto=format&fit=crop&q=80&w=1200"
                alt="Poonguzhali Industrial Offset Facility"
                className="w-full h-full object-cover transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <p className="text-[#CFA15D] text-xs font-bold tracking-widest uppercase">FACTORY SPOTLIGHT</p>
                <h3 className="font-sans text-xl font-bold tracking-tight">Heidelberg Speedmaster Multi-Color Line</h3>
                <p className="text-white/70 text-sm">Real-time laser spectral calibration running on 600gsm stock.</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Statistics Grid */}
        <div id="hero-stats-grid" className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-200/60">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-gray-200/50 shadow-sm space-y-3"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-[#111111]/5">
                  {stat.icon}
                </div>
                <span className="font-sans text-3xl md:text-4xl font-black text-[#111111] tracking-tight">
                  {stat.value}
                </span>
              </div>
              <div>
                <p className="font-sans font-bold text-sm text-[#111111] tracking-wide uppercase">{stat.label}</p>
                <p className="text-xs text-[#111111]/60 mt-0.5">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Trusted Clients Logo Marquee */}
        <div className="mt-20 overflow-hidden relative py-4 border-y border-gray-200/40">
          <p className="text-center text-xs font-black tracking-[0.2em] uppercase text-[#111111]/40 mb-6">
            TRUSTED PRINT PARTNER TO EXQUISITE BRAND HOUSES
          </p>
          <div className="flex w-full overflow-hidden">
            <div className="flex space-x-12 animate-[marquee_25s_linear_infinite] whitespace-nowrap min-w-full justify-around items-center">
              {trustedBrands.concat(trustedBrands).map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex items-center space-x-2 text-[#111111]/40 hover:text-[#111111] transition-colors duration-300 font-sans font-black tracking-widest text-sm uppercase px-4 cursor-default"
                >
                  <span className="w-1.5 h-1.5 bg-[#D72638] rounded-full inline-block mr-2" />
                  {brand.logo}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Tailwind marquee animation style injected */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
