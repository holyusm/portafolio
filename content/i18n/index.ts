import type { Lang } from "../types";

type Dictionary = {
  meta: { title: string; description: string };
  nav: { projects: string; experience: string; contact: string };
  hero: {
    role: string;
    intro: string;
    status: string;
    cv: string;
    github: string;
    linkedin: string;
  };
  sections: {
    projects: string;
    experience: string;
    skills: string;
    other: string;
    education: string;
    contact: string;
  };
  project: {
    back: string;
    role: string;
    period: string;
    status: string;
    stack: string;
    team: (n: number) => string;
    problem: string;
    built: string;
    demo: string;
    code: string;
    privateCode: string;
    next: string;
    statuses: { live: string; development: string; delivered: string };
  };
  education: { school: string; degree: string; period: string; courses: string[] };
  contact: { text: string };
  footer: string;
};

const dictionaries: Record<Lang, Dictionary> = {
  es: {
    meta: {
      title: "José Meza · Desarrollador full-stack",
      description:
        "Portafolio de José Meza Pontigo, estudiante de Ingeniería Civil Informática en la UTFSM. Productos web de punta a punta con React, Next.js, NestJS y PostgreSQL.",
    },
    nav: { projects: "Proyectos", experience: "Experiencia", contact: "Contacto" },
    hero: {
      role: "Desarrollador full-stack",
      intro:
        "Estudio Ingeniería Civil Informática en la UTFSM y construyo productos web de punta a punta: un SaaS para gimnasios, una plataforma para una empresa de transporte y una app de apoyo para personas en recuperación. Busco una práctica en backend, frontend o ingeniería de software.",
      status: "Disponible para práctica",
      cv: "Descargar CV",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    sections: {
      projects: "Proyectos",
      experience: "Experiencia",
      skills: "Herramientas",
      other: "Otros proyectos",
      education: "Educación",
      contact: "Contacto",
    },
    project: {
      back: "Volver a proyectos",
      role: "Rol",
      period: "Período",
      status: "Estado",
      stack: "Tecnologías",
      team: (n) => `Equipo de ${n}`,
      problem: "Qué resuelve",
      built: "Qué construí",
      demo: "Ver demo",
      code: "Ver código",
      privateCode: "Código privado, disponible a solicitud",
      next: "Siguiente proyecto",
      statuses: {
        live: "En línea",
        development: "En desarrollo",
        delivered: "Entregado",
      },
    },
    education: {
      school: "Universidad Técnica Federico Santa María",
      degree: "Ingeniería Civil Informática",
      period: "2022 – actualidad",
      courses: [
        "Bases de Datos",
        "Análisis de Algoritmos",
        "Estructuras de Datos",
        "Estadística Computacional",
      ],
    },
    contact: {
      text: "Si tienes una práctica o un proyecto en mente, escríbeme.",
    },
    footer: "José Meza Pontigo",
  },
  en: {
    meta: {
      title: "José Meza · Full-stack developer",
      description:
        "Portfolio of José Meza Pontigo, a Computer Science Engineering student at UTFSM. End-to-end web products with React, Next.js, NestJS and PostgreSQL.",
    },
    nav: { projects: "Projects", experience: "Experience", contact: "Contact" },
    hero: {
      role: "Full-stack developer",
      intro:
        "I study Computer Science Engineering at UTFSM and build web products end to end: a gym SaaS, a platform for a trucking company and a support app for people in recovery. I'm looking for an internship in backend, frontend or software engineering.",
      status: "Open to internships",
      cv: "Download CV",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    sections: {
      projects: "Projects",
      experience: "Experience",
      skills: "Tools",
      other: "Other projects",
      education: "Education",
      contact: "Contact",
    },
    project: {
      back: "Back to projects",
      role: "Role",
      period: "Period",
      status: "Status",
      stack: "Tech",
      team: (n) => `Team of ${n}`,
      problem: "What it solves",
      built: "What I built",
      demo: "View demo",
      code: "View code",
      privateCode: "Private code, available on request",
      next: "Next project",
      statuses: {
        live: "Live",
        development: "In development",
        delivered: "Delivered",
      },
    },
    education: {
      school: "Universidad Técnica Federico Santa María",
      degree: "Computer Science Engineering",
      period: "2022 – present",
      courses: [
        "Databases",
        "Algorithm Analysis",
        "Data Structures",
        "Computational Statistics",
      ],
    },
    contact: {
      text: "If you have an internship or a project in mind, write to me.",
    },
    footer: "José Meza Pontigo",
  },
};

export const getDictionary = (lang: Lang) => dictionaries[lang];

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "jose.mezap@usm.cl",
  github: "https://github.com/holyusm",
  linkedin: "https://www.linkedin.com/in/josé-miguel-meza-pontigo/",
  cv: "/cv/CV_Jose_Meza.pdf",
};
