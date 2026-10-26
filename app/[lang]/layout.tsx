import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { getDictionary, site } from "@/content/i18n";
import { hasLocale, locales } from "@/content/types";
import "../globals.css";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { es: "/es", en: "/en" },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      locale: lang === "es" ? "es_CL" : "en_US",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html lang={lang} className={albert.variable}>
      <body>
        <Header lang={lang} nav={t.nav} />
        <main>{children}</main>
        <footer className="col py-16 text-[length:var(--step-small)] soft">{t.footer}</footer>
      </body>
    </html>
  );
}
