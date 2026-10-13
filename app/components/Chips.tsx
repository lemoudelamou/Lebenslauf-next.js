import TechIcon from "@/app/components/TechIcon";

export default function Chips({
  items,
  small,
}: {
  items: string[];
  small?: boolean;
}) {
  return (
    <div className={small ? "chips small" : "chips"}>
      {items.map((name) => (
        <span className="chip" key={name}>
          <TechIcon name={name} />
          {name}
        </span>
      ))}
    </div>
  );
}