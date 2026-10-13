import type { IconType } from "react-icons";
import type { SimpleIcon } from "simple-icons";

export type Item = {
  logo?: string;
  org: string;
  label: string;
  period: string;
  title?: string;
  bullets: string[];
  stack: string[];
};

export type EduRow = {
  period: string;
  title: string;
  sub: string;
  tag: string;
  bullets: string[];
};

export type TechIconType =
  | { type: "simple"; icon: SimpleIcon }
  | { type: "react"; icon: IconType };