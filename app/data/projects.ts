import type { Item } from "./types";

export const projects: Item[] = [
  {
    org: "Interaktive grafische Werkzeuge für die Parametrisierung semiempirischer Modelle",
    label:
      "Masterprojekt · Berliner Hochschule für Technik, in Zusammenarbeit mit dem Fritz-Haber-Institut · Berlin",
    period: "04.2025 – 09.2025",
    bullets: [
      "Entwicklung einer Full-Stack-Webanwendung (Python/Flask, React) zur interaktiven Parametrisierung semiempirischer DFTB-Modelle (DSKO) mittels Particle Swarm Optimization (PSO).",
      "Implementierung interaktiver Visualisierungen zur Auslesung von Bandstruktur-Punkten („Decoding Masks“) und zur Echtzeit-Überwachung der Parameter-Konvergenz.",
      "Integration wissenschaftlicher Analysefeatures wie Korrelationsanalysen, Kostenverläufe und Random-Forest-basierter Parameterwichtigkeiten.",
      "Aufbau von REST-APIs sowie Nutzung von ASE, PostgreSQL, SQLAlchemy und Supabase zur effizienten Verarbeitung und Speicherung komplexer Sitzungsdaten.",
      "Enges Schnittstellenmanagement mit der Panosetti-Forschungsgruppe zur Optimierung der User Experience für den wissenschaftlichen Einsatz.",
    ],
    stack: ["Python", "Flask", "React", "PostgreSQL", "Supabase", "ASE", "PSO"],
  },
];