"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import { usePersistStore } from "@/store";
import { Constants } from "@/utils/constants";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n.config";
import { localeTranslations } from "@/utils";
import Link from "next/link";

type Props = {
  onMenuButtonClick(): void;
  setCollapsed(): void;
};
const Navbar = (props: Props) => {
  const pathName = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  const setSelectedTheme = async (t: string) => setTheme(t);
  const iconStyle = { width: 20, height: 20 };
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const pathNameisMissingLocal = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}`) && pathName !== `/${locale}`
    );

    if (pathNameisMissingLocal) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";
        segments.splice(1, 1);
        return segments.join("/");
      }
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  const ThemeItem = ({ th }: any) => (
    <button
      onClick={() => setSelectedTheme(th)}
      className="outline-base-content text-start outline-offset-4 [&amp;_svg]:visible"
      data-set-theme={th}
      key={th}
    >
      <span
        data-theme={th}
        className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer"
      >
        <span className="grid grid-cols-5 grid-rows-3">
          <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
            {resolvedTheme!.toLowerCase() === th!.toLowerCase() ? (
              <CheckIcon style={iconStyle} />
            ) : (
              ""
            )}
            <span className="flex-grow text-sm capitalize">{th}</span>{" "}
            <span className="flex h-full shrink-0 flex-wrap gap-1">
              <span className="bg-primary rounded-badge w-2"></span>{" "}
              <span className="bg-secondary rounded-badge w-2"></span>{" "}
              <span className="bg-accent rounded-badge w-2"></span>{" "}
              <span className="bg-neutral rounded-badge w-2"></span>
            </span>
          </span>
        </span>
      </span>
    </button>
  );

  return (
    <nav
      // data-theme={resolvedTheme}
      className={classNames({
        "items-center": true,
        "full md:w-full sticky z-10 shadow-sm h-[73px]": true,
      })}
    >
      <div className="navbar w-full bg-base-100 items-center">
        <div className="flex-1 ml-4 ">
          <div className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {process.env.NEXT_PUBLIC_NAME}
          </div>

          <div className="flex ml-2 space-x-4 mt-1">
            <div className="relative cursor-pointer">
              <Link href="/summer-trends">
                <div className="transition duration-300 ease-in-out hover:underline hover:text-blue-600">
                  Summer Trends
                </div>
              </Link>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition duration-300 ease-in-out transform scale-x-0 origin-left"></div>
            </div>
            <div className="relative cursor-pointer">
              <Link href="/summer-bbq">
                <div className="transition duration-300 ease-in-out hover:underline hover:text-blue-600">
                  Summer BBQ
                </div>
              </Link>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition duration-300 ease-in-out transform scale-x-0 origin-left"></div>
            </div>
            <div className="relative cursor-pointer">
              <Link href="/cooking-pleasure-provence">
                <div className="transition duration-300 ease-in-out hover:underline hover:text-blue-600">
                  Cooking pleasure & Provence
                </div>
              </Link>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition duration-300 ease-in-out transform scale-x-0 origin-left"></div>
            </div>
            <div className="relative cursor-pointer">
              <Link href="/specials-sale">
                <div className="transition duration-300 ease-in-out hover:underline hover:text-blue-600">
                  Specials & Sale
                </div>
              </Link>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition duration-300 ease-in-out transform scale-x-0 origin-left"></div>
            </div>
            <div className="relative cursor-pointer">
              <Link href="/cms">
                <div className="transition duration-300 ease-in-out hover:underline hover:text-blue-600">
                  CMS
                </div>
              </Link>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition duration-300 ease-in-out transform scale-x-0 origin-left"></div>
            </div>
            <div className="relative cursor-pointer">
              <Link href="/products">
                <div className="transition duration-300 ease-in-out hover:underline hover:text-blue-600">
                  Products
                </div>
              </Link>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition duration-300 ease-in-out transform scale-x-0 origin-left"></div>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown">
            <div className="dropdown-bottom dropdown-end">
              <div tabIndex={-1} role="button" className="btn btn-ghost">
                <span>theme</span>
                <ChevronDownIcon style={iconStyle} />
              </div>
              <div
                tabIndex={-1}
                className="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56  overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 "
              >
                <div className="grid grid-cols-1 gap-3 p-3">
                  {Constants.THEMES().map((th: string) => (
                    <ThemeItem th={th} key={th} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={-1} role="button" className="btn btn-ghost">
              <LanguageIcon style={{ width: 20, height: 20 }} />
              <ChevronDownIcon style={iconStyle} />
            </div>
            <div
              tabIndex={-1}
              className="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5"
            >
              <ul className="menu menu-sm gap-1">
                {i18n?.locales?.map((locale, index) => {
                  return (
                    <>
                      <li key={index}>
                        <Link href={redirectedPathName(locale)}>
                          <button className="active">
                            <span className="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50">
                              {locale}
                            </span>{" "}
                            <span className="font-[sans-serif]">
                              {localeTranslations[locale]}
                            </span>{" "}
                          </button>{" "}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
