"use server";
import { cookies } from "next/headers";

export async function setLocale(lang: string) {
  const cookieStore = await cookies();
  cookieStore.set("locale", lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}
