import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { defaultNavItems, NavItem } from "./navItem";
import { darkLogo, darkThemes, lightLogo } from "@/assets";
import { usePersistStore } from "@/store";
import { useTheme } from "next-themes";
import { getDictionary } from "@/lib/dictionary";
import CustomLink from "../../components/Link";
type Props = {
  collapsed: boolean;
  navItems?: NavItem[];
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
  lang: any;
};
const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed,
  lang,
}: Props) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  const { theme } = usePersistStore((state: any) => state);
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkTheme = darkThemes.includes(resolvedTheme ?? "");
  // const { navigation } =  getDictionary(lang)
  // console.log(navigation , "navigation")
  return (
    <div
      className={classNames({
        " bg-base-200  text-zinc-50 fixed md:static md:translate-x-0 z-20":
          true,
        "transition-all  ease-in-out": true,
        "w-[250px]": !collapsed,
        "w-0": collapsed,
        "-translate-x-full": !shown,
      })}
    >
      <div
        className={classNames({
          "flex flex-col justify-between h-screen md:h-full sticky inset-0":
            true,
        })}
      >
        {!collapsed && (
          <div
            className={classNames({
              "flex justify-between items-center  w-full transition-none p-4 py-4 h-20":
                true,
            })}
          >
            <span className=" text-base-content  lg:ml-8 xl:ml-12  whitespace-nowrap">
              {isDarkTheme ? (
                <Image
                  src={lightLogo}
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                  alt=""
                />
              ) : (
                <Image
                  src={darkLogo}
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                  alt=""
                />
              )}
            </span>
            <button
              className="grid place-content-center bg-base-200 text-base-content  md:hidden lg:hidden   h-10 w-10 rounded-full "
              onClick={() => setCollapsed(!collapsed)}
            >
              <Icon className="w-5 h-5" />
            </button>
          </div>
        )}
        {!collapsed && (
          <nav className="flex-grow">
            <ul
              className={classNames({
                "menu my-2 flex flex-col gap-2  items-stretch": true,
              })}
            >
              {navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={classNames({
                      "text-base-content flex": true,
                      "transition-colors duration-300": true,
                      "rounded-md  mx-3 gap-4 ": !collapsed,
                      "rounded-full  mx-3 w-10": collapsed,
                    })}
                  >
                    <CustomLink href={item.href} lang={lang}>
                      {item.icon} <span>{item.label}</span>
                    </CustomLink>
                 
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
