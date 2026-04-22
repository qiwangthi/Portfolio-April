export type Language = 'en' | 'de';

export interface Translations {
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    sectionTitle: string;
    description: string[];
  };
  skills: {
    sectionTitle: string;
    items: { title: string; description: string; icon: string }[];
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewProject: string;
    backToProjects: string;
    overview: string;
    role: string;
    duration: string;
    tools: string;
    challenge: string;
    solution: string;
    results: string;
  };
  contact: {
    sectionTitle: string;
    description: string;
    email: string;
    linkedin: string;
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
}

const en: Translations = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hello, I\'m',
    name: 'Qi Wang',
    title: 'UX Designer',
    subtitle: 'bridging healthcare empathy with AI-driven product thinking.',
    cta: 'View My Work',
  },
  about: {
    sectionTitle: 'About Me',
    description: [
      'I\'m a UX design student with a background in nursing, bringing years of clinical experience into the world of digital design. My time in healthcare shaped how I understand people—their needs, behaviors, and the importance of clarity in high-stakes environments. Today, I translate that perspective into user-centered design, creating intuitive and meaningful experiences.',
      'I also work at the intersection of design and technology, using AI tools to enhance my creative process and build innovative AI-driven products. My approach combines empathy, critical thinking, and emerging technologies to design solutions that are not only functional, but genuinely impactful.',

    ],
  },
  skills: {
    sectionTitle: 'What I Do',
    items: [
      {
        title: 'UX Research',
        description: 'User interviews, surveys, usability testing, persona development, and journey mapping to uncover deep user insights.',
        icon: '🔍',
      },
      {
        title: 'UI Design',
        description: 'Pixel-perfect interface design with a focus on visual hierarchy, typography, and cohesive design systems.',
        icon: '🎨',
      },
      {
        title: 'Interaction Design',
        description: 'Crafting meaningful micro-interactions and animations that enhance the user experience and delight users.',
        icon: '✨',
      },
      {
        title: 'Prototyping',
        description: 'From low-fidelity wireframes to high-fidelity interactive prototypes using Figma, Sketch, and Adobe XD.',
        icon: '📐',
      },
      {
        title: 'Design Systems',
        description: 'Building scalable, consistent component libraries and design tokens that accelerate team productivity.',
        icon: '🧩',
      },
      {
        title: 'Strategy & Workshop',
        description: 'Facilitating design thinking workshops, stakeholder alignment sessions, and product strategy development.',
        icon: '💡',
      },
      {
        title: 'Healthcare UX',
        description: 'Designing patient- and clinician-focused journeys that prioritize clarity, trust, and safety in sensitive healthcare contexts.',
        icon: '🏥',
      },
      {
        title: 'AI Product Design',
        description: 'Shaping AI-powered product experiences with transparent interactions, human oversight, and practical value for real users.',
        icon: '🤖',
      },
      {
        title: 'Service Blueprinting',
        description: 'Mapping end-to-end touchpoints across digital and offline channels to align teams and improve the full user journey.',
        icon: '🗺️',
      },
    ],
  },
  projects: {
    sectionTitle: 'Featured Projects',
    sectionSubtitle: 'A selection of recent work that showcases my design process and problem-solving approach.',
    viewProject: 'View Case Study',
    backToProjects: '← Back to Projects',
    overview: 'Overview',
    role: 'Role',
    duration: 'Duration',
    tools: 'Tools',
    challenge: 'The Challenge',
    solution: 'The Solution',
    results: 'Results & Impact',
  },
  contact: {
    sectionTitle: 'Let\'s Connect',
    description: 'I\'m always open to discussing new opportunities, creative ideas, or ways to bring your vision to life. Let\'s create something amazing together.',
    email: 'Send an Email',
    linkedin: 'Connect on LinkedIn',
  },
  footer: {
    copyright: '© 2026 Qi Wang. All rights reserved.',
    madeWith: 'Designed with passion',
  },
};

const de: Translations = {
  nav: {
    home: 'Start',
    projects: 'Projekte',
    about: 'Über mich',
    contact: 'Kontakt',
  },
  hero: {
    greeting: 'Hallo, ich bin',
    name: 'Qi Wang',
    title: 'UX Designerin',
    subtitle: 'bridging healthcare empathy with AI-driven product thinking.',
    cta: 'Meine Arbeiten ansehen',
  },
  about: {
    sectionTitle: 'Über Mich',
    description: [
      'Ich bin eine leidenschaftliche UX Designerin mit einem Auge fürs Detail und einem tiefen Verständnis für Nutzerverhalten. Meine Designphilosophie basiert auf Empathie, Forschung und iterativem Denken.',
      'Mit Erfahrung in verschiedenen Branchen bringe ich ein vielseitiges Skillset mit, das strategisches Denken mit praktischer Designumsetzung verbindet. Ich glaube, dass großartiges Design unsichtbar ist — es funktioniert einfach.',
      'Wenn ich nicht gerade designe, entdecke ich neue Designtrends, besuche UX Meetups oder skizziere Ideen in meinem Notizbuch.',
    ],
  },
  skills: {
    sectionTitle: 'Was Ich Mache',
    items: [
      {
        title: 'UX Research',
        description: 'Nutzerinterviews, Umfragen, Usability-Tests, Persona-Entwicklung und Journey Mapping für tiefe Nutzereinblicke.',
        icon: '🔍',
      },
      {
        title: 'UI Design',
        description: 'Pixelgenaues Interface-Design mit Fokus auf visuelle Hierarchie, Typografie und kohärente Designsysteme.',
        icon: '🎨',
      },
      {
        title: 'Interaction Design',
        description: 'Bedeutungsvolle Micro-Interactions und Animationen, die das Nutzererlebnis bereichern und begeistern.',
        icon: '✨',
      },
      {
        title: 'Prototyping',
        description: 'Von Low-Fidelity Wireframes bis hin zu interaktiven High-Fidelity Prototypen mit Figma, Sketch und Adobe XD.',
        icon: '📐',
      },
      {
        title: 'Vibe Coding',
        description: 'Translating designs into functional code intuitively. Using natural language and AI-assisted development tools to rapidly generate front-end components and bridge the gap between design and engineering.',
        icon: '💻',
      },
      {
        title: 'Technical Foundation',
        description: 'Basic proficiency in HTML, CSS, JavaScript, and Java. Understanding the underlying code structures allows me to design with technical constraints in mind, communicate effectively with engineering teams, and ensure my designs are highly feasible to build.',
        icon: '</>',
      },
      {
        title: 'Healthcare UX',
        description: 'Gestaltung von patienten- und klinikzentrierten Journeys mit Fokus auf Klarheit, Vertrauen und Sicherheit in sensiblen Gesundheitskontexten.',
        icon: '🏥',
      },
      {
        title: 'AI Product Design',
        description: 'Konzeption KI-gestuetzter Produkterlebnisse mit transparenten Interaktionen, menschlicher Kontrolle und praktischem Nutzwert.',
        icon: '🤖',
      },
      {
        title: 'Service Blueprinting',
        description: 'Abbildung von End-to-End Touchpoints ueber digitale und analoge Kanaele, um Teams auszurichten und die gesamte Journey zu verbessern.',
        icon: '🗺️',
      },
    ],
  },
  projects: {
    sectionTitle: 'Ausgewählte Projekte',
    sectionSubtitle: 'Eine Auswahl aktueller Arbeiten, die meinen Designprozess und Problemlösungsansatz zeigen.',
    viewProject: 'Case Study ansehen',
    backToProjects: '← Zurück zu Projekten',
    overview: 'Überblick',
    role: 'Rolle',
    duration: 'Dauer',
    tools: 'Tools',
    challenge: 'Die Herausforderung',
    solution: 'Die Lösung',
    results: 'Ergebnisse & Impact',
  },
  contact: {
    sectionTitle: 'Kontakt aufnehmen',
    description: 'Ich freue mich immer über neue Möglichkeiten, kreative Ideen oder Wege, Ihre Vision zum Leben zu erwecken. Lassen Sie uns gemeinsam etwas Großartiges schaffen.',
    email: 'E-Mail senden',
    linkedin: 'Auf LinkedIn vernetzen',
  },
  footer: {
    copyright: '© 2026 Qi Wang. Alle Rechte vorbehalten.',
    madeWith: 'Mit Leidenschaft gestaltet',
  },
};

export const translations: Record<Language, Translations> = { en, de };
