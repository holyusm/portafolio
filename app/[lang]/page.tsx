import { notFound } from "next/navigation";
import { Ledger } from "@/components/Ledger";
import { skills } from "@/content/experience";
import { getDictionary, site } from "@/content/i18n";
import { projects } from "@/content/projects";
import { hasLocale } from "@/content/types";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <section className="bg-[var(--ink)] pb-24 pt-[min(20svh,10rem)] text-[var(--bg)] md:pb-32 md:pt-[min(24svh,13rem)]">
        <div className="col-wide">
          <h1 className="h-display arrive max-w-[22ch]">
            {t.hero.title[0]}
            <br />
            {t.hero.title[1]}
          </h1>
        </div>
        <div className="col mt-10">
          <p className="arrive-2">{t.hero.intro}</p>
          <p className="arrive-3 mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#projects" className="btn">
              {t.hero.primary}
            </a>
            <a href={site.github} className="link">
              {t.hero.secondary}
            </a>
          </p>
        </div>
      </section>

      <section id="projects" className="bg-surface py-28 md:py-36">
        <div className="col">
          <h2 className="h-section rise">{t.sections.projects}</h2>
          <div className="rise-2 mt-10">
            <Ledger
              projects={projects}
              lang={lang}
              labels={{ statuses: t.project.statuses }}
            />
          </div>
        </div>
      </section>

      <section className="col pt-28 md:pt-36">
        <h2 className="h-section rise">{t.sections.tools}</h2>
        <dl className="rise-2 mt-8 space-y-4">
          {skills.map((s) => (
            <div
              key={s.group.en}
              className="grid grid-cols-1 gap-x-2 sm:grid-cols-[55%_1fr]"
            >
              <dt className="font-medium">{s.group[lang]}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="about-grid pt-28 md:pt-40">
        <div className="col letter">
          <h2 className="h-section rise">{t.sections.about}</h2>
          <div className="mt-8 space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "rise" : i === 1 ? "rise-2" : "rise-3"}>
                {p}
              </p>
            ))}
          </div>
          <p className="rise mt-10 text-[length:var(--step-lead)] italic">
            {t.about.signature}
          </p>
          <p className="text-[length:var(--step-small)] soft">{t.about.role}</p>
        </div>
        <dl className="col facts space-y-5">
          {t.about.facts.map((f) => (
            <div key={f.label} className="rise-2">
              <dt className="text-[length:var(--step-small)] soft">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        id="contact"
        className="mt-32 bg-accent py-24 text-accent-ink md:mt-44 md:py-32"
      >
        <div className="col-wide">
          <p className="rise max-w-[20ch] text-[length:var(--step-lead)] font-medium leading-[1.2] tracking-[-0.02em] sm:text-[length:var(--step-head)] sm:leading-[1.05]">
            {t.contact.sentence}
          </p>
          <p className="rise-2 mt-10 font-medium">
            {t.contact.question}
          </p>
          <p className="rise-3 mt-3 flex flex-col gap-2">
            <a href={`mailto:${site.email}`} className="link w-fit">
              {site.email}
            </a>
            <a href={site.linkedin} className="link w-fit">
              LinkedIn
            </a>
          </p>
          <p className="mt-6 text-[length:var(--step-small)] opacity-80">{t.contact.city}</p>
        </div>
      </section>
    </>
  );
}
