export type Language = 'en' | 'am';

export const LANGUAGE_STORAGE_KEY = 'language';

/** Allows Amharic (and other) strings while keeping en structure from `as const`. */
type DeepString<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepString<U>[]
    : T extends object
      ? { [K in keyof T]: DeepString<T[K]> }
      : T;

const en = {
  meta: {
    siteName: 'Web Crafters',
    logoAlt: 'Web Crafters logo',
  },
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    pricing: 'Pricing',
    contact: 'Contact',
    testimonials: 'Testimonials',
    getStarted: 'Get Started',
  },
  language: {
    en: 'English',
    am: 'አማርኛ',
    switchLabel: 'Language',
  },
  hero: {
    eyebrow: 'Web Design & Development',
    title: 'Web Crafters',
    subtitle:
      'I build websites and apps that help businesses look professional online and bring in more customers. Want something that looks great and actually works? Let\'s talk.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'View Our Work',
    statProjects: 'Projects Done',
    statProjectsValue: '20+',
    statDelivery: 'Quick Turnaround',
    statDeliveryValue: '4 Days',
    statFocus: 'Client First',
  },
  about: {
    eyebrow: 'Who We Are',
    title: 'About Web Crafters',
    description:
      'We\'re a small team of developers and designers who care about getting your site right, not just getting it done.',
    storyTitle: 'Our Story',
    storyP1:
      'Web Crafters started in 2024 with one goal: help businesses show up well online. We started small and we\'ve kept that personal touch.',
    storyP2:
      'Most of our clients are startups and small businesses. We build sites and apps that are easy to use, load fast, and help you reach more people.',
    whyTitle: 'Why Choose Us?',
    whyItems: [
      'Clean designs that work on phones, tablets, and desktops',
      'Fast loading pages your visitors won\'t wait on',
      'SEO basics built in so people can find you on Google',
      'Support after launch when you need updates',
    ],
    stats: {
      clients: 'Happy Clients',
      projects: 'Projects Completed',
      experience: 'Years Experience',
    },
  },
  owner: {
    eyebrow: 'Leadership',
    title: 'Meet the Owner',
    description: 'The person behind every Web Crafters project.',
    name: 'Elyanan Wondwossen',
    role: 'Founder & CEO',
    bio:
      'Elyanan builds websites and apps for businesses in Ethiopia and beyond. He handles design and development himself, so you work directly with the person building your project, not a middleman.',
    imageAlt: 'Elyanan Wondwossen, Founder of Web Crafters',
  },
  techStack: {
    eyebrow: 'Technologies',
    title: 'Our Tech Stack',
    description:
      'Trusted tools we use every day to build fast, reliable websites and applications.',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend & APIs',
      database: 'Databases',
      mobile: 'Mobile',
      cms: 'CMS & Cloud',
      tools: 'Version Control',
    },
  },
  services: {
    eyebrow: 'What We Do',
    title: 'Our Services',
    description: 'Practical help for businesses that need a strong presence online.',
    items: [
      {
        title: 'Web Development',
        description:
          'Custom websites built to match your business—clear structure, fast pages, and room to grow.',
      },
      {
        title: 'Mobile-First Design',
        description:
          'Your site will look good and work well on phones, which is where most of your visitors are.',
      },
      {
        title: 'SEO Optimization',
        description:
          'Solid SEO setup so customers searching for what you offer have a better chance of finding you.',
      },
      {
        title: 'E-Commerce Solutions',
        description:
          'Online stores with straightforward checkout and product pages that are easy to manage.',
      },
      {
        title: 'UI/UX Design',
        description:
          'Layouts that are easy to navigate so visitors know what to do next—call, book, or buy.',
      },
      {
        title: 'Performance Optimization',
        description:
          'Speed improvements that keep people on your site instead of leaving out of frustration.',
      },
    ],
  },
  portfolio: {
    eyebrow: 'Our Work',
    title: 'Our Portfolio',
    description: 'A few recent projects. School platforms, business sites, and a mobile app.',
    viewLive: 'View Live',
    mobileApp: 'Mobile App',
    projects: {
      yanis: {
        title: "Yani's Blessings",
        category: 'Bakery & E-Commerce Website',
        description:
          'A bakery website with product menu, shopping cart, custom orders, and English/Amharic support.',
      },
      yeneta: {
        title: 'Yeneta Academy',
        category: 'School Website & Student Portal',
        description:
          'A full school website with a student portal, learning resources, events, and an admin area for updating content.',
      },
      ambivox: {
        title: 'Ambivox',
        category: 'Digital Literacy & Wellbeing',
        description:
          'A learning platform with modules for students and teachers, focused on digital skills and online safety.',
      },
      typing: {
        title: 'Typing Speed Master',
        category: 'Typing Practice Web App',
        description:
          'A practice tool for improving typing speed with live feedback, progress tracking, and different difficulty levels.',
      },
      sunset: {
        title: 'Sunset Cafe',
        category: 'Restaurant Website',
        description:
          'A cafe website with menu pages, location info, and Google Maps so customers can find the shop easily.',
      },
      swift: {
        title: 'Swift Scooter',
        category: 'Mobile Application',
        description:
          'A Flutter app for renting electric scooters in Ethiopia—find nearby scooters, rent, and manage rides from your phone.',
      },
    },
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Choose the Perfect Website Package for Your Business',
    description: 'Clear packages so you know what you\'re getting before we start.',
    orderNow: 'Order Now',
    oneTime: 'One-time',
    mostPopular: '⭐ Most Popular',
    note:
      'Domain, hosting, and third-party service fees are not included and can be provided separately upon request.',
    custom: {
      title: 'Need a Custom Solution?',
      paragraph1:
        'If your project needs more than our standard packages offer, we build custom web applications and mobile applications around your business requirements. Pricing is based on scope, functionality, integrations, and overall technical complexity.',
      paragraph2:
        'As a general guide, custom development projects typically range from ETB 20,000 to ETB 1,000,000+. We recommend a short consultation so we can understand your needs and provide a clear, itemized quote.',
      cta: 'Discuss Your Project',
    },
    tiers: {
      basic: {
        title: 'Basic',
        features: [
          'Professional Design',
          'Mobile Responsive',
          'Basic SEO',
          '1 Revision',
          'Email Support',
          'Delivered in 4 Days',
        ],
      },
      standard: {
        title: 'Standard',
        features: [
          'Custom UI/UX Design',
          'Responsive on All Devices',
          'Standard SEO',
          'Content Management Dashboard',
          'Update Website Content Yourself',
          '3 Revisions',
          'Priority Support',
          'Delivered in 6 Days',
        ],
      },
      premium: {
        title: 'Premium',
        features: [
          'Advanced Custom UI/UX',
          'Advanced SEO Optimization',
          'Full Business Management Dashboard',
          'Manage Content, Services & Portfolio',
          'Analytics Integration',
          'Unlimited Revisions',
          'Priority Support',
          'Performance Optimization',
          'Delivered in 8–10 Days',
        ],
      },
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Get In Touch',
    description: 'Tell us about your project. We usually reply within 12 to 24 hours.',
    letsTalk: 'Let\'s Talk',
    intro:
      'Have something in mind? Send a message with a short description and we\'ll get back to you to see if we\'re a good fit.',
    address: 'Address',
    addressValue: 'We work online',
    email: 'Email',
    website: 'Website',
    phone: 'Phone',
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
    },
    toast: {
      successTitle: 'Message Sent!',
      successDescription: 'Thanks for reaching out. We\'ll get back to you soon.',
      errorTitle: 'Error',
      errorDescription: 'Something went wrong. Please try again or message us on Telegram.',
    },
  },
  testimony: {
    eyebrow: 'Testimonials',
    title: 'What Our Clients Say',
    description: 'Short notes from people we\'ve worked with.',
    items: [
      {
        name: "Yani's Blessings",
        company: "Yani's Blessings Bakery",
        text: 'Our new website looks beautiful and makes ordering so much easier for our customers. The admin dashboard lets us manage products and orders without any hassle. Elyanan understood exactly what a small bakery needs.',
      },
      {
        name: 'Ambivox Team',
        company: 'Ambivox',
        text: 'Elyanan listened to what we needed and built a site that fits us. It loads quickly, looks clean, and was easy to work with from start to finish.',
      },
      {
        name: 'Sunset Cafe Owner',
        company: 'Sunset Cafe',
        text: 'Our menu is easy to browse online and customers find the cafe without calling first. Exactly what we wanted for a small business.',
      },
      {
        name: 'Swift Scooter Owner',
        company: 'Swift Scooter',
        text: 'Working with Elyanan was straightforward. The app looks good, runs smoothly, and he kept us in the loop the whole time. We\'d work with him again.',
      },
    ],
  },
  footer: {
    tagline: 'Websites and apps for businesses that want to grow online—built with care, delivered on time.',
    quickLinks: 'Quick Links',
    servicesTitle: 'Services',
    serviceItems: [
      'Web Development',
      'Mobile Design',
      'SEO Optimization',
      'E-Commerce',
      'UI/UX Design',
    ],
    copyright: 'All rights reserved.',
    builtWith: 'Built with care in Ethiopia.',
  },
} as const;

const am: DeepString<typeof en> = {
  meta: {
    siteName: 'ዌብ ክራፍተርስ',
    logoAlt: 'ዌብ ክራፍተርስ ሎጎ',
  },
  nav: {
    home: 'መነሻ',
    about: 'ስለ እኛ',
    services: 'አገልግሎቶች',
    portfolio: 'ስራዎች',
    pricing: 'ዋጋ',
    contact: 'አግኙን',
    testimonials: 'ምስክርነቶች',
    getStarted: 'ይጀምሩ',
  },
  language: {
    en: 'English',
    am: 'አማርኛ',
    switchLabel: 'ቋንቋ',
  },
  hero: {
    eyebrow: 'ድር ገጽ ስዕል እና ግንባብ',
    title: 'Web Crafters',
    subtitle:
      'ለንግድዎ በመስመር ላይ ብቁ እንዲታይ እና ተጨማሪ ደንበኞች እንዲያገኝ የሚረዱ ድር ገጾችንና መተግበሪያዎችን እሰራለሁ። ጥሩ የሚታይና በትክክል የሚሰራ ነገር ይፈልጋሉ? እንወያይ።',
    ctaPrimary: 'ይጀምሩ',
    ctaSecondary: 'ስራዎቻችንን ይመልከቱ',
    statProjects: 'የተጠናቀቁ ስራዎች',
    statProjectsValue: '20+',
    statDelivery: 'ፈጣን አቅርቦት',
    statDeliveryValue: '4 ቀን',
    statFocus: 'ለደንበኛ ትኩረት',
  },
  about: {
    eyebrow: 'እኛ ማን ነን',
    title: 'ስለ Web Crafters',
    description:
      'ድር ገጽዎ በትክክል እንዲሰራ የሚጠንቀቅ የጥቂት አዳዲስ እና ዲዛይነሮች ቡድን ነን።',
    storyTitle: 'ታሪካችን',
    storyP1:
      'Web Crafters በ2024 ተመሠረተ። ንግዶች በመስመር ላይ በጥሩ ሁኔታ እንዲታዩ ለመርዳት ነው። ከመጀመሪያው ትንሽ ጀመርን እና ያን የቅርብ ግንኙነት አሰራር አልተላቀቅንም።',
    storyP2:
      'ብዙ ደንበኞቻችን ጀማሪ ንግዶችና ትናንሽ ኩባንያዎች ናቸው። ቀላል ለመጠቀም፣ ፈጣን ለመጫን እና ሰዎች እንዲያገኙዎት የሚረዱ ጣቢያዎችን እና መተግበሪያዎችን እንሰራለን።',
    whyTitle: 'ለምን እኛን ይመርጡ?',
    whyItems: [
      'በስልክ፣ በታብሌት እና በኮምፒዩተር የሚሰራ ንፁህ ዲዛይን',
      'ጎብኚዎች እንዳይጠብቁ የሚያስከፍቱ ፈጣን ገጾች',
      'ሰዎች በጉግል እንዲያገኙዎት የሚረዱ መሠረታዊ SEO',
      'ከመጣት በኋላ ሲያስፈልግ የሚደረግ ድጋፍ',
    ],
    stats: {
      clients: 'ደስተኛ ደንበኞች',
      projects: 'የተጠናቀቁ ፕሮጀክቶች',
      experience: 'የስራ ልምድ (ዓመት)',
    },
  },
  owner: {
    eyebrow: 'አመራር',
    title: 'ባለቤቱን ይተዋወቁ',
    description: 'በእያንዳንዱ Web Crafters ፕሮጀክት በኋላ ያለው ሰው።',
    name: 'ኤልያናን ወንድዎሰን',
    role: 'መስራች እና ዋና ሥራ አስኪያጅ',
    bio:
      'ኤልያናን በኢትዮጵያና በውጭ ለንግዶች ድር ገጾችንና መተግበሪያዎችን ይሰራል። ዲዛይንና ግንባብን በራሱ የሚያከናውን ስለሆነ፣ ፕሮጀክትዎን ከሚሰራው ሰው ጋር ቀጥታ ይሰራሉ።',
    imageAlt: 'ኤልያናን ወንድዎሰን፣ የ Web Crafters መስራች',
  },
  techStack: {
    eyebrow: 'ቴክኖሎጂዎች',
    title: 'የምንጠቀመው ቴክኖሎጂ',
    description:
      'ፈጣንና አስተማማኝ ድር ገጾችንና መተግበሪያዎችን ለመገንባት በዕለት ተዕለት የምንጠቀምባቸው የታመኑ መሳሪያዎች።',
    groups: {
      frontend: 'ፊት ክፍል (Frontend)',
      backend: 'ኋላ ክፍል እና API',
      database: 'ዳታቤዝ',
      mobile: 'ሞባይል',
      cms: 'CMS እና ክላውድ',
      tools: 'ስሪት ቁጥጥር',
    },
  },
  services: {
    eyebrow: 'ምን እንሰራለን',
    title: 'አገልግሎቶቻችን',
    description: 'በመስመር ላይ ጠንካራ ተገኝነት ለሚፈልጉ ንግዶች ተግባራዊ እገዛ።',
    items: [
      {
        title: 'ድር ገጽ ግንባብ',
        description:
          'ለንግድዎ የሚስማማ ብጁ ድር ገጽ—ግልጽ መዋቅር፣ ፈጣን ገጾች እና ለመስፋት ቦታ።',
      },
      {
        title: 'ሞባይል ቅድሚያ ዲዛይን',
        description:
          'ጣቢያዎ በስልክ ላይ ጥሩ ይታያልና ይሰራል፤ ብዙ ጎብኚዎችዎ በስልክ ናቸው።',
      },
      {
        title: 'SEO ማሻሻያ',
        description:
          'ደንበኞች የሚፈልጉትን ሲፈልጉ እንዲያገኙዎት የሚረዱ ጠንካራ SEO መሠረት።',
      },
      {
        title: 'ኢ-ኮሜርስ መፍትሄ',
        description:
          'ቀላል የክፍያ ሂደት እና ለማስተዳደር ቀላል የምርት ገጾች ያሉት የመስመር ሱቆች።',
      },
      {
        title: 'UI/UX ዲዛይን',
        description:
          'ጎብኚዎች ቀጣይ እርምጃውን የሚያውቁበት—መደወል፣ ማስያዝ ወይም መግዛት።',
      },
      {
        title: 'አፈጻጸም ማሻሻያ',
        description:
          'ሰዎች ከቁጭት ሳይወጡ ጣቢያ ላይ እንዲቆዩ የሚያደርጉ የፍጥነት ማሻሻያዎች።',
      },
    ],
  },
  portfolio: {
    eyebrow: 'ስራዎቻችን',
    title: 'ፖርትፎሊዮ',
    description: 'ከቅርብ ጊዜ ስራዎች—የትምህርት ቤት መድረኮች፣ የንግድ ጣቢያዎች እና ሞባይል መተግበሪያ።',
    viewLive: 'ቀጥታ ይመልከቱ',
    mobileApp: 'ሞባይል መተግበሪያ',
    projects: {
      yanis: {
        title: "Yani's Blessings",
        category: 'የቤከሪ እና ኢ-ኮሜርስ ድር ገጽ',
        description:
          'የምርት ምናሌ፣ የግዢ ባላይ፣ ብጁ ትዕዛዞች እና የእንግሊዝኛ/አማርኛ ድጋፍ ያለው የቤከሪ ጣቢያ።',
      },
      yeneta: {
        title: 'የኔታ አካዳሚ',
        category: 'የትምህርት ቤት ጣቢያ እና የተማሪ መግቢያ',
        description:
          'የተማሪ መግቢያ፣ የመማሪያ ምንጮች፣ ዝግጅቶች እና ይዘት ለማዘመን የአስተዳደር ቦታ ያለው ሙሉ የትምህርት ቤት ጣቢያ።',
      },
      ambivox: {
        title: 'አምቪቮክስ',
        category: 'ዲጂታል ትምህርት እና ደህንነት',
        description:
          'ለተማሪዎችና ለመምህራን ዲጂታል ክህሎትንና የመስመር ደህንነትን የሚያስተምረው የመማሪያ መድረክ።',
      },
      typing: {
        title: 'Typing Speed Master',
        category: 'የታይፒንግ ልምምድ መተግበሪያ',
        description:
          'የታይፒንግ ፍጥነትን ለማሻሻል የቀጥታ ግብረመልስ፣ የሂደት መከታተያ እና የተለያዩ ደረጃዎች ያለው ልምምድ መሳሪያ።',
      },
      sunset: {
        title: 'ሰንሰት ካፌ',
        category: 'የሬስቶራንት ጣቢያ',
        description:
          'የምናሌ ገጾች፣ የአድራሻ መረጃ እና ደንበኞች ካፌውን ቀላል ለማግኘት የጉግል ካርታ ያለው የካፌ ጣቢያ።',
      },
      swift: {
        title: 'Swift Scooter',
        category: 'ሞባይል መተግበሪያ',
        description:
          'በኢትዮጵያ ኤሌክትሪክ ስኩተር ለመከራየት የሚያገለግል Flutter መተግበሪያ—ከስልክዎ አቅራቢያ ስኩተር ያግኙ፣ ይከራዩ እና ጉዞዎን ያስተዳድሩ።',
      },
    },
  },
  pricing: {
    eyebrow: 'ዋጋ',
    title: 'ለንግድዎ ተስማሚ የድር ገጽ ጥቅል ይምረጡ',
    description: 'ከመጀመራችን በፊት ምን እንደሚያገኙ የሚያሳዩ ግልጽ ጥቅሎች።',
    orderNow: 'አሁን ይዘዙ',
    oneTime: 'አንድ ጊዜ',
    mostPopular: '⭐ በጣም ተወዳጅ',
    note:
      'ዶሜይን፣ ሆስቲንግ እና የሶስተኛ ወገን አገልግሎቶች ዋጋ ውስጥ አልተካተቱም። በጥያቄ ሲጠየቁ በእንደራደር ሊቀርቡ ይችላሉ።',
    custom: {
      title: 'ብጁ መፍትሄ ይፈልጋሉ?',
      paragraph1:
        'ፕሮጀክትዎ ከመደበኛ ጥቅሎቻችን በላይ ባህሪዎች ከፈለገ፣ ለንግድዎ የሚስማማ ብጁ ድር መተግበሪያዎችንና ሞባይል መተግበሪያዎችን እንሰራለን። ዋጋው በወሰን፣ በተግባር፣ በውህደቶች እና በቴክኒክል ውስብት ይወሰናል።',
      paragraph2:
        'አጠቃላይ መመሪያ ሲኖር፣ ብጁ ግንባብ ፕሮጀክቶች ብዙውን ጊዜ ከብር 20,000 እስከ 1,000,000+ ይወሰዳሉ። ፍላጎትዎን ለመረዳት አጭር ምክር ብንወያይ እና ግልጽ ዋጋ እንሰጥዎታለን።',
      cta: 'ስለ ፕሮጀክትዎ ይነጋገሩ',
    },
    tiers: {
      basic: {
        title: 'መሠረታዊ',
        features: [
          'ሙያዊ ዲዛይን',
          'በሞባይል የሚስማማ',
          'መሠረታዊ SEO',
          '፩ ማሻሻያ',
          'በኢሜይል ድጋፍ',
          'በ፬ ቀን ውስጥ ይረከባል',
        ],
      },
      standard: {
        title: 'መደበኛ',
        features: [
          'ብጁ UI/UX ዲዛይን',
          'በሁሉም መሳሪያዎች የሚስማማ',
          'መደበኛ SEO',
          'የይዘት አስተዳደር ዳሽቦርድ',
          'የድር ገጽ ይዘት በራስዎ ማዘመን',
          '፫ ማሻሻያዎች',
          'ቅድሚያ ድጋፍ',
          'በ፮ ቀን ውስጥ ይረከባል',
        ],
      },
      premium: {
        title: 'ፕሪሚየም',
        features: [
          'የላቀ ብጁ UI/UX',
          'የላቀ SEO ማሻሻያ',
          'ሙሉ የንግድ አስተዳደር ዳሽቦርድ',
          'ይዘት፣ አገልግሎቶች እና ፖርትፎሊዮ ማስተዳደር',
          'የትንታኔ (Analytics) ውህደት',
          'ያልተገደበ ማሻሻያ',
          'ቅድሚያ ድጋፍ',
          'የአፈጻጸም ማሻሻያ',
          'በ፰–፲ ቀን ውስጥ ይረከባል',
        ],
      },
    },
  },
  contact: {
    eyebrow: 'አግኙን',
    title: 'እንወያይ',
    description: 'ስለ ፕሮጀክትዎ ይንገሩን። ብዙውን ጊዜ በ፲፪–፳፬ ሰዓት ውስጥ እንመለሳለን።',
    letsTalk: 'እንነጋገር',
    intro:
      'አንድ ነገር አለዎት? አጭር መግለጫ በመላክ ይላኩልን፤ ለእርስዎ ተስማሚ እንደሆንን እንወያይ።',
    address: 'አድራሻ',
    addressValue: 'በመስመር ላይ እንሰራለን',
    email: 'ኢሜይል',
    website: 'ድር ገጽ',
    phone: 'ስልክ',
    form: {
      name: 'ስም',
      email: 'ኢሜይል',
      subject: 'ርዕስ',
      message: 'መልዕክት',
      send: 'መልዕክት ላክ',
      sending: 'በመላክ ላይ...',
    },
    toast: {
      successTitle: 'መልዕክት ተልኳል!',
      successDescription: 'ስለ መገናኘትዎ እናመሰግናለን። በቅርቡ እንመለስልዎታለን።',
      errorTitle: 'ስህተት',
      errorDescription: 'አንድ ነገር ተሳስቷል። እባክዎ እንደገና ይሞክሩ ወይም በቴሌግራም ይጻፉን።',
    },
  },
  testimony: {
    eyebrow: 'ምስክርነቶች',
    title: 'ደንበኞቻችን ምን ይላሉ',
    description: 'ከሰራንባቸው ሰዎች አጭር ማስታወሻዎች።',
    items: [
      {
        name: "Yani's Blessings",
        company: "Yani's Blessings Bakery",
        text: 'አዲሱ ድር ገጻችን ተወዳጅ ነው እና ለደንበኞቻችን ትዕዛዝ መስጠትን ቀላል አድርጓል። አስተዳደር ዳሽቦርዱም ምርቶችንና ትዕዛዞችን ሳንቸግር ለማስተዳደር ያስችለናል። ለትንሽ ቤከሪ ምን እንደሚፈልግ ኤልያናን በትክክል ተረድቷል።',
      },
      {
        name: 'የአምቪቮክስ ቡድን',
        company: 'አምቪቮክስ',
        text: 'ኤልያናን የሚፈልጉትን ሰምቶ ጣቢያ ተስማሚ ለእኛ ሆኖ አጠናቋል። ፈጣን ነው፣ ንፁህ ይታያል፣ ከመጀመሪያ እስከ መጨረሻ ቀላል ነበር።',
      },
      {
        name: 'የሰንሰት ካፔ ባለቤት',
        company: 'ሰንሰት ካፌ',
        text: 'ምናሌያችን በመስመር ቀላል ለማሰስ ነው። ደንበኞች ካፌውን ሳይደውሉ ያገኙናል። ለትንሽ ንግድ በትክክል የሚፈልገው ነበር።',
      },
      {
        name: 'የ Swift Scooter ባለቤት',
        company: 'Swift Scooter',
        text: 'ከኤልያናን ጋር መስራት ቀላል ነበር። መተግበሪያው ጥሩ ይታያል፣ ለማስኬድ ይረዳል፣ በሁሉም ሂደት ያሳውቁን ነበር። እንደገና እንሰራው።',
      },
    ],
  },
  footer: {
    tagline:
      'በመስመር ላይ ለመዳበር የሚፈልጉ ንግዶች ድር ገጾች እና መተግበሪያዎች—በጥንቃቄ የተሠሩ፣ በጊዜ የሚረከቡ።',
    quickLinks: 'ፈጣን አገናኞች',
    servicesTitle: 'አገልግሎቶች',
    serviceItems: [
      'ድር ገጽ ግንባብ',
      'ሞባይል ዲዛይን',
      'SEO ማሻሻያ',
      'ኢ-ኮሜርስ',
      'UI/UX ዲዛይን',
    ],
    copyright: 'ሁሉም መብቶች የተጠበቁ ናቸው።',
    builtWith: 'በኢትዮጵያ በጥንቃቄ ተሠርቷል።',
  },
};

export type Translations = DeepString<typeof en>;

export const translations: Record<Language, Translations> = { en, am };
