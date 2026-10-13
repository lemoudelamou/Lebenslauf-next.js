import type { Item } from "./types";

export const personalProjects: Item[] = [
  {
    org: "Workvanta – Full-Stack-SaaS-Projekt",
    label:
      "Persönliches Projekt · Berlin",
    period: "09.2025 – Laufend",
    bullets: [
      "Entwicklung einer Full-Stack-Projektmanagement-SaaS mit Multi-Workspace-Zusammenarbeit, rollenbasierter Zugriffskontrolle (RBAC), Kanban-Boards, Aufgaben- und Unteraufgabenverwaltung, Kommentarfunktion, Teameinladungen und E-Mail-Workflows",
      "Implementierung einer sicheren Authentifizierung mit Google, GitHub und E-Mail/Passwort sowie workspacebasierter Autorisierung.",
      "Entwicklung serverseitiger CRUD-Funktionalitäten mit Next.js Server Actions, Zod-Validierung, Prisma-Transaktionen und PostgreSQL, einschließlich Drag-and-Drop-Sortierung von Aufgaben und Verwaltung der Workspace-Mitgliedschaften.",
      "Konzeption einer skalierbaren Architektur mit geplanter Erweiterung um Echtzeit-Updates, Benachrichtigungen, Hintergrundprozesse, Dateispeicherung.",
    ],
    stack: ["next.js", "TypeScript", "Prisma", "Tailwind CSS", "PostgreSQL", "Neon", "Vercel"],
  },
];