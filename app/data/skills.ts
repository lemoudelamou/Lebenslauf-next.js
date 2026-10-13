export const personalSkills = [
  "Analytisches und kreatives Denken",
  "Arbeitsdisziplin",
  "Projekt- und Teamkoordinationsfähigkeit",
  "Verantwortungsbewusstsein",
];

export const languages = [
  { lang: "Deutsch", level: "Fließend" },
  { lang: "Englisch", level: "Fließend" },
  { lang: "Französisch", level: "Fließend" },
  { lang: "Arabisch", level: "Muttersprache" },
];

export const skillGroups = [
  {
    title: "Programmiersprachen",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "SQL",
      "Bash/Shell (grundlegend)",
    ],
  },
  { title: "Frontend", items: ["React", "next.js", "Streamlit"] },
  { title: "Backend", items: ["Flask", "Spring Boot"] },
  {
    title: "Datenbanken & DevOps",
    items: [
      "PostgreSQL",
      "Supabase",
      "Render",
      "Git",
      "MySQL",
      "Docker",
      "Vercel",
      "Neon"
    ],
  },
  {
    title: "Tools und Kollaboration",
    items: [
      "VS Code",
      "IntelliJ IDEA",
      "Android Studio",
      "Xcode",
      "MATLAB",
      "Simulink",
      "Jira",
      "Slack",
      "Zoom",
      "Trello",
      "Mattermost",
    ],
  },
  { title: "Embedded", items: ["FPGA", "VHDL"] },
];

export type SkillGroup = (typeof skillGroups)[number];