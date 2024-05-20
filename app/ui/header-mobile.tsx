"use client";

import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { NavLinksMobile } from "./nav-links";
import { useState } from "react";

export default function HeaderMenuMobile() {
  const [statusMenu, setStatusMenu] = useState(false);

  function handleToggleMobileMenu() {
    setStatusMenu(!statusMenu);
  }
  return (
    <div className="p-4 pb-1 md:hidden fixed w-full bg-black -top-1 border-b border-gray-900 z-50">
      <div className="flex justify-between items-center">
        <Logo />
        <div onClick={handleToggleMobileMenu}>
          {statusMenu ? <X /> : <Menu />}
        </div>
      </div>
      <div
        className={`${
          statusMenu ? "w-full block" : "h-0"
        } bg-black w-full h-screen transition-all duration-700 overflow-hidden`}
      >
        <NavLinksMobile />
      </div>
    </div>
  );
}
