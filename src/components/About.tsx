import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldAlert, Award, Calendar, Landmark, Check } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: <Target className="w-6 h-6 text-[#D72638]" />,
      title: 'Precision Tolerances',
      desc: 'We measure registration accuracy down to the micrometer level, ensuring perfect color boundaries.'
    },
    {
      icon: <Eye className="w-6 h-6 text-[#CFA15D]" />,
      title: 'Artisanal Vigilance',
      desc: 'Our printing masters hand-audit sheets at regular intervals, preventing color drift across massive offset runs.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#D72638]" />,
      title: 'Material Stewardship',
      desc: 'We source FSC-certified and carbon-neutral fine papers to reduce environmental impacts without sacrificing beauty.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#CFA15D]" />,
      title: 'Century-Grade Bindery',
      desc: 'Our Smyth-sewn books, perfect bindings, and rigid boards are built to stand the test of time across generations.'
    }
  ];

  const milestones = [
    {
      year: '2005',
      title: 'The Seed on Poonamallee High Road',
      desc: 'Founded as a single-press screen printing workshop in Aminjikarai, Chennai, delivering wedding cards and local brochures.'
    },
    {
      year: '2012',
      title: 'Lithographic Expansion',
      desc: 'We acquired our first multi-color Heidelberg Speedmaster system, expanding into high-speed publishing and catalogs.'
    },
    {
      year: '2018',
      title: 'Structural Packaging Division',
      desc: 'In response to local cosmetic and tech growth, we set up high-end platen die-cut and folding lines for luxury product boxes.'
    },
    {
      year: '2024',
      title: 'The Digital HD Era',
      desc: 'Incorporated HP Indigo and Xerox Iridesse systems, allowing spot gold/silver inks and variable-data digital prints.'
    },
    {
      year: '2026',
      title: 'Chennai’s Premier Imprint Hub',
      desc: 'Direct integration of 3D CAD sample creation, secure document watermark inks, and a collection of 500+ luxury fine papers.'
    }
  ];

  const team = [
    {
      name: 'Mrs. S. Poonguzhali',
      role: 'Founder & Managing Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      bio: 'A visionary print technician who established the company in 2005, blending historic letterpress values with German automation.'
    },
    {
      name: 'Mr. R. Swaminathan',
      role: 'Chief Pre-Press & Operations Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
      bio: 'With 22+ years in print engineering, Swaminathan oversees digital plate imposition, color profiles, and spectrophotometry.'
    },
    {
      name: 'Mr. A. Senthil Kumar',
      role: 'Master of Bindery & Structural Design',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      bio: 'Senthil turns conceptual artwork into physical structures. He manages platen press tooling, Smyth thread sewing, and rigid board assembly.'
    }
  ];

  return (
    <section id="about-us-section" className="py-fluid-section bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Company Mission/Vision Intro (Editorial Banner layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D72638]">
              POONGUZHALI LEGACY
            </span>
            <h2 className="font-sans text-fluid-section font-black text-[#111111] tracking-tight uppercase leading-none">
              Where paper <br />
              <span className="text-[#CFA15D]">becomes art.</span>
            </h2>
            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed font-serif italic">
              "We believe print is a sensory conversation. It is not just ink laid over fibers; it is the weight, the tactile bite of debossing, the cold luxury of metallic leaf, and the crisp snap of opening an engineered box."
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[16/10] rounded-[28px] overflow-hidden shadow-xl border border-gray-100 relative group">
              <img
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=1200"
                alt="Aesthetic paper sample catalog"
                className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] font-black tracking-widest text-[#CFA15D] uppercase">MATERIALS</span>
                <p className="font-sans font-bold text-sm">Fine-art stock library with 500+ textures.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-sans text-2xl font-black text-[#111111] tracking-tight uppercase">
              OUR FOUNDATIONAL PRINCIPLES
            </h3>
            <p className="text-gray-400 text-sm mt-2">The four pillars of quality that keep our machines calibrated and our clients loyal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FAFAF8] border border-gray-200/50 rounded-[24px] space-y-4 hover:border-[#D72638]/40 transition-all duration-300"
              >
                <div className="p-3 bg-white rounded-2xl w-fit shadow-sm border border-gray-100">
                  {val.icon}
                </div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-wide text-[#111111]">{val.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Chronological Timeline */}
        <div className="mb-24 bg-[#FAFAF8] rounded-[32px] p-8 md:p-12 border border-gray-200/50">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] font-black tracking-widest text-[#D72638] uppercase">OUR HERITAGE</span>
            <h3 className="font-sans text-3xl font-black text-[#111111] tracking-tight uppercase mt-1">
              CHRONOLOGY OF GROWTH
            </h3>
          </div>

          <div className="relative border-l border-gray-200 ml-4 md:ml-12 pl-6 md:pl-12 space-y-10">
            {milestones.map((mile, i) => (
              <div key={mile.year} className="relative group">
                {/* Year Badge indicator on line */}
                <div className="absolute -left-[35px] md:-left-[59px] w-6 h-6 rounded-full bg-white border-2 border-[#D72638] flex items-center justify-center transition-all duration-300 group-hover:bg-[#D72638]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111] group-hover:bg-white" />
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-[#111111] text-white font-mono text-[10px] font-black tracking-widest rounded-full">
                    {mile.year}
                  </span>
                  <h4 className="font-sans text-lg font-bold text-[#111111] uppercase tracking-tight">
                    {mile.title}
                  </h4>
                  <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
                    {mile.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Master Artisans Team Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D72638]">MASTER CRAFTSMEN</span>
            <h3 className="font-sans text-2xl md:text-3xl font-black text-[#111111] tracking-tight uppercase mt-1">
              THE IMPRINT TEAM
            </h3>
            <p className="text-gray-400 text-xs">A collective of design directors, color calibrators, and structural assembly engineers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((person, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAF8] rounded-[28px] border border-gray-200/50 overflow-hidden shadow-sm group hover:border-[#CFA15D]/60 transition-all duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <h4 className="font-sans text-base font-bold text-[#111111] leading-tight">{person.name}</h4>
                    <span className="text-[10px] font-black tracking-wider text-[#CFA15D] uppercase mt-0.5 block">{person.role}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
