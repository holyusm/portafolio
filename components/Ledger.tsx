import Link from "next/link";
import type { Lang, Project } from "@/content/types";

type Labels = {
  statuses: Record<Project["status"], string>;
};

export function Ledger({
  projects,
  lang,
  labels,
}: {
  projects: Project[];
  lang: Lang;
  labels: Labels;
}) {
  return (
    <ul className="ledger">
      {projects.map((p) => (
        <li key={p.slug} className="ledger-row">
          <Link
            href={`/${lang}/projects/${p.slug}`}
            className="contents"
            aria-describedby={`preview-${p.slug}`}
          >
            <span className="text-[length:var(--step-lead)] font-medium leading-tight tracking-[-0.02em]">{p.name}</span>
            <span className="kind text-[length:var(--step-small)] soft">{p.kind[lang]}</span>
            <span className="year num text-[length:var(--step-small)] text-right soft">
              {p.year}
            </span>
          </Link>
          <div id={`preview-${p.slug}`} className="ledger-preview" role="note">
            <p className="font-medium">{p.tagline[lang]}</p>
            <p className="mt-3 text-[length:var(--step-small)] soft">
              {p.role[lang]}
              <br />
              {labels.statuses[p.status]}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
