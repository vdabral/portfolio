export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  highlights: string[];
  liveUrl: string;
  repoUrl: string;
  type: 'professional' | 'personal';
  domain: string;
  isPrivateRepo?: boolean;
}

export const projectsData: Project[] = [
  // ─── Professional Projects (Mindrops Solutions) ───────────────────────────
  {
    id: 101,
    title: 'Gezeno',
    subtitle: 'B2B Wholesale E-commerce Platform',
    description:
      'Gezeno is a multi-category B2B wholesale e-commerce platform designed for retailers, distributors and resellers. The platform allows businesses to browse products, view quantity-based pricing, add products to their cart, place orders and submit bulk enquiries for customized pricing.',
    image:
      'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'JWT', 'Razorpay', 'Shiprocket'],
    highlights: [
      'Built product listing, detail pages and cart/order management workflows',
      'Integrated Razorpay for secure online payments and Shiprocket for order fulfillment',
      'Implemented JWT authentication, RBAC and coupon management',
      'Optimized PostgreSQL queries and Prisma ORM database indexing',
    ],
    liveUrl: 'https://gezeno.in/',
    repoUrl: '#',
    type: 'professional',
    domain: 'B2B E-commerce',
    isPrivateRepo: true,
  },
  {
    id: 102,
    title: "Manny's Golf",
    subtitle: 'Golf Learning & Premium Training Platform',
    description:
      "Manny's Golf is a premium online golf-learning platform built around structured golf-swing education and premium training content. The platform provides instructional content, course previews and paid training programs. Its methodology focuses on breaking down the golf swing into structured positions, drills and repeatable techniques.",
    image:
      'https://images.pexels.com/photos/1325680/pexels-photo-1325680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'REST APIs'],
    highlights: [
      'Developed responsive frontend interfaces and reusable UI components',
      'Implemented course discovery, detail pages and user authentication flows',
      'Integrated dynamic API-driven content sections and video previews',
      'Worked on SSR optimization and frontend performance for better SEO',
    ],
    liveUrl: 'https://mannysgolf.com/',
    repoUrl: '#',
    type: 'professional',
    domain: 'EdTech / Content',
    isPrivateRepo: true,
  },
  {
    id: 103,
    title: 'Maiden Beauty',
    subtitle: 'Premium D2C E-commerce Platform',
    description:
      'Maiden Beauty is a premium Indian lingerie and intimate-wear e-commerce platform. The website provides product discovery, customer accounts, wishlist, cart and other online shopping functionality. The live website credits Mindrops for design and development. Supports both email/password and phone OTP sign-in.',
    image:
      'https://images.pexels.com/photos/5632391/pexels-photo-5632391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'JWT', 'OTP Auth'],
    highlights: [
      'Built product catalogue, categories, detail pages and shopping cart',
      'Implemented phone OTP authentication and customer account management',
      'Developed wishlist functionality and order-related workflows',
      'Optimized SSR pages for performance and SEO with Next.js',
    ],
    liveUrl: 'https://maidenbeauty.com/',
    repoUrl: '#',
    type: 'professional',
    domain: 'D2C E-commerce',
    isPrivateRepo: true,
  },
  {
    id: 104,
    title: 'OfferTub Real Estate',
    subtitle: 'Real Estate Marketplace',
    description:
      'OfferTub is a real-estate marketplace platform focused on providing users with a digital experience for discovering and interacting with property listings. Built with a modern Next.js frontend and robust API-driven backend.',
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'JWT'],
    highlights: [
      'Developed property listing pages and dynamic property detail views',
      'Integrated frontend with REST APIs for real-time property data',
      'Implemented user authentication and property-related workflows',
      'Optimized responsive layouts and frontend rendering performance',
    ],
    liveUrl: 'https://offertub-realestate.mindrops.com/',
    repoUrl: '#',
    type: 'professional',
    domain: 'Real Estate',
    isPrivateRepo: true,
  },
  {
    id: 105,
    title: 'CRM Platform',
    subtitle: 'Customer Relationship & Business Automation',
    description:
      'A business CRM platform designed to centralize customer and business operations while reducing repetitive manual processes through workflow automation. Features role-based access control, user management, dashboard and business process automation.',
    image:
      'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'JWT', 'RBAC'],
    highlights: [
      'Developed CRM modules with role-based access control (RBAC)',
      'Built backend REST APIs with Node.js and business workflow automation',
      'Designed PostgreSQL database schemas using Prisma ORM',
      'Created dashboard interfaces and data-management screens',
    ],
    liveUrl: '#',
    repoUrl: '#',
    type: 'professional',
    domain: 'CRM / SaaS',
    isPrivateRepo: true,
  },
  {
    id: 106,
    title: 'B2B Policy Management',
    subtitle: 'Policy & Commission Management System',
    description:
      'A B2B policy management platform designed to streamline policy-related operations, commission workflows and business processes. Features OTP-based authentication, automated commission calculations and compliance-oriented business workflows.',
    image:
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'JWT', 'OTP Auth'],
    highlights: [
      'Implemented OTP-based authentication and secure API communication',
      'Developed policy management and automated commission calculation workflows',
      'Built RBAC-based user and permission management',
      'Designed responsive business dashboards and data interfaces',
    ],
    liveUrl: '#',
    repoUrl: '#',
    type: 'professional',
    domain: 'B2B SaaS',
    isPrivateRepo: true,
  },

  // ─── Personal / Open Source Projects ─────────────────────────────────────
  {
    id: 3,
    title: 'MemeHub',
    subtitle: 'AI-Powered Meme Sharing Platform',
    description:
      'Developed core features for an AI-powered meme-sharing platform using React, TypeScript, and Tailwind CSS. Integrated Google Gemini API for automatic meme caption and tag generation. Implemented social community features (profiles, voting, commenting, follow system), secure image uploads with Cloudinary, and JWT-based authentication. Managed user data, meme content, and real-time analytics with MongoDB and Node.js/Express.',
    image:
      'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['MongoDB', 'TypeScript', 'React', 'Node.js', 'Express', 'Google Gemini API', 'Cloudinary', 'JWT', 'Tailwind CSS'],
    highlights: [
      'Integrated Google Gemini API for AI-powered caption and tag generation',
      'Built social features: profiles, voting, commenting, follow system',
      'Implemented secure image uploads with Cloudinary',
      'JWT authentication with MongoDB backend on Node.js/Express',
    ],
    liveUrl: 'https://memehubcore.netlify.app/',
    repoUrl: 'https://github.com/vdabral/MEMEHUB',
    type: 'personal',
    domain: 'Social / AI',
    isPrivateRepo: false,
  },
  {
    id: 4,
    title: 'BudgetIQ',
    subtitle: 'Interactive Financial Education Platform',
    description:
      'Contributed to an interactive financial education platform with React and Node.js/Express. Implemented gamified learning (story modules, badges, progress tracking), personal finance tools (expense tracker, budget manager, savings goal tracker), and multi-language support. Managed MongoDB schemas and secure JWT authentication with RESTful APIs.',
    image:
      'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'MongoDB', 'Node.js', 'Express', 'JWT Auth', 'RESTful API', 'Gamification', 'Data Visualization', 'Multi-language'],
    highlights: [
      'Built gamified learning modules with badges and progress tracking',
      'Implemented expense tracker, budget manager and savings goal tools',
      'Added multi-language support for broader accessibility',
      'Managed MongoDB schemas and RESTful API with JWT auth',
    ],
    liveUrl: 'https://mellow-froyo-8722fe.netlify.app/',
    repoUrl: 'https://github.com/Harsh252-dot/B44_WEB_080',
    type: 'personal',
    domain: 'FinTech / EdTech',
    isPrivateRepo: false,
  },
  {
    id: 7,
    title: 'Finlytics',
    subtitle: 'Investment Analytics Platform',
    description:
      'Developed a responsive frontend for an investment analytics platform using React, TypeScript, and Vite. Implemented real-time portfolio tracking and analytics for stocks, ETFs, and crypto. Integrated live market data feeds, user authentication, and secure data handling. Designed a modern UI for usability across devices.',
    image:
      'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Vite', 'Real-time Analytics', 'Authentication', 'Responsive Design'],
    highlights: [
      'Built real-time portfolio tracking for stocks, ETFs and crypto',
      'Integrated live market data feeds with responsive data visualization',
      'Implemented user authentication and secure data handling',
      'Designed modern responsive UI with TypeScript and Vite',
    ],
    liveUrl: 'https://finlyticspro.netlify.app/',
    repoUrl: 'https://github.com/vdabral/finlytics',
    type: 'personal',
    domain: 'FinTech',
    isPrivateRepo: false,
  },
  {
    id: 1,
    title: 'StockPilot',
    subtitle: 'Cryptocurrency Analysis Platform',
    description:
      'Contributed to StockPilot, a cryptocurrency analysis platform with real-time data, interactive charts, and advanced search. Implemented authentication, watchlists, protected routes, and integrated CoinGecko API. Focused on responsive, mobile-first design, dark/light themes, error handling, and performance optimization.',
    image:
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'React', 'Node.js', 'Express.js', 'Firebase', 'CoinGecko API', 'Authentication', 'Charts', 'Performance'],
    highlights: [
      'Built real-time crypto tracking with interactive charts',
      'Integrated CoinGecko API with watchlist and authentication features',
      'Implemented dark/light mode and mobile-first responsive design',
      'Optimized performance and error handling throughout',
    ],
    liveUrl: 'https://stockpilotcrypto.netlify.app/',
    repoUrl: 'https://github.com/vdabral/StockPilot/tree/main',
    type: 'personal',
    domain: 'FinTech',
    isPrivateRepo: false,
  },
  {
    id: 5,
    title: 'Travel Hogs',
    subtitle: 'Smart Travel Itinerary Builder',
    description:
      'Designed and implemented a drag-and-drop itinerary builder with smooth animations for seamless travel planning. Integrated Google Maps for route visualization, real-time collaboration for sharing/editing, and a personalized dashboard for travel history and recommendations. Used MongoDB for data storage.',
    image:
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'React', 'Redux', 'MongoDB', 'RESTful APIs', 'Google Maps API', 'Collaboration', 'Animations'],
    highlights: [
      'Built drag-and-drop itinerary builder with smooth animations',
      'Integrated Google Maps for route visualization',
      'Implemented real-time collaboration for sharing and editing trips',
      'Designed personalized dashboard with travel history and recommendations',
    ],
    liveUrl: 'https://travel-hogs.netlify.app/',
    repoUrl: 'https://github.com/VinitaVrn/Travel_Hogs',
    type: 'personal',
    domain: 'Travel',
    isPrivateRepo: false,
  },
  {
    id: 2,
    title: 'SuperMachi',
    subtitle: 'Real-time Community Collaboration Platform',
    description:
      'Developed Super Machi, a real-time community collaboration platform using React.js, Firebase, and Tailwind CSS. Integrated real-time posts, event scheduling, polls, user authentication, media uploads, content moderation, admin panel, dark mode, and push notifications. Enhanced community interaction with AI-driven recommendations.',
    image:
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'React', 'Node.js', 'Firebase', 'RESTful APIs', 'Tailwind CSS', 'Real-time', 'Admin Panel', 'AI'],
    highlights: [
      'Built real-time posts, event scheduling and community polls',
      'Integrated media uploads, content moderation and admin panel',
      'Implemented push notifications and AI-driven recommendations',
      'Added dark mode and responsive design throughout',
    ],
    liveUrl: 'https://supermachi.netlify.app/',
    repoUrl: 'https://github.com/vdabral/SuperMachi',
    type: 'personal',
    domain: 'Community / Social',
    isPrivateRepo: false,
  },
  {
    id: 6,
    title: 'Portfolio Website',
    subtitle: 'Personal Developer Portfolio',
    description:
      'A modern, responsive portfolio website built with React, Vite and Tailwind CSS, featuring smooth animations, dark mode toggle, and optimized performance. Showcases professional production apps and personal projects with an elegant, premium design.',
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Vite', 'Animations'],
    highlights: [
      'Built with React, Vite, TypeScript and Tailwind CSS',
      'Framer Motion animations throughout for smooth UX',
      'Dark/light mode, lazy loading and performance optimization',
      'Responsive and SEO-optimized with structured metadata',
    ],
    liveUrl: 'https://vaibhav-portfolio.vercel.app',
    repoUrl: 'https://github.com/vaibhavdabral/portfolio',
    type: 'personal',
    domain: 'Portfolio',
    isPrivateRepo: false,
  },
];