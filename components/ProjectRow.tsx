import Link from "next/link";
import { StatusDot } from "./StatusDot";
import type { Lang, Project } from "@/content/types";

export function ProjectRow({
  project,
  lang,
  statusLabel,
}: {
  project: Project;
  lang: Lang;
  statusLabel: string;
}) {
  return (
    <li className="border-t border-rule last:border-b">
      <Link
        href={`/${lang}/projects/${project.slug}`}
        className="group grid gap-3 px-1 py-7 transition-colors hover:bg-surface sm:px-3 md:grid-cols-[1fr_15rem] md:gap-8"
      >
        <div>
          <h3 className="display text-4xl group-hover:text-link sm:text-5xl">
            {project.name}
          </h3>
          <p className="measure mt-3 text-lg">{project.tagline[lang]}</p>
          <p className="mt-2 text-sm text-muted">{project.stack.join(", ")}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm md:items-start md:pt-2">
          <span className="font-medium">{project.role[lang]}</span>
          <span className="text-muted">{project.period[lang]}</span>
          <StatusDot status={project.status} label={statusLabel} />
        </div>
      </Link>
    </li>
  );
}
