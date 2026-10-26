import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, site } from "@/content/i18n";
import { projects } from "@/content/projects";
import { hasLocale, locales } from "@/content/types";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    projects.map((p) => ({ lang, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!hasLocale(lang) || !project) return {};
  return {
    title: `${project.name} · José Meza`,
    description: project.tagline[lang],
    alternates: {
      canonical: `/${lang}/projects/${slug}`,
      languages: {
        es: `/es/projects/${slug}`,
        en: `/en/projects/${slug}`,
      },
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const t = getDictionary(lang);

  const facts = [
    {
      label: t.project.role,
      value: `${project.role[lang]}${project.team ? `, ${t.project.team(project.team).toLowerCase()}` : ""}`,
    },
    { label: t.project.period, value: project.period[lang] },
    { label: t.project.status, value: t.project.statuses[project.status] },
    { label: t.project.stack, value: project.stack.join(", ") },
  ];

  const mail = `mailto:${site.email}?subject=${encodeURIComponent(project.name)}`;

  return (
    <article>
      <section className="bg-[var(--ink)] pb-20 pt-[min(16svh,9rem)] text-[var(--bg)] md:pb-28">
        <div className="col-wide">
          <h1 className="h-display arrive max-w-[16ch]">{project.name}</h1>
          <p className="arrive-2 mt-6 max-w-[34ch] text-[length:var(--step-lead)] leading-[1.25]">
            {project.tagline[lang]}
          </p>
        </div>
        <dl className="col mt-12 space-y-3">
          {facts.map((f) => (
            <div key={f.label} className="arrive-3 grid gap-x-2 sm:grid-cols-[30%_1fr]">
              <dt className="text-[length:var(--step-small)] opacity-70">
                {f.label}
              </dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
        <p className="col arrive-4 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              {t.project.demo}
            </a>
          ) : (
            <a href={mail} className="btn">
              {t.project.requestCode}
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {t.project.code}
            </a>
          )}
          {project.isPrivate && project.demoUrl && (
            <span className="text-[length:var(--step-small)] opacity-70">
              {t.project.privateCode}
            </span>
          )}
        </p>
      </section>

      <section className="py-24 md:py-32">
        <div className="col">
          <h2 className="h-section rise">{t.project.problem}</h2>
          <p className="rise-2 mt-8">{project.problem[lang]}</p>
          {project.isPrivate && !project.demoUrl && (
            <p className="rise-3 mt-6 text-[length:var(--step-small)] soft">
              {t.project.privateCode}
            </p>
          )}
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="col">
          <h2 className="h-section rise">{t.project.built}</h2>
          <ul className="mt-8 space-y-5">
            {project.highlights[lang].map((h, i) => (
              <li key={h} className={i % 3 === 0 ? "rise" : i % 3 === 1 ? "rise-2" : "rise-3"}>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-accent py-20 text-accent-ink md:py-28">
        <div className="col-wide">
          <Link
            href={`/${lang}/projects/${next.slug}`}
            className="h-project rise inline-block max-w-[18ch] hover:opacity-70"
          >
            {t.project.next}: {next.name}
          </Link>
          <p className="mt-8">
            <Link href={`/${lang}#projects`} className="link">
              {t.project.all}
            </Link>
          </p>
        </div>
      </section>
    </article>
  );
}
