/**
 * ============================================================================
 * DETAILING LAB — CENTRAL BUSINESS CONFIGURATION
 * ----------------------------------------------------------------------------
 * EDIT THIS FILE to update business information across the whole website.
 * Every value below is editable. Items marked PLACEHOLDER must be replaced
 * with authentic business-supplied content before going live.
 * ============================================================================
 */

import serviceInterior from "@/assets/service-interior.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import serviceGlass from "@/assets/service-glass.jpg";
import servicePpf from "@/assets/service-ppf.jpg";
import serviceUndercoating from "@/assets/service-undercoating.jpg";
import galleryStudio from "@/assets/gallery-studio.jpg";
import galleryDetail from "@/assets/gallery-detail.jpg";
import galleryCabin from "@/assets/gallery-cabin.jpg";

/** Verified business phone number. */
const PHONE = "+92 330 2689508";

/**
 * WhatsApp number — PLACEHOLDER.
 * A separate WhatsApp number has not been confirmed, so the verified business
 * phone number is used. Replace with the confirmed WhatsApp number if different.
 * Format: international digits only, no + or spaces.
 */
const WHATSAPP_DIGITS = "923302689508";

const WHATSAPP_MESSAGE =
  "Hi Detailing Lab, I'd like to ask about a car detailing service for my vehicle.";

export const business = {
  businessName: "Detailing Lab",
  category: "Car detailing service",

  // Editable announcement bar text
  announcement:
    "Professional Car Detailing & Protection in Gulshan-e-Iqbal, Karachi",

  phone: PHONE,
  phoneHref: `tel:${PHONE.replace(/\s/g, "")}`,

  whatsapp: WHATSAPP_DIGITS,
  whatsappMessage: WHATSAPP_MESSAGE,
  whatsappUrl: `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,

  address: {
    full: "Rashid Minhas Rd Service Lane, Block 11 Gulshan-e-Iqbal, Karachi, 75300, Pakistan",
    short: "Rashid Minhas Rd Service Lane, Block 11 Gulshan-e-Iqbal, Karachi",
    street: "Rashid Minhas Rd Service Lane, Block 11 Gulshan-e-Iqbal",
    city: "Karachi",
    postalCode: "75300",
    country: "PK",
  },

  hours: [
    { days: "Monday – Friday", time: "11:00 AM – 8:30 PM" },
    { days: "Saturday", time: "10:30 AM – 8:30 PM" },
    { days: "Sunday", time: "10:30 AM – 8:30 PM" },
  ],

  /** Schema.org opening hours — mirrors `hours` above. */
  hoursSchema: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:30",
      closes: "20:30",
    },
  ],

  /** Publicly listed rating / review count — editable, changes over time. */
  rating: "4.6",
  reviewCount: "121",

  /**
   * Google Maps configuration.
   * `directionsUrl` opens Maps with a search for the address.
   * `embedUrl` is intentionally empty: no verified embed URL is available, so
   * the site shows a labelled map placeholder instead of a wrong embed.
   * Paste the business's own Google Maps embed URL here to activate the map.
   */
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Detailing Lab, Rashid Minhas Rd Service Lane, Block 11 Gulshan-e-Iqbal, Karachi 75300",
    ),
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=24.9145649,67.1016351&z=16&hl=en&output=embed" as string,

  /**
   * Google Reviews URL — PLACEHOLDER.
   * Points at a Maps search for the business. Replace with the business's
   * direct Google reviews link when available.
   */
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Detailing Lab Gulshan-e-Iqbal Karachi") +
    "#reviews",

  /**
   * Social links — PLACEHOLDERS. No official profiles have been supplied.
   * Set `url` for each profile the business confirms; empty links render as
   * disabled "coming soon" placeholders instead of dead buttons.
   */
  socialLinks: [
    { label: "Instagram", url: "" },
    { label: "Facebook", url: "" },
    { label: "TikTok", url: "" },
  ],

  /**
   * Pricing — intentionally disabled. No verified prices are available.
   * Set `enabled: true` and fill in real prices to show pricing on the site.
   */
  pricing: {
    enabled: false,
    note: "Pricing placeholder — add verified prices before enabling.",
  },

  /**
   * Contact form endpoint — PLACEHOLDER.
   * Empty means no backend is connected: the form validates and shows a clear
   * message telling the visitor to call or WhatsApp instead of pretending to
   * send. Paste a form endpoint (or wire a backend) to activate submissions.
   */
  formEndpoint: "" as string,
} as const;

export type ServiceSlug =
  | "interior-detailing"
  | "exterior-detailing"
  | "ceramic-coating"
  | "glass-coating"
  | "paint-protection-film"
  | "undercoating";

export type Service = {
  slug: ServiceSlug;
  name: string;
  short: string;
  description: string;
  generallyFor: string;
  image: string;
  alt: string;
};

/** Publicly identified services. Descriptions are factual and non-exaggerated. */
export const services: Service[] = [
  {
    slug: "interior-detailing",
    name: "Interior Detailing",
    short: "Deep cleaning of the cabin, seats, trim and surfaces.",
    description:
      "Detailed cleaning of the vehicle cabin, including seats, carpets, door panels, dashboard and interior trim.",
    generallyFor:
      "Generally chosen by owners who want the inside of the car cleaned thoroughly and refreshed.",
    image: serviceInterior,
    alt: "Interior car detailing service in Gulshan-e-Iqbal Karachi",
  },
  {
    slug: "exterior-detailing",
    name: "Exterior Detailing",
    short: "Careful cleaning and finishing of the vehicle's exterior.",
    description:
      "Exterior cleaning and finishing work on paint, glass, wheels and exterior trim, carried out panel by panel.",
    generallyFor:
      "Generally chosen when the exterior needs more attention than a routine wash.",
    image: serviceExterior,
    alt: "Exterior vehicle detailing and paint polishing",
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    short: "A protective coating applied to the vehicle's paint.",
    description:
      "Application of a ceramic coating to prepared paintwork. Preparation, application and curing are handled in the studio.",
    generallyFor:
      "Generally considered by owners looking for an added protective layer over their paint.",
    image: serviceCeramic,
    alt: "Ceramic coating application on vehicle paint",
  },
  {
    slug: "glass-coating",
    name: "Glass Coating",
    short: "A coating applied to the vehicle's glass surfaces.",
    description:
      "Treatment applied to windscreen and window glass after cleaning and preparation of the glass surface.",
    generallyFor:
      "Generally considered by owners who want their glass treated alongside paint protection work.",
    image: serviceGlass,
    alt: "Automotive glass coating treatment on a windscreen",
  },
  {
    slug: "paint-protection-film",
    name: "Paint Protection Film (PPF)",
    short: "Clear film applied over painted panels.",
    description:
      "Installation of clear paint protection film over selected painted panels, cut and fitted to the vehicle.",
    generallyFor:
      "Generally chosen by owners who want a physical film layer over their paint.",
    image: servicePpf,
    alt: "Paint protection film installation on a car hood",
  },
  {
    slug: "undercoating",
    name: "Undercoating",
    short: "Protective coating applied to the vehicle underbody.",
    description:
      "Application of a protective coating to the underbody of the vehicle after the area is cleaned and prepared.",
    generallyFor:
      "Generally considered by owners who want the underside of their vehicle coated.",
    image: serviceUndercoating,
    alt: "Vehicle underbody undercoating in a professional workshop",
  },
];

export type GalleryCategory =
  | "Exterior"
  | "Interior"
  | "Coating"
  | "PPF"
  | "Before & After";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
  caption: string;
  /** true = demo/stock image that must be replaced with the business's own photos. */
  isPlaceholder: boolean;
  span?: "tall" | "wide" | "normal";
};

/**
 * GALLERY — DEMO IMAGERY.
 * IMPORTANT: every image below is licensed demo/stock imagery used for this
 * concept only. Replace all of them with photographs supplied or licensed by
 * Detailing Lab before publishing, and set `isPlaceholder: false`.
 */
export const galleryImages: GalleryImage[] = [
  {
    src: serviceExterior,
    alt: "Exterior vehicle detailing and paint polishing",
    category: "Exterior",
    caption: "Exterior paint work",
    isPlaceholder: true,
    span: "wide",
  },
  {
    src: galleryDetail,
    alt: "Close-up of a detailed vehicle headlight and glossy paint",
    category: "Exterior",
    caption: "Panel and light detail",
    isPlaceholder: true,
    span: "tall",
  },
  {
    src: serviceInterior,
    alt: "Interior car detailing service",
    category: "Interior",
    caption: "Cabin detailing",
    isPlaceholder: true,
  },
  {
    src: galleryCabin,
    alt: "Clean car cabin after interior detailing",
    category: "Interior",
    caption: "Finished cabin",
    isPlaceholder: true,
    span: "wide",
  },
  {
    src: serviceCeramic,
    alt: "Ceramic coating application on vehicle paint",
    category: "Coating",
    caption: "Ceramic coating application",
    isPlaceholder: true,
  },
  {
    src: serviceGlass,
    alt: "Glass coating treatment on automotive glass",
    category: "Coating",
    caption: "Glass coating",
    isPlaceholder: true,
  },
  {
    src: servicePpf,
    alt: "Paint protection film installation",
    category: "PPF",
    caption: "PPF installation",
    isPlaceholder: true,
    span: "wide",
  },
  {
    src: serviceUndercoating,
    alt: "Vehicle underbody undercoating",
    category: "PPF",
    caption: "Underbody work",
    isPlaceholder: true,
  },
  {
    src: galleryStudio,
    alt: "Professional car detailing workshop environment",
    category: "Before & After",
    caption: "Before & after example",
    isPlaceholder: true,
    span: "tall",
  },
];

/** Before/after comparison cards — demo imagery, replace with real pairs. */
export const beforeAfterPairs = [
  {
    title: "Exterior finish",
    before: { src: galleryStudio, alt: "Vehicle before exterior detailing" },
    after: { src: serviceExterior, alt: "Vehicle after exterior detailing" },
    isPlaceholder: true,
  },
  {
    title: "Cabin condition",
    before: { src: galleryCabin, alt: "Car cabin before interior detailing" },
    after: { src: serviceInterior, alt: "Car cabin after interior detailing" },
    isPlaceholder: true,
  },
];

export type FaqItem = { q: string; a: string; topic: string };

/** All FAQ copy is editable and uses only verified information. */
export const faqItems: FaqItem[] = [
  {
    topic: "Services",
    q: "What services does Detailing Lab offer?",
    a: "Detailing Lab offers interior car detailing, exterior car detailing, ceramic coating, glass coating, paint protection film (PPF) and undercoating.",
  },
  {
    topic: "Services",
    q: "How do I know which service is right for my car?",
    a: "Tell us about your vehicle and what you would like improved or protected, and our team can talk you through the options. You can reach us on WhatsApp or by phone.",
  },
  {
    topic: "Quotes",
    q: "How can I get a quote?",
    a: `Message us on WhatsApp or call ${business.phone} with your vehicle details and the service you are considering, and we will get back to you.`,
  },
  {
    topic: "Location",
    q: "Where is Detailing Lab located?",
    a: `Detailing Lab is located at ${business.address.full}.`,
  },
  {
    topic: "Gallery",
    q: "Can I see previous work?",
    a: "The gallery is designed to showcase detailing and protection work. Sample imagery is used in this demo, with final business photography added for launch.",
  },
  {
    topic: "Booking / enquiry",
    q: "Do I need to book in advance?",
    a: "Please contact us before visiting so we can confirm availability for the service you are interested in.",
  },
  {
    topic: "Preparation",
    q: "How should I prepare my car before bringing it in?",
    a: "Removing personal belongings from the cabin and boot helps our team work more thoroughly. If you have specific areas of concern, point them out when you arrive.",
  },
  {
    topic: "Ceramic coating",
    q: "What is ceramic coating?",
    a: "Ceramic coating is a protective coating applied to prepared paintwork. Our team can explain what the process involves for your specific vehicle.",
  },
  {
    topic: "PPF",
    q: "What is paint protection film (PPF)?",
    a: "PPF is a clear film installed over painted panels. Coverage options depend on the vehicle, so it is best discussed with our team directly.",
  },
  {
    topic: "Location",
    q: "What are your opening hours?",
    a: business.hours.map((h) => `${h.days}: ${h.time}`).join(" · "),
  },
];

export const pillars = [
  {
    title: "Specialized Services",
    text: "Detailing, coating and protection services carried out as focused work rather than a quick wash.",
  },
  {
    title: "Careful Work",
    text: "Vehicles are worked on panel by panel and area by area, with attention to the details.",
  },
  {
    title: "Clear Guidance",
    text: "Ask us what a service involves and we will explain it in plain terms before anything begins.",
  },
  {
    title: "Local Convenience",
    text: "Located on Rashid Minhas Road Service Lane in Block 11, Gulshan-e-Iqbal, Karachi.",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

/** LocalBusiness structured data — verified information only. */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: business.businessName,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  openingHoursSpecification: business.hoursSchema,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.name },
  })),
};
