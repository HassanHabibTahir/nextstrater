"use client";

import classNames from "classnames";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { useTheme } from "next-themes";
const Layout = (props: any) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div></div>;
  }

  return (
    <div data-theme={resolvedTheme}>
       <div className="w-full">
          <Navbar
            onMenuButtonClick={() => setShowSidebar((prev) => !prev)}
            setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
          />
          <div className="">{props.children}</div>
        </div>


      {/* <div
        className={classNames({
          "flex min-h-screen": true,
          "grid-cols-sidebar": !collapsed,
          "grid-cols-sidebar-collapsed": collapsed,
          "transition-[grid-template-columns] duration-300 ease-in-out": true,

          flex: true,
        })}
      >




        <Sidebar
          collapsed={collapsed}
          setCollapsed={setSidebarCollapsed}
          shown={showSidebar}
          lang={props?.lang}
        />
       
      </div> */}
    </div>
  );
};

export default Layout;
