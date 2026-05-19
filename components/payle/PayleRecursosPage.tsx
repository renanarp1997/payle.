"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IconActivity,
  IconArrowRight,
  IconBolt,
  IconCardLock,
  IconCheck,
  IconPanel,
  IconPlug,
  IconSpark,
  IconSupport,
  IconWallet,
  IconWebhook
} from "./PayleIcons";
import { PAYLE_CONTATO_HREF, PAYLE_FLUXO_HREF } from "./payleSiteNav";

type FlowStep = {
  id: string;
  label: string;
  detail: string;
  tone: "slate" | "amber" | "emerald" | "blue" | "violet";
};

const ecosystemFlow: FlowStep[] = [
  { id: "checkout", label: "Checkout", detail: "Cliente na etapa de pagamento", tone: "blue" },
  { id: "recovery", label: "Recuperação", detail: "Abandono com contexto do carrinho", tone: "amber" },
  { id: "payment", label: "Pagamento", detail: "Pix ou cartão com aprovação visível", tone: "emerald" },
  { id: "tracking", label: "Tracking", detail: "Purchase → Meta e Google", tone: "violet" },
  { id: "analytics", label: "Analytics", detail: "Sinal limpo no GA4 e painéis", tone: "violet" },
  { id: "panel", label: "Painel operacional", detail: "Status único para a equipe", tone: "emerald" },
  { id: "support", label: "Suporte", detail: "Histórico e pagamento alinhados", tone: "blue" }
];

const ecosystemStatuses = [
  "Pagamento aprovado",
  "Evento enviado",
  "Recovery disparado",
  "Tracking sincronizado",
  "Suporte atualizado"
] as const;

const liveFeed = [
  { time: "agora", type: "ok", message: "payment.approved", detail: "Pix · pedido #2841 · R$ 189,90" },
  { time: "8s", type: "info", message: "recovery.sent", detail: "WhatsApp · template contextual" },
  { time: "22s", type: "ok", message: "tracking.event_dispatched", detail: "Purchase · campanha verão" },
  { time: "24s", type: "ok", message: "order.synced", detail: "Painel operacional atualizado" },
  { time: "25s", type: "info", message: "analytics.received", detail: "GA4 + Meta CAPI sincronizados" },
  { time: "31s", type: "muted", message: "support.context_updated", detail: "Histórico unificado" },
  { time: "45s", type: "warn", message: "checkout.abandoned", detail: "Pedido #2842 · recovery na fila" },
  { time: "1 min", type: "ok", message: "payment.approved", detail: "Cartão · pedido #2842" }
] as const;

const dashboardMetrics = [
  { label: "Pedidos hoje", value: "127", delta: "+12%" },
  { label: "Em recuperação", value: "8", delta: "3 ativos" },
  { label: "Eventos enviados", value: "342", delta: "última hora" },
  { label: "Aprovação Pix", value: "94%", delta: "média 7d" }
];

const activeStatuses = [
  { label: "Checkout", state: "3 sessões", tone: "blue" },
  { label: "Recuperação", state: "8 enviados", tone: "amber" },
  { label: "Pagamentos", state: "12 aprovados", tone: "emerald" },
  { label: "Analytics", state: "sincronizado", tone: "violet" }
];

const resourcesNarrative = [
  { from: "Checkout", to: "gera contexto", Icon: IconPanel },
  { from: "Recovery", to: "entende abandono", Icon: IconWebhook },
  { from: "Tracking", to: "recebe evento correto", Icon: IconBolt },
  { from: "Painel", to: "organiza operação", Icon: IconActivity },
  { from: "Analytics", to: "recebe sinal limpo", Icon: IconWallet },
  { from: "Suporte", to: "enxerga histórico", Icon: IconSupport }
] as const;

const beforeOps = [
  "Prints e comprovantes no WhatsApp",
  "Planilhas paralelas à loja",
  "Gateway separado da operação",
  "Suporte sem contexto do pedido",
  "Analytics inconsistente ou atrasado"
];

const afterOps = [
  "Contexto unificado em um fluxo",
  "Status claros para cliente e equipe",
  "Eventos sincronizados na hora",
  "Recuperação inteligente e contextual",
  "Equipe alinhada na mesma leitura"
];

const teamVision = [
  { role: "Suporte", insight: "Pedido, pagamento e histórico no mesmo lugar.", Icon: IconSupport },
  { role: "Financeiro", insight: "Aprovação e status sincronizados.", Icon: IconCardLock },
  { role: "Operação", insight: "Volume e fila sem planilha paralela.", Icon: IconActivity },
  { role: "Mídia", insight: "Eventos chegando com consistência.", Icon: IconBolt },
  { role: "Logística", insight: "Entrega liberada quando o pagamento confirma.", Icon: IconPlug }
];

const stackOuter = ["Shopify", "WooCommerce", "Meta", "Google"] as const;
const stackInner = ["Pix", "Cartão", "Recovery", "Webhooks", "Analytics"] as const;

const testimonials = [
  {
    quote: "A operação finalmente começou a conversar.",
    name: "Ana L.",
    role: "E-commerce · beleza"
  },
  {
    quote: "O suporte parou de pedir comprovante.",
    name: "Bruno K.",
    role: "Operação · moda"
  },
  {
    quote: "Os eventos chegaram limpos no analytics.",
    name: "Juliana P.",
    role: "Growth · infoproduto"
  },
  {
    quote: "Recuperação deixou de parecer spam.",
    name: "Marcos V.",
    role: "CRM · varejo"
  }
] as const;

const closingItems = [
  "tracking sincronizado",
  "pagamentos visíveis",
  "recovery contextual",
  "analytics organizado",
  "operação unificada"
] as const;

function flowTone(tone: FlowStep["tone"]) {
  switch (tone) {
    case "amber":
      return "border-amber-400/40 bg-amber-500/10 text-amber-100";
    case "emerald":
      return "border-emerald-400/40 bg-emerald-500/10 text-emerald-100";
    case "violet":
      return "border-violet-400/40 bg-violet-500/10 text-violet-100";
    case "blue":
      return "border-blue-400/40 bg-blue-500/10 text-blue-100";
    default:
      return "border-white/15 bg-white/5 text-slate-200";
  }
}

function feedTone(type: (typeof liveFeed)[number]["type"]) {
  switch (type) {
    case "warn":
      return "text-amber-300";
    case "ok":
      return "text-emerald-300";
    case "info":
      return "text-blue-300";
    default:
      return "text-slate-500";
  }
}

function statusTone(tone: string) {
  switch (tone) {
    case "amber":
      return "border-amber-400/30 bg-amber-500/10 text-amber-200";
    case "emerald":
      return "border-emerald-400/30 bg-emerald-500/10 text-emerald-200";
    case "violet":
      return "border-violet-400/30 bg-violet-500/10 text-violet-200";
    default:
      return "border-blue-400/30 bg-blue-500/10 text-blue-200";
  }
}

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

export function PayleRecursosHero({ ease }: { ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  const reduce = useReducedMotion();
  const [logTick, setLogTick] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setLogTick((t) => t + 1), 3200);
    return () => clearInterval(id);
  }, [reduce]);

  const visibleLogs = Array.from({ length: 5 }, (_, i) => liveFeed[(logTick + i) % liveFeed.length]);

  return (
    <section className="relative overflow-hidden bg-[#080c14] text-white">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgba(59,130,246,0.18),transparent),radial-gradient(circle_at_85%_70%,rgba(16,185,129,0.1),transparent_45%)]"
        animate={reduce ? undefined : { opacity: [0.85, 1, 0.85] }}
        transition={reduce ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:48px_48px]"
        animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={reduce ? undefined : { duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 py-14 pb-16 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={ease}
      >
        <motion.div
          className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ease, delay: reduce ? 0 : 0.04 }}
        >
          <motion.div>
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
              <span className="relative flex h-2 w-2">
                <span className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${reduce ? "" : "animate-ping"}`} />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Operação ao vivo
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[2.85rem]">
              Recursos que rodam juntos — como um sistema, não uma lista.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Checkout, recuperação, tracking e painel conversam em tempo real. Você vê o abandono, a retomada, o pagamento e o evento chegando no analytics — sem trocar de aba.
            </p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...ease, delay: reduce ? 0 : 0.1 }}
            >
              <Link
                href={PAYLE_CONTATO_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(255,255,255,0.12)] transition hover:bg-blue-50"
              >
                Conversar com a Payle
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={PAYLE_FLUXO_HREF}
                className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.10]"
              >
                Ver fluxo completo
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.08 }}
          >
            <motion.div
              className="pointer-events-none absolute -inset-3 rounded-2xl bg-blue-500/10 blur-2xl"
              animate={reduce ? undefined : { opacity: [0.3, 0.55, 0.3] }}
              transition={reduce ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 shadow-[0_32px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl ring-1 ring-white/5">
              <motion.div className="flex items-center justify-between border-b border-white/8 bg-slate-900/80 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[0.65rem] text-slate-400">payle.app · operação</span>
                </div>
                <motion.span
                  className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-0.5 text-[0.65rem] font-semibold text-emerald-300"
                  animate={reduce ? undefined : { opacity: [1, 0.65, 1] }}
                  transition={reduce ? undefined : { duration: 2.2, repeat: Infinity }}
                >
                  ao vivo
                </motion.span>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-2 border-b border-white/6 p-3 sm:grid-cols-4"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: reduce ? 0 : 0.16 } }
                }}
              >
                {dashboardMetrics.map((m) => (
                  <motion.div
                    key={m.label}
                    variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                    className="rounded-xl border border-white/8 bg-white/[0.04] px-3 py-2.5 ring-1 ring-white/5"
                    whileHover={reduce ? undefined : { borderColor: "rgba(59,130,246,0.35)" }}
                  >
                    <p className="text-[0.6rem] font-medium uppercase tracking-wider text-slate-500">{m.label}</p>
                    <p className="mt-0.5 text-lg font-semibold tabular-nums text-white">{m.value}</p>
                    <p className="text-[0.65rem] text-emerald-400/90">{m.delta}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="grid gap-3 p-3 sm:grid-cols-[1fr_1.1fr]">
                <div className="rounded-xl border border-white/8 bg-slate-900/50 p-3">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-slate-500">Status ativos</p>
                  <ul className="mt-2 space-y-1.5">
                    {activeStatuses.map((s, i) => (
                      <motion.li
                        key={s.label}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...ease, delay: reduce ? 0 : 0.28 + i * 0.05 }}
                        className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-xs ${statusTone(s.tone)}`}
                      >
                        <span className="font-medium">{s.label}</span>
                        <span className="tabular-nums opacity-90">{s.state}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-white/8 bg-black/40 p-3 font-mono text-[0.65rem] leading-relaxed">
                  <p className="mb-2 flex items-center justify-between text-[0.6rem] font-semibold uppercase tracking-wider text-slate-500">
                    <span>Log · eventos</span>
                    <span className={`h-1.5 w-1.5 rounded-full bg-emerald-400 ${reduce ? "" : "animate-pulse"}`} aria-hidden />
                  </p>
                  <ul className="max-h-[7.5rem] space-y-1.5 overflow-hidden">
                    {visibleLogs.map((row, i) => (
                      <motion.li
                        key={`${row.message}-${logTick}-${i}`}
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: i * 0.04 }}
                        className="flex gap-2"
                      >
                        <span className="shrink-0 text-slate-600">{row.time}</span>
                        <span className={feedTone(row.type)}>{row.message}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.div
                className="border-t border-white/6 px-3 py-2.5"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ease, delay: reduce ? 0 : 0.4 }}
              >
                <p className="flex items-center gap-2 text-xs text-slate-400">
                  <IconActivity className="h-3.5 w-3.5 text-emerald-400" />
                  Operação acompanhando checkout → pagamento → analytics
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function EcosystemConnected({
  viewport,
  ease,
  reduce
}: {
  viewport: { once: boolean; margin: string };
  ease: { duration: number; ease?: readonly [number, number, number, number] };
  reduce: boolean | null;
}) {
  return (
    <section id="ecossistema" className="relative overflow-hidden border-y border-slate-200/80 bg-[#0a0f18] py-16 text-white lg:py-24">
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.16),transparent_50%)]" />
      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Ecossistema conectado</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Tudo se conversa automaticamente.</h2>
          <p className="mt-4 text-base leading-8 text-slate-400">
            Do checkout ao suporte — cada camada dispara a próxima com contexto, não com planilha paralela.
          </p>
        </motion.div>

        <div className="payle-h-scroll relative mt-12">
          <motion.div
            className="pointer-events-none absolute left-6 right-6 top-[4.25rem] hidden h-px bg-gradient-to-r from-blue-500/30 via-emerald-400/50 to-violet-400/30 lg:block"
            animate={reduce ? undefined : { opacity: [0.4, 0.9, 0.4] }}
            transition={reduce ? undefined : { duration: 3, repeat: Infinity }}
          />
          <motion.div className="flex gap-3 lg:grid lg:grid-cols-7 lg:gap-2" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ ...ease, delay: 0.06 }}>
            {ecosystemFlow.map((step, i) => (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: i * 0.05 }}
                className="payle-h-scroll-item relative flex-1 rounded-2xl border border-white/10 bg-white/[0.05] p-4 shadow-[0_16px_48px_rgba(0,0,0,0.2)] ring-1 ring-white/8 lg:w-auto"
              >
                {i < ecosystemFlow.length - 1 && (
                  <motion.div
                    className="absolute -right-1.5 top-10 z-10 hidden h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)] lg:block"
                    animate={reduce ? undefined : { scale: [1, 1.25, 1] }}
                    transition={reduce ? undefined : { duration: 2, repeat: Infinity, delay: i * 0.25 }}
                    aria-hidden
                  />
                )}
                <span className="text-[0.65rem] font-bold tabular-nums text-slate-500">{(i + 1).toString().padStart(2, "0")}</span>
                <p className="mt-2 text-sm font-semibold">{step.label}</p>
                <p className="mt-1.5 text-xs leading-5 text-slate-400">{step.detail}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div className="mt-8 flex flex-wrap justify-center gap-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewport} transition={{ ...ease, delay: 0.15 }}>
          {ecosystemStatuses.map((s) => (
            <span key={s} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
              <IconCheck className="h-3 w-3" />
              {s}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...ease, delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-xs sm:p-5"
        >
          <motion.div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {ecosystemFlow.map((step, i) => (
              <span key={step.id} className="flex items-center gap-2">
                <span className={`rounded-md border px-2 py-1 ${flowTone(step.tone)}`}>{step.label}</span>
                {i < ecosystemFlow.length - 1 && <span className="text-slate-600">→</span>}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function LiveOperation({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white lg:py-24">
      <motion.div className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
      <motion.div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <motion.div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Operação ao vivo</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Central operacional moderna.</h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              Pagamentos, recuperação, eventos e status — feed ao vivo que sua equipe entende sem decifrar log técnico.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {dashboardMetrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewport}
                  transition={{ ...ease, delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 ring-1 ring-white/5"
                >
                  <p className="text-[0.65rem] uppercase tracking-wider text-slate-500">{m.label}</p>
                  <p className="mt-1 text-2xl font-semibold tabular-nums">{m.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.08 }}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_32px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl ring-1 ring-emerald-400/10"
          >
            <motion.div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold">Atividade recente</p>
                <p className="text-xs text-slate-500">Feed ao vivo · últimos minutos</p>
              </div>
              <motion.span
                className="rounded-full bg-emerald-500/20 px-3 py-1 text-[0.65rem] font-semibold text-emerald-300"
                animate={reduce ? undefined : { opacity: [1, 0.6, 1] }}
                transition={reduce ? undefined : { duration: 2, repeat: Infinity }}
              >
                sincronizado
              </motion.span>
            </motion.div>
            <ul className="mt-5 space-y-2">
              {liveFeed.map((row, i) => (
                <motion.li
                  key={`${row.message}-${i}`}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ ...ease, delay: i * 0.04 }}
                  className="flex gap-3 rounded-xl border border-white/8 bg-slate-900/60 px-3 py-2.5"
                >
                  <span className="w-10 shrink-0 text-[0.65rem] font-semibold uppercase text-slate-500">{row.time}</span>
                  <div className="min-w-0 flex-1">
                    <p className={`font-mono text-xs ${feedTone(row.type)}`}>{row.message}</p>
                    <p className="mt-0.5 text-xs text-slate-400">{row.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function ResourcesTogether({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Recursos trabalhando juntos</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Narrativa, não catálogo de features.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">Cada peça alimenta a próxima — com linhas luminosas e status reais.</p>
        </motion.div>

        <motion.div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resourcesNarrative.map((item, i) => (
            <motion.article
              key={item.from}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/80 p-5 shadow-[0_14px_44px_rgba(15,23,42,0.06)]"
            >
              <motion.div
                className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/10 blur-2xl"
                animate={reduce ? undefined : { opacity: [0.3, 0.6, 0.3] }}
                transition={reduce ? undefined : { duration: 4, repeat: Infinity, delay: i * 0.3 }}
              />
              <div className="relative flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                  <item.Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">{item.from}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-blue-600">
                    <IconArrowRight className="h-3.5 w-3.5" />
                    {item.to}
                  </p>
                </div>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[0.65rem] font-semibold text-emerald-800">
                <span className={`h-1 w-1 rounded-full bg-emerald-500 ${reduce ? "" : "animate-pulse"}`} aria-hidden />
                sincronizado
              </span>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function BeforeAfter({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-[#060a12] py-16 text-white lg:py-24">
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.12),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(16,185,129,0.08),transparent_45%)]" />
      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Antes vs depois</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Fragmentada ou viva.</h2>
        </motion.div>
        <motion.div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.article
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.05 }}
            className="rounded-[1.75rem] border border-rose-500/25 bg-rose-950/20 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-400">Operação fragmentada</p>
            <ul className="mt-8 space-y-4">
              {beforeOps.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-400" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <motion.span
              className="mt-8 inline-flex rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 text-xs text-rose-200"
              animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
              transition={reduce ? undefined : { duration: 2.5, repeat: Infinity }}
            >
              caos operacional
            </motion.span>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.1 }}
            className="rounded-[1.75rem] border border-emerald-400/35 bg-gradient-to-br from-slate-900/90 to-[#0f172a] p-8 shadow-[0_32px_90px_rgba(16,185,129,0.08)] ring-1 ring-emerald-400/20"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Fluxo organizado com Payle</p>
            <ul className="mt-8 space-y-4">
              {afterOps.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-6 text-slate-200">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {["evento enviado", "recovery ativo", "painel ao vivo"].map((b) => (
                <span key={b} className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-1 text-[0.65rem] font-semibold text-emerald-200">
                  {b}
                </span>
              ))}
            </div>
          </motion.article>
        </motion.div>
      </motion.div>
    </section>
  );
}

function CustomerVision({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Visão do cliente</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Menos ansiedade, mais clareza.</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Quando o fluxo funciona, quem compra sente: checkout simples, pagamento compreensível, aprovação visível e entrega mais rápida.
            </p>
            <ul className="mt-8 space-y-3">
              {["Checkout claro", "Pix aprovado na tela", "Confirmação enviada", "Entrega liberada"].map((b) => (
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
              <Image src="/payle-customer-checkout.png" alt="Cliente com status claro no checkout" fill className="object-cover object-top" sizes="320px" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/10" />
              <LiveBadge label="Pix aprovado" className="left-3 top-3" reduce={reduce} delay={0.1} />
              <LiveBadge label="Recuperação elegante" className="right-3 top-[28%]" reduce={reduce} delay={0.16} />
              <LiveBadge label="Confirmação enviada" className="left-3 bottom-24" reduce={reduce} delay={0.22} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function TeamVision({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="border-t border-slate-100 bg-[#f6f7f9] py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Visão da equipe</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">O que muda internamente.</h2>
          <p className="mt-3 text-base text-slate-600">Mini widgets premium — o que cada área consegue enxergar agora.</p>
        </motion.div>
        <motion.div
          className="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,0.12)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...ease, delay: 0.06 }}
        >
          <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-5">
            <span className="font-mono text-[0.65rem] text-slate-500">payle · visão interna</span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-[0.62rem] font-semibold text-emerald-300">
              {reduce ? "ativo" : "ao vivo"}
            </span>
          </div>
          <motion.div className="grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-5">
            {teamVision.map((item, i) => (
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
                <p className="mt-3 font-mono text-[0.6rem] text-emerald-400/80">widget · ok</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ConnectedStack({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  return (
    <section className="relative overflow-hidden bg-[#0a0f18] py-16 text-white lg:py-24">
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12),transparent_55%)]" />
      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Stack conectada</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Tudo converge no checkout Payle.</h2>
          <p className="mt-4 text-base text-slate-400">Loja, mídia, pagamento e dados — ecossistema vivo, não lista de logos.</p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-14 max-w-3xl"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ ...ease, delay: 0.08 }}
        >
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl"
            animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={reduce ? undefined : { duration: 5, repeat: Infinity }}
          />
          <motion.div className="relative flex flex-col items-center justify-center rounded-[2rem] border border-blue-400/30 bg-gradient-to-br from-blue-600/20 to-emerald-600/10 px-8 py-10 shadow-[0_24px_80px_rgba(59,130,246,0.15)] ring-1 ring-white/10">
            <IconSpark className="h-6 w-6 text-blue-300" />
            <p className="mt-3 text-xl font-semibold">Checkout Payle</p>
            <p className="mt-1 text-xs text-slate-400">núcleo do ecossistema</p>
          </motion.div>

          <motion.div className="mt-8 flex flex-wrap justify-center gap-2">
            {stackOuter.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: 0.1 + i * 0.04 }}
                className="rounded-xl border border-white/12 bg-white/[0.06] px-4 py-2.5 text-xs font-semibold ring-1 ring-white/5"
              >
                {name}
              </motion.span>
            ))}
          </motion.div>
          <motion.div className="mt-4 flex flex-wrap justify-center gap-2">
            {stackInner.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: 0.2 + i * 0.04 }}
                className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-100"
              >
                {name}
              </motion.span>
            ))}
          </motion.div>
          <motion.p className="mt-8 text-center text-xs text-slate-500" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewport} transition={{ ...ease, delay: 0.35 }}>
            <IconPlug className="mr-1 inline h-3.5 w-3.5 text-blue-400" />
            Integrações conversando sem trocar sua stack inteira
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function HumanProof({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          Prova humana
        </motion.h2>
        <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: i * 0.05 }}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/80 p-5 shadow-[0_14px_44px_rgba(15,23,42,0.06)]"
            >
              <p className="text-sm leading-7 text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-200/80 pt-4">
                <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white">
                  <Image src="/payle-human-support.png" alt="" fill className="object-cover" sizes="36px" />
                </div>
                <motion.div>
                  <p className="text-sm font-semibold text-slate-950">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export function PayleRecursosSections({ viewport }: { viewport: { once: boolean; margin: string } }) {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <EcosystemConnected viewport={viewport} ease={ease} reduce={reduce} />
      <LiveOperation viewport={viewport} ease={ease} reduce={reduce} />
      <ResourcesTogether viewport={viewport} ease={ease} reduce={reduce} />
      <BeforeAfter viewport={viewport} ease={ease} reduce={reduce} />
      <CustomerVision viewport={viewport} ease={ease} reduce={reduce} />
      <TeamVision viewport={viewport} ease={ease} reduce={reduce} />
      <ConnectedStack viewport={viewport} ease={ease} reduce={reduce} />
      <HumanProof viewport={viewport} ease={ease} />
    </>
  );
}

export function PayleRecursosClosingCta() {
  const reduce = useReducedMotion();
  const ease = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative overflow-hidden bg-[#060a12] text-white">
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(59,130,246,0.26),transparent_48%),radial-gradient(circle_at_88%_75%,rgba(16,185,129,0.1),transparent_42%)]" />
      <motion.div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={ease}>
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.65rem]">
              Quer ver seus recursos funcionando como sistema?
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-400">
              A Payle conecta checkout, recuperação, tracking, pagamento e operação em um fluxo mais claro pra equipe e pro
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
              Conversar com a Payle
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ ...ease, delay: 0.08 }}>
            <motion.div className="pointer-events-none absolute -inset-5 rounded-[2.25rem] bg-blue-500/22 blur-[4rem]" />
            <motion.div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] ring-1 ring-white/10 sm:min-h-[26rem] lg:min-h-[30rem]">
              <Image
                src="/payle-team-operation.png"
                alt="Equipe acompanhando recursos conectados"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 580px, 100vw"
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/85 via-transparent to-transparent" />
              <motion.div className="absolute inset-0 bg-gradient-to-l from-[#060a12]/70 via-transparent to-transparent lg:from-[#060a12]/85" />
              <LiveBadge label="Tracking sincronizado" className="left-5 top-5 sm:left-6 sm:top-6" reduce={reduce} delay={0.12} />
              <LiveBadge label="Recovery contextual" detail="evento enviado" className="right-5 top-[22%] sm:right-6" reduce={reduce} delay={0.18} />
              <LiveBadge label="Operação unificada" className="left-5 bottom-12 sm:left-6 sm:bottom-14" reduce={reduce} delay={0.24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
