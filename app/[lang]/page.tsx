import { notFound } from "next/navigation";
import { ProjectRow } from "@/components/ProjectRow";
import { Section } from "@/components/Section";
import { experience, skills } from "@/content/experience";
import { getDictionary, site } from "@/content/i18n";
import { otherProjects, projects } from "@/content/projects";
import { hasLocale } from "@/content/types";

const button =
  "inline-flex items-center border border-ink px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-paper";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <section className="border-b-8 border-accent">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 sm:px-8 md:pb-20 md:pt-24">
          <p className="mb-6 inline-flex items-center gap-2 text-sm">
            <span aria-hidden className="size-2.5 rounded-full bg-[var(--live)]" />
            {t.hero.status}
          </p>
          <h1 className="display hero-name text-[clamp(4.5rem,19vw,15rem)]">
            José
            <br />
            Meza
          </h1>
          <p className="mt-8 text-2xl font-medium sm:text-3xl">{t.hero.role}</p>
          <p className="measure mt-4 text-lg text-muted">{t.hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.github} className={button}>
              {t.hero.github}
            </a>
            <a href={site.linkedin} className={button}>
              {t.hero.linkedin}
            </a>
          </div>
        </div>
      </section>

      <Section id="projects" title={t.sections.projects}>
        <ul>
          {projects.map((p) => (
            <ProjectRow
              key={p.slug}
              project={p}
              lang={lang}
              statusLabel={t.project.statuses[p.status]}
            />
          ))}
        </ul>
      </Section>

      <Section id="experience" title={t.sections.experience}>
        <ol className="space-y-10">
          {experience.map((e) => (
            <li key={e.org} className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-x-8">
              <div>
                <h3 className="text-xl font-semibold">{e.role[lang]}</h3>
                <p className="text-muted">{e.org}</p>
              </div>
              <p className="text-sm text-muted sm:pt-1.5">{e.period[lang]}</p>
              <ul className="measure mt-3 list-disc space-y-1.5 pl-5 sm:col-span-2">
                {e.bullets[lang].map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={t.sections.skills}>
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group.en}>
              <dt className="font-semibold">{s.group[lang]}</dt>
              <dd className="mt-1 text-muted">{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title={t.sections.other}>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {otherProjects.map((o) => (
            <li key={o.name}>
              <h3 className="font-semibold">{o.name}</h3>
              <p className="mt-1">{o.summary[lang]}</p>
              <p className="mt-1 text-sm text-muted">{o.stack.join(", ")}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={t.sections.education}>
        <h3 className="text-xl font-semibold">{t.education.school}</h3>
        <p className="text-muted">
          {t.education.degree} · {t.education.period}
        </p>
        <p className="mt-3 text-muted">{t.education.courses.join(", ")}</p>
      </Section>

      <Section id="contact" title={t.sections.contact}>
        <p className="measure text-2xl font-medium">{t.contact.text}</p>
        <p className="mt-4">
          <a
            href={`mailto:${site.email}`}
            className="display text-4xl underline decoration-accent decoration-4 underline-offset-8 hover:text-link sm:text-5xl"
          >
            {site.email}
          </a>
        </p>
      </Section>
    </>
  );
}
