import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TIMELINE_STEPS } from '../data';
import { Sliders, CheckSquare, Sparkles, Truck, FileText, Compass, Printer } from 'lucide-react';

export default function Process() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-5 h-5 text-white" />;
      case 1: return <FileText className="w-5 h-5 text-white" />;
      case 2: return <Sliders className="w-5 h-5 text-white" />;
      case 3: return <Sparkles className="w-5 h-5 text-white" />;
      case 4: return <Printer className="w-5 h-5 text-white" />;
      case 5: return <Sparkles className="w-5 h-5 text-white" />;
      case 6: return <Sliders className="w-5 h-5 text-white" />;
      case 7: return <CheckSquare className="w-5 h-5 text-white" />;
      default: return <Truck className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="process-timeline-section" className="py-fluid-section bg-white relative overflow-hidden">
      {/* Background grid details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D72638]">
            THE LITHO JOURNEY
          </span>
          <h2 className="font-sans text-fluid-section font-black text-[#111111] tracking-tight uppercase">
            HOW WE MAKE IT <span className="text-[#CFA15D]">REAL.</span>
          </h2>
          <p className="text-[#111111]/60 text-sm md:text-base leading-relaxed">
            Every millimeter of ink, deboss depth, and folding alignment is carefully engineered across nine strict production gates. Click any step below to see inside the machine.
          </p>
        </div>

        {/* Interactive Steps Selector Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Numbers Circular Dial */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <span className="block text-[10px] font-black tracking-widest text-gray-400 uppercase">
              PRODUCTION PROGRESS GATES
            </span>
            <div id="timeline-numeric-selector" className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-3">
              {TIMELINE_STEPS.map((item, idx) => {
                const isActive = activeStepIdx === idx;
                return (
                  <button
                    key={item.step}
                    id={`timeline-step-btn-${idx}`}
                    onClick={() => setActiveStepIdx(idx)}
                    className={`aspect-square rounded-2xl flex flex-col items-center justify-center border transition-all duration-300 text-left relative cursor-pointer overflow-hidden ${
                      isActive
                        ? 'bg-[#111111] text-white border-transparent shadow-lg shadow-black/15 scale-105'
                        : 'bg-gray-50 text-[#111111]/60 border-gray-200/60 hover:bg-white hover:text-[#111111]'
                    }`}
                  >
                    {/* Background mini glowing gradient for active item */}
                    {isActive && (
                      <div className="absolute top-0 right-0 w-8 h-8 bg-[#D72638] rounded-full blur-xl pointer-events-none opacity-45" />
                    )}
                    <span className="text-sm font-mono tracking-widest block font-black mb-1">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-center px-1 opacity-80 leading-none">
                      {item.title.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Immersive Active Step Viewbox Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-[#FAFAF8] rounded-[32px] border border-gray-200/60 p-8 md:p-12 shadow-md relative overflow-hidden"
              >
                {/* Big decorative number watermark */}
                <span className="absolute bottom-4 right-8 font-sans text-9xl font-black text-[#111111]/5 select-none pointer-events-none">
                  {TIMELINE_STEPS[activeStepIdx].step}
                </span>

                {/* Content */}
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D72638] flex items-center justify-center shadow-md">
                      {getStepIcon(activeStepIdx)}
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-[#CFA15D] uppercase">
                        GATEWAY {TIMELINE_STEPS[activeStepIdx].step} OF 09
                      </span>
                      <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-[#111111] uppercase">
                        {TIMELINE_STEPS[activeStepIdx].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {TIMELINE_STEPS[activeStepIdx].description}
                  </p>

                  <div className="pt-6 border-t border-gray-200/60 flex flex-wrap gap-2">
                    <span className="text-xs font-bold text-[#111111]/40 uppercase tracking-wider mr-2 self-center">
                      STANDARDS SECURED:
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-600">
                      ISO 12647 Color Standard
                    </span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-600">
                      Visual Registration Verification
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Process Roadmap Arrow Map (Desktop display inline footer) */}
        <div id="desktop-timeline-scroller" className="hidden lg:flex items-center justify-between mt-20 p-6 bg-gray-50 border border-gray-200/40 rounded-[28px] overflow-x-auto gap-4">
          {TIMELINE_STEPS.map((item, idx) => {
            const isActive = activeStepIdx === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIdx(idx)}
                className="flex items-center space-x-2 text-left group flex-shrink-0 cursor-pointer"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-black transition-all ${
                  isActive ? 'bg-[#D72638] text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-400 group-hover:bg-gray-100 group-hover:text-[#111111]'
                }`}>
                  {item.step}
                </div>
                <div className="pr-4 border-r border-gray-200/50 last:border-0">
                  <span className={`block text-[10px] font-black tracking-widest uppercase leading-none transition-colors ${isActive ? 'text-[#111111]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                    {item.title.split(' ')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
