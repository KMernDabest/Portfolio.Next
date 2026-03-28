"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = navItems.map((i) => i.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    label: "About",
    href: "#about",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
      </svg>
    ),
  },
  {
    label: "Skills",
    href: "#skills",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.25 6.75L21 12l-6.75 2.25L12 21l-2.25-6.75L3 12l6.75-2.25L12 3z" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
  },
  {
    label: "Experience",
    href: "#experience",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

function SideNav() {
  const [expanded, setExpanded] = useState(false);
  const active = useActiveSection();

  return (
    <motion.nav
      animate={{ width: expanded ? 180 : 64 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-5 top-1/2 -translate-y-1/2 z-50 bg-white border-2 border-border rounded-2xl shadow-xl flex flex-col items-stretch py-4 gap-1 hidden md:flex"
    >
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-3 py-3 mx-1.5 rounded-xl text-text-secondary hover:text-accent hover:bg-surface transition-colors"
        aria-label="Toggle navigation"
      >
        <span className="shrink-0 w-[48px] flex items-center justify-center">
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d={expanded ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </span>
        <AnimatePresence>
          {expanded && (
            <motion.span
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              transition={{ duration: 0.15 }}
              className="text-sm font-semibold whitespace-nowrap overflow-hidden"
            >
              Menu
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <div className="w-full h-px bg-border mx-0 my-1" />

      {/* Nav items */}
      {navItems.map((item) => {
        const isActive = active === item.href.slice(1);
        return (
        <div key={item.href} className="relative group/item">
          <a
            href={item.href}
            className={`flex items-center gap-3 py-3 mx-1.5 rounded-xl transition-colors ${
              isActive
                ? "text-accent bg-surface"
                : "text-text-secondary hover:text-accent hover:bg-surface"
            }`}
          >
            <span className="shrink-0 w-[48px] flex items-center justify-center">{item.icon}</span>
            <AnimatePresence>
              {expanded && (
                <motion.span
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -4 }}
                  transition={{ duration: 0.15 }}
                  className="text-sm font-medium whitespace-nowrap overflow-hidden"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </a>
          {/* Tooltip — only show when collapsed */}
          {!expanded && (
            <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1 bg-white border border-border shadow-md text-text-secondary text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover/item:opacity-100 transition-opacity duration-150 z-50">
              {item.label}
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-border" />
            </div>
          )}
        </div>
        );
      })}
    </motion.nav>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-14">
        <a href="#home" className="text-xl font-bold text-primary tracking-tight">
          RS<span className="text-accent">.</span>
        </a>
        <a
          href="/files/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 border border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
        >
          <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="hidden xs:inline sm:inline">Download</span>Resume
        </a>
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Panel + tab handle */}
      <motion.div
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex items-center md:hidden"
        animate={{ x: open ? 0 : -160 }}
        initial={{ x: -160 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Nav panel */}
        <nav className="w-40 bg-white border border-border rounded-r-2xl shadow-xl py-4 flex flex-col gap-1">
          {navItems.map((navItem) => {
            const isActive = active === navItem.href.slice(1);
            return (
              <a
                key={navItem.href}
                href={navItem.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                  isActive
                    ? "text-accent bg-surface"
                    : "text-text-secondary hover:text-accent hover:bg-surface"
                }`}
              >
                <span className="shrink-0">{navItem.icon}</span>
                <span className="text-sm font-medium">{navItem.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Half-circle tab */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="w-5 h-10 rounded-r-full bg-white border border-l-0 border-border shadow-md flex items-center justify-center text-text-secondary hover:text-accent transition-colors"
        >
          <svg
            width={12}
            height={12}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </motion.div>
    </>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Rith Seyhak | Software Engineer</title>
        <meta name="description" content="Portfolio of Rith Seyhak — aspiring software engineer based in Phnom Penh, Cambodia." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-text antialiased">
        <Header />
        <SideNav />
        {children}
        <MobileNav />
      </body>
    </html>
  );
}
