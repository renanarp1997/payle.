"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { IconArrowRight, IconPayleMark } from "./PayleIcons";
import {
  PAYLE_CONTATO_HREF,
  PAYLE_HOME_HREF,
  isPayleMoreNavActive,
  payleDesktopPrimaryNav,
  payleMobileNav,
  payleMoreNav,
} from "./payleSiteNav";

function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

const LANDING_LIKE = new Set(["/inicio", "/", "/branco-azul"]);

function desktopNavClass(active: boolean) {
  return active
    ? "rounded-full px-3 py-2 text-sm font-medium bg-blue-50 text-blue-700 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.08)]"
    : "rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700";
}

function mobileNavClass(active: boolean) {
  return active ? "rounded-xl px-3 py-3 text-sm font-medium bg-blue-50 text-blue-700" : "rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100";
}

function NavMoreDropdown({
  pathname,
  reduce,
}: {
  pathname: string;
  reduce: boolean | null;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maisActive = isPayleMoreNavActive(pathname);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpen(false), 120);
  }, [clearCloseTimer]);

  const openMenu = useCallback(() => {
    clearCloseTimer();
    setOpen(true);
  }, [clearCloseTimer]);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

  return (
    <motion.div
      ref={rootRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        className={`inline-flex items-center gap-1 ${desktopNavClass(maisActive)}`}
        onClick={() => setOpen((v) => !v)}
      >
        Mais
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={2.25}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: reduce ? 0 : 6, scale: reduce ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduce ? 0 : 4, scale: reduce ? 1 : 0.98 }}
            transition={{ duration: reduce ? 0.01 : 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-[calc(100%+0.35rem)] z-50 w-[11.25rem] overflow-hidden rounded-xl border border-white/[0.08] bg-[#0B0F1A]/95 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.38)] backdrop-blur-xl"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            {payleMoreNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-blue-500/15 text-blue-300 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.2)]"
                      : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function PayleSiteHeader() {
  return (
    <Suspense fallback={<PayleSiteHeaderFallback />}>
      <PayleSiteHeaderInner />
    </Suspense>
  );
}

function PayleSiteHeaderFallback() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-slate-200/90 bg-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all" />
  );
}

function PayleSiteHeaderInner() {
  const pathname = usePathname() ?? "";
  const reduce = useReducedMotion();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const spring = reduce ? { duration: 0.01 } : { type: "spring" as const, stiffness: 360, damping: 30 };

  const inicioActive = LANDING_LIKE.has(pathname);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all ${
        scrolled ? "border-slate-200/90 bg-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.08)]" : "border-white/10 bg-white/70"
      }`}
    >
      <motion.div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
        <motion.div whileHover={reduce ? undefined : { scale: 1.02 }}>
          <Link href={PAYLE_HOME_HREF} className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-[0_12px_28px_rgba(37,99,235,0.32)]">
              <IconPayleMark className="h-5 w-5" />
            </span>
            <span className="text-lg text-slate-950">
              pay<span className="text-blue-600">le</span>
            </span>
          </Link>
        </motion.div>

        <nav className="hidden min-w-0 items-center gap-0.5 md:flex">
          <motion.div whileHover={reduce ? undefined : { y: -1 }}>
            <Link href={PAYLE_HOME_HREF} className={desktopNavClass(inicioActive)}>
              Início
            </Link>
          </motion.div>
          {payleDesktopPrimaryNav.map((item) => (
            <motion.div key={item.href} whileHover={reduce ? undefined : { y: -1 }}>
              <Link href={item.href} className={desktopNavClass(pathname === item.href)}>
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={reduce ? undefined : { y: -1 }}>
            <NavMoreDropdown pathname={pathname} reduce={reduce} />
          </motion.div>
        </nav>

        <motion.div className="hidden shrink-0 items-center md:flex" whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
          <Link
            href={PAYLE_CONTATO_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(15,23,42,0.22)] transition hover:bg-blue-700"
          >
            Falar com a Payle
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          whileTap={reduce ? undefined : { scale: 0.95 }}
        >
          <span className="flex flex-col gap-1.5">
            <motion.span className="block h-0.5 w-5 bg-slate-800" animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} transition={spring} />
            <motion.span className="block h-0.5 w-5 bg-slate-800" animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }} transition={{ duration: 0.15 }} />
            <motion.span className="block h-0.5 w-5 bg-slate-800" animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} transition={spring} />
          </span>
        </motion.button>
      </motion.div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0.01 : 0.25 }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <nav className="mx-auto flex max-h-[min(70vh,28rem)] max-w-7xl flex-col gap-0.5 overflow-y-auto overscroll-contain px-4 py-3">
              <Link href={PAYLE_HOME_HREF} className={mobileNavClass(inicioActive)} onClick={() => setOpen(false)}>
                Início
              </Link>
              {payleMobileNav.map((item) => (
                <Link key={item.href} href={item.href} className={mobileNavClass(pathname === item.href)} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link
                href={PAYLE_CONTATO_HREF}
                className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Falar com a Payle
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
