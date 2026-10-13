import { techIcons } from "@/app/data/techIcons";

export default function TechIcon({ name }: { name: string }) {
  const entry = techIcons[name];

  if (!entry) {
    return <i className="tech-dot" aria-hidden="true" />;
  }

  if (entry.type === "react") {
    const IconComponent = entry.icon;

    return (
      <IconComponent
        className="tech-icon"
        size={16}
        aria-label={`${name} Logo`}
        role="img"
      />
    );
  }

  return (
    <svg
      className="tech-icon"
      role="img"
      aria-label={`${name} Logo`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d={entry.icon.path} />
    </svg>
  );
}