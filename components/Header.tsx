import Link from "next/link";
import { LangSwitch } from "./LangSwitch";
import type { Lang } from "@/content/types";

export function Header({
  lang,
  nav,
}: {
  lang: Lang;
  nav: { projects: string; experience: string; contact: string };
}) {
  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href={`/${lang}`} className="font-semibold">
          JM
        </Link>
        <nav className="flex items-center gap-5 text-sm sm:gap-7">
          <Link href={`/${lang}#projects`} className="hover:text-link">
            {nav.projects}
          </Link>
          <Link href={`/${lang}#experience`} className="hover:text-link">
            {nav.experience}
          </Link>
          <Link href={`/${lang}#contact`} className="hover:text-link">
            {nav.contact}
          </Link>
          <LangSwitch lang={lang} />
        </nav>
      </div>
    </header>
  );
}
