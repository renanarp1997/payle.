"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { IconArrowRight, IconPayleMark } from "./PayleIcons";
import { PAYLE_CONTATO_HREF, PAYLE_FLUXO_HREF, PAYLE_HOME_HREF, payleMainNav } from "./payleSiteNav";

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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
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

        <nav className="hidden items-center gap-1 md:flex">
          <motion.div whileHover={reduce ? undefined : { y: -1 }}>
            <Link href={PAYLE_HOME_HREF} className={desktopNavClass(inicioActive)}>
              Início
            </Link>
          </motion.div>
          {payleMainNav.map((item) => (
            <motion.div key={item.href} whileHover={reduce ? undefined : { y: -1 }}>
              <Link href={item.href} className={desktopNavClass(pathname === item.href)}>
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <motion.div whileHover={reduce ? undefined : { x: 2 }}>
            <Link
              href={PAYLE_FLUXO_HREF}
              className={`text-sm font-semibold transition ${pathname === PAYLE_FLUXO_HREF ? "text-blue-700" : "text-slate-700 hover:text-blue-700"}`}
            >
              Ver fluxo
            </Link>
          </motion.div>
          <motion.div whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
            <Link
              href={PAYLE_CONTATO_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(15,23,42,0.22)] transition hover:bg-blue-700"
            >
              Falar com a Payle
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

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
      </div>

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
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              <Link href={PAYLE_HOME_HREF} className={mobileNavClass(inicioActive)} onClick={() => setOpen(false)}>
                Início
              </Link>
              {payleMainNav.map((item) => (
                <Link key={item.href} href={item.href} className={mobileNavClass(pathname === item.href)} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link href={PAYLE_FLUXO_HREF} className={mobileNavClass(pathname === PAYLE_FLUXO_HREF)} onClick={() => setOpen(false)}>
                Ver fluxo
              </Link>
              <Link
                href={PAYLE_CONTATO_HREF}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
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
