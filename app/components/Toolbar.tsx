"use client";

import Icon from "@/app/components/Icon";
import ThemeToggle from "@/app/components/ThemeToggle";


export default function Toolbar({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
}) {
  return (
    <div className="bar">
      <label className="search">
        <Icon name="search" size={15} />

        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Technologie oder Projekt suchen…"
          aria-label="Suchen"
        />

        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Suche löschen"
          >
            ×
          </button>
        )}
      </label>

      <div className="pills">
        <ThemeToggle />
        <span className="pill">
          <Icon name="globe" size={14} />
          DE
        </span>

        <button className="pill" onClick={() => window.print()} type="button">
          <Icon name="print" size={14} />
          Drucken
        </button>
      </div>
    </div>
  );
}