export interface Product {
  id: string;
  name: string;
  category: 'corporate' | 'packaging' | 'wedding' | 'editorial' | 'promotional';
  categoryLabel: string;
  image: string;
  description: string;
  applications: string[];
  sizes: string[];
  paperOptions: string[];
  printingType: string[];
  colorOptions: string[];
  finishingOptions: {
    lamination?: string[];
    spotUV?: boolean;
    foiling?: boolean;
    embossing?: boolean;
  };
  deliveryTime: string;
  startingPrice?: string;
  gallery: string[];
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  benefits: string[];
  workflow: string[];
  equipment: string[];
  gallery: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'corporate' | 'books' | 'packaging' | 'wedding' | 'offset' | 'screen' | 'large';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'printing' | 'delivery' | 'artwork' | 'pricing';
}

export interface QuoteRequest {
  product: string;
  paperType: string;
  paperWeight: string;
  size: string;
  quantity: number;
  artworkFile: File | null;
  artworkFileName?: string;
  deadline: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  notes?: string;
}
