"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Lang } from "@/content/types";

export function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(es|en)/, "");

  return (
    <div className="flex items-center gap-2 border-l border-rule pl-4 text-sm">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest}`}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={
            l === lang ? "font-semibold underline decoration-accent decoration-2 underline-offset-4" : "text-muted hover:text-ink"
          }
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
