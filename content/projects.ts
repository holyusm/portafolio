import type { OtherProject, Project } from "./types";

export const projects: Project[] = [
  {
    slug: "holy-fitness",
    name: "Holy Fitness",
    tagline: {
      es: "Un SaaS para gimnasios que funciona desde el celular",
      en: "A gym SaaS that runs from a phone",
    },
    role: {
      es: "Fundador y desarrollador único",
      en: "Founder and sole developer",
    },
    period: { es: "abr 2026 – hoy", en: "Apr 2026 – today" },
    status: "development",
    stack: [
      "Next.js 16",
      "React 19",
      "Expo",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Turborepo",
      "Zod",
      "Docker",
    ],
    problem: {
      es: "Los gimnasios pequeños de Latinoamérica llevan accesos, asistencia, pagos y clases entre cuadernos y planillas. Holy Fitness junta todo en un panel web y una app móvil para el personal y los socios, con cada gimnasio aislado como inquilino propio.",
      en: "Small gyms in Latin America juggle check-ins, attendance, payments and classes across notebooks and spreadsheets. Holy Fitness brings it all into a web dashboard and a mobile app for staff and members, with each gym isolated as its own tenant.",
    },
    highlights: {
      es: [
        "Monorepo con Turborepo y paquetes compartidos de tipos (Zod), base de datos y configuración entre la API, la web y la app móvil.",
        "Acceso por QR con protección anti-replay en Redis y límite de peticiones.",
        "Autenticación con JWT y refresh tokens rotativos.",
        "Panel de Super Admin para administrar los gimnasios (multi-tenant).",
        "Holy Score: puntaje de actividad con tablas de posiciones entre socios.",
        "CI en GitHub, pruebas con Jest en autenticación y acceso, y commits validados con commitlint y Husky.",
      ],
      en: [
        "Turborepo monorepo with shared packages for types (Zod), database and config across the API, web app and mobile app.",
        "QR check-in with replay protection in Redis and rate limiting.",
        "JWT authentication with rotating refresh tokens.",
        "Super Admin panel to manage gyms (multi-tenant).",
        "Holy Score: an activity score with leaderboards among members.",
        "GitHub CI, Jest tests on authentication and access, and commits validated with commitlint and Husky.",
      ],
    },
    isPrivate: true,
  },
  {
    slug: "transportes-tajtaj",
    name: "Transportes TAJTAJ",
    tagline: {
      es: "Plataforma de gestión para una empresa de transporte",
      en: "A management platform for a trucking company",
    },
    role: {
      es: "Desarrollador full-stack freelance",
      en: "Freelance full-stack developer",
    },
    period: { es: "dic 2025 – abr 2026", en: "Dec 2025 – Apr 2026" },
    status: "live",
    stack: [
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Next.js 16",
      "NextAuth",
      "Google Maps API",
      "Playwright",
      "Power BI",
    ],
    problem: {
      es: "Transportes TAJTAJ es una empresa de transporte chilena que necesitaba digitalizar cotizaciones, seguimiento de clientes, viajes y facturación. Construí la plataforma completa, trabajando directamente con la empresa.",
      en: "Transportes TAJTAJ is a Chilean trucking company that needed to digitize quoting, client follow-up, trips and invoicing. I built the full platform, working directly with the company.",
    },
    highlights: {
      es: [
        "Cotizaciones automáticas: el precio se calcula con distancias de Google Maps.",
        "Seguimiento de clientes potenciales con correos automáticos.",
        "Portal para clientes.",
        "Control de ingresos y egresos con facturas y boletas.",
        "Exportación a Excel para analizar con Power BI.",
        "Pruebas de interfaz con Playwright y Vitest; backend desplegado en Railway y frontend en Vercel.",
      ],
      en: [
        "Automatic quotes: prices are calculated from Google Maps distances.",
        "Lead follow-up with automated emails.",
        "Customer portal.",
        "Income and expense tracking with both invoices (factura) and receipts (boleta).",
        "Excel export for analysis in Power BI.",
        "UI tests with Playwright and Vitest; backend deployed on Railway and frontend on Vercel.",
      ],
    },
    demoUrl: "https://transportes-tajtaj.vercel.app",
    isPrivate: true,
  },
  {
    slug: "stopbet",
    name: "StopBet",
    tagline: {
      es: "Apoyo digital para personas en recuperación de ludopatía",
      en: "Digital support for people recovering from gambling addiction",
    },
    role: {
      es: "Scrum Master y co-líder",
      en: "Scrum Master and co-lead",
    },
    period: { es: "may – oct 2026", en: "May – Oct 2026" },
    status: "live",
    team: 6,
    stack: [
      "NestJS",
      "React",
      "React Native",
      "PostgreSQL",
      "LangChain.js",
      "Firebase",
      "pnpm",
    ],
    problem: {
      es: "Plataforma clínica para acompañar a pacientes a cualquier hora y reducir el trabajo administrativo de los terapeutas. La desarrollamos con el grupo terapéutico AJUTER para la Feria de Software UTFSM 2026.",
      en: "A clinical platform that supports patients at any hour and cuts therapists' admin work. We built it with the AJUTER therapy group for the UTFSM 2026 Software Fair.",
    },
    highlights: {
      es: [
        "Motor de intervención just-in-time que reacciona cuando el paciente está en un momento vulnerable.",
        "Asistente con IA (LangChain.js) con límites clínicos aprobados por AJUTER.",
        "Panel web para terapeutas.",
        "RUT de los pacientes cifrado en reposo con AES-256-GCM.",
        "App móvil con notificaciones push de Firebase.",
        "Monorepo pnpm con tipos compartidos entre backend, web y móvil.",
      ],
      en: [
        "Just-in-time intervention engine that reacts when a patient is at a vulnerable moment.",
        "AI assistant (LangChain.js) with clinical limits approved by AJUTER.",
        "Web dashboard for therapists.",
        "Patient national IDs (RUT) encrypted at rest with AES-256-GCM.",
        "Mobile app with Firebase push notifications.",
        "pnpm monorepo with shared types across backend, web and mobile.",
      ],
    },
    demoUrl: "https://stopbet-lemon.vercel.app",
    codeUrl: "https://github.com/StopBet/StopBet",
  },
  {
    slug: "fukusuke",
    name: "Fukusuke",
    tagline: {
      es: "Tienda online de sushi con paneles por rol",
      en: "A sushi online store with role-based dashboards",
    },
    role: {
      es: "Desarrollador full-stack",
      en: "Full-stack developer",
    },
    period: { es: "mar – jul 2026", en: "Mar – Jul 2026" },
    status: "delivered",
    team: 5,
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "NestJS 11",
      "TypeORM",
      "PostgreSQL",
      "JWT",
      "Swagger",
      "Chart.js",
    ],
    problem: {
      es: "E-commerce completo para un local de sushi: catálogo, carrito, pedidos y pagos, además de las pantallas que necesita el personal para operar. Proyecto del ramo INF-301, donde escribí cerca del 82% de los commits.",
      en: "A complete e-commerce app for a sushi restaurant: catalog, cart, orders and payments, plus the screens staff need to operate. Built for the INF-301 course, where I wrote about 82% of the commits.",
    },
    highlights: {
      es: [
        "Backend NestJS dividido en módulos: autenticación, carrito, pedidos, pagos, productos, reportes, usuarios y notificaciones.",
        "Pagos con patrón Strategy para sumar medios de pago sin tocar el flujo del pedido.",
        "Paneles por rol: cajero, despachador y administrador.",
        "Dashboard de reportes con Chart.js.",
        "Pruebas unitarias de servicios y API documentada con Swagger.",
        "Desplegado en Vercel (frontend) y Railway (backend).",
      ],
      en: [
        "NestJS backend split into modules: auth, cart, orders, payments, products, reports, users and notifications.",
        "Payments built with the Strategy pattern so new payment methods don't touch the order flow.",
        "Role-based panels for cashier, dispatcher and admin.",
        "Reporting dashboard with Chart.js.",
        "Unit tests on services and an API documented with Swagger.",
        "Deployed on Vercel (frontend) and Railway (backend).",
      ],
    },
    codeUrl: "https://github.com/holyusm/INF-301-WWW",
  },
  {
    slug: "campuslink",
    name: "CampusLink",
    tagline: {
      es: "Oportunidades para la comunidad universitaria en un solo lugar",
      en: "Campus opportunities in one place",
    },
    role: {
      es: "Líder de equipo y desarrollador backend",
      en: "Team lead and backend developer",
    },
    period: { es: "abr – jun 2026", en: "Apr – Jun 2026" },
    status: "delivered",
    team: 4,
    stack: [
      "React 19",
      "Vite",
      "TypeScript",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "Jest",
      "GitHub Actions",
    ],
    problem: {
      es: "Estudiantes y funcionarios publican y encuentran tutorías, grupos de estudio, trabajos part-time, prácticas, voluntariados e investigación. Lideré al equipo de 4 y escribí cerca del 65% de los commits.",
      en: "Students and staff post and find tutoring, study groups, part-time jobs, internships, volunteering and research. I led a team of 4 and wrote about 65% of the commits.",
    },
    highlights: {
      es: [
        "Proceso de equipo completo: GitFlow, tablero Kanban en Jira y dos releases (v1.0 y v2.0).",
        "CI con GitHub Actions y avisos automáticos a Discord.",
        "Pruebas con Jest en el backend.",
        "Desplegado en Vercel (frontend) y Railway (backend).",
      ],
      en: [
        "Full team workflow: GitFlow, a Jira Kanban board and two releases (v1.0 and v2.0).",
        "CI with GitHub Actions and automatic Discord notifications.",
        "Jest tests on the backend.",
        "Deployed on Vercel (frontend) and Railway (backend).",
      ],
    },
    demoUrl: "https://campus-link-frontend-nine.vercel.app",
    codeUrl: "https://github.com/CampusLink-INF301/CampusLink",
  },
];

export const otherProjects: OtherProject[] = [
  {
    name: "EVCSPP Tabu Search",
    summary: {
      es: "Ubicación de estaciones de carga para autos eléctricos a mínimo costo, con solución inicial greedy y búsqueda tabú. Incluye estudios de parámetros y gráficos de convergencia.",
      en: "Placing electric-vehicle charging stations at minimum cost, with a greedy initial solution and Tabu Search. Includes parameter studies and convergence plots.",
    },
    stack: ["C++17", "Python"],
  },
  {
    name: "Inventario distribuido",
    summary: {
      es: "Tres nodos replicados con elección de líder (algoritmo Bully), detección de fallas por heartbeat y resincronización cuando un nodo vuelve.",
      en: "Three replicated nodes with leader election (Bully algorithm), heartbeat failure detection and resync when a node rejoins.",
    },
    stack: ["Go", "TCP"],
  },
  {
    name: "Reservas distribuidas",
    summary: {
      es: "Sistema de reservas de restaurante en tres máquinas virtuales: microservicios en Go y Python conectados por gRPC y una cola RabbitMQ.",
      en: "Restaurant booking system across three VMs: Go and Python microservices connected through gRPC and a RabbitMQ queue.",
    },
    stack: ["Go", "gRPC", "RabbitMQ", "MongoDB", "Docker"],
  },
  {
    name: "Clúster Cassandra",
    summary: {
      es: "Clúster de 3 nodos con unas 16 mil postulaciones universitarias, modelo orientado a consultas, pruebas de alta disponibilidad y dashboards en Power BI.",
      en: "A 3-node cluster holding about 16k university applications, a query-driven data model, high-availability tests and Power BI dashboards.",
    },
    stack: ["Cassandra", "CQL", "Python", "Power BI"],
  },
  {
    name: "Data warehouse Kent Foods",
    summary: {
      es: "Modelo estrella con tabla de hechos de ventas y seis dimensiones, con totales que cuadran con la fuente.",
      en: "Star schema with a sales fact table and six dimensions, with totals reconciled against the source.",
    },
    stack: ["SQL Server", "SSIS", "Power BI"],
  },
  {
    name: "Grafo de explicabilidad",
    summary: {
      es: "Grafo en Neo4j para auditar cómo una IA clasificó 129 normativas, con carga idempotente y siete consultas de explicabilidad.",
      en: "A Neo4j graph for auditing how an AI classified 129 regulations, with an idempotent load and seven explainability queries.",
    },
    stack: ["Neo4j", "Cypher"],
  },
];
