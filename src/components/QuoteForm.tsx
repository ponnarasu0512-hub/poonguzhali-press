import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Sliders,
  CheckCircle,
  FileDown,
  Upload,
  CalendarRange,
  PhoneCall,
  ChevronRight,
  ChevronLeft,
  X,
  Plus,
  Compass,
  Sparkles,
  Info
} from 'lucide-react';
import { PRODUCTS } from '../data';

interface QuoteFormProps {
  preFilledProduct: string;
}

export default function QuoteForm({ preFilledProduct }: QuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    product: preFilledProduct || 'Luxury Business Cards',
    otherProduct: '',
    paperType: '600gsm Extra-Thick Premium Cotton Cardstock',
    paperWeight: '600gsm',
    size: '85 x 55 mm (European standard)',
    customSize: '',
    quantity: 250,
    artworkFile: null as File | null,
    artworkFileName: '',
    deadline: 'standard', // 'standard' | 'express' | 'custom'
    customDeadlineDate: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (preFilledProduct) {
      setFormData((prev) => ({ ...prev, product: preFilledProduct }));
      // Focus/Scroll into the quote section on mount
      const section = document.getElementById('quote-form-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preFilledProduct]);

  // Standard choices to populate buttons
  const products = [
    'Luxury Business Cards',
    'Couture Wedding Invitations',
    'Artisan Hardcover Books',
    'Premium Product Packaging',
    'Elite Corporate Stationery',
    'Architectural Brochures',
    'Bespoke Textured Labels',
    'Other (Specify Below)'
  ];

  const paperTypes = [
    '600gsm Extra-Thick Premium Cotton Cardstock',
    '400gsm Silk Matte Coated Stock',
    '350gsm Textured Linen Fine Paper',
    '380gsm Recycled Organic Craftboard',
    '120gsm Conqueror High-Wove Bond Paper',
    'Custom Material / Recycled Fibre'
  ];

  const sizes = [
    '85 x 55 mm (European standard)',
    '90 x 50 mm (Asian standard)',
    '5" x 7" (Standard Invitation)',
    'A4 Portrait Standard Document',
    'A5 Booklet-style Compact',
    'Custom Dimension Layout'
  ];

  const quantities = [100, 250, 500, 1000, 2500, 5000];

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleNext = () => {
    setErrorMessage(null);
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setErrorMessage(null);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        artworkFile: file,
        artworkFileName: file.name
      }));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData((prev) => ({
        ...prev,
        artworkFile: file,
        artworkFileName: file.name
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate contact info at least
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Please provide your name, email, and phone number to generate your quotation plates.');
      return;
    }
    setErrorMessage(null);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setErrorMessage(null);
    setFormData({
      product: 'Luxury Business Cards',
      otherProduct: '',
      paperType: '600gsm Extra-Thick Premium Cotton Cardstock',
      paperWeight: '600gsm',
      size: '85 x 55 mm (European standard)',
      customSize: '',
      quantity: 250,
      artworkFile: null,
      artworkFileName: '',
      deadline: 'standard',
      customDeadlineDate: '',
      name: '',
      email: '',
      phone: '',
      company: '',
      notes: '',
    });
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const stepsMeta = [
    { num: 1, label: 'Product Selection' },
    { num: 2, label: 'Paper Library' },
    { num: 3, label: 'Format Sizing' },
    { num: 4, label: 'Quantity Volume' },
    { num: 5, label: 'Artwork Ingestion' },
    { num: 6, label: 'Delivery Deadline' },
    { num: 7, label: 'Contact Verification' }
  ];

  return (
    <section id="quote-form-section" className="py-fluid-section bg-[#FAFAF8] relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#CFA15D]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D72638]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-2xl mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D72638]">
            DIGITAL QUOTATION PLATE
          </span>
          <h2 className="font-sans text-fluid-section font-black text-[#111111] tracking-tight uppercase leading-none">
            SPECIFY YOUR <br />
            <span className="text-[#CFA15D]">IMPRINT STRATEGY.</span>
          </h2>
          <p className="text-[#111111]/60 text-sm md:text-base leading-relaxed">
            Configure your materials and finishes below. Our surgical real-time estimator maps your parameters into high-fidelity plates directly.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <div id="quote-wizard-container" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Multi-Step Interactive Form */}
              <div className="lg:col-span-8 bg-white border border-gray-200/50 rounded-[32px] p-8 md:p-12 shadow-xl space-y-8 flex flex-col min-h-[500px] justify-between">
                
                {/* Horizontal Progress bar */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest text-[#D72638] uppercase">
                      STEP {currentStep} OF 7: {stepsMeta[currentStep - 1].label}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-gray-400">
                      {Math.round((currentStep / 7) * 100)}% COMPLETE
                    </span>
                  </div>
                  <div className="w-full h-[3px] bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#D72638]"
                      initial={{ width: '14.28%' }}
                      animate={{ width: `${(currentStep / 7) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Wizard Forms body switch */}
                <div className="py-6 flex-grow">
                  <AnimatePresence mode="wait">
                    
                    {/* Step 1: Product Selection */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <h3 className="font-sans text-xl font-black text-[#111111] uppercase tracking-tight">Choose your print format</h3>
                          <p className="text-xs text-gray-400">Select one of our premium products or describe a bespoke format.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {products.map((p) => {
                            const isSel = formData.product === p;
                            return (
                              <button
                                key={p}
                                type="button"
                                id={`step1-product-${p.replace(/\s+/g, '-').toLowerCase()}`}
                                onClick={() => setFormData({ ...formData, product: p })}
                                className={`p-4 rounded-2xl border text-left text-xs font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden flex items-center justify-between cursor-pointer ${
                                  isSel
                                    ? 'bg-[#111111] text-white border-transparent shadow-md'
                                    : 'bg-[#FAFAF8] text-[#111111]/70 border-gray-200/60 hover:bg-white hover:text-[#111111] hover:border-gray-400'
                                }`}
                              >
                                <span>{p}</span>
                                {isSel && <CheckCircle className="w-4 h-4 text-[#CFA15D]" />}
                              </button>
                            );
                          })}
                        </div>

                        {formData.product === 'Other (Specify Below)' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="pt-2"
                          >
                            <input
                              id="step1-custom-product"
                              type="text"
                              placeholder="Describe your custom product (e.g., Die-Cut Hexagonal Folders)..."
                              value={formData.otherProduct}
                              onChange={(e) => setFormData({ ...formData, otherProduct: e.target.value })}
                              className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D72638]"
                            />
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {/* Step 2: Paper Selection */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <h3 className="font-sans text-xl font-black text-[#111111] uppercase tracking-tight">Select fine paper stock</h3>
                          <p className="text-xs text-gray-400">Choose a sensory fiber from our curated mill inventories.</p>
                        </div>

                        <div className="space-y-3">
                          {paperTypes.map((pt) => {
                            const isSel = formData.paperType === pt;
                            return (
                              <button
                                key={pt}
                                type="button"
                                id={`step2-paper-${pt.replace(/\s+/g, '-').toLowerCase()}`}
                                onClick={() => setFormData({ ...formData, paperType: pt })}
                                className={`w-full p-4 rounded-xl border text-left text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between cursor-pointer ${
                                  isSel
                                    ? 'bg-[#111111] text-white border-transparent shadow-sm'
                                    : 'bg-[#FAFAF8] text-[#111111]/70 border-gray-200/60 hover:bg-white hover:text-[#111111] hover:border-gray-400'
                                }`}
                              >
                                <span>{pt}</span>
                                {isSel && <CheckCircle className="w-4 h-4 text-[#CFA15D]" />}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Size Selection */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <h3 className="font-sans text-xl font-black text-[#111111] uppercase tracking-tight">Dimension parameters</h3>
                          <p className="text-xs text-gray-400">Choose standard layouts or define a custom crop scale.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {sizes.map((s) => {
                            const isSel = formData.size === s;
                            return (
                              <button
                                key={s}
                                type="button"
                                id={`step3-size-${s.replace(/\s+/g, '-').toLowerCase()}`}
                                onClick={() => setFormData({ ...formData, size: s })}
                                className={`p-4 rounded-2xl border text-left text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between cursor-pointer ${
                                  isSel
                                    ? 'bg-[#111111] text-white border-transparent shadow-sm'
                                    : 'bg-[#FAFAF8] text-[#111111]/70 border-gray-200/60 hover:bg-white hover:text-[#111111]'
                                }`}
                              >
                                <span>{s}</span>
                                {isSel && <CheckCircle className="w-4 h-4 text-[#CFA15D]" />}
                              </button>
                            );
                          })}
                        </div>

                        {formData.size === 'Custom Dimension Layout' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="pt-2"
                          >
                            <input
                              id="step3-custom-size"
                              type="text"
                              placeholder="e.g., 210mm x 210mm Square, 4-panel Gatefold..."
                              value={formData.customSize}
                              onChange={(e) => setFormData({ ...formData, customSize: e.target.value })}
                              className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D72638]"
                            />
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {/* Step 4: Quantity Selection */}
                    {currentStep === 4 && (
                      <motion.div
                        key="step-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                      >
                        <div className="space-y-2">
                          <h3 className="font-sans text-xl font-black text-[#111111] uppercase tracking-tight">Count volume quantity</h3>
                          <p className="text-xs text-gray-400">Unit discounts scale exponentially on Heidelberg offset plates above 1,000 counts.</p>
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                          {quantities.map((q) => {
                            const isSel = formData.quantity === q;
                            return (
                              <button
                                key={q}
                                type="button"
                                id={`step4-qty-${q}`}
                                onClick={() => setFormData({ ...formData, quantity: q })}
                                className={`p-4 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                                  isSel
                                    ? 'bg-[#111111] text-white border-transparent shadow-sm'
                                    : 'bg-[#FAFAF8] text-[#111111]/70 border-gray-200/60 hover:bg-white hover:text-[#111111]'
                                }`}
                              >
                                {q}
                              </button>
                            );
                          })}
                        </div>

                        <div className="space-y-2 pt-4">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block">Or input exact custom count</label>
                          <input
                            id="step4-custom-qty"
                            type="number"
                            placeholder="Enter custom count (e.g., 1500)"
                            value={formData.quantity}
                            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })}
                            className="w-full sm:w-64 px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#D72638]"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 5: Artwork Uploader */}
                    {currentStep === 5 && (
                      <motion.div
                        key="step-5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <h3 className="font-sans text-xl font-black text-[#111111] uppercase tracking-tight">Ingest Vector Artwork</h3>
                          <p className="text-xs text-gray-400">Drag and drop press-ready vector blueprints or skip this step to supply art later.</p>
                        </div>

                        {/* Drag and Drop Zone */}
                        <div
                          id="artwork-drag-zone"
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className="border-2 border-dashed border-gray-200 hover:border-[#D72638] bg-[#FAFAF8] p-8 md:p-12 rounded-[24px] text-center space-y-4 cursor-pointer transition-colors duration-300"
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            onChange={handleFileChange}
                            accept=".pdf,.ai,.ind,.eps,.cdr"
                            className="hidden"
                          />
                          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mx-auto text-[#CFA15D]">
                            <Upload className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-[#111111]">
                              {formData.artworkFileName ? 'CHANGE ARTWORK FILE' : 'DRAG VECTOR FILE HERE'}
                            </p>
                            <p className="text-[10px] text-gray-400 mt-1">PDF, AI, EPS, INDD up to 50MB</p>
                          </div>
                        </div>

                        {formData.artworkFileName && (
                          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <FileDown className="w-5 h-5 text-[#D72638]" />
                              <div>
                                <p className="text-xs font-bold text-[#111111]">{formData.artworkFileName}</p>
                                <span className="text-[9px] text-gray-400">Ready to upload</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFormData({ ...formData, artworkFile: null, artworkFileName: '' });
                              }}
                              className="p-1.5 rounded-full bg-white text-gray-400 hover:bg-[#D72638] hover:text-white transition-all cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}

                        <div className="p-4 bg-[#CFA15D]/5 border border-[#CFA15D]/20 rounded-xl flex items-start space-x-3">
                          <Info className="w-4 h-4 text-[#CFA15D] mt-0.5 flex-shrink-0" />
                          <p className="text-[10px] text-gray-600 leading-relaxed">
                            <strong>PRE-PRESS NOTE:</strong> Please guarantee fonts are converted to outlines/curves, and foil layer vectors are set as a solid spot color in a designated overlay layer.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 6: Delivery Deadline */}
                    {currentStep === 6 && (
                      <motion.div
                        key="step-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <h3 className="font-sans text-xl font-black text-[#111111] uppercase tracking-tight">Delivery Schedule deadline</h3>
                          <p className="text-xs text-gray-400">Choose our standard delivery process or select expedited rush setups.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <button
                            type="button"
                            id="step6-deadline-standard"
                            onClick={() => setFormData({ ...formData, deadline: 'standard' })}
                            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                              formData.deadline === 'standard'
                                ? 'bg-[#111111] text-white border-transparent shadow-sm'
                                : 'bg-[#FAFAF8] text-[#111111]/70 border-gray-200/60 hover:bg-white hover:text-[#111111]'
                            }`}
                          >
                            <span className="block text-xs font-black tracking-widest uppercase">Standard Process</span>
                            <span className="block text-[10px] opacity-75 mt-1">Ships inside 4-7 business days</span>
                          </button>

                          <button
                            type="button"
                            id="step6-deadline-express"
                            onClick={() => setFormData({ ...formData, deadline: 'express' })}
                            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                              formData.deadline === 'express'
                                ? 'bg-[#111111] text-white border-transparent shadow-sm'
                                : 'bg-[#FAFAF8] text-[#111111]/70 border-gray-200/60 hover:bg-white hover:text-[#111111]'
                            }`}
                          >
                            <span className="block text-xs font-black tracking-widest uppercase text-[#D72638] group-hover:text-white">Expedited Rush</span>
                            <span className="block text-[10px] opacity-75 mt-1">Dispatch inside 24-48 hours (+15% rush fee)</span>
                          </button>
                        </div>

                        <div className="space-y-2 pt-4">
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block">Or select specific event date</label>
                          <div className="relative w-full sm:w-64">
                            <CalendarRange className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              id="step6-custom-date"
                              type="date"
                              value={formData.customDeadlineDate}
                              onChange={(e) => setFormData({ ...formData, deadline: 'custom', customDeadlineDate: e.target.value })}
                              className="w-full pl-11 pr-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#D72638] font-bold text-gray-700"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 7: Contact Information */}
                    {currentStep === 7 && (
                      <motion.div
                        key="step-7"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <h3 className="font-sans text-xl font-black text-[#111111] uppercase tracking-tight">Client Contact Verification</h3>
                          <p className="text-xs text-gray-400">A senior print supervisor will review these parameters and ring you with specifications.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black tracking-wider text-gray-400 uppercase">FULL NAME *</label>
                            <input
                              id="step7-name"
                              type="text"
                              required
                              placeholder="e.g., Ponarasu Perumal"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#D72638] font-semibold"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black tracking-wider text-gray-400 uppercase">EMAIL ADDRESS *</label>
                            <input
                              id="step7-email"
                              type="email"
                              required
                              placeholder="e.g., client@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#D72638] font-semibold"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black tracking-wider text-gray-400 uppercase">PHONE NUMBER *</label>
                            <input
                              id="step7-phone"
                              type="tel"
                              required
                              placeholder="e.g., 9841555242"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#D72638] font-semibold"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black tracking-wider text-gray-400 uppercase">COMPANY NAME (OPTIONAL)</label>
                            <input
                              id="step7-company"
                              type="text"
                              placeholder="e.g., Creative Agency Madras"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#D72638] font-semibold"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black tracking-wider text-gray-400 uppercase">SPECIAL INSTRUCTIONS / REMARKS</label>
                          <textarea
                            id="step7-notes"
                            rows={3}
                            placeholder="Detail any specific textures, edge gilding, debossing plates, or folding preferences here..."
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="w-full px-4 py-3 bg-[#FAFAF8] border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#D72638] font-semibold"
                          />
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Wizard Footer Controls */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-[#D72638]/10 border border-[#D72638]/20 rounded-xl text-xs text-[#D72638] font-bold"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                  <div className="flex items-center justify-between">
                    <button
                      id="quote-back-btn"
                      type="button"
                      onClick={handleBack}
                      disabled={currentStep === 1}
                      className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border cursor-pointer ${
                        currentStep === 1
                          ? 'opacity-30 border-gray-200 text-gray-300 pointer-events-none'
                          : 'bg-white border-gray-200 text-[#111111] hover:bg-gray-100'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    {currentStep < 7 ? (
                      <button
                        id="quote-next-btn"
                        type="button"
                        onClick={handleNext}
                        className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-black uppercase tracking-widest hover:bg-[#D72638] transition-all cursor-pointer"
                      >
                        <span>Continue</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        id="quote-submit-btn"
                        type="button"
                        onClick={handleSubmit}
                        className="flex items-center space-x-2 px-8 py-3 rounded-full bg-[#D72638] text-white text-xs font-black uppercase tracking-widest hover:bg-[#111111] transition-all cursor-pointer"
                      >
                        <span>Submit Specifications</span>
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

              </div>

              {/* Right Column: LIVE ESTIMATOR MATRIX SHEET */}
              <div className="lg:col-span-4 bg-[#111111] text-white rounded-[32px] p-8 shadow-xl space-y-6 border border-white/5 relative overflow-hidden">
                {/* Visual decorative plate design watermark */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-1">
                  <span className="text-[10px] font-black tracking-widest text-[#CFA15D] uppercase">IMPRINT ESTIMATOR</span>
                  <h3 className="font-sans text-lg font-black uppercase tracking-tight">Active Quotation Plate</h3>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-4">
                  <div className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                    <span className="text-white/40">Product:</span>
                    <span className="font-bold text-right text-[#CFA15D]">{formData.product === 'Other (Specify Below)' ? formData.otherProduct || 'Custom' : formData.product}</span>
                  </div>

                  <div className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                    <span className="text-white/40">Acclimated Paper:</span>
                    <span className="font-bold text-right text-white/80">{formData.paperType}</span>
                  </div>

                  <div className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                    <span className="text-white/40">Dimension:</span>
                    <span className="font-bold text-right text-white/80">{formData.size === 'Custom Dimension Layout' ? formData.customSize || 'Custom' : formData.size}</span>
                  </div>

                  <div className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                    <span className="text-white/40">Count Volume:</span>
                    <span className="font-bold text-right text-[#CFA15D]">{formData.quantity} units</span>
                  </div>

                  <div className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                    <span className="text-white/40">Artwork Blueprint:</span>
                    <span className="font-bold text-right text-white/80 truncate max-w-[150px]">{formData.artworkFileName || 'Submit later / Pending'}</span>
                  </div>

                  <div className="flex justify-between items-start text-xs border-b border-white/5 pb-2">
                    <span className="text-white/40">Target Deadline:</span>
                    <span className="font-bold text-right text-white/80 capitalize">{formData.deadline === 'custom' ? formData.customDeadlineDate || 'Custom' : formData.deadline}</span>
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] text-white/50 leading-relaxed space-y-2">
                  <div className="flex items-center space-x-1 text-[#CFA15D] font-bold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>AUTOMATIC CALIBRATION</span>
                  </div>
                  <p>Our Chennai factory coordinates plate setup parameters immediately upon file assessment. Minimum invoice values apply for offset litho setups.</p>
                </div>
              </div>

            </div>
          ) : (
            /* Submission success plate card */
            <motion.div
              key="success-plate"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto bg-[#111111] text-white rounded-[32px] p-8 md:p-12 border border-white/10 shadow-2xl text-center space-y-8 relative overflow-hidden"
            >
              {/* Spinning gold seal asset */}
              <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#CFA15D]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />
                <div className="w-16 h-16 rounded-full bg-[#CFA15D] flex items-center justify-center text-[#111111] font-sans font-black text-sm relative z-10 shadow-md">
                  SEAL
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-black tracking-widest text-[#D72638] uppercase">TRANSMISSION CONFIRMED</span>
                <h3 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Quotation Plate Generated</h3>
                <p className="text-white/70 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your requested specs for <strong>{formData.product}</strong> have been logged successfully.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl text-left text-xs space-y-2 border border-white/10">
                <div className="flex justify-between">
                  <span className="text-white/40">Tracking ID:</span>
                  <span className="font-mono text-white/80">PAP-7229-X8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Assigned Expert:</span>
                  <span className="font-bold text-[#CFA15D]">S. Swaminathan (Pre-Press)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Response Window:</span>
                  <span className="font-bold text-white/80">Within 15 minutes</span>
                </div>
              </div>

              <button
                id="reset-quote-form"
                onClick={handleReset}
                className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-[#CFA15D] hover:text-white transition-colors cursor-pointer"
              >
                <span>Configure Another Specification</span>
                <Sliders className="w-4 h-4" />
              </button>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
