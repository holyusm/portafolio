import Link from "next/link";
import { LangSwitch } from "./LangSwitch";
import type { Lang } from "@/content/types";

export function Header({
  lang,
  nav,
}: {
  lang: Lang;
  nav: { projects: string; contact: string };
}) {
  return (
    <header className="sticky top-0 z-10 bg-bg">
      <div className="flex min-h-14 items-center justify-between gap-6 px-5 sm:px-8">
        <Link href={`/${lang}`} className="font-medium">
          José Meza
        </Link>
        <nav className="flex items-center gap-6 text-[length:var(--step-small)]">
          <Link href={`/${lang}#projects`} className="link no-underline hover:underline">
            {nav.projects}
          </Link>
          <Link href={`/${lang}#contact`} className="link no-underline hover:underline">
            {nav.contact}
          </Link>
          <LangSwitch lang={lang} />
        </nav>
      </div>
    </header>
  );
}
