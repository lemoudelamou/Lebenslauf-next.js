import type { Item } from "./types";

export const theses: Item[] = [
  {
    org: "Entwicklung einer KI-basierten Pipeline zur automatisierten Erstellung lauffähiger Prozessstrukturen aus Kochrezepten in einer 2D-Spielumgebung",
    label:
      "Masterarbeit · Berliner Hochschule für Technik, in Zusammenarbeit mit Villa Hirschberg Online GmbH · Berlin",
    period: "12.2025 – 05.2026",
    bullets: [
      "Konzeption und Entwicklung einer KI-gestützten Daten-Pipeline zur automatisierten Transformation von Kochrezepten in strukturierte JSON-Formate.",
      "Evaluierung und Auswahl von Large Language Models (LLMs) zur Optimierung der Extraktionsgenauigkeit.",
      "End-to-End-Testung der Datenstrukturen mittels erstellter Dummy-Assets zur Gewährleistung hoher Datenqualität.",
      "Programmierung von Editor-Skripten zur automatisierten Asset-Filterung, Fehleranalyse und Workflow-Optimierung.",
      "Quantitative Auswertung und Dokumentation der Pipeline-Performance zur kontinuierlichen Systemverbesserung.",
    ],
    stack: ["Python", "LLM", "NLP", "JSON", "Pipeline"],
  },
  {
    org: "Entwurf und Realisierung eines digitalen FM-Modulators mit RDS-Encoder auf einem FPGA",
    label: "Bachelorarbeit · Berlin",
    period: "02.2022 – 06.2022",
    bullets: [
      "Modellierung und Simulation eines digitalen FM-Modulators mit RDS-Encoder in MATLAB/Simulink.",
      "Erstellung automatisierter MATLAB-Skripte zur Modellprüfung und Systemvalidierung.",
      "Generierung von synthetisierbarem VHDL-Code aus den Simulationsmodellen mittels HDL Coder.",
      "Implementierung und Testing auf einem Zedboard (Xilinx Zynq-7000 SoC) durch Aufteilung der Funktionalitäten auf Processing System (PS) und Programmierbare Logik (PL).",
    ],
    stack: ["FPGA", "VHDL", "MATLAB", "Simulink", "DSP", "RDS"],
  },
];