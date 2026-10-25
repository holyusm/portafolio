import { NextResponse, type NextRequest } from "next/server";
import { defaultLang, hasLocale, locales, type Lang } from "./content/types";

function preferredLang(request: NextRequest): Lang {
  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const tag = part.split(";")[0].trim().slice(0, 2).toLowerCase();
    if (hasLocale(tag)) return tag;
  }
  return defaultLang;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLang = locales.some(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`),
  );
  if (hasLang) return;

  request.nextUrl.pathname = `/${preferredLang(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
