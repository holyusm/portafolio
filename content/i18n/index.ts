import type { Lang } from "../types";

type Dictionary = {
  meta: { title: string; description: string };
  nav: { projects: string; contact: string };
  hero: {
    title: [string, string];
    intro: string;
    primary: string;
    secondary: string;
  };
  sections: { projects: string; tools: string; about: string };
  ledger: { kind: string };
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
    requestCode: string;
    all: string;
    next: string;
    statuses: { live: string; development: string; delivered: string };
  };
  about: {
    paragraphs: string[];
    signature: string;
    role: string;
    facts: { label: string; value: string }[];
  };
  contact: { sentence: string; question: string; city: string };
  footer: string;
};

const dictionaries: Record<Lang, Dictionary> = {
  es: {
    meta: {
      title: "José Meza · Desarrollador full-stack",
      description:
        "Portafolio de José Meza Pontigo, estudiante de Ingeniería Civil Informática en la UTFSM. Holy Fitness, Transportes TAJTAJ y StopBet: productos web de punta a punta.",
    },
    nav: { projects: "Proyectos", contact: "Contacto" },
    hero: {
      title: ["José Meza.", "Desarrollador web."],
      intro:
        "Hago desarrollo full-stack: un SaaS para gimnasios, la plataforma de una empresa de transporte y una app clínica de apoyo a personas en recuperación. Estudio Ingeniería Civil Informática en la UTFSM y busco una práctica.",
      primary: "Ver proyectos",
      secondary: "GitHub",
    },
    sections: {
      projects: "Proyectos",
      tools: "Herramientas",
      about: "Sobre mí",
    },
    ledger: { kind: "Tipo" },
    project: {
      back: "Volver a proyectos",
      role: "Rol",
      period: "Período",
      status: "Estado",
      stack: "Tecnologías",
      team: (n) => `Equipo de ${n}`,
      problem: "Qué resuelve",
      built: "Qué construí",
      demo: "Visitar sitio",
      code: "Ver código",
      privateCode: "Código privado, disponible a solicitud",
      requestCode: "Pedir acceso al código",
      all: "Todos los proyectos",
      next: "Siguiente",
      statuses: {
        live: "En línea",
        development: "En desarrollo",
        delivered: "Entregado",
      },
    },
    about: {
      paragraphs: [
        "Estudio Ingeniería Civil Informática en la Universidad Técnica Federico Santa María, en Valparaíso. Me interesa el trabajo de punta a punta: del modelo de datos a la interfaz.",
        "Hoy desarrollo Holy Fitness, un SaaS para gimnasios que diseñé y programo yo solo. Entre diciembre de 2025 y abril de 2026 construí, como freelance, la plataforma de gestión de Transportes TAJTAJ, una empresa de transporte chilena.",
        "En StopBet, una plataforma clínica creada con el grupo terapéutico AJUTER, fui Scrum Master y co-líder de un equipo de seis. Además de coordinar, desarrollé funcionalidades del producto.",
        "Busco una práctica donde seguir creciendo en backend, frontend o ingeniería de software.",
      ],
      signature: "José Meza Pontigo",
      role: "Desarrollador full-stack",
      facts: [
        {
          label: "Estudios",
          value: "Ingeniería Civil Informática, UTFSM, 2022 – actualidad",
        },
        {
          label: "Cursos",
          value:
            "Bases de Datos, Análisis de Algoritmos, Estructuras de Datos, Estadística Computacional",
        },
        { label: "Idiomas", value: "Español nativo, inglés avanzado" },
      ],
    },
    contact: {
      sentence:
        "¿Tienes una práctica o un proyecto en mente?",
      question: "Escríbeme",
      city: "Valparaíso, Chile",
    },
    footer: "José Meza Pontigo",
  },
  en: {
    meta: {
      title: "José Meza · Full-stack developer",
      description:
        "Portfolio of José Meza Pontigo, a Computer Science Engineering student at UTFSM. Holy Fitness, Transportes TAJTAJ and StopBet: end-to-end web products.",
    },
    nav: { projects: "Projects", contact: "Contact" },
    hero: {
      title: ["José Meza.", "Web developer."],
      intro:
        "I do full-stack development: a gym SaaS, a trucking company's platform and a clinical support app for people in recovery. I study Computer Science Engineering at UTFSM and I'm looking for an internship.",
      primary: "View projects",
      secondary: "GitHub",
    },
    sections: { projects: "Projects", tools: "Tools", about: "About me" },
    ledger: { kind: "Type" },
    project: {
      back: "Back to projects",
      role: "Role",
      period: "Period",
      status: "Status",
      stack: "Tech",
      team: (n) => `Team of ${n}`,
      problem: "What it solves",
      built: "What I built",
      demo: "Visit site",
      code: "View code",
      privateCode: "Private code, available on request",
      requestCode: "Request code access",
      all: "All projects",
      next: "Next",
      statuses: {
        live: "Live",
        development: "In development",
        delivered: "Delivered",
      },
    },
    about: {
      paragraphs: [
        "I study Computer Science Engineering at Universidad Técnica Federico Santa María, in Valparaíso. I like end-to-end work: from the data model to the interface.",
        "Today I'm building Holy Fitness, a gym SaaS that I designed and code on my own. Between December 2025 and April 2026 I built, as a freelancer, the management platform for Transportes TAJTAJ, a Chilean trucking company.",
        "On StopBet, a clinical platform created with the AJUTER therapy group, I was Scrum Master and co-lead of a team of six. Besides coordinating, I built product features.",
        "I'm looking for an internship where I can keep growing in backend, frontend or software engineering.",
      ],
      signature: "José Meza Pontigo",
      role: "Full-stack developer",
      facts: [
        {
          label: "Education",
          value: "Computer Science Engineering, UTFSM, 2022 – present",
        },
        {
          label: "Courses",
          value:
            "Databases, Algorithm Analysis, Data Structures, Computational Statistics",
        },
        { label: "Languages", value: "Spanish native, English advanced" },
      ],
    },
    contact: {
      sentence: "Have an internship or a project in mind?",
      question: "Write to me",
      city: "Valparaíso, Chile",
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
};
