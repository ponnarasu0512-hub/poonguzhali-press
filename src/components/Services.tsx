import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Cpu, Layers, HelpCircle, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  onGetQuote: () => void;
}

export default function Services({ onGetQuote }: ServicesProps) {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services-section" className="py-fluid-section bg-[#FAFAF8] relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#D72638]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Title */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D72638]">
            OUR PRINT CAPABILITIES
          </span>
          <h2 className="font-sans text-fluid-section font-black text-[#111111] tracking-tight uppercase leading-none">
            Manufacturing <br />
            <span className="text-[#CFA15D]">Excellence.</span>
          </h2>
          <p className="text-[#111111]/70 text-sm md:text-base lg:text-lg leading-relaxed">
            From high-volume commercial lithography to short-run digital variable data, our Chennai plant runs specialized machinery calibrated to deliver breathtaking consistency.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Navigation Tabs Panel */}
          <div className="lg:col-span-4 space-y-2">
            <span className="block text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 mb-4 px-4">
              SELECT CAPABILITY
            </span>
            <div id="services-tabs" className="space-y-1">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  id={`service-tab-${service.id}`}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-300 text-left border cursor-pointer ${
                    activeServiceId === service.id
                      ? 'bg-white text-[#111111] border-[#CFA15D] shadow-md shadow-black/5 translate-x-2'
                      : 'bg-transparent text-gray-500 border-transparent hover:bg-white/50 hover:text-[#111111]'
                  }`}
                >
                  <div>
                    <h3 className="font-sans font-bold text-sm tracking-wider uppercase">
                      {service.title}
                    </h3>
                    <span className="text-[10px] font-medium text-gray-400 block mt-1">
                      {service.tagline}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeServiceId === service.id ? 'text-[#D72638] translate-x-1' : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Detailed Tab Content View */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeServiceId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[32px] border border-gray-200/50 p-8 md:p-12 shadow-xl space-y-8"
              >
                {/* Hero Image inside Section */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-black tracking-widest text-[#CFA15D] uppercase block mb-1">
                      CAPABILITY PROFILE
                    </span>
                    <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                {/* Service Overview Description */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black tracking-widest text-gray-400 uppercase">
                    SERVICE PROFILE
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Multi-grid detailing Specifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                  
                  {/* Key Benefits */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black tracking-widest text-[#D72638] uppercase flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D72638]" />
                      <span>PRIMARY REASONS</span>
                    </h4>
                    <ul className="space-y-3">
                      {activeService.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs text-gray-600 leading-relaxed flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#CFA15D] rounded-full mt-1.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Machinery Equipment Line */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-black tracking-widest text-[#CFA15D] uppercase flex items-center space-x-2">
                      <Cpu className="w-4 h-4 text-[#CFA15D]" />
                      <span>MACHINERY LINEUP</span>
                    </h4>
                    <div className="space-y-3">
                      {activeService.equipment.map((equip, i) => (
                        <div key={i} className="p-3 bg-gray-50 border border-gray-100 rounded-xl">
                          <span className="block text-xs font-bold text-[#111111]">{equip}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Workflow Roadmap */}
                <div className="pt-8 border-t border-gray-100 space-y-4">
                  <h4 className="text-xs font-black tracking-widest text-gray-400 uppercase flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-gray-400" />
                    <span>PRODUCTION ROADMAP</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {activeService.workflow.map((flow, i) => (
                      <div key={i} className="p-4 bg-gray-50 rounded-xl relative overflow-hidden group hover:bg-[#111111] hover:text-white transition-all duration-300">
                        <span className="block text-2xl font-black text-[#D72638]/20 group-hover:text-white/10 mb-2">
                          {`0${i + 1}`}
                        </span>
                        <p className="text-[11px] font-semibold text-gray-600 group-hover:text-white/80 leading-relaxed">
                          {flow}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote Trigger CTA */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="block text-xs font-bold text-[#111111]">Need custom advice for {activeService.title}?</span>
                    <span className="block text-xs text-gray-400">Our paper specialists are ready to answer material & GSM weight queries.</span>
                  </div>
                  <button
                    id="service-quote-trigger"
                    onClick={onGetQuote}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D72638] transition-all duration-300"
                  >
                    <span>Request Callback</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
