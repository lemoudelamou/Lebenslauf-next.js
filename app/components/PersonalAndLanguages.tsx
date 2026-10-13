import { languages, personalSkills } from "@/app/data/skills";

export default function PersonalAndLanguages() {
  return (
    <section className="card two">
      <div>
        <h2>Persönliche Kompetenzen</h2>

        <ul className="bul">
          {personalSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="side">
        <h2>Sprachen</h2>

        <ul className="bul">
          {languages.map(({ lang, level }) => (
            <li key={lang}>
              {lang}: {level}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}