import { Phone, MapPin, Clock, MessageSquare, Mail, Calendar, ArrowRight, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const handleMapClick = () => {
    // Open official Google Maps search coordinates for the exact address in Chennai
    window.open('https://maps.google.com/?q=Poonguzhali+Art+Printers+Poonamallee+High+Road+Chennai', '_blank');
  };

  return (
    <section id="contact-us-section" className="py-fluid-section bg-[#FAFAF8] relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#CFA15D]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D72638]">
            IMMEDIATE ENGAGEMENT
          </span>
          <h2 className="font-sans text-fluid-section font-black text-[#111111] tracking-tight uppercase leading-none">
            Let’s craft <br />
            <span className="text-[#CFA15D]">together.</span>
          </h2>
          <p className="text-[#111111]/70 text-sm md:text-base lg:text-lg">
            Visit our corporate showroom in Aminjikarai, Chennai, or initiate an instant design dialogue with our print masters online.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Location & Call cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-8 bg-white border border-gray-200/50 rounded-[28px] shadow-sm space-y-4 relative overflow-hidden group hover:border-[#D72638]/40 transition-all duration-300">
              <div className="p-3 bg-red-50 text-[#D72638] rounded-2xl w-fit">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black tracking-widest text-[#D72638] uppercase">CHENNAI SHOWROOM HQ</span>
                <h3 className="font-sans font-bold text-lg text-[#111111] uppercase tracking-tight">Poonguzhali Art Printers</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  New-521 Old-302, Poonamallee High Road,<br />
                  Near Lakshmi Talkies, Aminjikarai,<br />
                  Chennai - 600029
                </p>
              </div>
              <button
                id="contact-maps-search-btn"
                onClick={handleMapClick}
                className="inline-flex items-center space-x-1 text-xs font-black uppercase tracking-widest text-[#CFA15D] hover:text-[#D72638] transition-colors cursor-pointer"
              >
                <span>Google Maps View</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct Communications Card */}
            <div className="p-8 bg-white border border-gray-200/50 rounded-[28px] shadow-sm space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-amber-50 text-[#CFA15D] rounded-2xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">DIRECT PHONE CALLS</span>
                  <p className="font-sans font-bold text-base text-[#111111] mt-0.5">044-26640436</p>
                  <p className="font-sans font-black text-xl text-[#D72638]">+91 9841555242</p>
                </div>
              </div>

              {/* Action Buttons (Deep links for phone & WhatsApp) */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  id="deep-link-call"
                  href="tel:+919841555242"
                  className="flex items-center justify-center space-x-2 py-3.5 rounded-full bg-[#111111] hover:bg-[#D72638] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Dial</span>
                </a>
                
                <a
                  id="deep-link-whatsapp"
                  href="https://wa.me/919841555242?text=Hi%20Poonguzhali%20Art%20Printers,%20I'd%20like%20to%20request%20a%20print%20quotation."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 py-3.5 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Operational hours Card */}
            <div className="p-6 bg-gray-50 border border-gray-200/30 rounded-2xl flex items-center space-x-4">
              <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <div>
                <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase block">OPERATIONAL WINDOW</span>
                <span className="text-xs font-bold text-[#111111]">Monday - Saturday: 10:00 AM – 6:00 PM</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">Closed on Sundays & national holidays</span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom styled Vector Mock Google Maps */}
          <div className="lg:col-span-7">
            <div
              id="interactive-map-frame"
              onClick={handleMapClick}
              className="bg-[#111111] rounded-[32px] border border-gray-200/50 aspect-[4/3] relative overflow-hidden shadow-xl cursor-pointer group"
            >
              {/* Custom Styled Road Map Vectors */}
              <div className="absolute inset-0 opacity-40 select-none bg-[#111111]">
                {/* Horizontal high speed highway Poonamallee High Road */}
                <div className="absolute top-[45%] left-0 right-0 h-10 bg-gray-800 flex items-center justify-center text-[10px] font-mono tracking-widest text-gray-500 font-bold uppercase">
                  Poonamallee High Road (PH Road)
                </div>
                
                {/* Vertical crossroads */}
                <div className="absolute top-0 bottom-0 left-[30%] w-6 bg-gray-800" />
                <div className="absolute top-0 bottom-0 left-[75%] w-6 bg-gray-800" />
                
                {/* Lakshmi Talkies label */}
                <div className="absolute top-[20%] left-[70%] border border-dashed border-gray-700 px-3 py-1 text-[9px] font-bold text-gray-400">
                  Lakshmi Talkies
                </div>
                
                {/* Aminjikarai label */}
                <div className="absolute top-[75%] left-[20%] border border-dashed border-gray-700 px-3 py-1 text-[9px] font-bold text-gray-400">
                  Aminjikarai Junction
                </div>
              </div>

              {/* Glowing Landmark Red Dot Indicator for Poonguzhali */}
              <div className="absolute top-[48%] left-[40%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-[#D72638] border-2 border-white animate-ping absolute" />
                <span className="w-4 h-4 rounded-full bg-[#D72638] border-2 border-white relative shadow-md" />
                <div className="mt-2.5 px-3 py-1.5 bg-white text-[#111111] text-[10px] font-black uppercase tracking-wider rounded-xl shadow-lg border border-gray-200 flex items-center space-x-1">
                  <Compass className="w-3 h-3 text-[#D72638] animate-spin" />
                  <span>POONGUZHALI ART PRINTERS</span>
                </div>
              </div>

              {/* Map Footer overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-between border border-gray-200 shadow-lg z-20 transition-all duration-300 group-hover:bg-white">
                <div>
                  <span className="block text-[9px] font-black tracking-widest text-gray-400 uppercase">MAP CALIBRATION</span>
                  <span className="block text-xs font-bold text-[#111111]">Aminjikarai, Chennai 600029</span>
                </div>
                <button
                  className="px-4 py-2 bg-[#111111] text-white text-[10px] font-black uppercase tracking-widest rounded-lg flex items-center space-x-1.5"
                >
                  <span>Open Directions</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
