export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  duration: string;
  priceEstimate?: string;
  benefits?: string[];
  genderTarget?: 'unisex' | 'women' | 'men';
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  services: ServiceItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'skin' | 'nails' | 'grooming' | 'bridal' | 'interior';
  categoryLabel: string;
  image: string;
  description: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  category: string;
  subService: string;
  date: string;
  timeSlot: string;
  stylistPreference: string;
  message: string;
}

export interface VideoScene {
  id: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  posterImage: string;
}
