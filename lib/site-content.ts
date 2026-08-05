export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export type PropertyItem = {
  slug: string;
  type: "villa" | "condo" | "land" | "commercial";
  price: number;
  beds: number;
  baths: number;
  area: number;
  featured: boolean;
  locationKey: "guanacaste" | "sanjose" | "puntarenas" | "heredia";
  title: Record<Locale, string>;
  location: Record<Locale, string>;
  summary: Record<Locale, string>;
  description: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  gallery: string[];
};

export const companyInfo = {
  name: "Costa Properties",
  email: "hello@costaproperties.cr",
  phone: "+506 7010 5550",
  whatsapp: "+50670105550",
  address: {
    es: "Escazu, San Jose, Costa Rica",
    en: "Escazu, San Jose, Costa Rica",
  },
  social: {
    instagram: "https://instagram.com/costapropertiescr",
    youtube: "https://youtube.com/@costapropertiescr",
    tiktok: "https://tiktok.com/@costapropertiescr",
  },
};

export const propertyTypeLabels: Record<Locale, Record<PropertyItem["type"], string>> = {
  es: {
    villa: "Villa",
    condo: "Condominio",
    land: "Lote",
    commercial: "Comercial",
  },
  en: {
    villa: "Villa",
    condo: "Condo",
    land: "Land",
    commercial: "Commercial",
  },
};

export const properties: PropertyItem[] = [
  {
    slug: "villa-marina-papagayo",
    type: "villa",
    price: 890000,
    beds: 4,
    baths: 4,
    area: 420,
    featured: true,
    locationKey: "guanacaste",
    title: { es: "Villa Marina Papagayo", en: "Marina Papagayo Villa" },
    location: { es: "Peninsula Papagayo, Guanacaste", en: "Papagayo Peninsula, Guanacaste" },
    summary: {
      es: "Residencia frente al mar con terrazas abiertas, piscina infinita y acceso rapido a marina.",
      en: "Oceanfront residence with open terraces, infinity pool, and quick marina access.",
    },
    description: {
      es: "Una propiedad disenada para compradores que buscan estilo de vida costero, privacidad y potencial de renta vacacional premium.",
      en: "A home designed for buyers seeking coastal living, privacy, and premium vacation-rental upside.",
    },
    highlights: {
      es: ["Vista al mar", "Piscina infinita", "Comunidad privada"],
      en: ["Ocean views", "Infinity pool", "Private community"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "condominio-sabana-sky",
    type: "condo",
    price: 345000,
    beds: 2,
    baths: 2,
    area: 138,
    featured: true,
    locationKey: "sanjose",
    title: { es: "Condominio Sabana Sky", en: "Sabana Sky Condo" },
    location: { es: "La Sabana, San Jose", en: "La Sabana, San Jose" },
    summary: {
      es: "Unidad urbana con amenidades premium, coworking y acceso inmediato a servicios ejecutivos.",
      en: "Urban unit with premium amenities, coworking, and immediate access to executive services.",
    },
    description: {
      es: "Ideal para inversionistas o compradores internacionales que priorizan ubicacion central y administracion sencilla.",
      en: "Ideal for investors or international buyers prioritizing central location and low-maintenance ownership.",
    },
    highlights: {
      es: ["Vista urbana", "Amenidades de torre", "Renta corporativa"],
      en: ["City view", "Tower amenities", "Corporate rental potential"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "lote-monteverde-ridge",
    type: "land",
    price: 220000,
    beds: 0,
    baths: 0,
    area: 5200,
    featured: false,
    locationKey: "puntarenas",
    title: { es: "Lote Monteverde Ridge", en: "Monteverde Ridge Lot" },
    location: { es: "Monteverde, Puntarenas", en: "Monteverde, Puntarenas" },
    summary: {
      es: "Terreno con topografia noble para eco-lodge, retiro familiar o proyecto boutique.",
      en: "Buildable land for an eco-lodge, family retreat, or boutique hospitality project.",
    },
    description: {
      es: "Rodeado de montana y clima fresco, combina valor patrimonial con atractivo turistico.",
      en: "Surrounded by mountain scenery and cool weather, it blends legacy value with tourism appeal.",
    },
    highlights: {
      es: ["Clima fresco", "Uso mixto", "Vista panoramica"],
      en: ["Cool climate", "Mixed-use potential", "Panoramic views"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "centro-heredia-plaza",
    type: "commercial",
    price: 610000,
    beds: 0,
    baths: 4,
    area: 610,
    featured: true,
    locationKey: "heredia",
    title: { es: "Centro Heredia Plaza", en: "Heredia Plaza Center" },
    location: { es: "Heredia Centro", en: "Downtown Heredia" },
    summary: {
      es: "Activo comercial con alto flujo, parqueo privado y mezcla de locales lista para optimizar rendimiento.",
      en: "High-traffic commercial asset with private parking and tenant mix ready for yield optimization.",
    },
    description: {
      es: "Pensado para compradores que desean flujo de caja inmediato y expansion comercial.",
      en: "Designed for buyers who want immediate cash flow and room to expand commercial operations.",
    },
    highlights: {
      es: ["Flujo peatonal", "Parqueo", "Locales activos"],
      en: ["Foot traffic", "Parking", "Active storefronts"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "residencia-santa-ana-garden",
    type: "villa",
    price: 520000,
    beds: 3,
    baths: 3,
    area: 310,
    featured: false,
    locationKey: "sanjose",
    title: { es: "Residencia Santa Ana Garden", en: "Santa Ana Garden Residence" },
    location: { es: "Santa Ana, San Jose", en: "Santa Ana, San Jose" },
    summary: {
      es: "Casa contemporanea con jardin privado, oficina y acceso rapido a colegios y centros corporativos.",
      en: "Contemporary home with private garden, office, and quick access to schools and business hubs.",
    },
    description: {
      es: "Excelente balance entre vida familiar, conectividad y valor de reventa.",
      en: "A strong balance of family living, connectivity, and resale value.",
    },
    highlights: {
      es: ["Oficina privada", "Jardin amplio", "Seguridad 24/7"],
      en: ["Private office", "Large garden", "24/7 security"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "condo-jaco-surf-club",
    type: "condo",
    price: 289000,
    beds: 2,
    baths: 2,
    area: 126,
    featured: false,
    locationKey: "puntarenas",
    title: { es: "Condo Jaco Surf Club", en: "Jaco Surf Club Condo" },
    location: { es: "Jaco, Puntarenas", en: "Jaco, Puntarenas" },
    summary: {
      es: "Propiedad cerca de playa enfocada en estilo de vida, segunda residencia y alquiler de corto plazo.",
      en: "Beachside property built for lifestyle buyers, second-home owners, and short-term rental demand.",
    },
    description: {
      es: "Una opcion dinamica para inversion con acceso a restaurantes, tours y playa.",
      en: "A dynamic investment option with access to restaurants, tours, and the beach.",
    },
    highlights: {
      es: ["A pasos de la playa", "Listo para rentar", "Amenidades resort"],
      en: ["Steps from the beach", "Rental-ready", "Resort amenities"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
    ],
  },
];

export const heroSlides: Record<Locale, Array<{ title: string; subtitle: string; image: string; eyebrow: string }>> = {
  es: [
    {
      eyebrow: "Propiedades + financiamiento",
      title: "Tu proxima inversion empieza frente a la costa correcta.",
      subtitle:
        "Encontramos propiedades con potencial y estructuramos el financiamiento ideal para nacionales y extranjeros.",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=80",
    },
    {
      eyebrow: "Asesoria local",
      title: "Compra con claridad, respalda tu decision y acelera tu cierre.",
      subtitle:
        "Desde la busqueda hasta la documentacion, coordinamos un proceso mas seguro y eficiente.",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7f34f5f2f92?auto=format&fit=crop&w=1800&q=80",
    },
    {
      eyebrow: "Costa Rica para vivir e invertir",
      title: "Residencias, lotes y activos comerciales en ubicaciones que si convierten.",
      subtitle:
        "Seleccionamos oportunidades con foco en estilo de vida, renta o crecimiento patrimonial.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80",
    },
  ],
  en: [
    {
      eyebrow: "Property + financing",
      title: "Your next investment starts on the right coast.",
      subtitle:
        "We source high-potential properties and structure financing for local and international buyers.",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1800&q=80",
    },
    {
      eyebrow: "Local guidance",
      title: "Buy with clarity, support every decision, and move to closing faster.",
      subtitle:
        "From search to documents, we coordinate a safer and more efficient acquisition process.",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7f34f5f2f92?auto=format&fit=crop&w=1800&q=80",
    },
    {
      eyebrow: "Costa Rica to live and invest",
      title: "Residences, land, and commercial assets in locations that convert.",
      subtitle:
        "We curate opportunities for lifestyle buyers, rental income, and long-term portfolio growth.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80",
    },
  ],
};

export const siteCopy = {
  es: {
    localeName: "ES",
    otherLocaleName: "EN",
    nav: {
      home: "Inicio",
      loans: "Prestamos",
      properties: "Propiedades",
      contact: "Contacto",
      about: "Costa Rica",
      referrals: "Testimonios",
      downloads: "Descargas",
    },
    common: {
      featured: "Destacada",
      viewProperties: "Ver propiedades",
      calculateLoan: "Calcular prestamo",
      contactUs: "Contactenos",
      speakAdvisor: "Hablar con un asesor",
      whatsapp: "WhatsApp directo",
      discoverMore: "Descubrir mas",
      monthlyEstimate: "Pago mensual estimado",
      annualRateNote: "Simulacion referencial con tasa anual del 7.9%.",
      documentsReady: "Documentos listos para descargar",
    },
    home: {
      eyebrow: "Bienes raices y financiamiento en Costa Rica",
      title: "Propiedades premium con estrategia financiera clara.",
      intro:
        "Guiamos compradores e inversionistas con un servicio integral: descubrimiento, financiamiento, documentacion y cierre.",
      stats: [
        { value: "120+", label: "Propiedades activas" },
        { value: "18", label: "Anos de experiencia" },
        { value: "7", label: "Provincias cubiertas" },
      ],
      valueCards: [
        {
          title: "Compra con respaldo",
          text: "Filtramos oportunidades, coordinamos visitas y reducimos friccion legal y comercial.",
        },
        {
          title: "Financiamiento accesible",
          text: "Preparamos escenarios para nacionales y extranjeros con tiempos y requisitos claros.",
        },
        {
          title: "Captacion enfocada en cierre",
          text: "Cada CTA y formulario esta pensado para convertir consultas en conversaciones reales.",
        },
      ],
      processTitle: "Un proceso simple para decidir mejor",
      process: [
        "Exploramos objetivos de compra o inversion.",
        "Seleccionamos propiedades y opciones de prestamo.",
        "Acompañamos la documentacion hasta el cierre.",
      ],
      countryTeaser: "Costa Rica atrae compradores por su estabilidad, estilo de vida y diversidad geografica.",
      testimonialsTitle: "Confianza construida con resultados concretos",
      downloadsTitle: "Guias y formatos para avanzar sin friccion",
    },
    loans: {
      title: "Prestamos para compra, inversion y refinanciamiento",
      intro:
        "Explicamos el financiamiento en un lenguaje claro para que el cliente entienda costos, tiempos y elegibilidad.",
      types: [
        "Hipoteca para vivienda principal",
        "Credito para segunda residencia o retiro",
        "Prestamo para inversion y renta vacacional",
        "Refinanciamiento y consolidacion patrimonial",
      ],
      rates: "Tasas referenciales entre 7.25% y 10.5% anual, segun perfil y garantia.",
      requirements: [
        "Identificacion y formulario de aplicacion",
        "Comprobantes de ingresos y estados bancarios",
        "Prima o aporte inicial",
        "Documentacion de la propiedad y avaluo",
      ],
      process: [
        "Precalificacion financiera",
        "Revision documental",
        "Analisis del activo",
        "Aprobacion y formalizacion",
      ],
      benefits: [
        "Acompanamiento durante todo el proceso",
        "Escenarios adaptados a metas de flujo o patrimonio",
        "Coordinacion con abogados, valuadores y bancos",
      ],
      profiles: {
        nationals: "Opciones para asalariados, independientes y empresarios locales.",
        foreigners: "Estrategias para compradores internacionales con ingresos en el exterior.",
      },
    },
    propertiesPage: {
      title: "Propiedades seleccionadas para vivir, invertir y escalar patrimonio",
      intro:
        "Explora un inventario curado con filtros por precio, zona y tipo de activo. Cada ficha prioriza informacion que ayuda a decidir.",
    },
    contact: {
      title: "Conversemos sobre tu compra o estructura de prestamo",
      intro:
        "Responde unas preguntas y te devolvemos una ruta concreta: propiedades, financiamiento o ambos.",
      formButton: "Enviar por WhatsApp",
    },
    about: {
      title: "Costa Rica como destino para vivir, invertir y diversificar",
      intro:
        "El pais combina estabilidad democratica, conectividad regional y destinos de alto atractivo para compradores extranjeros.",
      reasons: [
        "Seguridad juridica para inversiones inmobiliarias",
        "Diversidad de climas y estilos de vida en pocas horas de distancia",
        "Mercado con oportunidades en playa, montana y ciudad",
      ],
    },
    referrals: {
      title: "Historias que reducen la incertidumbre del comprador",
      intro:
        "Presentamos testimonios escritos y espacios listos para integrar videos reales de clientes.",
      videoNote: "Espacio listo para insertar videos de YouTube, Vimeo o archivo propio.",
    },
    downloads: {
      title: "Documentacion util para avanzar mas rapido",
      intro:
        "Descarga requisitos, formularios y guias en PDF para iniciar con informacion clara.",
    },
    footerTagline: "Real estate, financing and local guidance across Costa Rica.",
  },
  en: {
    localeName: "EN",
    otherLocaleName: "ES",
    nav: {
      home: "Home",
      loans: "Loans",
      properties: "Properties",
      contact: "Contact Us",
      about: "About Costa Rica",
      referrals: "Referrals",
      downloads: "Downloads",
    },
    common: {
      featured: "Featured",
      viewProperties: "View properties",
      calculateLoan: "Calculate loan",
      contactUs: "Contact us",
      speakAdvisor: "Talk to an advisor",
      whatsapp: "Direct WhatsApp",
      discoverMore: "Discover more",
      monthlyEstimate: "Estimated monthly payment",
      annualRateNote: "Illustrative estimate based on a 7.9% annual rate.",
      documentsReady: "Documents ready to download",
    },
    home: {
      eyebrow: "Real estate and financing in Costa Rica",
      title: "Premium properties with a clear financing strategy.",
      intro:
        "We guide buyers and investors through discovery, financing, due diligence, and closing with one coordinated team.",
      stats: [
        { value: "120+", label: "Active listings" },
        { value: "18", label: "Years of experience" },
        { value: "7", label: "Provinces covered" },
      ],
      valueCards: [
        {
          title: "Backed purchase decisions",
          text: "We filter opportunities, coordinate tours, and reduce legal and commercial friction.",
        },
        {
          title: "Accessible financing",
          text: "We prepare loan scenarios for local and international buyers with clear timing and requirements.",
        },
        {
          title: "Conversion-focused lead flow",
          text: "Every CTA and form is designed to turn inquiries into qualified conversations.",
        },
      ],
      processTitle: "A simple process that helps you decide better",
      process: [
        "We map your purchase or investment goals.",
        "We match properties with the right financing route.",
        "We guide documents through a coordinated closing.",
      ],
      countryTeaser: "Costa Rica attracts buyers through stability, lifestyle quality, and geographic diversity.",
      testimonialsTitle: "Trust built on tangible outcomes",
      downloadsTitle: "Guides and forms that remove friction",
    },
    loans: {
      title: "Loans for purchases, investment, and refinancing",
      intro:
        "We explain financing in plain language so clients understand costs, timing, and eligibility before they commit.",
      types: [
        "Primary home mortgages",
        "Second-home and retirement financing",
        "Investment and vacation-rental loans",
        "Refinancing and equity restructuring",
      ],
      rates: "Illustrative rates between 7.25% and 10.5% annually, depending on profile and collateral.",
      requirements: [
        "ID and application form",
        "Income evidence and bank statements",
        "Down payment or initial contribution",
        "Property documents and appraisal",
      ],
      process: [
        "Financial pre-qualification",
        "Document review",
        "Asset analysis",
        "Approval and closing",
      ],
      benefits: [
        "Guidance throughout the full process",
        "Scenarios tailored to cash flow or wealth goals",
        "Coordination with attorneys, appraisers, and lenders",
      ],
      profiles: {
        nationals: "Options for salaried buyers, self-employed professionals, and local business owners.",
        foreigners: "Strategies for international buyers earning income abroad.",
      },
    },
    propertiesPage: {
      title: "Selected properties for living, investing, and scaling wealth",
      intro:
        "Browse a curated inventory with filters by price, area, and property type. Each card focuses on the details that support a faster decision.",
    },
    contact: {
      title: "Let us discuss your purchase or financing structure",
      intro:
        "Answer a few questions and we will return with a practical path: properties, financing, or both.",
      formButton: "Send via WhatsApp",
    },
    about: {
      title: "Costa Rica as a destination to live, invest, and diversify",
      intro:
        "The country combines democratic stability, regional connectivity, and highly attractive destinations for foreign buyers.",
      reasons: [
        "Strong legal certainty for real estate investment",
        "Diverse climates and lifestyles within a few hours of travel",
        "Opportunity-rich markets across beach, mountain, and city locations",
      ],
    },
    referrals: {
      title: "Stories that reduce buyer uncertainty",
      intro:
        "We present written testimonials and video-ready spaces for real client stories.",
      videoNote: "Ready to embed YouTube, Vimeo, or self-hosted client videos.",
    },
    downloads: {
      title: "Useful documentation to move faster",
      intro:
        "Download PDF requirements, forms, and buyer guides so you can start with clear information.",
    },
    footerTagline: "Real estate, financing and local guidance across Costa Rica.",
  },
} as const;

export const navItems = [
  { key: "home", slug: "" },
  { key: "loans", slug: "/loans" },
  { key: "properties", slug: "/properties" },
  { key: "contact", slug: "/contact" },
  { key: "about", slug: "/about-costa-rica" },
  { key: "referrals", slug: "/referrals" },
  { key: "downloads", slug: "/downloads" },
] as const;

export const testimonials = {
  es: [
    {
      name: "Adriana y Luis",
      title: "Compra de segunda residencia",
      quote:
        "Nos guiaron desde la seleccion de la zona hasta la aprobacion del credito. El proceso se sintio controlado y claro.",
    },
    {
      name: "Mark Peterson",
      title: "Comprador internacional",
      quote:
        "The team translated every step into practical decisions. That saved us time and reduced risk.",
    },
    {
      name: "Grupo Brisa",
      title: "Adquisicion comercial",
      quote:
        "Su criterio financiero y local hizo la diferencia para cerrar una propiedad con flujo desde el primer mes.",
    },
  ],
  en: [
    {
      name: "Adriana and Luis",
      title: "Second-home purchase",
      quote:
        "They guided us from zone selection to loan approval. The process felt controlled and clear.",
    },
    {
      name: "Mark Peterson",
      title: "International buyer",
      quote:
        "The team translated every step into practical decisions. That saved us time and reduced risk.",
    },
    {
      name: "Brisa Group",
      title: "Commercial acquisition",
      quote:
        "Their financial and local perspective made the difference in closing an income-producing asset fast.",
    },
  ],
};

export const zones = {
  es: [
    {
      title: "Playa",
      subtitle: "Guanacaste y Pacifico Central",
      text: "Ideal para retiro, renta vacacional y estilo de vida con alta demanda internacional.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Montana",
      subtitle: "Monteverde y Valle Central alto",
      text: "Perfecto para compradores que buscan clima fresco, privacidad y turismo de naturaleza.",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Ciudad",
      subtitle: "San Jose, Escazu, Santa Ana",
      text: "Centros urbanos con servicios premium, conectividad y dinamica corporativa.",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  en: [
    {
      title: "Beach",
      subtitle: "Guanacaste and Central Pacific",
      text: "Ideal for retirement, vacation rentals, and lifestyle-driven purchases with global demand.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Mountain",
      subtitle: "Monteverde and the upper Central Valley",
      text: "Perfect for buyers seeking cooler weather, privacy, and nature-oriented tourism appeal.",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "City",
      subtitle: "San Jose, Escazu, Santa Ana",
      text: "Urban hubs with premium services, strong connectivity, and corporate demand.",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?auto=format&fit=crop&w=1200&q=80",
    },
  ],
};

export const downloads = {
  es: [
    { title: "Requisitos para prestamos", category: "Financiamiento", href: "/docs/loan-requirements-es.pdf" },
    { title: "Formulario inicial de comprador", category: "Captacion", href: "/docs/buyer-intake-es.pdf" },
    { title: "Guia basica para comprar en Costa Rica", category: "Compra", href: "/docs/buying-guide-es.pdf" },
    { title: "Resumen legal inicial", category: "Legal", href: "/docs/legal-overview-es.pdf" },
  ],
  en: [
    { title: "Loan requirements", category: "Financing", href: "/docs/loan-requirements-en.pdf" },
    { title: "Buyer intake form", category: "Lead capture", href: "/docs/buyer-intake-en.pdf" },
    { title: "Costa Rica buying guide", category: "Acquisition", href: "/docs/buying-guide-en.pdf" },
    { title: "Initial legal overview", category: "Legal", href: "/docs/legal-overview-en.pdf" },
  ],
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalizedPath(locale: Locale, slug = "") {
  return `/${locale}${slug}`;
}

export function formatCurrency(locale: Locale, value: number) {
  return new Intl.NumberFormat(locale === "es" ? "es-CR" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}