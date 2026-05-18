export type PayleThemeId = "azul-verde" | "branco-azul";

export type HeroPalette = "blue-green" | "white-blue";

export interface PayleTheme {
  id: PayleThemeId;
  homePath: string;
  altPath: string;
  altLabel: string;
  heroPalette: HeroPalette;
  /** Classes Tailwind */
  shell: string;
  fixedRadial: string;
  fixedGrid: string;
  headerIdle: string;
  headerScrolled: string;
  logoMark: string;
  logoWord: string;
  logoAccent: string;
  navLink: string;
  navUnderline: string;
  navGhost: string;
  navPrimary: string;
  navPrimaryHoverShadow: string;
  themeSwitcher: string;
  mobileBtnBorder: string;
  mobileBurger: string;
  mobilePanel: string;
  mobileLink: string;
  mobileCta: string;
  heroCard: string;
  heroChargeLabel: string;
  heroPixCard: string;
  heroPixText: string;
  heroMaxWidth: string;
  badge: string;
  badgeSpark: string;
  h1: string;
  h1Pix: string;
  heroLead: string;
  btnPrimary: string;
  btnSecondary: string;
  btnSecondaryHoverBorder: string;
  statCard: string;
  statHoverBorder: string;
  statLabel: string;
  statValue: string;
  statDesc: string;
  sectionProduct: string;
  sectionIntegrations: string;
  integrationPill: string;
  integrationSubhead: string;
  productKicker: string;
  sectionTitle: string;
  productLead: string;
  bodyMuted: string;
  apiList: string;
  codePost: string;
  codePath: string;
  codeBracket: string;
  codeSecret: string;
  productSvg: string;
  productPanelFill: string;
  recursosLead: string;
  recursosBolt: string;
  featureCard: string;
  featureGlow: string;
  featureIconBox: string;
  featureTitle: string;
  featureBody: string;
  sectionApi: string;
  codeBlock: string;
  planLead: string;
  planCard: string;
  planCardHi: string;
  planHiShimmer: string;
  planTitle: string;
  planPrice: string;
  planDesc: string;
  planCtaHi: string;
  planCtaLo: string;
  sectionContact: string;
  contactIconBox: string;
  contactPulse: [string, string, string];
  contactLead: string;
  input: string;
  submit: string;
  disclaimer: string;
  footer: string;
  footerLogo: string;
  footerBrand: string;
  footerAccent: string;
  footerCopy: string;
  footerLink: string;
  /** Ícones e destaques em cor de marca */
  accent: string;
  /** SVG / motion */
  svg: {
    heroRing: string;
    heroCheck: string;
    productCircle: string;
    productCheck: string;
    productBtn: string;
    productBtnText: string;
  };
  copy: {
    recursosTagline: string;
  };
}

const azulVerde: PayleTheme = {
  id: "azul-verde",
  homePath: "/",
  altPath: "/branco-azul",
  altLabel: "Tema claro",
  heroPalette: "blue-green",
  shell: "min-h-screen bg-[#030b14] text-slate-100",
  fixedRadial:
    "pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(56,189,248,0.14),transparent_55%)] motion-safe:animate-payle-pulse-glow",
  fixedGrid:
    "pointer-events-none fixed inset-0 bg-[length:64px_64px] bg-[position:0_0] bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] opacity-40 motion-safe:animate-payle-grid-drift",
  headerIdle: "border-white/5 bg-[#030b14]/70",
  headerScrolled: "border-white/10 bg-[#030b14]/95 shadow-[0_8px_32px_rgba(0,0,0,0.45)]",
  logoMark:
    "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-emerald-600 text-[#030b14] shadow-[0_0_24px_rgba(56,189,248,0.35)]",
  logoWord: "text-lg text-white",
  logoAccent: "text-emerald-400",
  navLink: "text-sm text-slate-400 transition-colors hover:text-emerald-400",
  navUnderline: "bg-emerald-500",
  navGhost: "text-sm text-slate-400 transition hover:text-white",
  navPrimary:
    "rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-[#030b14] shadow-[0_0_20px_rgba(16,185,129,0.28)]",
  navPrimaryHoverShadow: "0 0 28px rgba(52,211,153,0.45)",
  themeSwitcher:
    "hidden items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300 transition hover:border-emerald-500/40 hover:text-emerald-300 md:inline-flex",
  mobileBtnBorder: "border-white/10",
  mobileBurger: "bg-slate-200",
  mobilePanel: "overflow-hidden border-t border-white/5 bg-[#071018] md:hidden",
  mobileLink: "text-sm text-slate-200 hover:bg-white/5",
  mobileCta: "rounded-full bg-emerald-500 py-2.5 text-center text-sm font-medium text-[#030b14]",
  heroCard:
    "absolute right-7 top-[7.15rem] w-[16.9rem] rounded-2xl border border-emerald-500/30 bg-[#030b14]/50 p-[1.05rem] shadow-[0_0_52px_rgba(16,185,129,0.2)] backdrop-blur-sm xl:right-10 xl:top-[7.8rem] xl:w-[18.2rem] xl:p-6",
  heroChargeLabel: "mt-2.5 text-center font-mono text-sm text-slate-500 xl:text-base",
  heroPixCard:
    "absolute right-0 top-[2.275rem] w-[13.65rem] rounded-xl border border-white/10 bg-emerald-950/25 p-[0.975rem] backdrop-blur-md xl:top-[2.925rem] xl:w-[14.3rem] xl:p-4",
  heroPixText: "mt-2 text-center text-sm font-medium text-white xl:text-base",
  heroMaxWidth: "relative z-10 max-w-3xl lg:max-w-[min(36rem,calc(100%-17rem))] xl:max-w-3xl",
  badge:
    "mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300",
  badgeSpark: "text-emerald-400",
  h1: "text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl",
  h1Pix: "bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent",
  heroLead: "mt-6 max-w-xl text-lg text-slate-400",
  btnPrimary: "inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-[#030b14]",
  btnSecondary:
    "inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-emerald-400/50 hover:text-emerald-300",
  btnSecondaryHoverBorder: "rgba(52,211,153,0.45)",
  statCard:
    "rounded-2xl border border-white/10 bg-emerald-950/20 p-6 backdrop-blur-sm transition-colors",
  statHoverBorder: "rgba(52,211,153,0.35)",
  statLabel: "text-xs uppercase tracking-wider text-emerald-400",
  statValue: "mt-2 font-mono text-2xl font-semibold text-white",
  statDesc: "mt-1 text-sm text-slate-500",
  sectionProduct: "border-y border-white/5 bg-slate-950/40 py-20",
  sectionIntegrations: "border-y border-white/5 bg-[#030b14]/50 py-20",
  integrationPill:
    "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200",
  integrationSubhead: "text-sm font-semibold uppercase tracking-wider text-emerald-400",
  productKicker: "mb-3 inline-flex items-center gap-2 text-emerald-400",
  sectionTitle: "text-2xl font-semibold text-white sm:text-3xl",
  productLead: "mt-3 max-w-xl text-slate-400",
  bodyMuted: "text-slate-400",
  apiList: "mt-6 space-y-3 text-sm text-slate-400",
  codePost: "text-slate-500",
  codePath: "text-emerald-300",
  codeBracket: "text-slate-600",
  codeSecret: "text-emerald-400",
  productSvg: "relative z-[1] w-full max-w-md text-emerald-400",
  productPanelFill: "rgba(3,11,20,0.65)",
  recursosLead: "mt-2 max-w-lg text-slate-400",
  recursosBolt: "hidden h-14 w-14 text-emerald-500/35 sm:block",
  featureCard:
    "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition-colors hover:border-emerald-500/40",
  featureGlow: "pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl",
  featureIconBox:
    "relative flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 transition group-hover:border-emerald-400/50 group-hover:shadow-[0_0_24px_rgba(16,185,129,0.22)]",
  featureTitle: "relative mt-4 font-semibold text-white",
  featureBody: "relative mt-2 text-sm leading-relaxed text-slate-500",
  sectionApi: "border-y border-white/5 bg-emerald-950/15 py-20",
  codeBlock:
    "code-shimmer relative overflow-x-auto rounded-2xl border border-emerald-800/50 bg-[#020617] p-5 font-mono text-xs leading-relaxed text-emerald-100/90 shadow-[0_0_0_1px_rgba(16,185,129,0.08)] sm:text-sm",
  planLead: "mx-auto mt-3 max-w-xl text-slate-400",
  planCard: "relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#071018]/80 p-8",
  planCardHi:
    "relative flex flex-col overflow-hidden rounded-2xl border border-emerald-500/50 bg-gradient-to-b from-emerald-500/15 to-emerald-950/25 p-8 shadow-[0_0_40px_rgba(16,185,129,0.12)]",
  planHiShimmer: "linear-gradient(120deg, transparent 40%, rgba(52,211,153,0.15) 50%, transparent 60%)",
  planTitle: "relative mt-4 text-lg font-semibold text-white",
  planPrice: "relative mt-4 font-mono text-xl text-emerald-400",
  planDesc: "relative mt-2 flex-1 text-sm text-slate-500",
  planCtaHi: "bg-emerald-500 text-[#030b14] hover:bg-emerald-400",
  planCtaLo: "border border-white/15 text-white hover:border-emerald-400/50",
  sectionContact: "border-t border-white/5 bg-gradient-to-b from-emerald-900/25 to-[#030b14] py-20",
  contactIconBox:
    "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  contactPulse: [
    "0 0 0 0 rgba(16,185,129,0.45)",
    "0 0 0 16px rgba(16,185,129,0)",
    "0 0 0 0 rgba(16,185,129,0)"
  ],
  contactLead: "mt-3 text-slate-400",
  input:
    "w-full rounded-full border border-white/15 bg-[#030b14]/80 px-5 py-3 text-sm text-white outline-none ring-emerald-500/30 placeholder:text-slate-600 focus:border-emerald-500 focus:ring-2 sm:max-w-xs",
  submit: "inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-[#030b14]",
  disclaimer: "mt-4 text-xs text-slate-600",
  footer: "border-t border-white/10 py-12",
  footerLogo: "flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500 text-[#030b14]",
  footerBrand: "font-semibold text-white",
  footerAccent: "text-emerald-400",
  footerCopy: "text-slate-600",
  footerLink: "hover:text-emerald-400",
  accent: "text-emerald-400",
  svg: {
    heroRing: "#10b981",
    heroCheck: "#6ee7b7",
    productCircle: "#10b981",
    productCheck: "#6ee7b7",
    productBtn: "#10b981",
    productBtnText: "#030b14"
  },
  copy: {
    recursosTagline:
      "Checkout com identidade Payle: conversão, integrações nativas e rastreamento avançado — verde para aprovar, azul para confiar no fluxo."
  }
};

const brancoAzul: PayleTheme = {
  id: "branco-azul",
  homePath: "/branco-azul",
  altPath: "/",
  altLabel: "Tema escuro",
  heroPalette: "white-blue",
  shell: "min-h-screen bg-slate-50 text-slate-900",
  fixedRadial:
    "pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-10%,rgba(59,130,246,0.12),transparent_55%)] motion-safe:animate-payle-pulse-glow",
  fixedGrid:
    "pointer-events-none fixed inset-0 bg-[length:64px_64px] bg-[position:0_0] bg-[linear-gradient(rgba(59,130,246,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.07)_1px,transparent_1px)] opacity-60 motion-safe:animate-payle-grid-drift",
  headerIdle: "border-slate-200/90 bg-white/80",
  headerScrolled: "border-slate-200 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.08)]",
  logoMark:
    "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-[0_0_20px_rgba(37,99,235,0.35)]",
  logoWord: "text-lg text-slate-900",
  logoAccent: "text-blue-600",
  navLink: "text-sm text-slate-600 transition-colors hover:text-blue-600",
  navUnderline: "bg-blue-600",
  navGhost: "text-sm text-slate-600 transition hover:text-slate-900",
  navPrimary:
    "rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(37,99,235,0.25)]",
  navPrimaryHoverShadow: "0 0 28px rgba(59,130,246,0.45)",
  themeSwitcher:
    "hidden items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm transition hover:border-blue-300 hover:text-blue-700 md:inline-flex",
  mobileBtnBorder: "border-slate-200",
  mobileBurger: "bg-slate-700",
  mobilePanel: "overflow-hidden border-t border-slate-200 bg-white md:hidden",
  mobileLink: "text-sm text-slate-800 hover:bg-slate-100",
  mobileCta: "rounded-full bg-blue-600 py-2.5 text-center text-sm font-medium text-white",
  heroCard:
    "absolute right-7 top-[7.15rem] w-[16.9rem] rounded-2xl border border-blue-200 bg-white/90 p-[1.05rem] shadow-[0_12px_40px_rgba(37,99,235,0.12)] backdrop-blur-sm xl:right-10 xl:top-[7.8rem] xl:w-[18.2rem] xl:p-6",
  heroChargeLabel: "mt-2.5 text-center font-mono text-sm text-slate-500 xl:text-base",
  heroPixCard:
    "absolute right-0 top-[2.275rem] w-[13.65rem] rounded-xl border border-slate-200 bg-blue-50/90 p-[0.975rem] backdrop-blur-md xl:top-[2.925rem] xl:w-[14.3rem] xl:p-4",
  heroPixText: "mt-2 text-center text-sm font-medium text-slate-900 xl:text-base",
  heroMaxWidth: "relative z-10 max-w-3xl lg:max-w-[min(36rem,calc(100%-17rem))] xl:max-w-3xl",
  badge:
    "mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700",
  badgeSpark: "text-blue-600",
  h1: "text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl",
  h1Pix: "bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent",
  heroLead: "mt-6 max-w-xl text-lg text-slate-600",
  btnPrimary: "inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white",
  btnSecondary:
    "inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 hover:border-blue-400 hover:text-blue-700",
  btnSecondaryHoverBorder: "rgba(59,130,246,0.45)",
  statCard:
    "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors",
  statHoverBorder: "rgba(59,130,246,0.4)",
  statLabel: "text-xs uppercase tracking-wider text-blue-600",
  statValue: "mt-2 font-mono text-2xl font-semibold text-slate-900",
  statDesc: "mt-1 text-sm text-slate-500",
  sectionProduct: "border-y border-slate-200 bg-white py-20",
  sectionIntegrations: "border-y border-slate-200 bg-slate-50 py-20",
  integrationPill:
    "rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm",
  integrationSubhead: "text-sm font-semibold uppercase tracking-wider text-blue-600",
  productKicker: "mb-3 inline-flex items-center gap-2 text-blue-600",
  sectionTitle: "text-2xl font-semibold text-slate-900 sm:text-3xl",
  productLead: "mt-3 max-w-xl text-slate-600",
  bodyMuted: "text-slate-600",
  apiList: "mt-6 space-y-3 text-sm text-slate-600",
  codePost: "text-slate-500",
  codePath: "text-blue-400",
  codeBracket: "text-slate-500",
  codeSecret: "text-emerald-400",
  productSvg: "relative z-[1] w-full max-w-md text-blue-500",
  productPanelFill: "rgba(255,255,255,0.92)",
  recursosLead: "mt-2 max-w-lg text-slate-600",
  recursosBolt: "hidden h-14 w-14 text-blue-200 sm:block",
  featureCard:
    "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-blue-300",
  featureGlow: "pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-400/15 blur-2xl",
  featureIconBox:
    "relative flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 transition group-hover:border-blue-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  featureTitle: "relative mt-4 font-semibold text-slate-900",
  featureBody: "relative mt-2 text-sm leading-relaxed text-slate-600",
  sectionApi: "border-y border-slate-200 bg-slate-100/80 py-20",
  codeBlock:
    "code-shimmer code-shimmer-light relative overflow-x-auto rounded-2xl border border-slate-700 bg-slate-900 p-5 font-mono text-xs leading-relaxed text-slate-200 shadow-inner sm:text-sm",
  planLead: "mx-auto mt-3 max-w-xl text-slate-600",
  planCard: "relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm",
  planCardHi:
    "relative flex flex-col overflow-hidden rounded-2xl border border-blue-400 bg-gradient-to-b from-blue-50 to-white p-8 shadow-[0_0_36px_rgba(37,99,235,0.12)]",
  planHiShimmer: "linear-gradient(120deg, transparent 40%, rgba(59,130,246,0.12) 50%, transparent 60%)",
  planTitle: "relative mt-4 text-lg font-semibold text-slate-900",
  planPrice: "relative mt-4 font-mono text-xl text-blue-600",
  planDesc: "relative mt-2 flex-1 text-sm text-slate-600",
  planCtaHi: "bg-blue-600 text-white hover:bg-blue-500",
  planCtaLo: "border border-slate-300 text-slate-900 hover:border-blue-400",
  sectionContact: "border-t border-slate-200 bg-gradient-to-b from-blue-50 to-slate-50 py-20",
  contactIconBox:
    "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-600 shadow-sm",
  contactPulse: [
    "0 0 0 0 rgba(59,130,246,0.35)",
    "0 0 0 16px rgba(59,130,246,0)",
    "0 0 0 0 rgba(59,130,246,0)"
  ],
  contactLead: "mt-3 text-slate-600",
  input:
    "w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 outline-none ring-blue-500/25 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 sm:max-w-xs",
  submit: "inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white",
  disclaimer: "mt-4 text-xs text-slate-500",
  footer: "border-t border-slate-200 py-12",
  footerLogo: "flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white",
  footerBrand: "font-semibold text-slate-900",
  footerAccent: "text-blue-600",
  footerCopy: "text-slate-500",
  footerLink: "hover:text-blue-600",
  accent: "text-blue-600",
  svg: {
    heroRing: "#2563eb",
    heroCheck: "#38bdf8",
    productCircle: "#2563eb",
    productCheck: "#38bdf8",
    productBtn: "#2563eb",
    productBtnText: "#ffffff"
  },
  copy: {
    recursosTagline:
      "Checkout com identidade Payle: conversão, integrações e rastreamento — branco e azul para transmitir clareza e confiança ao comprador."
  }
};

export function getPayleTheme(id: PayleThemeId): PayleTheme {
  return id === "branco-azul" ? brancoAzul : azulVerde;
}
