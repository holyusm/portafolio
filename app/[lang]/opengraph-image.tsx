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
  const role = getDictionary(hasLocale(lang) ? lang : "es").hero.role;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#edf0ee",
          color: "#0e1b2c",
          padding: 72,
          borderBottom: "24px solid #f2b632",
        }}
      >
        <div style={{ fontSize: 190, fontWeight: 800, lineHeight: 0.9 }}>
          José Meza
        </div>
        <div style={{ fontSize: 48, marginTop: 28 }}>{role}</div>
      </div>
    ),
    size,
  );
}
