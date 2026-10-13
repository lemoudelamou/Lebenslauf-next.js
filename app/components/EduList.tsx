import type { EduRow } from "@/app/data/types";
import Icon from "./Icon";

export default function EduList({
  heading,
  rows,
}: {
  heading: string;
  rows: EduRow[];
}) {
  if (rows.length === 0) return null;

  return (
    <section className="card">
      <h2>{heading}</h2>

      <div className="edu">
        {rows.map((row) => (
          <article className="edu-row" key={row.title}>
            <div className="edu-ico">
              <Icon name="cap" size={18} />
            </div>

            <div className="edu-date">{row.period}</div>

            <div>
              <div className="edu-title">
                {row.title}
                <span className="tag">{row.tag}</span>
              </div>

              <div className="label">{row.sub}</div>

              {row.bullets.length > 0 && (
                <ul className="bul">
                  {row.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}