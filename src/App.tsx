import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Printer,
  ChevronRight,
  ArrowRight,
  MessageSquare,
  PhoneCall,
  Layers,
  Sparkles,
  ShieldCheck,
  Award
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Gallery from './components/Gallery';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Data
import { TESTIMONIALS, WHY_CHOOSE_US_CARDS, PRODUCTS, SERVICES } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [preFilledProduct, setPreFilledProduct] = useState<string>('');

  // Pre-fill quote and transition to quotation page
  const handlePreFillQuote = (productName: string) => {
    setPreFilledProduct(productName);
    setActiveTab('quote');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#111111] selection:bg-[#D72638]/20 selection:text-[#D72638] font-sans antialiased">
      {/* Premium Floating Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main View Router State Container */}
      <main id="main-content-flow" className="relative">
        <AnimatePresence mode="wait">
          
          {/* HOME PAGE VIEW */}
          {activeTab === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-0"
            >
              <Hero
                onExploreProducts={() => handleNavClick('products')}
                onGetQuote={() => handleNavClick('quote')}
              />

              {/* Home Featured Products bento grid preview snippet */}
              <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4 max-w-2xl">
                      <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D72638]">FEATURED PRODUCT SUITES</span>
                      <h2 className="font-sans text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111]">
                        SENSORY IMPRESSIONS.
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Each print product represents decades of engineering plate setups, customized paper feeds, and hand-finished foil embellishments.
                      </p>
                    </div>
                    <button
                      id="home-view-all-products"
                      onClick={() => handleNavClick('products')}
                      className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#111111] hover:text-[#D72638] transition-colors cursor-pointer self-start md:self-end"
                    >
                      <span>View All 17 Products</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 3 Featured Products Bento boxes */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PRODUCTS.slice(0, 3).map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleNavClick('products')}
                        className="bg-[#FAFAF8] rounded-[28px] border border-gray-200/50 p-6 space-y-6 group hover:border-[#CFA15D]/60 transition-all duration-500 cursor-pointer hover:shadow-lg"
                      >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 rounded-full text-[9px] font-black tracking-widest text-[#111111] uppercase border border-gray-100">
                            {product.categoryLabel}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-sans font-bold text-lg text-[#111111] uppercase tracking-tight group-hover:text-[#D72638] transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#111111]/40 group-hover:text-[#111111] transition-colors">
                          <span>See Technical Specs</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Why Choose Us Section with Premium Bento Cards */}
              <section className="py-24 bg-[#FAFAF8] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                  <div className="text-center max-w-2xl mx-auto space-y-4">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D72638]">UNCOMPROMISING PRINCIPLES</span>
                    <h2 className="font-sans text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111]">
                      WHY CHOOSE POONGUZHALI?
                    </h2>
                    <p className="text-gray-500 text-sm">
                      We treat printing as a sacred heritage, balancing classical ink values with high-speed automated calibrations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WHY_CHOOSE_US_CARDS.map((card, idx) => (
                      <div
                        key={idx}
                        className="p-8 bg-white border border-gray-200/50 rounded-[28px] shadow-sm space-y-4 hover:border-[#D72638]/40 transition-all duration-300"
                      >
                        <div className="p-3 bg-[#111111]/5 rounded-2xl w-fit text-[#D72638]">
                          {idx % 2 === 0 ? <Award className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
                        </div>
                        <h3 className="font-sans font-bold text-base uppercase tracking-tight text-[#111111]">{card.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{card.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Home Process Timline snippet */}
              <Process />

              {/* Luxury Large Testimonial Section with Scrolling rhythm */}
              <section className="py-24 bg-[#111111] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#D7263810,transparent_50%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
                  
                  <div className="text-center space-y-4">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#CFA15D]">TESTIMONIAL DIALOGUES</span>
                    <h2 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                      TRUSTED BY DIRECTORS.
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((test) => (
                      <div
                        key={test.id}
                        className="p-8 bg-white/5 border border-white/10 rounded-[28px] space-y-6 relative hover:border-white/20 transition-all duration-300"
                      >
                        <span className="block text-4xl text-[#CFA15D] font-serif leading-none">“</span>
                        <p className="text-white/80 text-sm leading-relaxed italic">
                          {test.content}
                        </p>
                        <div className="pt-6 border-t border-white/10 space-y-1">
                          <h4 className="font-sans font-bold text-sm text-white">{test.name}</h4>
                          <span className="text-[10px] font-black tracking-wider text-[#CFA15D] uppercase block">{test.role}</span>
                          <span className="text-[10px] text-white/40 uppercase block">{test.company}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </section>

              {/* Home FAQ Section Accordion preview */}
              <FAQ />

              {/* Breathtaking Bottom CTA Banner layout */}
              <section id="home-cta-block" className="py-28 bg-[#FAFAF8] relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 md:px-12">
                  <div className="bg-[#111111] text-white rounded-[40px] p-10 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl border border-white/5">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#CFA15D]/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D72638]/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="space-y-4 max-w-2xl mx-auto relative z-10">
                      <span className="text-[10px] font-black tracking-[0.2em] text-[#CFA15D] uppercase">COMMISSION A PHYSICAL MASTERPIECE</span>
                      <h2 className="font-sans text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
                        Ready to imprint <br />
                        <span className="text-[#CFA15D]">your legacy?</span>
                      </h2>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed">
                        Specify your paper stock weights, special metallic foils, and delivery deadline in Chennai using our real-time digital quote plate.
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                      <button
                        id="cta-get-quote-btn"
                        onClick={() => handleNavClick('quote')}
                        className="flex items-center space-x-3 px-8 py-4 rounded-full bg-[#D72638] hover:bg-white text-white hover:text-[#111111] text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer hover:scale-105"
                      >
                        <span>Build Custom Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      
                      <button
                        id="cta-contact-btn"
                        onClick={() => handleNavClick('contact')}
                        className="flex items-center space-x-3 px-8 py-4 rounded-full bg-white/5 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-widest border border-white/10 transition-all duration-300 cursor-pointer"
                      >
                        <span>Contact Showroom</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* PRODUCTS CATALOG VIEW */}
          {activeTab === 'products' && (
            <motion.div
              key="products-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Products onPreFillQuote={handlePreFillQuote} />
            </motion.div>
          )}

          {/* SERVICES VIEW */}
          {activeTab === 'services' && (
            <motion.div
              key="services-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Services onGetQuote={() => handleNavClick('quote')} />
            </motion.div>
          )}

          {/* TIMELINE PROCESS VIEW */}
          {activeTab === 'process' && (
            <motion.div
              key="process-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Process />
            </motion.div>
          )}

          {/* MASONRY GALLERY VIEW */}
          {activeTab === 'gallery' && (
            <motion.div
              key="gallery-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Gallery onPreFillQuote={handlePreFillQuote} />
            </motion.div>
          )}

          {/* ABOUT US LEGACY VIEW */}
          {activeTab === 'about' && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          )}

          {/* MULTI-STEP QUOTE FORM VIEW */}
          {activeTab === 'quote' && (
            <motion.div
              key="quote-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <QuoteForm preFilledProduct={preFilledProduct} />
            </motion.div>
          )}

          {/* CONTACT & MAP VIEW */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Persistent Footer */}
      <Footer onNavClick={handleNavClick} />

      {/* Floating Instant Call/WhatsApp Actions Dock */}
      <div id="floating-actions-dock" className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        <a
          id="floating-call-btn"
          href="tel:+919841555242"
          className="p-4 rounded-full bg-[#111111] text-[#CFA15D] hover:bg-[#D72638] hover:text-white shadow-xl border border-white/10 hover:scale-110 duration-300 transition-all flex items-center justify-center"
          title="Call Print supervisor"
        >
          <PhoneCall className="w-5 h-5" />
        </a>
        <a
          id="floating-whatsapp-btn"
          href="https://wa.me/919841555242?text=Hi%20Poonguzhali%20Art%20Printers,%20I%20visited%20your%20premium%20website%20and%20I'd%20like%20to%20discuss%20a%20print%20project."
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-full bg-[#25D366] text-white hover:bg-[#111111] hover:text-[#25D366] shadow-xl border border-white/10 hover:scale-110 duration-300 transition-all flex items-center justify-center"
          title="Direct WhatsApp Dialogue"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
