"use client";

import { useState } from "react";

import { skillGroups } from "@/app/data/skills";
import { experience } from "@/app/data/experience";
import { projects } from "@/app/data/projects";
import { personalProjects } from "./data/personalProjects";
import { theses } from "@/app/data/theses";
import { education, further } from "@/app/data/education";
import { filterSkillGroups, itemMatches, normalizeText } from "@/app/lib/search";

import Toolbar from "@/app/components/Toolbar";
import Hero from "@/app/components/Hero";
import SkillsSection from "@/app/components/SkillsSection";
import PersonalAndLanguages from "@/app/components/PersonalAndLanguages";
import Timeline from "@/app/components/Timeline";
import EduList from "@/app/components/EduList";
import AboutContact from "@/app/components/AboutContact";

export default function Home() {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeText(query);

  const filteredSkillGroups = filterSkillGroups(skillGroups, normalizedQuery);
  const filteredExperience = experience.filter((i) => itemMatches(i, normalizedQuery));
  const filteredProjects = projects.filter((i) => itemMatches(i, normalizedQuery));
  const filteredPersonalProjects = personalProjects.filter((i) => itemMatches(i, normalizedQuery));
  const filteredTheses = theses.filter((i) => itemMatches(i, normalizedQuery));

  const hasResults =
    filteredSkillGroups.length > 0 ||
    filteredExperience.length > 0 ||
    filteredProjects.length > 0 ||
    filteredPersonalProjects.length > 0 ||
    filteredTheses.length > 0;

  return (
    <div className="cvp">
      <Toolbar query={query} onQueryChange={setQuery} />

      <div className="wrap">
        <Hero />

        <SkillsSection groups={filteredSkillGroups} />

        {normalizedQuery && !hasResults && (
          <section className="card">
            <h2>Keine Ergebnisse</h2>
            <p>
              Für „{query}“ wurden keine passenden Technologien oder Projekte
              gefunden.
            </p>
          </section>
        )}

        <PersonalAndLanguages />

        <Timeline heading="Praktikum" items={filteredExperience} />
        <Timeline heading="Projekte" items={filteredProjects} />
        <Timeline heading="Perönliche Projekte" items={filteredPersonalProjects}/>
        <Timeline heading="Abschlussarbeiten" items={filteredTheses} />

        <EduList heading="Ausbildung" rows={education} />
        <EduList heading="Weiterbildung" rows={further} />

        <AboutContact />

        <footer>© Mourad Daghar · 2026</footer>
      </div>
    </div>
  );
}