"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  IconActivity,
  IconArrowRight,
  IconCardLock,
  IconCheck,
  IconLayers,
  IconPlug,
  IconSpark,
  IconSupport,
  IconWallet
} from "./PayleIcons";
import { PAYLE_FLUXO_HREF } from "./payleSiteNav";

const heroOverlays = [
  { label: "Time humano", className: "left-3 top-3 sm:left-4 sm:top-4" },
  { label: "Operação entendida", className: "right-3 top-[16%] sm:right-4" },
  { label: "Integrações avaliadas", className: "left-3 top-[40%] sm:left-4" },
  { label: "Próximo passo claro", className: "right-3 bottom-24 sm:right-4 sm:bottom-28" }
] as const;

const conversationSteps = [
  { step: "01", label: "Você explica sua operação" },
  { step: "02", label: "Time entende checkout e canais" },
  { step: "03", label: "Integrações são avaliadas" },
  { step: "04", label: "Próximo passo é alinhado" },
  { step: "05", label: "Implantação acontece com contexto" }
] as const;

const helpSituations: { title: string; body: string; Icon: typeof IconWallet }[] = [
  {
    title: "Loja crescendo",
    body: "Os pedidos aumentaram e o time perdeu visibilidade.",
    Icon: IconLayers
  },
  {
    title: "Checkout confuso",
    body: "O cliente paga, mas ninguém entende o que aconteceu depois.",
    Icon: IconCardLock
  },
  {
    title: "Gateway e operação separados",
    body: "Muita informação espalhada entre ferramentas.",
    Icon: IconPlug
  },
  {
    title: "Suporte sem contexto",
    body: "Equipe pedindo comprovante toda hora.",
    Icon: IconSupport
  },
  {
    title: "Recuperação fraca",
    body: "Carrinho abandonado sem leitura do comportamento.",
    Icon: IconActivity
  }
];

const formBadges = [
  "Resposta humana",
  "Integração avaliada",
  "Suporte com contexto",
  "Implantação alinhada"
] as const;

const afterSteps = [
  { label: "Conversa inicial", detail: "Você conta como vende hoje" },
  { label: "Entendimento da operação", detail: "Checkout, canais e volume" },
  { label: "Proposta alinhada", detail: "Sem pacote empurrado" },
  { label: "Implantação", detail: "Com contexto da sua stack" },
  { label: "Acompanhamento", detail: "Time segue próximo" }
] as const;

const opsFeed = [
  { time: "agora", label: "Novo lead recebido", tone: "blue" as const },
  { time: "2 min", label: "Checkout avaliado", tone: "violet" as const },
  { time: "8 min", label: "Integração identificada", tone: "amber" as const },
  { time: "1 dia", label: "Proposta enviada", tone: "emerald" as const },
  { time: "3 dias", label: "Operação em onboarding", tone: "emerald" as const }
];

const testimonials = [
  {
    quote:
      "A primeira vez que conseguimos enxergar pedido, pagamento e suporte no mesmo fluxo.",
    name: "Marina S.",
    role: "E-commerce · moda"
  },
  {
    quote: "A conversa parecia mais consultoria do que comercial.",
    name: "Rafael T.",
    role: "Infoproduto · educação"
  },
  {
    quote: "A Payle entendeu nossa operação antes de sugerir qualquer mudança.",
    name: "Camila R.",
    role: "Operação · crescimento"
  }
] as const;

const closingItems = [
  "entender sua operação",
  "mapear gargalos",
  "avaliar integrações",
  "alinhar próximos passos"
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

const inputClass =
  "min-h-12 w-full rounded-2xl border border-slate-200/90 bg-white px-4 text-sm font-medium text-slate-950 shadow-[0_8px_24px_rgba(15,23,42,0.04)] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

export function PayleContatoHero({ ease }: { ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
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
            Contato
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Conversa clara antes do próximo passo.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Checkout, integração, operação e próximos passos alinhados em uma conversa objetiva — sem empurrar pacote.
          </p>
          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ ...ease, delay: 0.12 }}>
            <a
              href="#formulario-contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
            >
              Conversar com especialistas
              <IconArrowRight className="h-4 w-4" />
            </a>
            <Link
              href={PAYLE_FLUXO_HREF}
              className="inline-flex items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.12]"
            >
              Ver fluxo
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...ease, delay: 0.08 }}
          className="relative"
        >
          <motion.div
            className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-blue-500/15 blur-2xl"
            animate={reduce ? undefined : { opacity: [0.4, 0.7, 0.4] }}
            transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] p-2 shadow-[0_34px_110px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <motion.div className="relative h-[19rem] overflow-hidden rounded-[1.5rem] sm:h-[28rem]">
              <Image
                src="/payle-consultants-highfive.png"
                alt="Time Payle em conversa consultiva com cliente"
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover"
                priority
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
              {heroOverlays.map((o, i) => (
                <LiveBadge key={o.label} label={o.label} className={o.className} reduce={reduce} delay={0.1 + i * 0.06} animateOnMount />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ConversationFlow({
  viewport,
  ease,
  reduce
}: {
  viewport: { once: boolean; margin: string };
  ease: { duration: number; ease?: readonly [number, number, number, number] };
  reduce: boolean | null;
}) {
  return (
    <section className="relative overflow-hidden border-t border-slate-100 bg-white py-16 lg:py-24">
      <motion.div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Você explica seu cenário. A Payle organiza o caminho.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">Onboarding consultivo — do primeiro contato à implantação com contexto.</p>
        </motion.div>

        <motion.div
          className="relative mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...ease, delay: 0.06 }}
        >
          <motion.div className="pointer-events-none absolute left-8 top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-blue-400/50 via-emerald-400/30 to-transparent lg:block" />
          <motion.div className="grid gap-4 lg:grid-cols-5 lg:gap-3">
            {conversationSteps.map((item, i) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: i * 0.06 }}
                className="relative rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/80 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/60"
              >
                {i < conversationSteps.length - 1 && (
                  <motion.div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-blue-300 to-emerald-300 lg:block" aria-hidden />
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600">{item.step}</span>
                  <span className={`h-1.5 w-1.5 rounded-full bg-emerald-500 ${reduce ? "" : "animate-pulse"}`} aria-hidden />
                </div>
                <p className="mt-4 text-sm font-semibold leading-6 text-slate-900">{item.label}</p>
                <motion.div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-blue-500/10 blur-xl" />
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function HelpSituations({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="border-t border-slate-100 bg-[#f6f7f9] py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">O que a gente normalmente ajuda a resolver</h2>
          <p className="mt-3 text-base text-slate-600">Situações reais — sem cara de FAQ.</p>
        </motion.div>
        <motion.div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {helpSituations.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: i * 0.05 }}
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_44px_rgba(15,23,42,0.05)] transition hover:border-blue-200/80 hover:shadow-[0_20px_56px_rgba(37,99,235,0.08)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <item.Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function PremiumForm({ viewport, ease, reduce }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] }; reduce: boolean | null }) {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="formulario-contato" className="relative overflow-hidden bg-[#f8fbff] py-16 lg:py-24">
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_32%)]" />
      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={ease}
        >
          <motion.div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Fale com a Payle</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Conta como você vende hoje</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Resposta humana, sem formulário frio. A gente lê seu cenário antes de sugerir qualquer caminho.
            </p>

            <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <label className="block sm:col-span-1">
                <span className="sr-only">Nome</span>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  onFocus={() => setFocused("nome")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass} ${focused === "nome" ? "border-blue-400" : ""}`}
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="sr-only">WhatsApp</span>
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp com DDD"
                  onFocus={() => setFocused("whatsapp")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass} ${focused === "whatsapp" ? "border-blue-400" : ""}`}
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="sr-only">Loja ou site</span>
                <input
                  type="text"
                  placeholder="Loja, site ou canal principal"
                  onFocus={() => setFocused("loja")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass} ${focused === "loja" ? "border-blue-400" : ""}`}
                />
              </label>
              <label className="block sm:col-span-1">
                <span className="sr-only">Volume aproximado</span>
                <input
                  type="text"
                  placeholder="Volume aproximado de pedidos/mês"
                  onFocus={() => setFocused("volume")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass} ${focused === "volume" ? "border-blue-400" : ""}`}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="sr-only">O que você quer organizar</span>
                <textarea
                  rows={3}
                  placeholder="O que você quer organizar? (checkout, integração, suporte…)"
                  onFocus={() => setFocused("organizar")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass} min-h-[6.5rem] resize-none py-3 ${focused === "organizar" ? "border-blue-400" : ""}`}
                />
              </label>
              <motion.div className="flex flex-wrap items-center gap-3 sm:col-span-2" layout>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                  <span className={`h-1.5 w-1.5 rounded-full bg-emerald-500 ${reduce ? "" : "animate-pulse"}`} aria-hidden />
                  Resposta humana
                </span>
                <span className="text-xs text-slate-500">Sem robô · sem central fria</span>
              </motion.div>
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(37,99,235,0.28)] transition hover:bg-blue-700 sm:col-span-2"
              >
                Conversar no WhatsApp
                <IconArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-5 text-xs leading-6 text-slate-500">
              Ao continuar, você autoriza o contato da equipe Payle sobre produtos e serviços, conforme sua solicitação.
            </p>
          </motion.div>

          <motion.div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] ring-1 ring-slate-200/80 lg:min-h-0">
            <Image
              src="/payle-human-support.png"
              alt="Atendimento humano Payle"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
            <motion.div className="absolute inset-0 bg-gradient-to-l from-slate-950/40 via-transparent to-transparent lg:from-slate-950/55" />
            {formBadges.map((badge, i) => (
              <LiveBadge
                key={badge}
                label={badge}
                className={
                  i === 0
                    ? "left-4 top-4"
                    : i === 1
                      ? "right-4 top-[22%]"
                      : i === 2
                        ? "left-4 bottom-[38%]"
                        : "right-4 bottom-8"
                }
                reduce={reduce}
                delay={0.1 + i * 0.07}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function AfterContact({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">O próximo passo não vem no escuro.</h2>
          <p className="mt-3 text-base text-slate-600">Do primeiro contato ao acompanhamento — com transparência.</p>
        </motion.div>
        <motion.div className="relative mt-12">
          <motion.div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent lg:block" />
          <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {afterSteps.map((step, i) => (
              <motion.article
                key={step.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: i * 0.06 }}
                className="relative rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 text-center lg:text-left"
              >
                <span className="text-xs font-semibold text-blue-600">0{i + 1}</span>
                <h3 className="mt-3 text-sm font-semibold text-slate-950">{step.label}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-600">{step.detail}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function OperationPanel({
  viewport,
  ease,
  reduce
}: {
  viewport: { once: boolean; margin: string };
  ease: { duration: number; ease?: readonly [number, number, number, number] };
  reduce: boolean | null;
}) {
  return (
    <section className="border-t border-slate-100 bg-[#f6f7f9] py-16 lg:py-24">
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Operação real</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Do lead ao onboarding</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              O time acompanha cada etapa com contexto — não só “recebeu formulário”.
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
              <span className="font-mono text-[0.65rem] text-slate-500">payle · comercial</span>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-[0.62rem] font-semibold text-emerald-300">
                {reduce ? "ativo" : "ao vivo"}
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

function HumanProof({ viewport, ease }: { viewport: { once: boolean; margin: string }; ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="bg-white py-16 lg:py-24">
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
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/80 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
            >
              <p className="text-sm leading-7 text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <motion.div className="mt-6 flex items-center gap-3 border-t border-slate-200/80 pt-5">
                <motion.div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white">
                  <Image src="/payle-human-support.png" alt="" fill className="object-cover" sizes="40px" />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export function PayleContatoSections({ viewport }: { viewport: { once: boolean; margin: string } }) {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <ConversationFlow viewport={viewport} ease={ease} reduce={reduce} />
      <HelpSituations viewport={viewport} ease={ease} />
      <PremiumForm viewport={viewport} ease={ease} reduce={reduce} />
      <AfterContact viewport={viewport} ease={ease} />
      <OperationPanel viewport={viewport} ease={ease} reduce={reduce} />
      <HumanProof viewport={viewport} ease={ease} />
    </>
  );
}

export function PayleContatoClosingCta() {
  const reduce = useReducedMotion();
  const ease = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative overflow-hidden bg-[#060a12] text-white">
      <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(59,130,246,0.26),transparent_48%),radial-gradient(circle_at_88%_75%,rgba(16,185,129,0.1),transparent_42%)]" />
      <motion.div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={ease}>
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.65rem]">
              Quer entender como a Payle encaixa na sua operação?
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-400">
              Conta como você vende hoje. A gente mostra o que pode ficar mais claro entre checkout, pagamento, integração e
              suporte.
            </p>
            <ul className="mt-8 space-y-3">
              {closingItems.map((line) => (
                <li key={line} className="flex items-center gap-3 text-sm text-slate-300">
                  <IconCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                  {line}
                </li>
              ))}
            </ul>
            <a
              href="#formulario-contato"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_16px_48px_rgba(255,255,255,0.2),0_0_36px_rgba(59,130,246,0.18)] transition hover:bg-blue-50"
            >
              Conversar com especialistas
              <IconArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ ...ease, delay: 0.08 }}>
            <motion.div className="pointer-events-none absolute -inset-5 rounded-[2.25rem] bg-blue-500/22 blur-[4rem]" />
            <motion.div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] ring-1 ring-white/10 sm:min-h-[26rem] lg:min-h-[30rem]">
              <Image
                src="/payle-consultants-highfive.png"
                alt="Conversa consultiva sobre operação e checkout"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 580px, 100vw"
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/85 via-transparent to-transparent" />
              <motion.div className="absolute inset-0 bg-gradient-to-l from-[#060a12]/70 via-transparent to-transparent lg:from-[#060a12]/85" />
              <LiveBadge label="Operação entendida" className="left-5 top-5 sm:left-6 sm:top-6" reduce={reduce} delay={0.12} />
              <LiveBadge label="Consultoria real" detail="não central fria" className="right-5 bottom-10 sm:right-6 sm:bottom-12" reduce={reduce} delay={0.2} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
