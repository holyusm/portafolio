"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Lang } from "@/content/types";

export function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(es|en)/, "");

  return (
    <div className="flex items-center gap-3 text-[length:var(--step-small)]">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest}`}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={l === lang ? "font-semibold" : "soft hover:text-ink"}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
