import type { SkillGroup } from "@/app/data/skills";
import Chips from "./Chips";

export default function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  if (groups.length === 0) return null;

  return (
    <section className="card">
      <h2>Technische Kompetenzen</h2>

      <div className="skills">
        {groups.map((group) => (
          <div className="skill-group" key={group.title}>
            <div className="eyebrow">{group.title}</div>
            <Chips items={group.items} />
          </div>
        ))}
      </div>
    </section>
  );
}