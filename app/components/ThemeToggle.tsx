"use client";

import { useTheme } from "next-themes";
import Icon from "./Icon";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className="pill theme-toggle"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Zwischen hellem und dunklem Design wechseln"
    >
      <span className="theme-opt theme-to-dark">
        <Icon name="moon" size={14} />
        Dunkel
      </span>
      <span className="theme-opt theme-to-light">
        <Icon name="sun" size={14} />
        Hell
      </span>
    </button>
  );
}