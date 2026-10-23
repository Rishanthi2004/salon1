import { ServiceCategory, GalleryItem, VideoScene } from '../types/salon';

import heroSalonImg from '../assets/images/hero_salon_interior_1792733736627.jpg';
import hairStylingImg from '../assets/images/hair_transformation_1792733737985.jpg';
import skincareImg from '../assets/images/skincare_treatment_1792733738532.jpg';
import bridalImg from '../assets/images/luxury_bridal_makeover_1792733740121.jpg';
import mensGroomingImg from '../assets/images/mens_grooming_lounge_1792733739362.jpg';

export const SALON_INFO = {
  brandName: "RISHAARA SALON",
  tagline: "Haute Coiffure, Esthétique & Bridal Sanctuary",
  phone: "+1 (555) 382-4422",
  phoneRaw: "+15553824422",
  email: "concierge@rishaarasalon.com",
  address: "88 Grand Pavilion Promenade, Luxury Quarter, Suite 400",
  city: "Metropolis, NY 10022",
  hours: "Monday – Sunday: 9:00 AM – 9:00 PM",
  instagram: "@rishaarasalon",
  whatsapp: "+15553824422",
  mapsUrl: "https://maps.google.com/?q=Luxury+Salon",
};

export const VIDEO_SCENES: VideoScene[] = [
  {
    id: "atelier",
    title: "The Atelier",
    subtitle: "Salon Interiors & Ambience",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-stylist-washing-the-hair-of-a-woman-in-a-hairdresser-42795-large.mp4",
    posterImage: heroSalonImg,
  },
  {
    id: "hair",
    title: "Coiffure Art",
    subtitle: "Precision Cutting & Color",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hairdresser-cutting-hair-with-scissors-in-a-salon-42784-large.mp4",
    posterImage: hairStylingImg,
  },
  {
    id: "manicure",
    title: "Nail Lounge",
    subtitle: "Detailed Hands & Finishing",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-client-getting-a-manicure-in-a-beauty-salon-42817-large.mp4",
    posterImage: skincareImg,
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "hair",
    title: "Hair Services",
    subtitle: "Bespoke Cuts, Color & Reconstruction",
    description: "Discover personalised hair services designed to complement your style, enhance your look, and keep your hair looking its best.",
    image: hairStylingImg,
    services: [
      {
        id: "hair-1",
        name: "Haircut & Styling",
        description: "Architectural consultation, restorative wash, signature precision cut, and customised thermal styling tailored to your face silhouette.",
        duration: "60 mins",
        priceEstimate: "$85 – $140",
        benefits: ["Scalp analysis", "Signature blow-dry", "Finishing gloss"],
        genderTarget: "unisex"
      },
      {
        id: "hair-2",
        name: "Hair Colouring & Highlights",
        description: "Balayage, babylights, gloss toners, and bespoke dimensional tinting with ammonia-free conditioning pigments.",
        duration: "120 – 180 mins",
        priceEstimate: "$160 – $320",
        benefits: ["Custom shade blending", "Plex bond protector", "Deep conditioning seal"],
        genderTarget: "unisex"
      },
      {
        id: "hair-3",
        name: "Hair Spa & Hair Treatments",
        description: "Deep botanical repair ritual with micro-steam infusion, scalp detoxification, and caviar keratin replenishment.",
        duration: "75 mins",
        priceEstimate: "$95 – $160",
        benefits: ["Aromatherapeutic head massage", "Scalp exfoliation", "Cuticle reconstruction"],
        genderTarget: "unisex"
      },
      {
        id: "hair-4",
        name: "Hair Smoothening",
        description: "Keratin silk infusion and nanoplastia thermal smoothing for frizz-free, mirror-gloss radiance lasting up to 5 months.",
        duration: "180 mins",
        priceEstimate: "$220 – $380",
        benefits: ["Zero formaldehyde", "Humidity immunity", "Silky touch"],
        genderTarget: "unisex"
      },
      {
        id: "hair-5",
        name: "Blow-Dry & Hair Finishing",
        description: "Luxury scalp massage followed by high-volume red-carpet blow-dry, soft Hollywood waves, or pin-straight sleek glass finish.",
        duration: "45 mins",
        priceEstimate: "$55 – $80",
        benefits: ["Heat protection infusion", "Long-lasting hold", "High-shine serum"],
        genderTarget: "unisex"
      },
      {
        id: "hair-6",
        name: "Professional Hair Styling",
        description: "Haute occasion updos, editorial editorial braiding, textured chignons, and sleek sculpted runway looks.",
        duration: "60 – 90 mins",
        priceEstimate: "$90 – $150",
        benefits: ["Architectural pinning", "Accessory integration", "Weather-resistant hold"],
        genderTarget: "unisex"
      }
    ]
  },
  {
    id: "skin",
    title: "Skin Care & Facials",
    subtitle: "Dermatological Radiance & Organic Renewal",
    description: "Refresh and revitalise your skin with personalised treatments focused on a healthy, radiant appearance.",
    image: skincareImg,
    services: [
      {
        id: "skin-1",
        name: "Premium Facial Treatments",
        description: "Clinical ultrasonic cleansing, collagen-boosting lymph drainage, peptide micro-infusion, and tailored botanical masque.",
        duration: "75 mins",
        priceEstimate: "$110 – $190",
        benefits: ["Customized skin diagnosis", "Cryo-globe sculpting", "Neck & shoulder decompression"],
        genderTarget: "unisex"
      },
      {
        id: "skin-2",
        name: "Skin Clean-Up",
        description: "Gentle pore vacuum extraction, enzyme gentle exfoliation, and soothing chamomile cold hydration wrap.",
        duration: "45 mins",
        priceEstimate: "$65 – $95",
        benefits: ["Blackhead clearance", "Pore tightening", "Hydra mist barrier"],
        genderTarget: "unisex"
      },
      {
        id: "skin-3",
        name: "De-Tan Treatments",
        description: "Targeted botanical brightening treatment to gently lift hyperpigmentation, reverse sun exposure, and restore luminosity.",
        duration: "50 mins",
        priceEstimate: "$75 – $120",
        benefits: ["Vitamin C infusion", "Natural fruit AHA peel", "Even-tone radiance"],
        genderTarget: "unisex"
      },
      {
        id: "skin-4",
        name: "Face Bleaching",
        description: "Gentle herbal skin-tone lightening and fine hair softening using dermatologically tested gentle formulas.",
        duration: "30 mins",
        priceEstimate: "$45 – $70",
        benefits: ["Golden glow finish", "Soothing post-aloe gel", "No ammonia harshness"],
        genderTarget: "unisex"
      },
      {
        id: "skin-5",
        name: "Hydrating Skin Treatments",
        description: "Multi-molecular hyaluronic acid quench with oxygen spray mist for dehydrated, dull, or jet-lagged complexions.",
        duration: "60 mins",
        priceEstimate: "$90 – $150",
        benefits: ["Moisture surge", "Plumped fine lines", "Dewy porcelain finish"],
        genderTarget: "unisex"
      },
      {
        id: "skin-6",
        name: "Skin Rejuvenation",
        description: "Anti-ageing microcurrent contouring paired with pure 24K gold foil or stem cell serum infusion.",
        duration: "90 mins",
        priceEstimate: "$160 – $260",
        benefits: ["Jawline firming", "Cellular renewal", "Instant red carpet glow"],
        genderTarget: "unisex"
      }
    ]
  },
  {
    id: "nails",
    title: "Manicure, Pedicure & Nails",
    subtitle: "Hand Craft, Foot Therapy & Modern Extensions",
    description: "Enjoy detailed hand and foot care with elegant nail finishes and professional grooming.",
    image: heroSalonImg,
    services: [
      {
        id: "nail-1",
        name: "Manicure",
        description: "Precision cuticle shaping, organic dead sea salt exfoliation, warm lavender towel wrap, and nail buffering.",
        duration: "45 mins",
        priceEstimate: "$45 – $65",
        benefits: ["Nail plate strengthening", "Hand massage with shea butter", "Clean shape finish"],
        genderTarget: "unisex"
      },
      {
        id: "nail-2",
        name: "Pedicure",
        description: "Hydrotherapy jet soak, volcanic pumice callus smoothing, cooling peppermint massage, and nail grooming.",
        duration: "60 mins",
        priceEstimate: "$60 – $85",
        benefits: ["Deep foot relaxation", "Cuticle hydration", "Pressure point release"],
        genderTarget: "unisex"
      },
      {
        id: "nail-3",
        name: "Nail Art",
        description: "Bespoke hand-painted minimalist line art, chrome glazes, ombré gradients, and subtle champagne gold flakes.",
        duration: "30 – 60 mins",
        priceEstimate: "$30 – $70",
        benefits: ["Custom designer portfolio", "Long-lasting seal", "Precision hand detailing"],
        genderTarget: "unisex"
      },
      {
        id: "nail-4",
        name: "Nail Extensions",
        description: "Sculpted soft-gel extensions or architectural acrylics shaped into almond, coffin, stiletto, or classic square silhouettes.",
        duration: "90 – 120 mins",
        priceEstimate: "$85 – $140",
        benefits: ["Natural nail safety", "Lightweight durability", "Custom length & arch"],
        genderTarget: "women"
      },
      {
        id: "nail-5",
        name: "Gel Nail Polish",
        description: "High-shine chip-resistant gel lacquer cured under gentle LED light, lasting 3+ weeks with zero dullness.",
        duration: "45 mins",
        priceEstimate: "$40 – $60",
        benefits: ["Over 120 luxury shades", "Instant dry time", "Mirror shine"],
        genderTarget: "women"
      },
      {
        id: "nail-6",
        name: "Nail Care & Finishing",
        description: "IBX restorative deep repair, keratin nail hardener, cuticle oil treatment, and natural high-buff sheen.",
        duration: "30 mins",
        priceEstimate: "$35 – $50",
        benefits: ["Fixes brittle peeling nails", "Natural clean glow", "Vitamin E nourishment"],
        genderTarget: "unisex"
      }
    ]
  },
  {
    id: "body",
    title: "Body Care & Spa",
    subtitle: "Restorative Rituals, Polishing & Rejuvenation",
    description: "Unwind with carefully selected body care services designed to offer relaxation and a refreshing salon experience.",
    image: skincareImg,
    services: [
      {
        id: "body-1",
        name: "Waxing",
        description: "Ultra-gentle strip and peel-off stripless hard waxes enriched with soothing azulene for satin-smooth skin.",
        duration: "20 – 60 mins",
        priceEstimate: "$25 – $90",
        benefits: ["Minimal discomfort formula", "Ingrown prevention", "Silky finish for weeks"],
        genderTarget: "unisex"
      },
      {
        id: "body-2",
        name: "Threading",
        description: "Ancient precision cotton thread contouring for eyebrows, upper lip, chin, and full facial symmetry.",
        duration: "15 – 30 mins",
        priceEstimate: "$15 – $40",
        benefits: ["Razor-sharp definition", "Zero chemical irritation", "Skin-kind shaping"],
        genderTarget: "unisex"
      },
      {
        id: "body-3",
        name: "Body Massage",
        description: "Swedish rhythmic tension release, warm volcanic basalt stones, or deep-tissue muscle therapy with therapeutic essential oils.",
        duration: "60 – 90 mins",
        priceEstimate: "$90 – $150",
        benefits: ["Stress relief", "Improves circulation", "Calming soundscape"],
        genderTarget: "unisex"
      },
      {
        id: "body-4",
        name: "Body Polishing",
        description: "Silkening whole-body dry brush exfoliation followed by warm almond butter wrap and luminous glow application.",
        duration: "75 mins",
        priceEstimate: "$110 – $170",
        benefits: ["Velvety soft skin", "Pre-bridal radiance", "Full body hydration"],
        genderTarget: "unisex"
      },
      {
        id: "body-5",
        name: "Body Scrub",
        description: "Himalayan crystal salt or organic brown sugar buff with citrus essences to eliminate dead cells and boost vitality.",
        duration: "45 mins",
        priceEstimate: "$70 – $110",
        benefits: ["Gentle cellular turnover", "Unclogs pores", "Immediate softness"],
        genderTarget: "unisex"
      },
      {
        id: "body-6",
        name: "Relaxation Treatments",
        description: "Signature destress cocoon therapy with warm scalp oil drizzles and reflexology foot pressure relief.",
        duration: "60 mins",
        priceEstimate: "$85 – $130",
        benefits: ["Holistic restoration", "Mental clarity", "Aromatic botanicals"],
        genderTarget: "unisex"
      }
    ]
  },
  {
    id: "grooming",
    title: "Men's Grooming",
    subtitle: "Master Barbering, Beard Architecture & Scalp Care",
    description: "Modern grooming services for men, combining precision, personal style, and professional care.",
    image: mensGroomingImg,
    services: [
      {
        id: "men-1",
        name: "Men's Haircut & Styling",
        description: "Tailored scissor work or precision fade, refreshing shampoo, hot towel neck shave, and matte paste styling.",
        duration: "45 mins",
        priceEstimate: "$50 – $75",
        benefits: ["Hairline precision", "Hot towel refresh", "Texture sculpting"],
        genderTarget: "men"
      },
      {
        id: "men-2",
        name: "Beard Styling",
        description: "Custom facial architecture, cheekbone line carving, taper blending, and conditioning sandalwood oil massage.",
        duration: "30 mins",
        priceEstimate: "$35 – $50",
        benefits: ["Symmetric line work", "Softens coarse hair", "Beard balm finish"],
        genderTarget: "men"
      },
      {
        id: "men-3",
        name: "Beard Trimming",
        description: "Quick clean trim to tame length, even out density, and preserve clean neckline definition.",
        duration: "20 mins",
        priceEstimate: "$25 – $35",
        benefits: ["Even density", "Clean contours", "Hydrating splash"],
        genderTarget: "men"
      },
      {
        id: "men-4",
        name: "Shaving",
        description: "Traditional straight-razor shave with pre-shave eucalyptus oils, hot lather, multiple warm towels, and cold stone post-seal.",
        duration: "40 mins",
        priceEstimate: "$45 – $65",
        benefits: ["Closest possible shave", "Calms skin redness", "Classic gentlemen's ritual"],
        genderTarget: "men"
      },
      {
        id: "men-5",
        name: "Hair Colouring",
        description: "Natural grey camouflage blending or modern fashion shades formulated specifically for men's hair textures.",
        duration: "45 mins",
        priceEstimate: "$60 – $95",
        benefits: ["Subtle natural coverage", "Zero brassiness", "Gradual fade"],
        genderTarget: "men"
      },
      {
        id: "men-6",
        name: "Men's Facial",
        description: "Deep pore charcoal cleanse, ingrown hair relief, and peptide moisturiser designed for thicker male dermal structure.",
        duration: "50 mins",
        priceEstimate: "$75 – $110",
        benefits: ["Clears shaving congestion", "Restores hydration", "Matte clean finish"],
        genderTarget: "men"
      },
      {
        id: "men-7",
        name: "Hair Spa",
        description: "Invigorating tea tree scalp cleanse, stimulatory blood-flow massage, and follicle-fortifying leave-in lotion.",
        duration: "45 mins",
        priceEstimate: "$65 – $90",
        benefits: ["Combats thinning", "Dandruff control", "Total tension release"],
        genderTarget: "men"
      }
    ]
  },
  {
    id: "bridal",
    title: "Bridal & Occasion Beauty",
    subtitle: "Couture Makeup, Regal Hairstyling & Grand Celebrations",
    description: "Beautifully personalised makeup and styling for weddings, celebrations, and your most memorable occasions.",
    image: bridalImg,
    services: [
      {
        id: "bridal-1",
        name: "Bridal Makeup",
        description: "High-definition airbrush or luminous cream makeup tailored to photographic lighting, tears, and extended celebratory days.",
        duration: "120 mins",
        priceEstimate: "$280 – $450",
        benefits: ["Includes luxury mink lashes", "Hydra-prep facial mask", "Touch-up kit included"],
        genderTarget: "women"
      },
      {
        id: "bridal-2",
        name: "Engagement Makeup",
        description: "Sophisticated romantic glow, radiant eye definition, and softly contoured cheekbones designed for camera clarity.",
        duration: "90 mins",
        priceEstimate: "$180 – $260",
        benefits: ["Photo-ready illumination", "Soft natural glam", "Long-wearing lips"],
        genderTarget: "women"
      },
      {
        id: "bridal-3",
        name: "Reception Makeup",
        description: "Dramatic evening glamour with shimmer metallics, sculpted definition, and waterproof setting mist for late-night celebrations.",
        duration: "90 mins",
        priceEstimate: "$200 – $300",
        benefits: ["Evening radiance", "Bold or soft eye focus", "Smudge-proof finish"],
        genderTarget: "women"
      },
      {
        id: "bridal-4",
        name: "Party Makeup",
        description: "Effortless chic or red carpet glam for bridesmaids, gala attendees, anniversaries, and family celebrations.",
        duration: "60 mins",
        priceEstimate: "$110 – $160",
        benefits: ["Complimentary lashes", "Skin tone balancing", "Flawless finish"],
        genderTarget: "women"
      },
      {
        id: "bridal-5",
        name: "Bridal Hairstyling",
        description: "Intricate royal updos, romantic cascading waves, floral crown integration, and veil anchoring.",
        duration: "90 mins",
        priceEstimate: "$140 – $220",
        benefits: ["Structure padding", "Veil / Matha Patti placement", "18-hour hold"],
        genderTarget: "women"
      },
      {
        id: "bridal-6",
        name: "Saree Draping",
        description: "Masterful pleating and secure pinless-comfort pinning for traditional silk sarees, lehengas, or modern designer dupattas.",
        duration: "30 – 45 mins",
        priceEstimate: "$50 – $90",
        benefits: ["Flawless pleat symmetry", "Dance-ready comfort", "Graceful silhouette"],
        genderTarget: "women"
      },
      {
        id: "bridal-7",
        name: "Complete Bridal Packages",
        description: "Full royal treatment: pre-bridal skin polishing, bridal hair, airbrush makeup, saree draping, and dedicated concierge styling.",
        duration: "Full Day / Multi-Day",
        priceEstimate: "$550 – $1,200",
        benefits: ["Trial session included", "Bridal party discounts", "On-location or salon suite"],
        genderTarget: "women"
      }
    ]
  }
];

export const FEATURED_SERVICES = [
  {
    id: "feat-1",
    title: "Signature Hair Transformations",
    category: "Coiffure Couture",
    description: "From dull or damaged locks to rich, multidimensional color and fluid architectural movement. Hand-tailored formulations.",
    image: hairStylingImg,
    actionLabel: "Explore Hair",
    targetCategory: "hair"
  },
  {
    id: "feat-2",
    title: "Radiant Skin Treatments",
    category: "Esthétique Pure",
    description: "Deep cellular detoxification, micro-infusions, and clinical facial therapies designed for long-lasting healthy radiance.",
    image: skincareImg,
    actionLabel: "Explore Skin",
    targetCategory: "skin"
  },
  {
    id: "feat-3",
    title: "Luxury Nail Care",
    category: "Haute Manicure",
    description: "Artisanal hand therapies, soft-gel extensions, and understated minimalist nail artistry crafted with medical-grade hygiene.",
    image: heroSalonImg,
    actionLabel: "Explore Nails",
    targetCategory: "nails"
  },
  {
    id: "feat-4",
    title: "Men's Grooming Experience",
    category: "The Gentleman's Lounge",
    description: "Precision shear cuts, hot towel straight-razor rituals, beard sculpts, and revitalising scalp therapies in private comfort.",
    image: mensGroomingImg,
    actionLabel: "Explore Grooming",
    targetCategory: "grooming"
  },
  {
    id: "feat-5",
    title: "Bridal Makeover",
    category: "Regal Elegance",
    description: "Flawless HD airbrush makeup, couture bridal updos, saree draping, and pre-wedding bridal pampering for your grand celebration.",
    image: bridalImg,
    actionLabel: "Explore Bridal",
    targetCategory: "bridal"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Grand Styling Atelier",
    category: "interior",
    categoryLabel: "Salon Interior",
    image: heroSalonImg,
    description: "Modern black marble workstations, arched backlit mirrors, and warm champagne accents.",
    aspect: "landscape"
  },
  {
    id: "gal-2",
    title: "Dimensional Silk Blowout",
    category: "hair",
    categoryLabel: "Hair Styling",
    image: hairStylingImg,
    description: "Mirror shine finishing and voluminous movement sculpted by master colorists.",
    aspect: "portrait"
  },
  {
    id: "gal-3",
    title: "Botanical Facial Therapy",
    category: "skin",
    categoryLabel: "Skin Care",
    image: skincareImg,
    description: "Deep restorative hydration and facial contouring using cold-pressed botanical essences.",
    aspect: "landscape"
  },
  {
    id: "gal-4",
    title: "The Regal Bride",
    category: "bridal",
    categoryLabel: "Bridal Couture",
    image: bridalImg,
    description: "Porcelain skin, delicate pearls, and hand-woven hair styling for high-fashion nuptials.",
    aspect: "portrait"
  },
  {
    id: "gal-5",
    title: "The Modern Barber Suite",
    category: "grooming",
    categoryLabel: "Men's Grooming",
    image: mensGroomingImg,
    description: "Beard architecture and bespoke scissor cutting in rich mahogany and brass quarters.",
    aspect: "landscape"
  }
];

