"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ComponentType, SVGProps } from "react";
import {
  IconActivity,
  IconArrowRight,
  IconBolt,
  IconCardLock,
  IconCheck,
  IconPanel,
  IconSpark,
  IconSupport,
  IconWallet,
  IconWebhook
} from "./PayleIcons";
import { PAYLE_CONTATO_HREF } from "./payleSiteNav";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const heroOverlays = [
  { label: "Produto organizado", className: "left-3 top-3 sm:left-4 sm:top-4" },
  { label: "Checkout claro", className: "right-3 top-[14%] sm:right-4" },
  { label: "Pagamento visível", className: "left-3 top-[36%] sm:left-4" },
  { label: "Aprovação sincronizada", className: "right-3 top-[52%] sm:right-4" },
  { label: "Entrega liberada", className: "left-3 bottom-24 sm:left-4 sm:bottom-28" }
] as const;

const fullFlow: { title: string; body: string; Icon: SvgIcon }[] = [
  { title: "Produto", body: "Oferta e dados da compra chegam organizados ao checkout.", Icon: IconWallet },
  { title: "Checkout", body: "Tela clara, mobile e sem ruído para quem compra.", Icon: IconPanel },
  { title: "Pagamento", body: "Pix, cartão ou boleto com status legível na hora.", Icon: IconCardLock },
  { title: "Aprovação", body: "Pedido aprovado e equipe avisada no mesmo instante.", Icon: IconCheck },
  { title: "Entrega", body: "Acesso ou produto liberado sem ida e volta.", Icon: IconBolt },
  { title: "Suporte", body: "Histórico, pagamento e pedido no mesmo lugar.", Icon: IconSupport }
];

const flowStatuses = ["Aprovado", "Evento enviado", "Cliente notificado", "Suporte atualizado"] as const;

const fragmentedOps = [
  "Prints no WhatsApp",
  "Pedidos perdidos entre ferramentas",
  "Cliente sem resposta clara",
  "Gateway separado da loja",
  "Suporte sem contexto do pedido"
];

const organizedOps = [
  "Checkout conectado ao pagamento",
  "Status sincronizado em tempo real",
  "Equipe alinhada no mesmo fluxo",
  "Entrega liberada automaticamente",
  "Contexto completo para suporte"
];

const teamVisibility = [
  { role: "Suporte", insight: "Pedido, pagamento e histórico no mesmo lugar.", Icon: IconSupport },
  { role: "Financeiro", insight: "Pagamentos e aprovações organizados.", Icon: IconCardLock },
  { role: "Operação", insight: "Volume e status sem planilha paralela.", Icon: IconActivity },
  { role: "Logística", insight: "Entrega liberada quando o pagamento confirma.", Icon: IconBolt },
  { role: "Mídia / tracking", insight: "Eventos enviados com contexto do pedido.", Icon: IconWebhook }
];

const automationEvents = [
  { label: "Pagamento aprovado", tone: "emerald" as const },
  { label: "Evento enviado", tone: "blue" as const },
  { label: "Mídia atualizada", tone: "violet" as const },
  { label: "Entrega liberada", tone: "emerald" as const },
  { label: "Cliente notificado", tone: "amber" as const }
];

const operationTimeline = [
  "Cliente entra",
  "Checkout",
  "Pagamento",
  "Aprovação",
  "Evento",
  "Entrega",
  "Suporte",
  "Pós-venda"
] as const;

const testimonials = [
  {
    quote: "Antes cada etapa ficava em uma ferramenta diferente.",
    name: "Lucas M.",
    role: "E-commerce · suplementos"
  },
  {
    quote: "O time finalmente entendeu o que aconteceu com cada pedido.",
    name: "Patrícia A.",
    role: "Operação · moda"
  },
  {
    quote: "O suporte parou de pedir comprovante o tempo inteiro.",
    name: "Diego F.",
    role: "Infoproduto · SaaS"
  }
] as const;

const closingItems = [
  "checkout organizado",
  "aprovação visível",
  "eventos sincronizados",
  "suporte com contexto",
  "operação mais clara"
] as const;

function LiveBadge({
  label,
  detail,
  className,
  reduce,
  delay = 0,
  animateOnMount = false
}: {
  label: string;
  detail?: string;
  className?: string;
  reduce: boolean | null;
  delay?: number;
  animateOnMount?: boolean;
}) {
  const motionProps = animateOnMount
    ? { initial: { opacity: 0, y: 8, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.45, delay } }
    : {
        initial: { opacity: 0, y: 8, scale: 0.96 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.45, delay }
      };

  return (
    <motion.div
      {...motionProps}
      className={`absolute z-10 max-w-[11.5rem] rounded-xl border border-white/20 bg-white/[0.94] px-3 py-2 shadow-[0_16px_48px_rgba(0,0,0,0.18)] backdrop-blur-md ${className ?? ""}`}
    >
      <p className="flex items-center gap-2 text-[0.68rem] font-semibold text-slate-900">
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 ${reduce ? "" : "animate-pulse"}`} aria-hidden />
        {label}
      </p>
      {detail && <p className="mt-0.5 text-[0.6rem] text-slate-500">{detail}</p>}
    </motion.div>
  );
}

function eventTone(tone: (typeof automationEvents)[number]["tone"]) {
  switch (tone) {
    case "emerald":
      return "border-emerald-400/30 bg-emerald-500/12 text-emerald-200";
    case "amber":
      return "border-amber-400/30 bg-amber-500/12 text-amber-200";
    case "violet":
      return "border-violet-400/30 bg-violet-500/12 text-violet-200";
    default:
      return "border-blue-400/30 bg-blue-500/12 text-blue-200";
  }
}

export function PayleFluxoHero({ ease }: { ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(59,130,246,0.32),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(16,185,129,0.16),transparent_26%)]"
        animate={reduce ? undefined : { opacity: [0.92, 1, 0.92] }}
        transition={reduce ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[length:76px_76px] opacity-35"
        animate={reduce ? undefined : { opacity: [0.28, 0.38, 0.28] }}
        transition={reduce ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="relative mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={ease}>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.10] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
            <IconSpark className="h-3 w-3 text-blue-300" />
            Fluxo
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Veja como a Payle conecta sua operação.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Produto, checkout, pagamento, aprovação e entrega deixam de funcionar separados e passam a conversar no mesmo
            fluxo.
          </p>
          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ ...ease, delay: 0.12 }}>
            <Link
              href={PAYLE_CONTATO_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
            >
              Conversar com especialista
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#fluxo-completo"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.12]"
            >
              Ver fluxo completo
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...ease, delay: 0.08 }}
          className="relative"
        >
          <motion.div
            className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-emerald-500/10 blur-2xl"
            animate={reduce ? undefined : { opacity: [0.35, 0.65, 0.35] }}
            transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] p-2 shadow-[0_34px_110px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <motion.div className="relative h-[19rem] overflow-hidden rounded-[1.5rem] sm:h-[28rem]">
              <Image
                src="/payle-team-operation.png"
                alt="Equipe Payle acompanhando o fluxo da operação"
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              {heroOverlays.map((o, i) => (
                <LiveBadge key={o.label} label={o.label} className={o.className} reduce={reduce} delay={0.1 + i * 0.05} animateOnMount />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FullFlowVisual({
  viewport,
  ease,
  reduce
}: {
  viewport: { once: boolean; margin: string };
  ease: { duration: number; ease?: readonly [number, number, number, number] };
  reduce: boolean | null;
}) {
  return (
    <section id="fluxo-completo" className="relative overflow-hidden border-t border-slate-100 bg-[#0a0f18] py-16 text-white lg:py-24">
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_80%_100%,rgba(16,185,129,0.08),transparent_40%)]" />
      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tudo conversa no mesmo fluxo.</h2>
          <p className="mt-4 text-base leading-8 text-slate-400">
            Do produto ao suporte — cada etapa conectada, com status visível para cliente e equipe.
          </p>
        </motion.div>

        <div className="payle-h-scroll relative mt-12">
          <motion.div className="pointer-events-none absolute left-8 right-8 top-[4.5rem] hidden h-px bg-gradient-to-r from-blue-500/40 via-emerald-400/50 to-blue-500/40 lg:block" />
          <motion.div className="flex gap-3 lg:grid lg:grid-cols-6 lg:gap-4" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ ...ease, delay: 0.06 }}>
            {fullFlow.map((step, i) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: i * 0.05 }}
                className="payle-h-scroll-item relative flex-1 rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur-sm lg:w-auto"
              >
                {i < fullFlow.length - 1 && (
                  <motion.div
                    className="absolute -right-2 top-12 z-10 hidden h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] lg:block"
                    animate={reduce ? undefined : { scale: [1, 1.2, 1] }}
                    transition={reduce ? undefined : { duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    aria-hidden
                  />
                )}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 ring-1 ring-blue-400/20">
                  <step.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-400">{step.body}</p>
                <div className="mt-3 flex items-center gap-1.5">
                  <IconCheck className="h-3 w-3 text-emerald-400" />
                  <span className="text-[0.65rem] font-medium text-emerald-300/90">sincronizado</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ ...ease, delay: 0.2 }}
        >
          {flowStatuses.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-200"
            >
              <IconCheck className="h-3 w-3" />
              {s}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function FragmentedCompare({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="border-t border-slate-100 bg-[#f6f7f9] py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Quando o fluxo quebra, a operação paga o preço</h2>
        </motion.div>
        <motion.div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.05 }}
            className="rounded-[1.75rem] border border-rose-200/70 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-600">Operação fragmentada</p>
            <ul className="mt-6 space-y-3.5">
              {fragmentedOps.map((t) => (
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
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Fluxo organizado com Payle</p>
            <ul className="mt-6 space-y-3.5">
              {organizedOps.map((t) => (
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

function CustomerClarity({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">O cliente enxerga clareza.</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Checkout simples, aprovação visível e próximos passos sem ansiedade — especialmente no celular.
            </p>
            <ul className="mt-8 space-y-3">
              {["Checkout objetivo", "Pix aprovado na tela", "Confirmação enviada", "Entrega liberada"].map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                  <IconCheck className="h-4 w-4 shrink-0 text-emerald-500" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="relative mx-auto w-full max-w-xs" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ ...ease, delay: 0.08 }}>
            <motion.div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-blue-500/15 blur-3xl" />
            <motion.div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_32px_80px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/80">
              <Image src="/payle-customer-checkout.png" alt="Cliente vendo status claro no checkout" fill className="object-cover object-top" sizes="320px" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/10" />
              <LiveBadge label="Pix aprovado" className="left-3 top-3" reduce={reduce} delay={0.1} />
              <LiveBadge label="Confirmação enviada" className="right-3 top-[30%]" reduce={reduce} delay={0.16} />
              <LiveBadge label="Entrega liberada" className="left-3 bottom-20" reduce={reduce} delay={0.22} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TeamContext({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="border-t border-slate-100 bg-[#f6f7f9] py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Sua equipe deixa de trabalhar no escuro.</h2>
          <p className="mt-3 text-base text-slate-600">Cada área enxerga o que precisa — no mesmo fluxo.</p>
        </motion.div>

        <motion.div
          className="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/60"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...ease, delay: 0.06 }}
        >
          <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-5">
            <span className="font-mono text-[0.65rem] text-slate-500">payle · operação</span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-[0.62rem] font-semibold text-emerald-300">
              {reduce ? "ativo" : "ao vivo"}
            </span>
          </div>
          <div className="grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-5">
            {teamVisibility.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: 0.08 + i * 0.04 }}
                className="bg-slate-950 p-4 sm:p-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/20">
                  <item.Icon className="h-4 w-4" />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{item.role}</p>
                <p className="mt-1.5 text-xs leading-5 text-slate-400">{item.insight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function EventsAutomation({
  viewport,
  ease,
  reduce
}: {
  viewport: { once: boolean; margin: string };
  ease: { duration: number; ease?: readonly [number, number, number, number] };
  reduce: boolean | null;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0a0f18] py-16 text-white lg:py-24">
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_50%)]" />
      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Eventos e automações em tempo real.</h2>
          <p className="mt-3 text-base text-slate-400">A operação acontecendo — sem você ficar caçando sinal em cinco lugares.</p>
        </motion.div>

        <motion.div
          className="relative mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...ease, delay: 0.06 }}
        >
          <motion.div className="pointer-events-none absolute left-4 right-4 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent md:block" />
          <motion.div className="grid gap-3 md:grid-cols-5">
            {automationEvents.map((ev, i) => (
              <motion.div
                key={ev.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ ...ease, delay: i * 0.06 }}
                className={`relative rounded-xl border px-4 py-4 text-center ${eventTone(ev.tone)}`}
              >
                <motion.div
                  className="mx-auto mb-2 h-1.5 w-1.5 rounded-full bg-emerald-400"
                  animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
                  transition={reduce ? undefined : { duration: 1.8, repeat: Infinity, delay: i * 0.25 }}
                  aria-hidden
                />
                <p className="text-xs font-semibold leading-5">{ev.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function OperationTimeline({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Timeline da operação.</h2>
          <p className="mt-3 text-base text-slate-600">Da entrada do cliente ao pós-venda — tudo conectado.</p>
        </motion.div>

        <motion.div className="payle-h-scroll relative mt-12" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ ...ease, delay: 0.06 }}>
          <motion.div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-blue-200 via-emerald-300 to-blue-200 md:block" />
          <motion.div className="flex gap-2 md:grid md:grid-cols-8 md:gap-1">
            {operationTimeline.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: i * 0.04 }}
                className="relative flex flex-col items-center px-2 text-center"
              >
                <motion.div
                  className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white text-xs font-semibold text-blue-600 shadow-sm ring-2 ring-white"
                  animate={reduce ? undefined : i === 3 ? { boxShadow: ["0 0 0 0 rgba(52,211,153,0)", "0 0 0 8px rgba(52,211,153,0.2)", "0 0 0 0 rgba(52,211,153,0)"] } : undefined}
                  transition={reduce ? undefined : { duration: 2.5, repeat: Infinity }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>
                <p className="mt-3 text-[0.7rem] font-medium leading-4 text-slate-800 sm:text-xs">{step}</p>
                {i < operationTimeline.length - 1 && (
                  <span className="mt-1 hidden text-slate-300 md:inline" aria-hidden>
                    →
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function HumanProof({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="border-t border-slate-100 bg-[#f6f7f9] py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          Prova humana
        </motion.h2>
        <motion.div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
            >
              <p className="text-sm leading-7 text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-200/80 pt-5">
                <motion.div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white">
                  <Image src="/payle-human-support.png" alt="" fill className="object-cover" sizes="40px" />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export function PayleFluxoSections({ viewport }: { viewport: { once: boolean; margin: string } }) {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <FullFlowVisual viewport={viewport} ease={ease} reduce={reduce} />
      <FragmentedCompare viewport={viewport} ease={ease} />
      <CustomerClarity viewport={viewport} ease={ease} reduce={reduce} />
      <TeamContext viewport={viewport} ease={ease} reduce={reduce} />
      <EventsAutomation viewport={viewport} ease={ease} reduce={reduce} />
      <OperationTimeline viewport={viewport} ease={ease} reduce={reduce} />
      <HumanProof viewport={viewport} ease={ease} />
    </>
  );
}

export function PayleFluxoClosingCta() {
  const reduce = useReducedMotion();
  const ease = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative overflow-hidden bg-[#060a12] text-white">
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(59,130,246,0.26),transparent_48%),radial-gradient(circle_at_88%_75%,rgba(16,185,129,0.1),transparent_42%)]" />
      <motion.div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={ease}>
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.65rem]">
              Quer enxergar sua operação funcionando em fluxo único?
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-400">
              A Payle conecta checkout, pagamento, status, entrega e suporte em uma jornada mais clara pra equipe e pro
              cliente.
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
              Conversar com especialista
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ ...ease, delay: 0.08 }}>
            <motion.div className="pointer-events-none absolute -inset-5 rounded-[2.25rem] bg-blue-500/22 blur-[4rem]" />
            <motion.div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] ring-1 ring-white/10 sm:min-h-[26rem] lg:min-h-[30rem]">
              <Image
                src="/payle-team-operation.png"
                alt="Equipe entendendo o fluxo da operação"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 580px, 100vw"
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/85 via-transparent to-transparent" />
              <motion.div className="absolute inset-0 bg-gradient-to-l from-[#060a12]/70 via-transparent to-transparent lg:from-[#060a12]/85" />
              <LiveBadge label="Fluxo único" className="left-5 top-5 sm:left-6 sm:top-6" reduce={reduce} delay={0.12} />
              <LiveBadge label="Aprovação visível" detail="eventos sincronizados" className="right-5 bottom-10 sm:right-6 sm:bottom-12" reduce={reduce} delay={0.2} />
              <LiveBadge label="Suporte com contexto" className="left-5 bottom-28 sm:left-6" reduce={reduce} delay={0.28} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
