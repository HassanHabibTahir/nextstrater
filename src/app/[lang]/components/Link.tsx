import { i18n } from "@/i18n.config";
import Link from "next/link";
import React from "react";

export default function CustomLink({
  href,
  lang,
  ...props
}: {
  href: string;
  lang: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  const isDefalultLang = lang === i18n.defaultLocale;
  const path = isDefalultLang ? href : `/${lang}${href}`;
  return <Link href={path} {...props}/>;
}
