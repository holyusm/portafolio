import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusDot } from "@/components/StatusDot";
import { getDictionary } from "@/content/i18n";
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

const button =
  "inline-flex items-center border border-ink px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-paper";

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

  return (
    <article className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
      <Link href={`/${lang}#projects`} className="text-sm text-muted hover:text-link">
        {t.project.back}
      </Link>

      <header className="mt-8 border-b-8 border-accent pb-10">
        <h1 className="display text-[clamp(3.5rem,13vw,9rem)]">{project.name}</h1>
        <p className="measure mt-6 text-2xl font-medium">{project.tagline[lang]}</p>
      </header>

      <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="text-sm text-muted">{t.project.role}</dt>
          <dd className="font-medium">
            {project.role[lang]}
            {project.team ? ` · ${t.project.team(project.team)}` : ""}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted">{t.project.period}</dt>
          <dd className="font-medium">{project.period[lang]}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted">{t.project.status}</dt>
          <dd className="font-medium">
            <StatusDot
              status={project.status}
              label={t.project.statuses[project.status]}
            />
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted">{t.project.stack}</dt>
          <dd className="font-medium">{project.stack.join(", ")}</dd>
        </div>
      </dl>

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        <section>
          <h2 className="display text-3xl">{t.project.problem}</h2>
          <p className="measure mt-4">{project.problem[lang]}</p>
        </section>
        <section>
          <h2 className="display text-3xl">{t.project.built}</h2>
          <ul className="mt-4 list-disc space-y-2.5 pl-5">
            {project.highlights[lang].map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${button} bg-ink text-paper hover:border-link hover:bg-link`}
          >
            {t.project.demo}
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={button}
          >
            {t.project.code}
          </a>
        )}
        {project.isPrivate && (
          <span className="text-sm text-muted">{t.project.privateCode}</span>
        )}
      </div>

      <footer className="mt-20 border-t border-rule pt-8">
        <Link
          href={`/${lang}/projects/${next.slug}`}
          className="group inline-block"
        >
          <span className="block text-sm text-muted">{t.project.next}</span>
          <span className="display text-4xl group-hover:text-link sm:text-5xl">
            {next.name}
          </span>
        </Link>
      </footer>
    </article>
  );
}
