import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    role: {
      es: "Desarrollador full-stack freelance",
      en: "Freelance full-stack developer",
    },
    org: "Transportes TAJTAJ",
    period: { es: "dic 2025 – abr 2026", en: "Dec 2025 – Apr 2026" },
    bullets: {
      es: [
        "Diseñé y desarrollé solo una plataforma de gestión: cotizaciones automáticas, seguimiento de clientes, viajes y facturación.",
        "Backend en FastAPI con PostgreSQL y frontend en Next.js, desplegados en Railway y Vercel.",
        "Integré Google Maps para calcular precios y correos automáticos para el seguimiento de clientes.",
      ],
      en: [
        "Designed and built a management platform on my own: automatic quotes, client follow-up, trips and invoicing.",
        "FastAPI and PostgreSQL backend with a Next.js frontend, deployed on Railway and Vercel.",
        "Integrated Google Maps to price quotes and automated emails for client follow-up.",
      ],
    },
  },
  {
    role: {
      es: "Scrum Master y co-líder",
      en: "Scrum Master and co-lead",
    },
    org: "StopBet · Feria de Software UTFSM",
    period: { es: "may – oct 2026", en: "May – Oct 2026" },
    bullets: {
      es: [
        "Coordiné a un equipo de 6 personas junto al grupo terapéutico AJUTER.",
        "Además de coordinar, desarrollé funcionalidades del producto (103 commits).",
      ],
      en: [
        "Coordinated a team of 6 together with the AJUTER therapy group.",
        "Alongside coordinating, I built product features (103 commits).",
      ],
    },
  },
  {
    role: {
      es: "Desarrollador de software para cliente",
      en: "Software developer for a client",
    },
    org: "Proyecto grupal · UTFSM",
    period: { es: "2024 – 2025", en: "2024 – 2025" },
    bullets: {
      es: [
        "Sistema de rendición de gastos para un cliente real, con roles de empleado, contador y jefe de área.",
        "Levanté requisitos directamente con el cliente e iteré el diseño con su feedback.",
        "Participé en la interfaz con React y en el despliegue con Docker.",
      ],
      en: [
        "Expense-report system for a real client, with employee, accountant and area-manager roles.",
        "Gathered requirements directly with the client and iterated the design on their feedback.",
        "Worked on the React interface and on deployment with Docker.",
      ],
    },
  },
];

export const skills: { group: { es: string; en: string }; items: string[] }[] = [
  {
    group: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native / Expo"],
  },
  {
    group: { es: "Backend", en: "Backend" },
    items: ["NestJS", "FastAPI", "Node.js", "REST y Swagger", "JWT", "Prisma", "TypeORM"],
  },
  {
    group: { es: "Datos", en: "Data" },
    items: ["PostgreSQL", "SQL Server", "Redis", "MongoDB", "Cassandra", "Neo4j", "Power BI", "pandas"],
  },
  {
    group: { es: "Infraestructura", en: "Infrastructure" },
    items: ["Docker", "Kubernetes (básico)", "GitHub Actions", "Vercel", "Railway"],
  },
  {
    group: { es: "Fundamentos", en: "Fundamentals" },
    items: ["Python", "C++", "Go", "Algoritmos", "Estructuras de datos"],
  },
];
