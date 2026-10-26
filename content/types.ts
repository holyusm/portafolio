export const locales = ["es", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "es";

export const hasLocale = (value: string): value is Lang =>
  (locales as readonly string[]).includes(value);

export type Loc<T> = Record<Lang, T>;

export type ProjectStatus = "live" | "development" | "delivered";

export type Project = {
  slug: string;
  year: string;
  kind: Loc<string>;
  name: string;
  tagline: Loc<string>;
  role: Loc<string>;
  period: Loc<string>;
  status: ProjectStatus;
  team?: number;
  stack: string[];
  problem: Loc<string>;
  highlights: Loc<string[]>;
  demoUrl?: string;
  codeUrl?: string;
  isPrivate?: boolean;
};
