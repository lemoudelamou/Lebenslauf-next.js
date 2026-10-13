import type { Item } from "@/app/data/types";
import Chips from "./Chips";

export default function Timeline({
  heading,
  items,
}: {
  heading: string;
  items: Item[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="card">
      <h2>{heading}</h2>

      <div className="tl">
        {items.map((item) => (
          <article className="tl-item" key={item.org + item.period}>
            <span className="dot" aria-hidden="true" />

            <div className="tl-left">
              {item.logo && <div className="logo">{item.logo}</div>}

              <div>
                <div className="org">{item.org}</div>
                <div className="label">{item.label}</div>
                <div className="date">{item.period}</div>
              </div>
            </div>

            <div className="tl-right">
              {item.title && <div className="tl-title">{item.title}</div>}

              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              {item.stack.length > 0 && <Chips items={item.stack} small />}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}