
// ============================================
// TRANSLATIONS DATA
// ============================================
const translations = {
    es: {
        download: "Descargar PDF",
        theme: "Cambiar tema",
        language: "Idioma",
        available: "Disponible para nuevos proyectos",
        hero_subtitle: "Estratega Digital & Arquitecto de Soluciones Empresariales, profesional multidisciplinario con experiencia en creación, escalamiento y optimización de empresas mediante branding, marketing digital, desarrollo tecnológico, automatización, data e inteligencia artificial..",
        stat_years: "Anos de Experiencia",
        stat_projects: "Proyectos Completados",
        stat_areas: "Areas de Especializacion",
        stat_sales: "Incremento en Ventas",
        btn_services: "Ver Servicios",
        btn_contact: "Contactar",
        services_title: "Servicios Integrales para Empresas",
        services_desc: "Soluciones completas que transforman tu negocio desde la estrategia hasta la implementacion tecnologica.",
        exp_tag: "Trayectoria",
        exp_title: "Experiencia Profesional",
        exp_desc: "Una decada transformando negocios y liderando proyectos innovadores.",
        skills_tag: "Competencias",
        skills_title: "Habilidades Tecnicas",
        skills_desc: "Experto en multiples areas con formacion continua en tecnologias emergentes.",
        edu_tag: "Formacion",
        edu_title: "Educacion y Certificaciones",
        languages_title: "Idiomas",
        lang_native: "Nativo",
        lang_intermediate: "Intermedio",
        lang_basic: "Basico",
        transit_toggle: "Ver experiencia en Tramites de Transito",
        transit_toggle_hide: "Ocultar experiencia en Tramites",
        transit_title: "Servicios de Transito",
        transit_desc: "Experiencia especializada en gestion de tramites vehiculares y asesoria legal.",
        contact_tag: "Contacto",
        contact_title: "Conectemos",
        contact_desc: "Listo para transformar tu negocio. Contactame para discutir como puedo aportar valor a tu empresa.",
        phone_label: "Telefono",
        email_label: "Email",
        website_label: "Website",
        location_label: "Ubicacion",
        location_value: "Cali, Colombia",
        references_title: "Referencias Profesionales",
        footer_note: "CV optimizado para reclutadores internacionales. disenado para alto impacto visual.",
        // Levels
        level_advanced: "Avanzado",
        level_intermediate: "Intermedio",
        level_basic: "Basico",
        level_learning: "En Formacion"
    },
    en: {
        download: "Download PDF",
        theme: "Change theme",
        language: "Language",
        available: "Available for new projects",
        hero_subtitle: "Full Stack Developer, Digital Marketing Specialist and Business Strategist with over 10 years of experience transforming companies through technology and innovation.",
        stat_years: "Years of Experience",
        stat_projects: "Projects Completed",
        stat_areas: "Areas of Expertise",
        stat_sales: "Sales Increase",
        btn_services: "View Services",
        btn_contact: "Contact Me",
        services_title: "Comprehensive Business Services",
        services_desc: "Complete solutions that transform your business from strategy to technological implementation.",
        exp_tag: "Career",
        exp_title: "Professional Experience",
        exp_desc: "A decade transforming businesses and leading innovative projects.",
        skills_tag: "Competencies",
        skills_title: "Technical Skills",
        skills_desc: "Expert in multiple areas with continuous training in emerging technologies.",
        edu_tag: "Education",
        edu_title: "Education and Certifications",
        languages_title: "Languages",
        lang_native: "Native",
        lang_intermediate: "Intermediate",
        lang_basic: "Basic",
        transit_toggle: "View Transit Services Experience",
        transit_toggle_hide: "Hide Transit Experience",
        transit_title: "Transit Services",
        transit_desc: "Specialized experience in vehicle procedures management and legal advisory.",
        contact_tag: "Contact",
        contact_title: "Let's Connect",
        contact_desc: "Ready to transform your business. Contact me to discuss how I can add value to your company.",
        phone_label: "Phone",
        email_label: "Email",
        website_label: "Website",
        location_label: "Location",
        location_value: "Cali, Colombia",
        references_title: "Professional References",
        footer_note: "CV optimized for international recruiters. Designed for high visual impact.",
        // Levels
        level_advanced: "Advanced",
        level_intermediate: "Intermediate",
        level_basic: "Basic",
        level_learning: "In Training"
    }
};

// ============================================
// DATA STRUCTURES
// ============================================
const servicesData = {
    es: [
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>`,
            title: "Branding y Diseno de Marca",
            desc: "Creacion de identidad visual completa: logotipos, paletas de color, tipografias y guias de marca que comunican la esencia de tu empresa.",
            tags: ["Logo Design", "Brand Identity", "Visual Systems"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
            title: "Estudios de Mercado & Modelo de Negocio",
            desc: "Analisis profundo del mercado y de su cliente ideal (Bayer Persona), competencia y tendencias para informar decisiones estrategicas e identificar oportunidades de crecimiento.",
            tags: ["Market Research", "Competitor Analysis", "Trends"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
            title: "Redes Sociales y Plataformas",
            desc: "Creacion, conexion y optimizacion de todas tus plataformas digitales para maximizar el alcance y engagement con tu audiencia.",
            tags: ["Social Media", "Community", "Analytics"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
            title: "Contenido Digital Multi-formato",
            desc: "Produccion de contenido en todos los formatos: imagenes, videos, podcasts, reels, stories. Adaptado para cada plataforma y audiencia.",
            tags: ["Video Production", "Podcast", "Reels"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
            title: "Campanas de Marketing Digital",
            desc: "Estrategias organicas y de pago en Meta Ads, Google Ads y TikTok. Optimizacion continua para maximizar ROI y conversiones.",
            tags: ["Meta Ads", "Google Ads", "TikTok Ads"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
            title: "Desarrollo de Software",
            desc: "Landing pages, sitios web, aplicaciones de escritorio y moviles. Stack moderno: React, Node.js, y tecnologias blockchain.",
            tags: ["React", "Node.js", "Blockchain"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
            title: "Integracion de Inteligencia Artificial",
            desc: "Implementacion de soluciones IA para automatizacion, analisis predictivo y mejora de procesos empresariales.",
            tags: ["AI Integration", "Automation", "ML"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
            title: "Bases de Datos y Finanzas",
            desc: "Estructuracion de datos, analisis financiero y creacion de dashboards para toma de decisiones basada en datos.",
            tags: ["Data Analysis", "Excel", "Dashboards"]
        }
    ],
    en: [
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>`,
            title: "Branding and Brand Design",
            desc: "Creation of complete visual identity: logos, color palettes, typography and brand guidelines that communicate your company's essence.",
            tags: ["Logo Design", "Brand Identity", "Visual Systems"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
            title: "Market Research",
            desc: "In-depth analysis of the market, competition and trends to inform strategic decisions and identify growth opportunities.",
            tags: ["Market Research", "Competitor Analysis", "Trends"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
            title: "Social Media and Platforms",
            desc: "Creation, connection and optimization of all your digital platforms to maximize reach and engagement with your audience.",
            tags: ["Social Media", "Community", "Analytics"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
            title: "Multi-format Digital Content",
            desc: "Content production in all formats: images, videos, podcasts, reels, stories. Adapted for each platform and audience.",
            tags: ["Video Production", "Podcast", "Reels"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
            title: "Digital Marketing Campaigns",
            desc: "Organic and paid strategies on Meta Ads, Google Ads and TikTok. Continuous optimization to maximize ROI and conversions.",
            tags: ["Meta Ads", "Google Ads", "TikTok Ads"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
            title: "Software Development",
            desc: "Landing pages, websites, desktop and mobile applications. Modern stack: React, Node.js, and blockchain technologies.",
            tags: ["React", "Node.js", "Blockchain"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
            title: "AI Integration",
            desc: "Implementation of AI solutions for automation, predictive analysis and business process improvement.",
            tags: ["AI Integration", "Automation", "ML"]
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
            title: "Databases and Finance",
            desc: "Data structuring, financial analysis and dashboard creation for data-driven decision making.",
            tags: ["Data Analysis", "Excel", "Dashboards"]
        }
    ]
};

const experienceData = {
    es: [
        {
            date: "2024 - Presente",
            title: "CEO y Fundador",
            company: "Colombit - Servicios Digitales Integrales",
            desc: "Fundi y dirijo una empresa de servicios digitales que ofrece desarrollo web, marketing digital y consultoria tecnologica. He ayudado a multiples negocios a cuadruplicar sus ventas y expandir su presencia digital."
        },
        {
            date: "2024 - 2025",
            title: "Administrador y Data Analytics",
            company: "Asesoria de Transito Julian Perez",
            desc: "Cree sistema con base de datos, perfiles de clientes, cartera y cobro. Desarrolle campanas de marketing y redes sociales. Duplicamos las ventas en un ano implementando estrategias digitales y B2B."
        },
        {
            date: "2020 - 2024",
            title: "Administrador y Desarrollador Marketing",
            company: "LAAOS Laboratorio",
            desc: "Integre bases de datos, marketing digital y organice todas las redes y pagina web. Cuadruplicamos las ventas en 3 anos y quintuplicamos ventas por internet. Implemente estrategia B2B y B2C con resultados excepcionales."
        },
        {
            date: "2015 - 2020",
            title: "CEO y Fundador",
            company: "Mi Movil Multiservicios",
            desc: "Fundi empresa de telecomunicaciones con plataforma de recargas electronicas, planes de llamadas nacional e internacional, pines y pagos. Gestion completa de operaciones y desarrollo de negocio."
        },
        {
            date: "2013 - 2016",
            title: "Administrador y Gestion de Cartera",
            company: "Comunicaciones JP",
            desc: "Cree sistema de base de datos, perfiles de clientes, gestion de cartera y cobro. Desarrolle campanas de marketing y redes sociales. Automatizacion de procesos de consultas y atencion al cliente."
        },
        {
            date: "2010 - 2013",
            title: "Vendedor y Freelance",
            company: "Comercializadora Latin Street",
            desc: "Ventas de productos tecnologicos (celulares, accesorios, portatiles, PC) a empresas, negocios locales y personas naturales entre Colombia y Ecuador. Desarrollo de red comercial binacional."
        }
    ],
    en: [
        {
            date: "2020 - Present",
            title: "CEO and Founder",
            company: "Colombit - Comprehensive Digital Services",
            desc: "I founded and lead a digital services company offering web development, digital marketing and technology consulting. I have helped multiple businesses quadruple their sales and expand their digital presence."
        },
        {
            date: "2020 - 2024",
            title: "Administrator and Marketing Developer",
            company: "LAAOS Laboratory",
            desc: "I integrated databases, digital marketing and organized all social media and website. We quadrupled sales in 3 years and increased internet sales fivefold. Implemented B2B and B2C strategy with exceptional results."
        },
        {
            date: "2024 - 2025",
            title: "Administrator and Data Analytics",
            company: "Julian Perez Transit Advisory",
            desc: "I created a system with database, client profiles, portfolio and collections. Developed marketing campaigns and social media. We doubled sales in one year by implementing digital and B2B strategies."
        },
        {
            date: "2015 - 2020",
            title: "CEO and Founder",
            company: "Mi Movil Multiservicios",
            desc: "I founded a telecommunications company with electronic recharge platform, national and international call plans, pins and payments. Complete operations management and business development."
        },
        {
            date: "2013 - 2016",
            title: "Administrator and Portfolio Management",
            company: "Comunicaciones JP",
            desc: "I created a database system, client profiles, portfolio management and collections. Developed marketing campaigns and social media. Automation of consultation and customer service processes."
        },
        {
            date: "2010 - 2013",
            title: "Sales and Freelance",
            company: "Latin Street Marketing",
            desc: "Sales of technology products (cell phones, accessories, laptops, PC) to companies, local businesses and individuals between Colombia and Ecuador. Development of binational commercial network."
        }
    ]
};

const skillsData = {
    es: [
        {
            category: "Desarrollo y Programacion",
            skills: [
                { name: "HTML / CSS / JavaScript", level: "Avanzado", width: 80 },
                { name: "React / Node.js", level: "Intermedio", width: 40 },
                { name: "Blockchain / Solidity / Rust", level: "En Formacion", width: 20 }
            ]
        },
        {
            category: "Marketing Digital",
            skills: [
                { name: "Meta Ads / Google Ads", level: "Avanzado", width: 80 },
                { name: "Creacion de Contenido", level: "Intermedio", width: 60 },
                { name: "SEO / Analitica Web", level: "Intermedio", width: 50 }
            ]
        },
        {
            category: "Negocios y Finanzas",
            skills: [
                { name: "Excel Avanzado / Macros", level: "Intermedio-Avanzado", width: 75 },
                { name: "Trading / Crypto / Forex", level: "Avanzado", width: 90 },
                { name: "Gestion de Cartera", level: "Intermedio", width: 60 }
            ]
        },
        {
            category: "Diseno y Produccion",
            skills: [
                { name: "Diseno Grafico / Branding", level: "Avanzado", width: 80 },
                { name: "Edicion de Video", level: "Intermedio", width: 60 },
                { name: "Produccion Musical (FL, Protools)", level: "Basico", width: 40 }
            ]
        }
    ],
    en: [
        {
            category: "Development and Programming",
            skills: [
                { name: "HTML / CSS / JavaScript", level: "Advanced", width: 90 },
                { name: "React / Node.js", level: "Intermediate-Advanced", width: 75 },
                { name: "Blockchain / Solidity / Rust", level: "In Training", width: 45 }
            ]
        },
        {
            category: "Digital Marketing",
            skills: [
                { name: "Meta Ads / Google Ads", level: "Advanced", width: 85 },
                { name: "Content Creation", level: "Advanced", width: 90 },
                { name: "SEO / Web Analytics", level: "Intermediate", width: 70 }
            ]
        },
        {
            category: "Business and Finance",
            skills: [
                { name: "Advanced Excel / Macros", level: "Advanced", width: 95 },
                { name: "Trading / Crypto / Forex", level: "Intermediate", width: 65 },
                { name: "Portfolio Management", level: "Advanced", width: 85 }
            ]
        },
        {
            category: "Design and Production",
            skills: [
                { name: "Graphic Design / Branding", level: "Advanced", width: 80 },
                { name: "Video Editing", level: "Intermediate", width: 70 },
                { name: "Music Production (FL, Protools)", level: "Basic", width: 40 }
            ]
        }
    ]
};

const educationData = {
    es: [
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
            title: "Desarrollo Front-End",
            institution: "Formacion Autodidacta Continua",
            desc: "HTML, CSS, JavaScript, Node.js, React. En constante actualizacion con tecnologias modernas."
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line></svg>`,
            title: "Blockchain y Smart Contracts",
            institution: "Solidity, Rust, Web3",
            desc: "Desarrollo de contratos inteligentes, NFTs, DeFi y analisis de transacciones blockchain."
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`,
            title: "Marketing Digital Avanzado",
            institution: "Meta Ads, Google Ads, TikTok",
            desc: "Campanas Advantage+, estrategias organicas y de pago. Analisis de metricas y optimizacion."
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
            title: "Bachiller Tecnico",
            institution: "Colegio Ciudad Cordoba",
            desc: "Graduado con enfasis en areas tecnicas. Base solida en tecnologia y procesos."
        }
    ],
    en: [
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
            title: "Front-End Development",
            institution: "Continuous Self-Taught Training",
            desc: "HTML, CSS, JavaScript, Node.js, React. Constantly updating with modern technologies."
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line></svg>`,
            title: "Blockchain and Smart Contracts",
            institution: "Solidity, Rust, Web3",
            desc: "Smart contract development, NFTs, DeFi and blockchain transaction analysis."
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`,
            title: "Advanced Digital Marketing",
            institution: "Meta Ads, Google Ads, TikTok",
            desc: "Advantage+ campaigns, organic and paid strategies. Metric analysis and optimization."
        },
        {
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
            title: "Technical Baccalaureate",
            institution: "Ciudad Cordoba School",
            desc: "Graduated with emphasis on technical areas. Solid foundation in technology and processes."
        }
    ]
};

const transitData = {
    es: [
        { title: "Licencias de Conduccion", desc: "Gestion completa de licencias iniciales y renovaciones. Verificacion en RUNT, remision medica, inscripcion en escuelas y seguimiento hasta la entrega del documento." },
        { title: "Soluciones Juridicas a Multas", desc: "Analisis de multas, derecho de peticion para multas antiguas, gestion de descuentos por cursos, comparendos en Cali con descuentos del 40-50%. Generacion de paz y salvo." },
        { title: "Salida de Patios", desc: "Gestion de liberacion vehicular por accidente o comparendo. Tramite de documentos, revision tecnica, certificados de tradicion y verificacion de querellas." },
        { title: "Traspasos Vehiculares", desc: "Verificacion de derechos, avaluos, impuestos, SOAT y tecnomecanica. Radicacion ante secretaria, traspasos a persona indeterminada, levantamiento de prenda y certificados de chatarrizacion." },
        { title: "GPS, Tags y Servicios Adicionales", desc: "Implementacion de servicios complementarios con estrategias de venta, marketing y rentabilidad. Expansion de portafolio de servicios para empresas." },
        { title: "Consultoria Empresarial", desc: "Asesoria para empresas que desean integrar servicios de transito. Desarrollo de estrategias comerciales y operativas para maximizar rentabilidad." }
    ],
    en: [
        { title: "Driver's Licenses", desc: "Complete management of initial licenses and renewals. RUNT verification, medical referral, school registration and follow-up until document delivery." },
        { title: "Legal Solutions for Fines", desc: "Fine analysis, right of petition for old fines, management of course discounts, fines in Cali with 40-50% discounts. Generation of clearance certificates." },
        { title: "Impound Lot Release", desc: "Vehicle release management due to accident or fine. Document processing, technical inspection, tradition certificates and verification of complaints." },
        { title: "Vehicle Transfers", desc: "Verification of rights, appraisals, taxes, SOAT and technical inspection. Filing with the department, transfers to undetermined person, lien release and scrapping certificates." },
        { title: "GPS, Tags and Additional Services", desc: "Implementation of complementary services with sales, marketing and profitability strategies. Expansion of service portfolio for companies." },
        { title: "Business Consulting", desc: "Advice for companies that want to integrate transit services. Development of commercial and operational strategies to maximize profitability." }
    ]
};

const referencesData = {
    es: [
        { name: "Doris Ortiz", role: "Gerente - Asesoria de Tramites Tránsito El Jardín", phone: "+57 3206095912" },
        { name: "Jair Nieto", role: "Gerente - Libreria El Cura", phone: "+57 (602) 370 6927" }
    ],
    en: [
        { name: "Doris Ortiz", role: "Gerente - Asesoria de Tramites Tránsito El Jardín", phone: "+57 3206095912" },
        { name: "Jair Nieto", role: "Manager - El Cura Bookstore", phone: "+57 (602) 370 6927" }
    ]
};

// ============================================
// STATE INITIALIZATION
// ============================================
let currentLang = localStorage.getItem('cv-lang') || 'es';
let currentTheme = localStorage.getItem('cv-theme') || 'dark';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================
// DOM ELEMENTS
// ============================================
const htmlElement = document.documentElement;
const downloadBtn = document.getElementById('downloadBtn');
const themeBtn = document.getElementById('themeBtn');
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const transitToggle = document.getElementById('transitToggle');
const transitSection = document.getElementById('transitSection');
const navDots = document.querySelectorAll('.nav-dot');
const sections = document.querySelectorAll('section[id], header[id]');

// ============================================
// THEME FUNCTIONS
// ============================================
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('cv-theme', theme);
    htmlElement.setAttribute('data-theme', theme);
    
    const iconDark = themeBtn.querySelector('.icon-dark');
    const iconLight = themeBtn.querySelector('.icon-light');
    
    if (theme === 'light') {
        iconDark.style.display = 'none';
        iconLight.style.display = 'block';
    } else {
        iconDark.style.display = 'block';
        iconLight.style.display = 'none';
    }
}

themeBtn.addEventListener('click', () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ============================================
// LANGUAGE FUNCTIONS
// ============================================
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cv-lang', lang);
    htmlElement.setAttribute('lang', lang);
    
    // Update all text elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update language dropdown
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Re-render dynamic content
    renderServices();
    renderExperience();
    renderSkills();
    renderEducation();
    renderTransit();
    renderReferences();
}

langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
    langBtn.setAttribute('aria-expanded', langDropdown.classList.contains('open'));
});

document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
        e.stopPropagation();
        setLanguage(opt.dataset.lang);
        langDropdown.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
    langBtn.setAttribute('aria-expanded', 'false');
});

// ============================================
// DOWNLOAD PDF FUNCTION
// ============================================
downloadBtn.addEventListener('click', () => {
    // Add print-specific styles temporarily
    const style = document.createElement('style');
    style.id = 'print-styles';
    style.textContent = `
        @media print {
            body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
    `;
    document.head.appendChild(style);
    
    // Trigger print dialog
    window.print();
    
    // Remove temporary styles after a delay
    setTimeout(() => {
        const printStyles = document.getElementById('print-styles');
        if (printStyles) printStyles.remove();
    }, 1000);
});

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderServices() {
    const grid = document.getElementById('servicesGrid');
    const data = servicesData[currentLang];
    
    grid.innerHTML = data.map((service, i) => `
        <article class="service-card" data-delay="${i * 100}">
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-desc">${service.desc}</p>
            <div class="service-tags">
                ${service.tags.map(tag => `<span class="service-tag">${tag}</span>`).join('')}
            </div>
        </article>
    `).join('');
    
    // Re-apply scroll reveal
    observeElements('.service-card');
}

function renderExperience() {
    const timeline = document.getElementById('timeline');
    const data = experienceData[currentLang];
    
    timeline.innerHTML = data.map(exp => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="timeline-date">${exp.date}</span>
                <h3 class="timeline-title">${exp.title}</h3>
                <p class="timeline-company">${exp.company}</p>
                <p class="timeline-desc">${exp.desc}</p>
            </div>
        </div>
    `).join('');
    
    observeElements('.timeline-item');
}

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    const data = skillsData[currentLang];
    
    grid.innerHTML = data.map(category => `
        <div class="skill-category">
            <h3 class="skill-category-title">${category.category}</h3>
            <div class="skill-bars">
                ${category.skills.map(skill => `
                    <div class="skill-bar">
                        <div class="skill-bar-header">
                            <span class="skill-bar-name">${skill.name}</span>
                            <span class="skill-bar-level">${skill.level}</span>
                        </div>
                        <div class="skill-bar-track">
                            <div class="skill-bar-fill" style="width: ${skill.width}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    observeElements('.skill-category');
    observeElements('.skill-bar');
}

function renderEducation() {
    const grid = document.getElementById('educationGrid');
    const data = educationData[currentLang];
    
    grid.innerHTML = data.map(edu => `
        <article class="edu-card">
            <div class="edu-icon">${edu.icon}</div>
            <div class="edu-content">
                <h3 class="edu-title">${edu.title}</h3>
                <p class="edu-institution">${edu.institution}</p>
                <p class="edu-desc">${edu.desc}</p>
            </div>
        </article>
    `).join('');
    
    observeElements('.edu-card');
}

function renderTransit() {
    const grid = document.getElementById('transitGrid');
    const data = transitData[currentLang];
    
    grid.innerHTML = data.map(item => `
        <article class="transit-card">
            <h4 class="transit-card-title">${item.title}</h4>
            <p class="transit-card-desc">${item.desc}</p>
        </article>
    `).join('');
}

function renderReferences() {
    const grid = document.getElementById('referencesGrid');
    const data = referencesData[currentLang];
    
    grid.innerHTML = data.map(ref => `
        <div class="reference-card">
            <p class="reference-name">${ref.name}</p>
            <p class="reference-role">${ref.role}</p>
            <p class="reference-phone">${ref.phone}</p>
        </div>
    `).join('');
}

// ============================================
// SCROLL REVEAL OBSERVER
// ============================================
function observeElements(selector) {
    if (prefersReducedMotion) {
        document.querySelectorAll(selector).forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay || 0);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
}

// ============================================
// NAVIGATION OBSERVER
// ============================================
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            navDots.forEach(dot => {
                dot.classList.toggle('active', dot.dataset.section === sectionId);
            });
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => sectionObserver.observe(section));

navDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const section = document.getElementById(dot.dataset.section);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
});

// ============================================
// TRANSIT TOGGLE
// ============================================
transitToggle.addEventListener('click', () => {
    const isOpen = transitSection.classList.toggle('open');
    transitToggle.classList.toggle('open', isOpen);
    transitToggle.setAttribute('aria-expanded', isOpen);
    transitToggle.querySelector('span').textContent = isOpen 
        ? translations[currentLang].transit_toggle_hide 
        : translations[currentLang].transit_toggle;
    
    if (isOpen && !prefersReducedMotion) {
        setTimeout(() => {
            document.querySelectorAll('.transit-card').forEach((card, index) => {
                setTimeout(() => card.classList.add('visible'), index * 100);
            });
        }, 300);
    }
});

// ============================================
// PARALLAX EFFECT
// ============================================
if (!prefersReducedMotion) {
    let ticking = false;
    
    document.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const glow1 = document.querySelector('.bg-glow-1');
                const glow2 = document.querySelector('.bg-glow-2');
                
                if (glow1) glow1.style.transform = `translateY(${scrollY * 0.1}px)`;
                if (glow2) glow2.style.transform = `translateY(${scrollY * -0.05}px)`;
                
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') document.body.classList.add('keyboard-nav');
});

document.addEventListener('mousedown', () => document.body.classList.remove('keyboard-nav'));

// ============================================
// INITIALIZATION
// ============================================
function init() {
    // Apply saved preferences
    setTheme(currentTheme);
    setLanguage(currentLang);
    
    // Console message for recruiters
    console.log('%c HANS STEVEN ARANGO ', 'background: #00d4aa; color: #0a0a0f; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Full Stack Developer & Digital Marketing Specialist ', 'color: #00d4aa; font-size: 14px;');
    console.log('%c +57 312 680 0807 | colombitcoin.co ', 'color: #6b6b7a; font-size: 12px;');
}

// Run initialization
init();