import type { Item } from "@/app/data/types";
import type { SkillGroup } from "@/app/data/skills";

export function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("de")
    .trim();
}

export function itemMatches(item: Item, query: string) {
  if (!query) return true;

  const searchableText = [
    item.org,
    item.label,
    item.period,
    item.title ?? "",
    ...item.bullets,
    ...item.stack,
  ].join(" ");

  return normalizeText(searchableText).includes(normalizeText(query));
}

export function filterSkillGroups(groups: SkillGroup[], query: string) {
  return groups
    .map((group) => ({
      ...group,
      items: group.items.filter((skill) => {
        if (!query) return true;
        return normalizeText(`${group.title} ${skill}`).includes(query);
      }),
    }))
    .filter((group) => group.items.length > 0);
}