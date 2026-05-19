"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconCheck, IconSpark } from "./PayleIcons";
import { PAYLE_CONTATO_HREF } from "./payleSiteNav";

const heroOverlays = [
  { label: "Shopify sincronizada", className: "left-3 top-3 sm:left-4 sm:top-4" },
  { label: "Pix aprovado", className: "right-3 top-[18%] sm:right-4" },
  { label: "Gateway conectado", className: "left-3 top-[38%] sm:left-4" },
  { label: "Evento enviado", className: "right-3 top-[52%] sm:right-4" },
  { label: "Pedido atualizado", className: "left-3 bottom-24 sm:left-4 sm:bottom-28" }
] as const;

const ecosystemFlow = [
  { label: "Loja", status: "sincronizada" },
  { label: "Checkout", status: "ativo" },
  { label: "Gateway", status: "conectado" },
  { label: "Tracking", status: "enviando" },
  { label: "Recuperação", status: "contexto" },
  { label: "Dashboard", status: "visível" }
] as const;

const integrationCategories = [
  {
    title: "Lojas e canais",
    description: "Seu canal de venda conversando com pagamento e status.",
    chips: ["Shopify", "WooCommerce", "Nuvemshop", "Loja própria"]
  },
  {
    title: "Gateways",
    description: "Pix, cartão e boleto com sinais claros de aprovação.",
    chips: ["Asaas", "Mercado Pago", "PagSeguro", "Efí", "Stone", "Cielo", "Pagar.me", "Appmax"]
  },
  {
    title: "Produtos digitais",
    description: "Venda e liberação com mais clareza depois do pagamento.",
    chips: ["Hotmart", "Eduzz", "Kiwify", "Área de membros", "LMS"]
  },
  {
    title: "Operação e dados",
    description: "Mídia, analytics e back-office no mesmo ritmo.",
    chips: ["Tracking", "Meta", "Google Analytics", "Webhooks", "ERPs"]
  }
] as const;

const beforeStack = [
  "Loja em uma aba",
  "Gateway em outra",
  "Tracking separado",
  "Suporte sem contexto",
  "Pedido sem histórico claro"
];

const afterStack = [
  "Status centralizado",
  "Pagamento legível",
  "Eventos rastreados",
  "Recuperação com contexto",
  "Equipe olhando o mesmo fluxo"
];

const integrationFeed = [
  { time: "AGORA", message: "Shopify enviou novo pedido", tone: "blue" as const },
  { time: "HÁ 1 MIN", message: "Pix aprovado no gateway", tone: "emerald" as const },
  { time: "HÁ 3 MIN", message: "Evento enviado para Meta", tone: "violet" as const },
  { time: "HÁ 5 MIN", message: "Carrinho retomado", tone: "amber" as const },
  { time: "HÁ 8 MIN", message: "Pedido liberado", tone: "emerald" as const }
];

const useCases = [
  {
    title: "E-commerce",
    body: "Venda na Shopify ou WooCommerce e acompanhe pagamento, status e eventos sem perder contexto."
  },
  {
    title: "Infoprodutor",
    body: "Venda conteúdo digital e libere acesso com mais clareza depois da aprovação."
  },
  {
    title: "Agência",
    body: "Padronize integrações para diferentes clientes sem transformar cada operação em um projeto confuso."
  }
] as const;

const closingChecklist = ["entender sua stack atual", "identificar gargalos", "sugerir próximo passo"];

const photoFrame = "relative aspect-[5/4] w-full min-h-[18rem] overflow-hidden rounded-[2rem] sm:min-h-[22rem] lg:min-h-[26rem]";

function LiveBadge({
  label,
  detail,
  className,
  reduce,
  delay = 0
}: {
  label: string;
  detail?: string;
  className?: string;
  reduce: boolean | null;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={`absolute z-10 max-w-[11rem] rounded-xl border border-white/20 bg-white/[0.94] px-3 py-2 shadow-[0_16px_48px_rgba(0,0,0,0.18)] backdrop-blur-md ${className ?? ""}`}
    >
      <p className="flex items-center gap-2 text-[0.68rem] font-semibold text-slate-900">
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 ${reduce ? "" : "animate-pulse"}`} aria-hidden />
        {label}
      </p>
      {detail && <p className="mt-0.5 text-[0.6rem] text-slate-500">{detail}</p>}
    </motion.div>
  );
}

function feedTone(tone: (typeof integrationFeed)[number]["tone"]) {
  switch (tone) {
    case "emerald":
      return "border-emerald-400/25 bg-emerald-500/10 text-emerald-200";
    case "amber":
      return "border-amber-400/25 bg-amber-500/10 text-amber-200";
    case "violet":
      return "border-violet-400/25 bg-violet-500/10 text-violet-200";
    default:
      return "border-blue-400/25 bg-blue-500/10 text-blue-200";
  }
}

export function PayleIntegracoesHero({ ease }: { ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0a0f18] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_8%,rgba(59,130,246,0.32),transparent_38%),radial-gradient(circle_at_10%_90%,rgba(16,185,129,0.14),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:64px_64px] opacity-28" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 pb-14 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={ease}>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-blue-100">
              <IconSpark className="h-3 w-3 text-blue-300" />
              Integrações
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3rem]">
              Suas ferramentas conversando no mesmo fluxo.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Shopify, WooCommerce, gateways, ERPs, infoprodutos e automações deixam de trabalhar separados. A Payle organiza os
              sinais em volta do checkout, do pagamento e da operação.
            </p>
          </motion.div>

          <motion.div
            className={photoFrame}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.06 }}
          >
            <Image
              src="/payle-team-operation.png"
              alt="Equipe acompanhando integrações e operação de vendas"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18]/90 via-[#0a0f18]/20 to-transparent" />
            {heroOverlays.map((o, i) => (
              <LiveBadge key={o.label} label={o.label} className={o.className} reduce={reduce} delay={0.1 + i * 0.05} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EcosystemFlow({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="relative overflow-hidden border-t border-slate-200/70 bg-[#f6f7f9] py-16 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-400/12 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Ecossistema conectado</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Quando cada ferramenta fala uma língua, sua equipe perde tempo juntando pedaços. A Payle cria uma leitura única para
            acompanhar o que aconteceu na venda.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...ease, delay: 0.06 }}
        >
          <div className="payle-h-scroll flex gap-2 lg:grid lg:grid-cols-6">
            {ecosystemFlow.map((node, i) => (
              <div key={node.label} className="relative flex-1 px-0.5">
                {i > 0 && (
                  <div
                    className="absolute left-0 top-7 hidden h-px w-full -translate-x-1/2 bg-gradient-to-r from-blue-300/50 via-emerald-400/40 to-blue-300/50 lg:block"
                    aria-hidden
                  />
                )}
                <div className="relative z-10 w-full rounded-2xl border border-slate-200/90 bg-white px-3 py-4 text-center shadow-[0_12px_40px_rgba(15,23,42,0.06)] ring-1 ring-white">
                  <p className="text-sm font-semibold text-slate-950">{node.label}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-50 px-2 py-0.5 text-[0.62rem] font-medium text-emerald-700">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" aria-hidden />
                    {node.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryGrid({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Integrações por categoria</h2>
          <p className="mt-3 text-base text-slate-600">O que você já usa — organizado por papel no fluxo, não por lista solta.</p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {integrationCategories.map((cat, i) => (
            <motion.article
              key={cat.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/80 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
            >
              <h3 className="text-lg font-semibold text-slate-950">{cat.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{cat.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="border-t border-slate-100 bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Menos aba. Mais contexto.</h2>
        </motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.05 }}
            className="rounded-[1.75rem] border border-rose-200/70 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-600">Antes</p>
            <ul className="mt-6 space-y-3.5">
              {beforeStack.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.1 }}
            className="rounded-[1.75rem] border border-emerald-400/30 bg-gradient-to-br from-slate-950 to-[#0f172a] p-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.35)]"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Com Payle</p>
            <ul className="mt-6 space-y-3.5">
              {afterStack.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-6 text-slate-200">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LiveIntegrationFeed({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="relative overflow-hidden bg-[#0a0f18] py-16 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.1),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald-200">
            <span className={`h-1.5 w-1.5 rounded-full bg-emerald-400 ${reduce ? "" : "animate-pulse"}`} aria-hidden />
            Atividade ao vivo
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Integração acontecendo agora</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">Sinais passando entre loja, gateway, mídia e operação — em tempo real.</p>
        </motion.div>

        <motion.div
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-[0_32px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...ease, delay: 0.08 }}
        >
          <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-5">
            <span className="font-mono text-[0.65rem] text-slate-500">payle · integrações</span>
            <span
              className={`rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-0.5 text-[0.62rem] font-semibold text-emerald-300 ${reduce ? "" : ""}`}
            >
              sincronizado
            </span>
          </div>
          <ul className="divide-y divide-white/[0.06] p-2 sm:p-3">
            {integrationFeed.map((row, i) => (
              <motion.li
                key={row.message}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: 0.1 + i * 0.05 }}
                className="flex flex-wrap items-center gap-3 rounded-xl px-3 py-3 sm:px-4"
              >
                <span className={`shrink-0 rounded-lg border px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-wider ${feedTone(row.tone)}`}>
                  {row.time}
                </span>
                <span className="text-sm font-medium text-slate-100">{row.message}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function UseCases({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          Casos de uso
        </motion.h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {useCases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: i * 0.06 }}
              className="rounded-2xl border border-slate-200/80 bg-gradient-to-b from-slate-50 to-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
            >
              <h3 className="text-lg font-semibold text-slate-950">{c.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{c.body}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function PayleIntegracoesSections({ viewport }: { viewport: { once: boolean; margin: string } }) {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <EcosystemFlow viewport={viewport} ease={ease} />
      <CategoryGrid viewport={viewport} ease={ease} />
      <BeforeAfter viewport={viewport} ease={ease} />
      <LiveIntegrationFeed viewport={viewport} ease={ease} reduce={reduce} />
      <UseCases viewport={viewport} ease={ease} />
    </>
  );
}

export function PayleIntegracoesClosingCta() {
  const reduce = useReducedMotion();
  const ease = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative overflow-hidden bg-[#060a12] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.26),transparent_48%),radial-gradient(circle_at_88%_70%,rgba(16,185,129,0.1),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:56px_56px] opacity-22" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={ease}>
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.65rem]">
              Quer saber se a Payle encaixa no seu fluxo atual?
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-400">
              Conte quais ferramentas você usa hoje. A gente mostra como loja, gateway, checkout, tracking e operação podem
              conversar melhor — sem prometer troca radical.
            </p>
            <ul className="mt-8 space-y-3">
              {closingChecklist.map((line) => (
                <li key={line} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-px w-4 bg-slate-600" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
            <Link
              href={PAYLE_CONTATO_HREF}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_16px_48px_rgba(255,255,255,0.2),0_0_36px_rgba(59,130,246,0.18)] transition hover:bg-blue-50 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_20px_56px_rgba(255,255,255,0.24),0_0_44px_rgba(59,130,246,0.22)]"
            >
              Mapear minhas integrações
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ ...ease, delay: 0.08 }}>
            <div className="pointer-events-none absolute -inset-5 rounded-[2.25rem] bg-blue-500/20 blur-[4rem]" />
            <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] ring-1 ring-white/10 sm:min-h-[26rem] lg:min-h-[30rem]">
              <Image src="/payle-human-support.png" alt="Conversa sobre integrações da operação" fill className="object-cover" sizes="(min-width: 1024px) 580px, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/85 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#060a12]/70 via-transparent to-transparent lg:from-[#060a12]/85" />
              <LiveBadge label="Stack mapeada" detail="loja + gateway" className="left-5 top-5 sm:left-6 sm:top-6" reduce={reduce} delay={0.12} />
              <LiveBadge label="Próximo passo" detail="sem pressa" className="right-5 bottom-8 sm:right-6 sm:bottom-10" reduce={reduce} delay={0.2} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
