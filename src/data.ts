import { Product, Service, GalleryItem, Testimonial, FAQItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'business-cards',
    name: 'Luxury Business Cards',
    category: 'corporate',
    categoryLabel: 'Corporate Stationery',
    image: 'https://cdn.phototourl.com/free/2026-07-13-ed2f9a66-40b1-43b2-afa2-963538a1abe9.jpg',
    description: 'Create unforgettable first impressions with our ultra-thick, premium tactile business cards featuring bespoke finishing options.',
    applications: ['Executive Networking', 'Luxury Brand Representation', 'Corporate Stationery Systems'],
    sizes: ['85 x 55 mm (European standard)', '90 x 50 mm (Asian standard)', '3.5" x 2.0" (US standard)', 'Custom shapes'],
    paperOptions: [
      '600gsm Extra-Thick Premium Cotton Cardstock',
      '400gsm Silk Matte Coated Stock',
      '350gsm Textured Linen Fine Paper',
      '380gsm Recycled Organic Craft'
    ],
    printingType: ['Heavy Impression Letterpress', 'Precision Offset Lithe', 'Ultra-HD Digital Print'],
    colorOptions: ['CMYK Full Color Process', 'Pantone Solid Matching (PMS)', 'Deep Monochrome Black'],
    finishingOptions: {
      lamination: ['Velvet Soft-Touch', 'Chic Matte', 'Sleek Gloss'],
      spotUV: true,
      foiling: true,
      embossing: true
    },
    deliveryTime: '2 - 4 Business Days',
    startingPrice: '₹499 for 100 units',
    gallery: [
      'https://cdn.phototourl.com/free/2026-07-13-ed2f9a66-40b1-43b2-afa2-963538a1abe9.jpg',
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=600'
    ],
    features: ['Handcrafted edge gilding', 'Debossed typography', 'Bespoke die-cut contours']
  },
  {
    id: 'wedding-invitations',
    name: 'Couture Wedding Invitations',
    category: 'wedding',
    categoryLabel: 'Fine Wedding Suite',
    image: 'https://cdn.phototourl.com/free/2026-07-13-844bbaf7-a406-478f-aa3b-cd5f4c5c8989.jpg',
    description: 'Exquisite wedding invitation suites. Sculpted hot foil stamping on pristine heavy stock that mirrors your monumental milestone.',
    applications: ['Luxury Wedding Invitations', 'Save the Date Cards', 'RSVP Cards', 'Ceremony Menus'],
    sizes: ['5" x 7" (Standard Invitation)', '4.25" x 6" (Details/RSVP)', 'Custom Die-Cut Arches'],
    paperOptions: [
      '650gsm Hand-Torn Deckled Edge Cotton Paper',
      '300gsm Premium Pearlescent Shimmer',
      '450gsm Imperial Gold-Flecked Cardstock',
      'Heavy Frosted Acrylic Sheets'
    ],
    printingType: ['Artisanal Hot Foil Stamping', 'Deep Plate Debossing', 'Gold Leaf Inlay'],
    colorOptions: ['Metalic Metallic Gold/Silver', 'Pantone Pastel Hues', 'Classic White-on-White'],
    finishingOptions: {
      lamination: ['Uncoated Tactile'],
      spotUV: false,
      foiling: true,
      embossing: true
    },
    deliveryTime: '5 - 7 Business Days',
    startingPrice: '₹4,500 per custom suite of 50',
    gallery: [
      'https://cdn.phototourl.com/free/2026-07-13-844bbaf7-a406-478f-aa3b-cd5f4c5c8989.jpg',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600'
    ],
    features: ['Ribbon/Wax sealing', 'Handmade envelope liners', 'Metallic edge gilding']
  },
  {
    id: 'books',
    name: 'Artisan Hardcover Books',
    category: 'editorial',
    categoryLabel: 'Editorial & Book Binding',
    image: 'https://cdn.phototourl.com/free/2026-07-13-aa0265bb-16ef-4304-a7f5-50bfb9de70f2.jpg',
    description: 'Expertly bound literary works, poetry anthologies, and museum catalogues. Traditional Smyth-sewn luxury bindings built to last.',
    applications: ['Art Portfolios', 'Luxury Novels', 'Monographs', 'Limited-Edition Collections'],
    sizes: ['A4 Portrait', 'A5 Compact', '10" x 10" Square Artbook', 'Bespoke sizes'],
    paperOptions: [
      '140gsm Munken Premium Cream Uncoated',
      '170gsm Silk Art Paper for illustrations',
      '120gsm Fine Japanese Bamboo Paper'
    ],
    printingType: ['State-of-the-art Sheetfed Offset', 'High-Fidelity Inkjet Fine Art'],
    colorOptions: ['Stunning Duotone Black & White', '10-Color Expanded Gamut CMYK'],
    finishingOptions: {
      lamination: ['Anti-Scratch Matte', 'Soft-touch'],
      spotUV: true,
      foiling: true,
      embossing: true
    },
    deliveryTime: '7 - 12 Business Days',
    startingPrice: '₹12,500 for low-run premium books',
    gallery: [
      'https://cdn.phototourl.com/free/2026-07-13-aa0265bb-16ef-4304-a7f5-50bfb9de70f2.jpg'
    ],
    features: ['Cloth-wrapped cover boards', 'Bespoke printed slipcases', 'Smyth-sewn thread bind']
  },
  {
    id: 'packaging',
    name: 'Premium Product Packaging',
    category: 'packaging',
    categoryLabel: 'Luxury Packaging',
    image: 'https://cdn.phototourl.com/free/2026-07-13-db471f04-ad63-4597-a4d5-a29a212ce3d0.jpg',
    description: 'Bespoke structural packaging designed to elevate the unboxing experience. Robust material selection married to surgical graphic print execution.',
    applications: ['Cosmetics Boxes', 'High-End Technology Packaging', 'Luxury Gift Containers'],
    sizes: ['Fully custom structural dies', 'Auto-locking boxes', 'Tuck-end packaging'],
    paperOptions: [
      '350gsm to 450gsm Premium SBS Board',
      'Lined Rigid Greyboard (1200gsm - 2000gsm)',
      'Recycled Natural Kraft Craftboard'
    ],
    printingType: ['Premium Multi-color Offset', 'Direct-to-Board UV Flatbed'],
    colorOptions: ['High-Gamut CMYK', 'Custom Metallic Pantone Pigments'],
    finishingOptions: {
      lamination: ['Velvet Soft-Touch', 'Scuff-resistant Matte'],
      spotUV: true,
      foiling: true,
      embossing: true
    },
    deliveryTime: '8 - 14 Business Days',
    startingPrice: 'Contact for structural mockup',
    gallery: [
      'https://cdn.phototourl.com/free/2026-07-13-db471f04-ad63-4597-a4d5-a29a212ce3d0.jpg',
      'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=600'
    ],
    features: ['Magnetic closures', 'Custom die-cut foam/inserts', 'Interior brand message printing']
  },
  {
    id: 'corporate-stationery',
    name: 'Elite Corporate Stationery',
    category: 'corporate',
    categoryLabel: 'Corporate Stationery',
    image: 'https://cdn.phototourl.com/free/2026-07-13-81e062ee-1aca-4f81-b22f-3cda6c3203a0.jpg',
    description: 'Unified corporate identity packages featuring bespoke letterheads, envelopes, note cards, and presentation folders.',
    applications: ['Legal Briefs', 'MNC Branding Packages', 'Private Client Communications'],
    sizes: ['A4 Letterhead', 'DL, C5, and C4 Envelopes', 'Custom folders'],
    paperOptions: [
      '120gsm Conqueror High-Wove Fine Paper',
      '100gsm Premium Bond Laser-Safe Stock',
      '220gsm Archival Recycled Cotton Envelope Board'
    ],
    printingType: ['Surgical Spot Color Offset', 'Digital HD Inkjet'],
    colorOptions: ['Spot Pantone Solid Colors (PMS)', 'Standard CMYK'],
    finishingOptions: {
      lamination: ['Sleek Matte'],
      spotUV: true,
      foiling: true,
      embossing: true
    },
    deliveryTime: '3 - 5 Business Days',
    startingPrice: '₹2,499 for full starter suite',
    gallery: [
      'https://cdn.phototourl.com/free/2026-07-13-81e062ee-1aca-4f81-b22f-3cda6c3203a0.jpg'
    ],
    features: ['Security watermarked paper options', 'Peel & Seal envelope linings', 'Laser-safe laser-printer compatible inks']
  },
  {
    id: 'brochures',
    name: 'Architectural Brochures',
    category: 'promotional',
    categoryLabel: 'Marketing Collateral',
    image: 'https://cdn.phototourl.com/free/2026-07-13-be3cd100-57ab-42f6-afd4-a30b47838121.jpg',
    description: 'Impeccable corporate profiles, real estate prospectuses, and museum guides printed with striking color fidelity.',
    applications: ['Real Estate Prospectus', 'Luxury Brand Foldouts', 'Museum Exhibition Brochures'],
    sizes: ['A4 Trifold', 'A5 Booklet-style Folder', 'Wide Gatefolds', 'Bespoke folds'],
    paperOptions: [
      '250gsm Silk Coated Premium stock (covers)',
      '150gsm Munken Lynx Uncoated inner leaves',
      '300gsm Heavy Matte Cover'
    ],
    printingType: ['Ultra-High Definition Offset', 'Stroboscopic Digital HD'],
    colorOptions: ['Rich CMYK + spot metallic Pantone accents'],
    finishingOptions: {
      lamination: ['Matt Velvet Soft-Touch'],
      spotUV: true,
      foiling: true,
      embossing: false
    },
    deliveryTime: '4 - 6 Business Days',
    startingPrice: '₹1,999 for 50 trifold brochures',
    gallery: [
      'https://cdn.phototourl.com/free/2026-07-13-be3cd100-57ab-42f6-afd4-a30b47838121.jpg'
    ],
    features: ['Perfect cross-creasing to prevent cracking', 'Accurate spot UV overlays', 'High durability scoring']
  },
  {
    id: 'catalogues',
    name: 'Premium Brand Catalogues',
    category: 'editorial',
    categoryLabel: 'Editorial & Book Binding',
    image: 'https://cdn.phototourl.com/free/2026-07-13-d4051df1-d04b-46fb-8045-d919ebfb6fc8.jpg',
    description: 'High-volume wholesale and high-fashion retail catalogues. Crafted to showcase your products with uncompromising photographic detail.',
    applications: ['Jewelry Collections', 'Fashion Lookbooks', 'Automobile Catalogues'],
    sizes: ['A4 Standard', '30 x 30 cm Square Deluxe', 'A5 landscape'],
    paperOptions: [
      '200gsm Silk Coated High-White Art Paper',
      '130gsm Matte Satin Internal Sheets',
      '350gsm Heavy Artboard Covers'
    ],
    printingType: ['Heidelberg Web Offset', 'Xerox Iridesse Digital'],
    colorOptions: ['CMYK Coated Process', 'Pantone Metallic Ink'],
    finishingOptions: {
      lamination: ['Gloss Coated', 'Anti-scuff Velvet'],
      spotUV: true,
      foiling: true,
      embossing: true
    },
    deliveryTime: '5 - 9 Business Days',
    startingPrice: 'Contact for bulk printing discounts',
    gallery: [
      'https://cdn.phototourl.com/free/2026-07-13-d4051df1-d04b-46fb-8045-d919ebfb6fc8.jpg'
    ],
    features: ['PUR adhesive spine binding', 'Smyth-sewn sections', 'Gatefold insert sheets']
  },
  {
    id: 'labels',
    name: 'Bespoke Textured Labels',
    category: 'packaging',
    categoryLabel: 'Luxury Packaging',
    image: 'https://cdn.phototourl.com/free/2026-07-13-77f14ca4-eb49-4229-8976-def165ecde47.jpg',
    description: 'Uncompromising artisanal roll or sheet-fed product labels with gold foil highlights and water-resistant finishes.',
    applications: ['Wine & Spirits Bottles', 'Luxury Apothecary Jars', 'Organic Cosmetics Packaging'],
    sizes: ['Custom die-cut contours', 'Geometric circles, ovals, rounded rectangles'],
    paperOptions: [
      'Textured Antique Cream Wine Label Stock',
      'Transparent Premium Gloss PET Film',
      'Satin Waterproof Vinyl',
      'Biodegradable Organic Paper'
    ],
    printingType: ['Flexographic Web Printing', 'Roll-Fed HD Digital UV Label Press'],
    colorOptions: ['Opaque White Ink Underlays', 'Full Gamut CMYK + Gold Ink'],
    finishingOptions: {
      lamination: ['Anti-scuff Matte Protective Shield'],
      spotUV: true,
      foiling: true,
      embossing: true
    },
    deliveryTime: '3 - 5 Business Days',
    startingPrice: '₹1,500 for roll of 500 custom labels',
    gallery: [
      'https://cdn.phototourl.com/free/2026-07-13-77f14ca4-eb49-4229-8976-def165ecde47.jpg'
    ],
    features: ['Water & ice resistant adhesive', 'Ultra-sharp micro-typography', 'Precise laser die-cutting']
  },
  {
    id: 'boxes',
    name: 'Luxury Rigid Boxes',
    category: 'packaging',
    categoryLabel: 'Luxury Packaging',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=1200',
    description: 'High-end rigid board gift boxes, perfect for jewelry, expensive chocolates, or high-end technical instruments.',
    applications: ['Jewelry Cases', 'Premium Watch Boxes', 'VIP Corporate Gift boxes'],
    sizes: ['Bespoke structural engineering', 'Clamshell layout, slide drawer layout, lid & base'],
    paperOptions: [
      'Fine Italian Fedrigoni wrapped over 1500gsm Rigid Board',
      'Textured Buckram Cover Papers',
      'Soft Suede and Satin linings'
    ],
    printingType: ['Foil Debossing', 'High Precision Screen Print'],
    colorOptions: ['Metallic Pantone Palette', 'Minimal White ink on deep charcoal board'],
    finishingOptions: {
      spotUV: true,
      foiling: true,
      embossing: true
    },
    deliveryTime: '10 - 15 Business Days',
    startingPrice: 'Contact for structural design and CAD sample',
    gallery: [
      'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=600'
    ],
    features: ['Hidden neodymium magnetic catch', 'Precision hand-finished wraps', 'Custom fabric ribbon pull tabs']
  },
  {
    id: 'banners',
    name: 'Fine-Art Large Banners',
    category: 'promotional',
    categoryLabel: 'Marketing Collateral',
    image: 'https://cdn.phototourl.com/free/2026-07-13-4e5525ab-10cf-4e4c-83a1-b96879b058dc.jpg',
    description: 'Commanding physical displays for corporate showrooms, architectural exhibits, and trade shows, printed with premium UV stable dyes.',
    applications: ['Exhibition Fabric Backdrops', 'Museum Wall Banners', 'Showroom Displays'],
    sizes: ['Rollup 85 x 200 cm', 'Exhibition Walls 3x3 meters', 'Unlimited bespoke dimensions'],
    paperOptions: [
      'Heavy-duty Blockout Fabric Canvas (No Curl)',
      'Premium 510gsm Cast PVC banner material',
      'Eco-Friendly Polyester Canvas Fabric'
    ],
    printingType: ['Latex Odorless Inkjet System', 'UV LED Hybrid Flatbed printing'],
    colorOptions: ['Wide Gamut 8-Color photographic output'],
    finishingOptions: {
      lamination: ['UV-Shield Matte Protection Screen']
    },
    deliveryTime: '2 - 3 Business Days',
    startingPrice: '₹1,200 for rollup banner with premium stand',
    gallery: [
      'https://cdn.phototourl.com/free/2026-07-13-4e5525ab-10cf-4e4c-83a1-b96879b058dc.jpg'
    ],
    features: ['Solid anodized aluminum stands', 'Scratch-resistant inks', 'Rust-proof metal eyelets']
  },
  {
    id: 'flyers',
    name: 'Bespoke Curated Flyers',
    category: 'promotional',
    categoryLabel: 'Marketing Collateral',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
    description: 'Move away from cheap handouts. Our curated flyers use textured stocks and elegant design grids to command absolute attention.',
    applications: ['Boutique Retail Launches', 'Luxury Hospitality Promos', 'Art Gallery Invitations'],
    sizes: ['A5 Hand-size', 'A6 Pocket-size', '1/3 A4 DL format'],
    paperOptions: [
      '250gsm Premium Off-White Uncoated Cardstock',
      '300gsm Textured Felt Fine Paper',
      '180gsm Recycled Flecked Straw stock'
    ],
    printingType: ['High Definition Digital Offset Press'],
    colorOptions: ['Perfect CMYK color calibration'],
    finishingOptions: {
      lamination: ['Tactile Velvet Matte']
    },
    deliveryTime: '1 - 2 Business Days',
    startingPrice: '₹999 for pack of 250 premium flyers',
    gallery: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600'
    ],
    features: ['Surgical trim alignment', 'Zero color drift', 'Anti-curling technology']
  },
  {
    id: 'certificates',
    name: 'Security Archival Certificates',
    category: 'corporate',
    categoryLabel: 'Corporate Stationery',
    image: 'https://cdn.phototourl.com/free/2026-07-13-9a607e88-eed2-45fa-a6df-cbd2284dbb42.jpg',
    description: 'Secure, prestigious awards and certificates printed on museum-grade parchment with security guilloché patterns and foil elements.',
    applications: ['University Degrees', 'Corporate Awards', 'Prestigious Accreditations'],
    sizes: ['A4 Standard', 'A3 Deluxe Frame', 'US Letter Format'],
    paperOptions: [
      '300gsm Fabriano Archival Parchment Paper',
      '250gsm Cotton Rag Premium Fine-Art Board',
      '120gsm Secure Threaded Paper'
    ],
    printingType: ['Offset Lithography + Metallic Foil Guilding'],
    colorOptions: ['PMS Pantone Inks + Metallic Holograms'],
    finishingOptions: {
      foiling: true,
      embossing: true
    },
    deliveryTime: '3 - 5 Business Days',
    startingPrice: '₹1,500 custom engraving plate fee + ₹25 per cert',
    gallery: [
      'https://cdn.phototourl.com/free/2026-07-13-9a607e88-eed2-45fa-a6df-cbd2284dbb42.jpg'
    ],
    features: ['High-resolution secure guilloche frame borders', 'Unique gold stamp foil seal', 'Surgical security serial numbering']
  },
  {
    id: 'folders',
    name: 'Presentation Folders',
    category: 'corporate',
    categoryLabel: 'Corporate Stationery',
    image: 'https://cdn.phototourl.com/free/2026-07-13-c77d7953-280d-4084-a30a-744a6b06c432.jpg',
    description: 'Bespoke presentation folders with interlocking pockets, custom die-cut business card slits, and premium spot UV finishing.',
    applications: ['Corporate Investor Kits', 'Real Estate Contract Packs', 'Conference Materials'],
    sizes: ['Oversized A4 (holds up to 30 sheets A4)', 'Custom square document pockets'],
    paperOptions: [
      '350gsm Silk Heavy Artboard',
      '380gsm Recycled Charcoal Matte Board',
      '300gsm Linen White card'
    ],
    printingType: ['Heavy sheet offset', 'Digital HD Inkjet for micro runs'],
    colorOptions: ['CMYK, Spot color Pantone solids'],
    finishingOptions: {
      lamination: ['Velvet Soft-Touch', 'Chic Matte'],
      spotUV: true,
      foiling: true,
      embossing: true
    },
    deliveryTime: '4 - 7 Business Days',
    startingPrice: '₹3,499 for 100 presentation folders',
    gallery: [
      'https://cdn.phototourl.com/free/2026-07-13-c77d7953-280d-4084-a30a-744a6b06c432.jpg'
    ],
    features: ['Gusset sizes available from 5mm to 10mm', 'Custom die-cut pocket shapes', 'Interlocking fold-and-assemble base']
  },
  {
    id: 'posters',
    name: 'Museum Fine-Art Posters',
    category: 'promotional',
    categoryLabel: 'Marketing Collateral',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1200',
    description: 'Breathtaking large-scale prints. Our precision-calibrated machinery delivers deep blacks, vivid color matching, and absolute museum longevity.',
    applications: ['Gallery Exhibition Posters', 'Luxury Architectural Renderings', 'High-End Retail Window Displays'],
    sizes: ['A0 Large', 'A1 Standard Exhibition', 'A2 Medium', 'Bespoke large format scales'],
    paperOptions: [
      '240gsm Museum Satin-Gloss photographic paper',
      '310gsm German Hahnemühle Archival Matt Cotton Paper',
      '180gsm Premium Coated Synthetic Paper'
    ],
    printingType: ['12-Color Pigment Ink Giclée printing', 'High-Speed Precision UV Sheetfed Offset'],
    colorOptions: ['Expanded Gamut Photographic Process'],
    finishingOptions: {
      lamination: ['Non-Reflective Matte Protective Screen']
    },
    deliveryTime: '2 - 3 Business Days',
    startingPrice: '₹799 per A1 fine-art print',
    gallery: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600'
    ],
    features: ['100+ years lightfast archival rating', 'Surgical edge trimming', 'Heavy protective tube shipping']
  },
  {
    id: 'stickers',
    name: 'Holographic Vinyl Stickers',
    category: 'promotional',
    categoryLabel: 'Marketing Collateral',
    image: 'https://cdn.phototourl.com/free/2026-07-13-9e5edcd9-f457-45e4-9b5a-e8f0e79c4172.jpg',
    description: 'Indestructible custom vinyl stickers. Waterproof, scratchproof, UV-resistant, and cut to any dynamic custom contour.',
    applications: ['Premium Brand Merchandise', 'Tech Equipment Labels', 'Streetwear Marketing campaigns'],
    sizes: ['Custom die-cut stickers', 'Standard circular, square, rectangular labels'],
    paperOptions: [
      'Heavy-duty Holographic Film PET Sheet',
      'Premium Transparent Adhesive Vinyl',
      'Brushed Metallic Silver base',
      'Ultra-thick Matte Vinyl'
    ],
    printingType: ['UV Direct Printing with White Ink Underlays', 'Eco-Solvent HD Screen'],
    colorOptions: ['Striking vibrant full color + opaque spot white layers'],
    finishingOptions: {
      lamination: ['Anti-UV Thick Glossy Coat', 'Durable Matte Shield']
    },
    deliveryTime: '2 - 4 Business Days',
    startingPrice: '₹499 for custom sheet of 100 labels',
    gallery: [
      'https://cdn.phototourl.com/free/2026-07-13-9e5edcd9-f457-45e4-9b5a-e8f0e79c4172.jpg'
    ],
    features: ['Heavy waterproof vinyl core', 'Zero-residue acrylic adhesive', 'Surgical-accuracy split backing for easy peel']
  },
  {
    id: 'calendars',
    name: 'Artisanal Desk Calendars',
    category: 'promotional',
    categoryLabel: 'Marketing Collateral',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200',
    description: 'Elegantly styled desk calendars on wooden bases or wire-o hanging wall displays. The ultimate luxury corporate gift.',
    applications: ['Corporate Year-End Client Gifting', 'Artist Merchandise', 'Promotional Calendars'],
    sizes: ['Desk A5 Landscape with easel stand', 'Wall-hanging A3 Portrait', 'Slim Desk Format'],
    paperOptions: [
      '300gsm Textured Uncoated Linen Cardboard',
      '250gsm Premium Silk Cardstock',
      '220gsm Recycled Fine Oatmeal stock'
    ],
    printingType: ['Precision Sheet-Fed Offset Press', 'High Capacity Digital Press'],
    colorOptions: ['CMYK Photographic Process with Metallic Gold foil details'],
    finishingOptions: {
      spotUV: true,
      foiling: true,
      embossing: true
    },
    deliveryTime: '6 - 10 Business Days',
    startingPrice: '₹350 per calendar for bulk orders (Min 50)',
    gallery: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600'
    ],
    features: ['Solid mahogany or oak wooden block easel base', 'Premium brass wire-O twin loop binding', 'Surgical monthly page thumb-notches']
  },
  {
    id: 'diaries',
    name: 'Premium Bespoke Diaries',
    category: 'corporate',
    categoryLabel: 'Corporate Stationery',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1200',
    description: 'Custom-designed executive journals and planners. Hand-crafted leatherette covers, thread-bound leaves, and personalized gold-foil initials.',
    applications: ['Executive Notebooks', 'Brand Commemorative Journals', 'Custom Corporate Planners'],
    sizes: ['A5 Executive Notebook standard', 'A6 Pocket Planner', 'Custom sizing'],
    paperOptions: [
      '90gsm Premium Cream Acid-Free Writing Paper',
      '100gsm Uncoated Soft-Ivory High-Satin Paper'
    ],
    printingType: ['Surgical Sheet-Fed Offset, Hot Foil Engraving'],
    colorOptions: ['Pantone Spot colors on inner pages'],
    finishingOptions: {
      foiling: true,
      embossing: true
    },
    deliveryTime: '8 - 14 Business Days',
    startingPrice: '₹299 per journal for orders above 100 units',
    gallery: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600'
    ],
    features: ['Suede cloth cover wraps with premium debossing', 'Durable elastic closure band & double silk ribbon bookmarks', 'Custom inner page design layout']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'offset-printing',
    title: 'Precision Offset Printing',
    tagline: 'The Gold Standard of High-Volume Color Fidelity',
    description: 'Our four-color Heidelberg and Komori sheet-fed offset presses deliver unmatched ink depth, color alignment, and paper versatility for large-scale production runs.',
    image: 'https://cdn.phototourl.com/free/2026-07-13-9126b1ae-b114-4592-8991-3c2d0a93525f.jpg',
    benefits: [
      'Extremely cost-effective for large quantities',
      'Flawless color accuracy utilizing spot Pantone PMS inks',
      'Ability to print on heavily textured or ultra-thick boards up to 800gsm'
    ],
    workflow: [
      'Digital Plate CTP engraving with surgical laser precision',
      'Calibrated ink balancing to match approved high-fidelity contract proofs',
      'Automated high-speed printing (up to 15,000 sheets per hour)',
      'Inline drying and protective coating application'
    ],
    equipment: [
      'Heidelberg Speedmaster XL 106 (6-Color with UV Coater)',
      'Komori Lithrone G40 (4-Color high-speed Sheetfed Press)',
      'Kodak Trendsetter Direct-To-Plate (CTP) Laser Engraver'
    ],
    gallery: ['https://cdn.phototourl.com/free/2026-07-13-9126b1ae-b114-4592-8991-3c2d0a93525f.jpg']
  },
  {
    id: 'digital-printing',
    title: 'High-Fidelity Digital Printing',
    tagline: 'Instant Execution, No Minimum Runs, Absolute Sharpness',
    description: 'Perfect for fast-turnaround, highly customized, or low-volume projects. Powered by industry-leading presses with specialty inks like clear varnish and metallic foils.',
    image: 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?auto=format&fit=crop&q=80&w=1200',
    benefits: [
      'Zero setup plate fees, enabling direct cost savings on low counts',
      'Variable Data Printing (VDP) to dynamically personalize individual pieces',
      'Incredibly fast same-day turnaround capabilities'
    ],
    workflow: [
      'Direct file ingest and RIP digital screening',
      'Specialty color channel setup (white ink underlay, clear spot gloss)',
      'Surgical high-definition dry ink or liquid electrophotographic transfer',
      'Immediate cutting and finishing (no ink curing wait times required)'
    ],
    equipment: [
      'HP Indigo 7K Digital Production Press (Liquid Electrophotography)',
      'Xerox Iridesse Production Press (with Gold, Silver, White & Clear Toner)',
      'Konica Minolta AccurioPress C14000'
    ],
    gallery: ['https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?auto=format&fit=crop&q=80&w=600']
  },
  {
    id: 'screen-printing',
    title: 'Artisanal Screen Printing',
    tagline: 'Heavy Ink Deposition & Beautiful Textures',
    description: 'Traditional screen printing for deep, solid, highly tactile opaque ink prints. Unmatched for heavy cotton, envelopes, acrylic sheets, and premium dark folders.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=1200',
    benefits: [
      'Deep, highly opaque inks that can lay perfectly over dark dark cardstocks',
      'Unbelievably tactile, raise ink textures',
      'Exceptional weatherproofing and durability on PVC, acrylic, and heavy cardboards'
    ],
    workflow: [
      'Surgical screen exposure with UV lasers over photo-sensitive emulsion',
      'Custom recipe hand-mixing of premium heavy inks',
      'Squeegee-propelled ink transfer onto materials via professional semi-auto beds',
      'Infrared conveyor belt curing at high temperatures'
    ],
    equipment: [
      'Svecia Semi-Automatic Cylinder Flatbed Screen Press',
      'Natgraph UV and Hot Air Tunnel Dryer Line',
      'M&R Kruzer Manual Screen Station'
    ],
    gallery: ['https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600']
  },
  {
    id: 'packaging-printing',
    title: 'Structural Packaging Printing',
    tagline: 'Elevating Unboxing to an Art Form',
    description: 'We turn flat sheets of heavy boards into masterfully engineered custom boxes. Complete control from die-line creation to foil embellishment and automated folding.',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=1200',
    benefits: [
      'Structural package engineering to guarantee structural durability',
      'Stunning embellishment choices (embossing, dual-metal foil gilding)',
      'Pristine, automated crease-score folds to ensure flaps close perfectly'
    ],
    workflow: [
      'CAD structure engineering and 3D digital simulation testing',
      'Physical unprinted cutting plot sample verification',
      'High speed board printing via heavy-duty offset or direct flatbed UV',
      'Platen die-cutting, embossing, scoring, and automated glue folding'
    ],
    equipment: [
      'Bobst Visioncut 106 LE Die-Cutter & Creasing Press',
      'Bobst Ambition 76 Folder-Gluer',
      'Kongsberg XE10 High-Precision CAD Sample Table'
    ],
    gallery: ['https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=600']
  },
  {
    id: 'large-format',
    title: 'Museum Large Format Printing',
    tagline: 'High Impact Graphics with Striking Detail',
    description: 'We scale your ideas to massive proportions without losing crisp definition or color accuracy. Perfect for gallery exhibition backdrops, shop banners, and architectural vinyl wrappers.',
    image: 'https://cdn.phototourl.com/free/2026-07-13-4e5525ab-10cf-4e4c-83a1-b96879b058dc.jpg',
    benefits: [
      'UV-stable pigments that are lightfast and waterproof for outdoor exhibits',
      'Incredibly high print resolution up to 2400 DPI',
      'Prints on flexible fine canvas, rigid boards, glass, and wood'
    ],
    workflow: [
      'Vector prepress checking to avoid resolution-loss pixelation',
      'Precision vacuum-bed hybrid feed loading',
      'Multi-pass piezo-electric micro-inkjet projection',
      'Integrated edge-trim cutting and custom-hole metal grommet eyeletting'
    ],
    equipment: [
      'HP Latex 800 W High-Capacity Printer (with high opacity white ink)',
      'SwissQprint Nyala 4 High-End UV Flatbed (3.2m bed size)',
      'Zünd G3 Digital Flatbed Precision Cutter and Router'
    ],
    gallery: ['https://cdn.phototourl.com/free/2026-07-13-4e5525ab-10cf-4e4c-83a1-b96879b058dc.jpg']
  },
  {
    id: 'custom-finishing',
    title: 'Artisanal Finishing & Bindery',
    tagline: 'Where Craft Meets Precision Embellishments',
    description: 'True luxury lies in the final details. Our bindery department features master artisans executing complex folding, edge foil-gilding, Smyth book sewing, and embossing.',
    image: 'https://cdn.phototourl.com/free/2026-07-13-0ab52fe6-e68c-4da4-8bb2-3dd466c5273f.jpg',
    benefits: [
      'Durable custom spine bindings (hardcovers, PUR adhesive, Smyth-sewn)',
      'Tactile depth through custom magnesium-plate blind embossing',
      'Bespoke gold and silver metallic leaf hot-foil gilding'
    ],
    workflow: [
      'Mechanical engraving of custom heavy metal die plates',
      'Pneumatic high-temperature foil transfer press',
      'Precision multi-knife book block edge shearing',
      'Personalized hand-finishing, custom wax seal packing, and inspection'
    ],
    equipment: [
      'Kallfass Automated Book-Wrapping Machine',
      'Wohlenberg High-Precision Guillotine Cutter',
      'Stey Heavy-Duty High-Pressure Foil Stamping & Embossing Machine'
    ],
    gallery: ['https://cdn.phototourl.com/free/2026-07-13-0ab52fe6-e68c-4da4-8bb2-3dd466c5273f.jpg']
  }
];

export const TIMELINE_STEPS = [
  {
    step: '01',
    title: 'Consultation & Strategy',
    description: 'Meet with our paper specialists and print designers to select stocks, discuss custom inks, and define structural layout parameters.'
  },
  {
    step: '02',
    title: 'Artwork Assessment',
    description: 'Our prepress specialists meticulously analyze your files, verifying bleed margins, ink coverage, and CMYK/Pantone profiles.'
  },
  {
    step: '03',
    title: 'Tactile Proofing',
    description: 'Review digital contract proofs or request high-end unprinted structural CAD samples to physically touch the selected paper weights.'
  },
  {
    step: '04',
    title: 'Paper Preparation',
    description: 'We source and precision-acclimate rare Italian, Japanese, and local fine cotton stocks, shearing sheets to exact production sizes.'
  },
  {
    step: '05',
    title: 'Precision Printing',
    description: 'The job is loaded onto our Heidelberg offset or HP Indigo digital systems, supervised by a master operator for strict color control.'
  },
  {
    step: '06',
    title: 'Premium Finishes',
    description: 'Bespoke highlights like matte velvet laminations, hot-foil metallic gilding, or tactile blind embossing are carefully applied.'
  },
  {
    step: '07',
    title: 'Precision Bindery',
    description: 'Flat printed sheets are folded, scored, gathered, and bound through Smyth thread-sewing or heavy PUR binding.'
  },
  {
    step: '08',
    title: 'Surgical Quality Check',
    description: 'Every single brochure, catalog, or gift box is hand-inspected under color-calibrated D50 standard lighting.'
  },
  {
    step: '09',
    title: 'Custom Packing & Delivery',
    description: 'Finished products are moisture-sealed, placed into robust double-wall cardboard boxes, and shipped securely to your doorstep.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Black Obsidian Stationery Suite',
    category: 'corporate',
    categoryLabel: 'Corporate Branding',
    image: 'https://cdn.phototourl.com/free/2026-07-13-ed2f9a66-40b1-43b2-afa2-963538a1abe9.jpg',
    description: 'Debossed gold foil highlights on 700gsm deep charcoal Italian cardstock.'
  },
  {
    id: 'gal-2',
    title: 'Minimalist Cosmetic Packaging',
    category: 'packaging',
    categoryLabel: 'Luxury Packaging',
    image: 'https://cdn.phototourl.com/free/2026-07-13-db471f04-ad63-4597-a4d5-a29a212ce3d0.jpg',
    description: 'Structured cream matte paper boards with spot UV logo and clean typographic layout.'
  },
  {
    id: 'gal-3',
    title: 'The Modern Monograph Art Book',
    category: 'books',
    categoryLabel: 'Books & Binding',
    image: 'https://cdn.phototourl.com/free/2026-07-13-aa0265bb-16ef-4304-a7f5-50bfb9de70f2.jpg',
    description: 'Smyth-sewn open spine book wrapped in natural rough-textured gray linen cloth.'
  },
  {
    id: 'gal-4',
    title: 'Gilded Floral Wedding Invitation',
    category: 'wedding',
    categoryLabel: 'Wedding Suite',
    image: 'https://cdn.phototourl.com/free/2026-07-13-844bbaf7-a406-478f-aa3b-cd5f4c5c8989.jpg',
    description: 'Sculpted deep embossing on hand-torn deckled organic cotton paper sheets.'
  },
  {
    id: 'gal-5',
    title: 'Pantone Spot-Color Letterhead',
    category: 'corporate',
    categoryLabel: 'Corporate Branding',
    image: 'https://cdn.phototourl.com/free/2026-07-13-81e062ee-1aca-4f81-b22f-3cda6c3203a0.jpg',
    description: 'High-speed 3-color offset printing on watermarked crisp wove executive paper.'
  },
  {
    id: 'gal-6',
    title: 'Fine-Art Exhibition Poster Series',
    category: 'large',
    categoryLabel: 'Large Format',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800',
    description: 'Wide-gamut pigment ink Giclée prints for Chennai International Photo Biennale.'
  },
  {
    id: 'gal-7',
    title: 'Wine Bottle Textured Label',
    category: 'packaging',
    categoryLabel: 'Luxury Packaging',
    image: 'https://cdn.phototourl.com/free/2026-07-13-77f14ca4-eb49-4229-8976-def165ecde47.jpg',
    description: 'Ice-water resistant antique cream paper with delicate debossed and copper foil highlights.'
  },
  {
    id: 'gal-8',
    title: 'Handmade Rigid Gift Box',
    category: 'packaging',
    categoryLabel: 'Luxury Packaging',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=800',
    description: 'Rigid cardboard base with custom linen wrap and hidden magnetic closures.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Siddharth Rangarajan',
    role: 'Creative Director',
    company: 'Vanguard Design Studio, Chennai',
    content: 'Poonguzhali Art Printers has been our exclusive printing partner for over a decade. Their color registration is consistently flawless, and their paper inventory of premium imported stocks is second to none in South India. True artisans.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Meera Vasudevan',
    role: 'Brand Manager',
    company: 'Ayura Organics Cosmetics',
    content: 'Our custom structural boxes with gold foil embossing required precision die-cutting and exact Pantone matching. The packaging Poonguzhali delivered transformed our brand presence, and our customers frequently compliment the unboxing feel.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Dr. Anand Krishnan',
    role: 'Editor-in-Chief',
    company: 'Madras Historical Society Press',
    content: 'We printed a limited run of 500 leather-bound archival monographs. The Smyth-sewn binding is beautiful, and the text is crisp. They treated our historical photographic archives with absolute dignity and technical skill.',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What printing technologies do you utilize at your facility?',
    answer: 'Our state-of-the-art facility in Chennai houses Heidelberg Speedmaster multi-color offset presses for high-volume commercial tasks, HP Indigo and Xerox Iridesse production systems for short-run digital HD printing, and a fully equipped artisanal workshop for manual screen printing and premium hand-finishing techniques (foiling, embossing, edge-gilding).',
    category: 'printing'
  },
  {
    id: 'faq-2',
    question: 'Can I select custom paper stocks not mentioned in your catalog?',
    answer: 'Absolutely. We maintain strong direct supply lines with premier European and Japanese paper mills, such as Fedrigoni, Arjowiggins, and Gmund. If you have a specific paper weight, texture, or recycled specification in mind, our paper consultants can source it directly for your custom run.',
    category: 'artwork'
  },
  {
    id: 'faq-3',
    question: 'Do you offer rush or express printing services for tight deadlines?',
    answer: 'Yes. For pre-qualified digital projects (e.g., business cards, flyers, select presentation folders), we offer express 24-hour turnaround printing. Bulk offset or complex structural packaging require custom curing and binding times, but we can arrange expedited production scheduling upon request.',
    category: 'delivery'
  },
  {
    id: 'faq-4',
    question: 'How do I ensure perfect color accuracy for my corporate brand guidelines?',
    answer: 'To guarantee color consistency, we support Pantone Matching System (PMS) solid spot inks on our offset presses. For digital runs, we use calibrated EFI Fiery color servers. We always recommend reviewing physical high-fidelity digital contract proofs before giving the final green light on the production run.',
    category: 'printing'
  },
  {
    id: 'faq-5',
    question: 'What are your minimum order quantities (MOQs) for packaging and books?',
    answer: 'We try to remain highly flexible. For custom-made structural rigid packaging boxes, our MOQ starts at 100 units due to die-cutting tooling configurations. For hardbound books and catalogs, our digital bindery equipment allows us to execute short-run collectors collections from as low as 10 units.',
    category: 'pricing'
  },
  {
    id: 'faq-6',
    question: 'How should I prepare my design files for premium foil or spot UV effects?',
    answer: 'Design files should be submitted as press-ready PDFs with 3mm bleed margins. Specialty finishes like gold foil or spot UV should be specified on a separate, dedicated vector spot-color layer set to 100% Magenta or Black, labeled clearly (e.g., "Foil" or "Spot_UV") in Illustrator or InDesign.',
    category: 'artwork'
  }
];

export const WHY_CHOOSE_US_CARDS = [
  {
    icon: 'Award',
    title: '20+ Years Experience',
    description: 'Serving top brands, publishing houses, and design studios across India since 2005 with pristine physical print execution.'
  },
  {
    icon: 'Cpu',
    title: 'Modern Heidelberg Machinery',
    description: 'Equipped with heavy-duty German printing equipment and high-definition laser platesetters for absolute line sharpness.'
  },
  {
    icon: 'Sparkles',
    title: 'Surgical Color Accuracy',
    description: 'Fully calibrated spectrophotometer processes to match Pantone palettes and brand-standard CMYK profiles perfectly.'
  },
  {
    icon: 'Feather',
    title: 'Curated Paper Libraries',
    description: 'Direct partnerships with Arjowiggins, Fedrigoni, and Gmund to offer cotton, linen, acrylic, metallic, and sustainable paper fibers.'
  },
  {
    icon: 'Zap',
    title: 'Expedited Delivery',
    description: 'Highly synchronized production planning to hit critical retail launch dates, weddings, and corporate board deadlines.'
  },
  {
    icon: 'Activity',
    title: 'Rigorous Hand Inspection',
    description: 'A dedicated team visually audits every single printed item under calibrated D50 standard color lighting booths.'
  }
];
