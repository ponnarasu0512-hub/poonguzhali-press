import { Printer, ArrowRight, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import React, { useState } from 'react';

interface FooterProps {
  onNavClick: (id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const footerLinks = {
    products: [
      { id: 'business-cards', label: 'Luxury Business Cards' },
      { id: 'wedding-invitations', label: 'Couture Wedding Suite' },
      { id: 'packaging', label: 'Product Packaging' },
      { id: 'books', label: 'Artisan Book Bindery' },
      { id: 'corporate-stationery', label: 'Elite Stationery' }
    ],
    services: [
      { id: 'offset-printing', label: 'Precision Offset Printing' },
      { id: 'digital-printing', label: 'High-Fidelity Digital' },
      { id: 'screen-printing', label: 'Tactile Screen Printing' },
      { id: 'packaging-printing', label: 'Structural Box Design' },
      { id: 'large-format', label: 'Museum Large Format' }
    ]
  };

  return (
    <footer id="main-footer" className="bg-[#111111] text-white pt-20 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Visual background ambient details */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D72638]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Main upper footer bento row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          
          {/* Logo Brand Descriptor */}
          <div className="lg:col-span-4 space-y-6">
            <button
              id="footer-logo-btn"
              onClick={() => onNavClick('home')}
              className="flex items-center space-x-3 group cursor-pointer text-left"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white text-[#111111] overflow-hidden transition-transform duration-500 group-hover:rotate-12">
                <Printer className="w-5 h-5" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#D72638]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#CFA15D]" />
              </div>
              <div>
                <span className="block font-sans font-black tracking-widest text-white text-base leading-none">
                  POONGUZHALI
                </span>
                <span className="block font-sans font-medium tracking-[0.2em] text-[#CFA15D] text-[10px] uppercase mt-1">
                  Art Printers
                </span>
              </div>
            </button>
            
            <p className="text-white/60 text-xs leading-relaxed max-w-sm">
              Chennai’s premium printing partner since 2005. We merge heavy-duty Heidelberg offset lithography with structural packaging engineering and gold hot foil finishes to craft award-worthy prints.
            </p>

            <div className="flex items-center space-x-3">
              <a
                id="footer-call-deep"
                href="tel:+919841555242"
                className="p-3 rounded-full bg-white/5 hover:bg-[#D72638] text-white transition-all duration-300"
                title="Call Directly"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                id="footer-wa-deep"
                href="https://wa.me/919841555242"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-[#25D366] text-white transition-all duration-300"
                title="WhatsApp Dialogue"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Catalog columns */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black tracking-widest text-[#CFA15D] uppercase">
              CATALOG
            </h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-product-link-${link.id}`}
                    onClick={() => onNavClick('products')}
                    className="text-xs text-white/60 hover:text-[#D72638] tracking-wider transition-colors uppercase font-bold text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black tracking-widest text-[#D72638] uppercase">
              SERVICES
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-service-link-${link.id}`}
                    onClick={() => onNavClick('services')}
                    className="text-xs text-white/60 hover:text-[#CFA15D] tracking-wider transition-colors uppercase font-bold text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter subscription module */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h4 className="text-xs font-black tracking-widest text-white uppercase">
                THE SENSORY BRIEF
              </h4>
              <p className="text-xs text-white/50 leading-relaxed">
                Receive quarterly structural CAD packaging trends, paper mill catalog releases, and bespoke print layout guides.
              </p>
            </div>

            {!isSubscribed ? (
              <form id="footer-newsletter-form" onSubmit={handleSubscribe} className="relative">
                <input
                  id="footer-email-input"
                  type="email"
                  required
                  placeholder="Enter executive email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#D72638] focus:border-transparent text-white pr-12 font-semibold"
                />
                <button
                  type="submit"
                  id="footer-newsletter-submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#D72638] hover:bg-white text-white hover:text-[#111111] transition-all duration-300 cursor-pointer"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center space-x-3 text-xs">
                <CheckCircle2 className="w-5 h-5 text-[#CFA15D] flex-shrink-0" />
                <span>Executive briefing subscribed. Welcome.</span>
              </div>
            )}
          </div>

        </div>

        {/* Lower footer copyright info */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-[10px] uppercase font-bold tracking-widest">
          <p>© 2026 Poonguzhali Art Printers. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <button onClick={() => onNavClick('home')} className="hover:text-white transition-colors cursor-pointer">Poonamallee High Road, Chennai</button>
            <button onClick={() => onNavClick('process')} className="hover:text-white transition-colors cursor-pointer">Smyth-Sewn & Offset</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
