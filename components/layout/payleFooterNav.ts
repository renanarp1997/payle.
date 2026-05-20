export type PayleFooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type PayleFooterGroup = {
  title: string;
  links: PayleFooterLink[];
};

/** Links do footer global — alinhados às rotas do site. */
export const payleFooterGroups: PayleFooterGroup[] = [
  {
    title: "Produto",
    links: [
      { label: "Checkout", href: "/checkout" },
      { label: "Produto", href: "/produto" },
      { label: "Recursos", href: "/recursos" },
      { label: "Benefícios", href: "/beneficios" },
    ],
  },
  {
    title: "Integrações",
    links: [
      { label: "Integrações", href: "/integracoes" },
      { label: "Operações", href: "/operacao" },
      { label: "Fluxo", href: "/fluxo" },
      { label: "Planos", href: "/planos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Início", href: "/inicio" },
      { label: "Dúvidas", href: "/duvidas" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Falar com a Payle", href: "/contato" },
      { label: "Ver checkout", href: "/checkout" },
      { label: "Ver fluxo", href: "/fluxo" },
    ],
  },
];

export const payleFooterBrand = {
  homeHref: "/inicio",
  description:
    "Checkout moderno para e-commerces, infoprodutores e operações digitais que precisam vender com mais clareza.",
};
