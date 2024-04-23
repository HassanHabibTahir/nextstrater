
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useEffect } from "react";


import { Locale, i18n } from "@/i18n.config";
import { ThemeProvider } from "./providers";
import Layout from "./ui/Layout";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "XStore",
  description: "XStore is a top-notch high-tech online marketplace.",
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html   lang={params.lang}>
      <body   className={inter.className}>
         <ThemeProvider>
         <Layout lang={params.lang}>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
