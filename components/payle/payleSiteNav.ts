/** Navegação principal alinhada ao padrão visual do site (barra clara). */
export const PAYLE_HOME_HREF = "/inicio";

/** Links visíveis na barra desktop (fora do menu "Mais"). */
export const payleDesktopPrimaryNav = [
  { href: "/produto", label: "Produto" },
  { href: "/beneficios", label: "Benefícios" },
  { href: "/operacao", label: "Operações" },
  { href: "/integracoes", label: "Integrações" },
  { href: "/checkout", label: "Checkout" },
] as const;

export const PAYLE_FLUXO_HREF = "/fluxo";
export const PAYLE_CONTATO_HREF = "/contato";

/** Itens do dropdown "Mais" (desktop). */
export const payleMoreNav = [
  { href: "/recursos", label: "Recursos" },
  { href: "/planos", label: "Planos" },
  { href: "/duvidas", label: "Dúvidas" },
  { href: PAYLE_CONTATO_HREF, label: "Contato" },
  { href: PAYLE_FLUXO_HREF, label: "Ver fluxo" },
] as const;

/** Lista completa para menu mobile (sem dropdown). */
export const payleMobileNav = [...payleDesktopPrimaryNav, ...payleMoreNav] as const;

/** @deprecated Use payleDesktopPrimaryNav + payleMoreNav */
export const payleMainNav = payleMobileNav;

export function isPayleMoreNavActive(pathname: string) {
  return payleMoreNav.some((item) => pathname === item.href);
}
