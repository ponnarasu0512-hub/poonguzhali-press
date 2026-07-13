import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Grid, List, Eye, ArrowRight, X, Clock, HelpCircle, Layers, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

interface ProductsProps {
  onPreFillQuote: (productName: string) => void;
}

export default function Products({ onPreFillQuote }: ProductsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isListView, setIsListView] = useState(false);
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'editorial', label: 'Editorial' },
    { id: 'promotional', label: 'Promotional & Collateral' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="products-catalog-section" className="py-fluid-section bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Heading Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D72638]">
              THE IMPRINT CATALOGUE
            </span>
            <h2 className="font-sans text-fluid-section font-black text-[#111111] tracking-tight uppercase leading-none">
              Crafted Products. <br />
              <span className="text-[#CFA15D]">Physical Masterpieces.</span>
            </h2>
            <p className="text-[#111111]/60 text-sm md:text-base lg:text-lg">
              Explore our comprehensive print options, built on century-old design guidelines and modernized using automated high-speed German precision machinery.
            </p>
          </div>
          
          {/* Grid/List layout toggle */}
          <div className="flex items-center space-x-2 bg-gray-100 p-1.5 rounded-xl self-start md:self-end">
            <button
              id="layout-grid-btn"
              onClick={() => setIsListView(false)}
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                !isListView ? 'bg-white text-[#111111] shadow-sm' : 'text-gray-400 hover:text-[#111111]'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              id="layout-list-btn"
              onClick={() => setIsListView(true)}
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                isListView ? 'bg-white text-[#111111] shadow-sm' : 'text-gray-400 hover:text-[#111111]'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-center">
          {/* Categories Horizontal Scroller */}
          <div className="lg:col-span-8 flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'bg-gray-100 text-[#111111]/70 hover:bg-gray-200 hover:text-[#111111]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div className="lg:col-span-4 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              id="product-search-input"
              type="text"
              placeholder="Search product specs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D72638]/20 focus:border-[#D72638] text-sm text-[#111111] font-medium"
            />
          </div>
        </div>

        {/* Product Cards Layout */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            id="products-display-grid"
            className={
              isListView
                ? 'space-y-4'
                : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            }
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className={`bg-[#FAFAF8] rounded-[28px] border border-gray-200/60 overflow-hidden group hover:border-[#CFA15D]/60 transition-all duration-500 hover:shadow-xl ${
                  isListView ? 'flex flex-col md:flex-row items-center p-6 gap-6' : ''
                }`}
              >
                {/* Thumbnail Image */}
                <div
                  className={`relative overflow-hidden ${
                    isListView
                      ? 'w-full md:w-64 h-48 rounded-2xl flex-shrink-0'
                      : 'aspect-[4/3] w-full'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full text-[10px] font-black tracking-widest text-[#111111] uppercase">
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Content Block */}
                <div className={`p-6 flex-grow space-y-4 ${isListView ? 'p-0 w-full' : ''}`}>
                  <div className="space-y-1">
                    <h3 className="font-sans text-xl font-bold tracking-tight text-[#111111] group-hover:text-[#D72638] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-xs font-mono text-[#CFA15D]">Starting from {product.startingPrice || 'Custom Quote'}</p>
                  </div>
                  
                  <p className="text-sm text-[#111111]/70 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center space-x-2 text-xs font-semibold text-[#111111]/50">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Dispatched in {product.deliveryTime}</span>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button
                      id={`product-quickview-${product.id}`}
                      onClick={() => setActiveQuickViewProduct(product)}
                      className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-[#111111] hover:text-[#D72638] transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Specifications</span>
                    </button>

                    <button
                      id={`product-quote-${product.id}`}
                      onClick={() => onPreFillQuote(product.name)}
                      className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-[#CFA15D] hover:text-[#D72638] transition-colors cursor-pointer"
                    >
                      <span>Pre-Fill Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state if search returns nothing */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 space-y-4">
            <HelpCircle className="w-12 h-12 text-[#D72638] mx-auto animate-bounce" />
            <p className="text-[#111111] font-bold text-lg">No matching products found</p>
            <p className="text-gray-400 max-w-sm mx-auto">Try checking your spelling or selecting "All Products" to browse our complete list of 17 physical formats.</p>
          </div>
        )}

      </div>

      {/* Quick View Spec Sheet Modal */}
      <AnimatePresence>
        {activeQuickViewProduct && (
          <div
            id="spec-sheet-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-100">
                <div>
                  <span className="text-[10px] font-black tracking-widest uppercase text-[#D72638]">
                    {activeQuickViewProduct.categoryLabel} Specifications
                  </span>
                  <h3 className="font-sans text-2xl md:text-3xl font-black text-[#111111] tracking-tight uppercase">
                    {activeQuickViewProduct.name}
                  </h3>
                </div>
                <button
                  id="close-spec-modal"
                  onClick={() => setActiveQuickViewProduct(null)}
                  className="p-2.5 rounded-full bg-gray-100 text-[#111111] hover:bg-[#D72638] hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body (Scrollable bento grid layout) */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left Column: Image and Key Benefits */}
                  <div className="md:col-span-5 space-y-6">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={activeQuickViewProduct.image}
                        alt={activeQuickViewProduct.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                      <h4 className="text-xs font-black tracking-wider uppercase text-[#111111]">KEY EXCLUSIVES</h4>
                      <ul className="space-y-2">
                        {activeQuickViewProduct.features?.map((feat, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs text-[#111111]/70 leading-relaxed">
                            <ShieldCheck className="w-4 h-4 text-[#CFA15D] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Spec Matrix Cards */}
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-xs font-black tracking-wider uppercase text-[#111111]/40 mb-2">OVERVIEW</h4>
                      <p className="text-[#111111]/80 text-sm leading-relaxed">{activeQuickViewProduct.description}</p>
                    </div>

                    {/* Specifications grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="block text-[10px] font-black tracking-wider text-gray-400 uppercase mb-1">AVAILABLE SIZES</span>
                        <div className="space-y-1">
                          {activeQuickViewProduct.sizes.map((s, idx) => (
                            <span key={idx} className="block text-xs font-semibold text-[#111111]">{s}</span>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="block text-[10px] font-black tracking-wider text-gray-400 uppercase mb-1">PAPER OPTIONS</span>
                        <div className="space-y-1">
                          {activeQuickViewProduct.paperOptions.map((po, idx) => (
                            <span key={idx} className="block text-xs font-semibold text-[#111111] leading-tight">{po}</span>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="block text-[10px] font-black tracking-wider text-gray-400 uppercase mb-1">PRINTING TECHNIQUES</span>
                        <div className="space-y-1">
                          {activeQuickViewProduct.printingType.map((pt, idx) => (
                            <span key={idx} className="block text-xs font-semibold text-[#111111]">{pt}</span>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="block text-[10px] font-black tracking-wider text-gray-400 uppercase mb-1">SPECIAL FINISHES</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {activeQuickViewProduct.finishingOptions.lamination?.map((lam, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-gray-200 text-[#111111] text-[9px] font-black tracking-widest uppercase rounded">
                              {lam}
                            </span>
                          ))}
                          {activeQuickViewProduct.finishingOptions.spotUV && (
                            <span className="px-2 py-0.5 bg-[#111111] text-white text-[9px] font-black tracking-widest uppercase rounded">
                              SPOT UV
                            </span>
                          )}
                          {activeQuickViewProduct.finishingOptions.foiling && (
                            <span className="px-2 py-0.5 bg-[#CFA15D] text-white text-[9px] font-black tracking-widest uppercase rounded">
                              HOT FOILING
                            </span>
                          )}
                          {activeQuickViewProduct.finishingOptions.embossing && (
                            <span className="px-2 py-0.5 bg-[#D72638] text-white text-[9px] font-black tracking-widest uppercase rounded">
                              EMBOSSING
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="block text-[10px] font-black tracking-wider text-gray-400 uppercase mb-1">COLOR FORMAT</span>
                        <div className="space-y-1">
                          {activeQuickViewProduct.colorOptions.map((co, idx) => (
                            <span key={idx} className="block text-xs font-semibold text-[#111111]">{co}</span>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="block text-[10px] font-black tracking-wider text-gray-400 uppercase mb-1">EST. DELIVERY</span>
                        <span className="block text-xs font-bold text-[#D72638] flex items-center space-x-1.5 mt-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{activeQuickViewProduct.deliveryTime}</span>
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer / Quote CTA */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs font-semibold text-gray-500">
                  * Pricing depends strictly on custom material stock selection, plate setups and final count volumes.
                </p>
                <button
                  id="modal-quote-trigger"
                  onClick={() => {
                    onPreFillQuote(activeQuickViewProduct.name);
                    setActiveQuickViewProduct(null);
                  }}
                  className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-3.5 rounded-full bg-[#111111] hover:bg-[#D72638] text-white text-xs font-black tracking-widest uppercase transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <span>Build custom quote with this product</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
