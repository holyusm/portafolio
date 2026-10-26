import { ImageResponse } from "next/og";
import { getDictionary } from "@/content/i18n";
import { hasLocale } from "@/content/types";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const role = getDictionary(hasLocale(lang) ? lang : "es").hero.title[1];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#ffffff",
          color: "#232323",
          padding: 72,
          borderLeft: "24px solid #a1ffcb",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 500, lineHeight: 1.05 }}>
          José Meza
        </div>
        <div style={{ fontSize: 48, marginTop: 28 }}>{role}</div>
      </div>
    ),
    size,
  );
}
