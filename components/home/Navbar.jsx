"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center ">
      <Navbar className="bg-teal-200 font-sans border border-emerald-900/20" />
    </div>
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    
  ];
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="text-lg font-semibold tracking-wide text-black dark:text-white"
        >
          NITYA UMRAO
        </a>
        <Menu setActive={setActive}>
          {navItems.map(({ label, href }) => (
            <MenuItem
              key={label}
              setActive={setActive}
              active={active}
              item={label}
              href={href}
            />
          ))}
        </Menu>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/40 bg-transparent text-black transition hover:border-black/60 hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-white/40 dark:text-white dark:hover:border-white dark:hover:bg-white/10 dark:focus-visible:outline-white"
          aria-label="Toggle theme"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
            <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
            <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
          </svg>
        </button>
      </div>
    </header>
  );
}
export default Navbar;