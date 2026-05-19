"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconCardLock, IconCheck, IconWallet } from "./PayleIcons";
import { PAYLE_CONTATO_HREF, PAYLE_FLUXO_HREF } from "./payleSiteNav";

const heroCards: [string, string, typeof IconWallet][] = [
  ["Mobile primeiro", "Uma jornada confortável para comprar pelo celular.", IconWallet],
  ["Pagamento simples", "Pix, cartão e boleto em uma tela direta, sem ruído.", IconCardLock],
  ["Aprovação visível", "Cliente entende o status e a equipe acompanha em tempo real.", IconCheck]
];

const customerJourney = [
  { step: "01", label: "Cliente abre checkout" },
  { step: "02", label: "Escolhe Pix, cartão ou boleto" },
  { step: "03", label: "Aprovação aparece claramente" },
  { step: "04", label: "Status sincroniza" },
  { step: "05", label: "Equipe acompanha sem caos" }
] as const;

const beforeOps = [
  "Cliente perdido na hora de pagar",
  "Suporte pedindo comprovante",
  "Pagamento sem contexto",
  "Abandono maior",
  "Prints no WhatsApp"
];

const afterOps = [
  "Status claro para quem compra",
  "Aprovação visível na hora",
  "Histórico organizado",
  "Recuperação com contexto",
  "Equipe vendo o mesmo fluxo"
];

const paymentMethods = [
  {
    id: "pix",
    name: "Pix",
    metric: "~2s confirmação",
    points: ["Aprovação rápida", "QR claro", "Confirmação visível"],
    tone: "emerald" as const
  },
  {
    id: "card",
    name: "Cartão",
    metric: "Parcelamento",
    points: ["Fluxo direto", "Menos distração", "Aprovação legível"],
    tone: "blue" as const
  },
  {
    id: "boleto",
    name: "Boleto",
    metric: "Status organizado",
    points: ["Geração simples", "Acompanhamento claro", "Menos ida e volta"],
    tone: "slate" as const
  }
];

const mobileBullets = ["Leitura clara", "CTA visível", "Menos etapas", "Confirmação objetiva"];

const opsFeed = [
  { time: "agora", label: "Pedido iniciado", tone: "blue" as const },
  { time: "1 min", label: "Pix pendente", tone: "amber" as const },
  { time: "2 min", label: "Pagamento aprovado", tone: "emerald" as const },
  { time: "3 min", label: "Evento enviado", tone: "violet" as const },
  { time: "5 min", label: "Suporte atualizado", tone: "emerald" as const }
];

const scenarios = [
  {
    title: "Loja Shopify",
    body: "Checkout organizado sem trocar sua operação inteira.",
    image: "/payle-customer-checkout.png"
  },
  {
    title: "Infoproduto",
    body: "Aprovação clara e entrega sincronizada.",
    image: "/payle-human-support.png"
  },
  {
    title: "Operação em crescimento",
    body: "Mais contexto quando o volume começa a subir.",
    image: "/payle-team-operation.png"
  }
] as const;

const closingItems = [
  "checkout mais claro",
  "menos atrito",
  "equipe com contexto",
  "experiência melhor no celular"
];

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

function feedTone(tone: (typeof opsFeed)[number]["tone"]) {
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

function paymentGlow(tone: (typeof paymentMethods)[number]["tone"]) {
  switch (tone) {
    case "emerald":
      return "from-emerald-500/10 to-transparent ring-emerald-400/20";
    case "blue":
      return "from-blue-500/10 to-transparent ring-blue-400/20";
    default:
      return "from-slate-500/10 to-transparent ring-slate-400/15";
  }
}

export function PayleCheckoutHero({ ease }: { ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(59,130,246,0.32),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(16,185,129,0.16),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[length:76px_76px] opacity-35" />

      <motion.div className="relative mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={ease}>
          <p className="inline-flex rounded-full border border-white/15 bg-white/[0.10] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
            Checkout
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Checkout claro para quem compra e simples para quem vende.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Pix, cartão, boleto e experiência mobile em uma interface objetiva, com aprovação visível e menos ansiedade para
            cliente e equipe.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={PAYLE_CONTATO_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
            >
              Conversar com especialistas
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={PAYLE_FLUXO_HREF}
              className="inline-flex items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.12]"
            >
              Ver fluxo
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...ease, delay: 0.08 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] p-2 shadow-[0_34px_110px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="relative h-[19rem] overflow-hidden rounded-[1.5rem] sm:h-[28rem]">
              <Image
                src="/payle-customer-checkout.png"
                alt="Cliente finalizando compra no celular com checkout Payle"
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
                {heroCards.map(([title, body, Icon]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/15 bg-white/[0.14] p-4 text-white shadow-lg backdrop-blur-xl"
                  >
                    <Icon className="h-5 w-5 text-emerald-300" />
                    <p className="mt-3 text-sm font-semibold">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function CustomerExperience({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="relative overflow-hidden border-t border-slate-100 bg-white py-16 lg:py-24">
      <motion.div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Menos dúvida na hora de pagar.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Checkout não é só cobrar. É fazer o cliente entender o que está acontecendo.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...ease, delay: 0.06 }}
        >
          <motion.div className="space-y-3">
            {customerJourney.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: i * 0.05 }}
                className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3.5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  {item.step}
                </span>
                <p className="text-sm font-medium text-slate-900">{item.label}</p>
                <span className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-emerald-500 sm:block" aria-hidden />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <motion.div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-blue-500/15 blur-2xl" />
            <motion.div className="relative aspect-[9/16] max-h-[32rem] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_32px_80px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/80">
              <Image
                src="/payle-customer-checkout.png"
                alt="Mockup mobile do checkout Payle"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 400px, 80vw"
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />
              <LiveBadge label="Pix aprovado" className="left-4 top-4" reduce={reduce} delay={0.1} />
              <LiveBadge label="Pagamento confirmado" className="right-4 top-[28%]" reduce={reduce} delay={0.16} />
              <LiveBadge label="Pedido sincronizado" className="left-4 bottom-24" reduce={reduce} delay={0.22} />
              <motion.div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 backdrop-blur-md">
                <p className="text-center text-xs font-medium text-white">Checkout Payle · mobile</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function OperationCompare({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="border-t border-slate-100 bg-[#f6f7f9] py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">O que muda na operação</h2>
        </motion.div>
        <motion.div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.05 }}
            className="rounded-[1.75rem] border border-rose-200/70 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-600">Antes</p>
            <ul className="mt-6 space-y-3.5">
              {beforeOps.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.1 }}
            className="rounded-[1.75rem] border border-emerald-400/30 bg-gradient-to-br from-slate-950 to-[#0f172a] p-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.35)]"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Com Payle</p>
            <ul className="mt-6 space-y-3.5">
              {afterOps.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-6 text-slate-200">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.article>
        </motion.div>
      </motion.div>
    </section>
  );
}

function PaymentMethods({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Pix, cartão e boleto no mesmo ritmo</h2>
          <p className="mt-3 text-base text-slate-600">Cada meio com confirmação clara — para o cliente e para sua equipe.</p>
        </motion.div>
        <motion.div className="mt-12 grid gap-5 md:grid-cols-3">
          {paymentMethods.map((pm, i) => (
            <motion.article
              key={pm.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] ring-1 ${paymentGlow(pm.tone)}`}
            >
              <motion.div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/40 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-950">{pm.name}</h3>
                  <IconCardLock className="h-5 w-5 text-blue-600/80" />
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{pm.metric}</p>
                <ul className="mt-5 space-y-2">
                  {pm.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="h-1 w-1 rounded-full bg-emerald-500" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function MobileFirst({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white lg:py-24">
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(59,130,246,0.22),transparent_50%),radial-gradient(circle_at_85%_70%,rgba(16,185,129,0.1),transparent_45%)]" />
      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Checkout pensado primeiro no celular.</h2>
            <p className="mt-4 text-base leading-8 text-slate-400">
              A maior parte das compras acontece no celular. O checkout precisa parecer leve, rápido e confiável.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {mobileBullets.map((b) => (
                <li key={b} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 text-sm text-slate-200">
                  <IconCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="relative mx-auto w-full max-w-xs" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ ...ease, delay: 0.08 }}>
            <motion.div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-blue-500/20 blur-3xl" />
            <motion.div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] ring-1 ring-white/15">
              <Image src="/payle-customer-checkout.png" alt="Checkout mobile Payle" fill className="object-cover" sizes="320px" />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <LiveBadge label="CTA visível" className="left-3 top-3" reduce={reduce} delay={0.12} />
              <LiveBadge label="Pix aprovado" detail="confirmação na tela" className="right-3 bottom-20" reduce={reduce} delay={0.18} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function RecoveryPanel({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="border-t border-slate-100 bg-[#f6f7f9] py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Recuperação e status</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Painel que acompanha o pagamento</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Do pedido iniciado ao suporte atualizado — sem caçar print em cinco lugares.
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/60"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.06 }}
          >
            <motion.div className="flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-5">
              <span className="font-mono text-[0.65rem] text-slate-500">payle · checkout</span>
              <span className={`rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-[0.62rem] font-semibold text-emerald-300 ${reduce ? "" : ""}`}>
                ao vivo
              </span>
            </motion.div>
            <ul className="divide-y divide-white/[0.06] p-2 sm:p-3">
              {opsFeed.map((row, i) => (
                <motion.li
                  key={row.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ ...ease, delay: 0.08 + i * 0.05 }}
                  className="flex flex-wrap items-center gap-3 rounded-xl px-3 py-3 sm:px-4"
                >
                  <span className={`rounded-lg border px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-wider ${feedTone(row.tone)}`}>
                    {row.time}
                  </span>
                  <span className="text-sm font-medium text-slate-100">{row.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function RealScenarios({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          Cenários reais
        </motion.h2>
        <motion.div className="mt-10 grid gap-6 md:grid-cols-3">
          {scenarios.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
            >
              <motion.div className="relative aspect-[16/10]">
                <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </motion.div>
              <motion.div className="p-5">
                <h3 className="text-lg font-semibold text-slate-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{s.body}</p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export function PayleCheckoutSections({ viewport }: { viewport: { once: boolean; margin: string } }) {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <CustomerExperience viewport={viewport} ease={ease} reduce={reduce} />
      <OperationCompare viewport={viewport} ease={ease} />
      <PaymentMethods viewport={viewport} ease={ease} />
      <MobileFirst viewport={viewport} ease={ease} reduce={reduce} />
      <RecoveryPanel viewport={viewport} ease={ease} reduce={reduce} />
      <RealScenarios viewport={viewport} ease={ease} />
    </>
  );
}

export function PayleCheckoutClosingCta() {
  const reduce = useReducedMotion();
  const ease = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative overflow-hidden bg-[#060a12] text-white">
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(59,130,246,0.26),transparent_48%),radial-gradient(circle_at_88%_75%,rgba(16,185,129,0.1),transparent_42%)]" />
      <motion.div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={ease}>
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.65rem]">
              Quer ver o checkout da Payle funcionando no seu cenário?
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-400">
              A gente entende sua operação atual e mostra como checkout, pagamento e status podem conversar melhor.
            </p>
            <ul className="mt-8 space-y-3">
              {closingItems.map((line) => (
                <li key={line} className="flex items-center gap-3 text-sm text-slate-300">
                  <IconCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                  {line}
                </li>
              ))}
            </ul>
            <Link
              href={PAYLE_CONTATO_HREF}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_16px_48px_rgba(255,255,255,0.2),0_0_36px_rgba(59,130,246,0.18)] transition hover:bg-blue-50"
            >
              Ver meu fluxo funcionando
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ ...ease, delay: 0.08 }}>
            <motion.div className="pointer-events-none absolute -inset-5 rounded-[2.25rem] bg-blue-500/22 blur-[4rem]" />
            <motion.div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] ring-1 ring-white/10 sm:min-h-[26rem] lg:min-h-[30rem]">
              <Image src="/payle-human-support.png" alt="Conversa sobre checkout e operação" fill className="object-cover" sizes="(min-width: 1024px) 580px, 100vw" />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/85 via-transparent to-transparent" />
              <motion.div className="absolute inset-0 bg-gradient-to-l from-[#060a12]/70 via-transparent to-transparent lg:from-[#060a12]/85" />
              <LiveBadge label="Checkout claro" className="left-5 top-5 sm:left-6 sm:top-6" reduce={reduce} delay={0.12} />
              <LiveBadge label="Menos abandono" detail="mais confiança" className="right-5 bottom-10 sm:right-6 sm:bottom-12" reduce={reduce} delay={0.2} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
