"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconSpark } from "./PayleIcons";
import { PAYLE_CONTATO_HREF } from "./payleSiteNav";

const faqEditorial: { q: string; a: string }[] = [
  {
    q: "Preciso largar minha loja pra usar a Payle?",
    a: "Não. Encaixamos em volta do que você já tem — sem trocar de plataforma."
  },
  {
    q: "Meu time consegue acompanhar os pedidos sem caos?",
    a: "Pedido e pagamento no mesmo lugar, sem prints soltos."
  },
  {
    q: "Já uso gateway. Preciso mudar tudo?",
    a: "Na maioria dos casos, não. Usamos o que você já tem."
  },
  {
    q: "Demora muito pra colocar no ar?",
    a: "Na conversa, alinhamos prazo honesto pro seu cenário."
  },
  {
    q: "Quando o cliente chama, o suporte entende o pedido?",
    a: "Com histórico claro, sem pedir comprovante de novo."
  }
];

const liveSignals = [
  { label: "Pix aprovado", detail: "há 2 min", className: "left-4 top-4 sm:left-5 sm:top-5" },
  { label: "Pedido sincronizado", detail: "loja + gateway", className: "right-4 top-[32%] sm:right-5" },
  { label: "Evento enviado", detail: "mídia + analytics", className: "left-4 bottom-[28%] sm:left-5" },
  { label: "Suporte atualizado", detail: "contexto do pedido", className: "right-4 bottom-20 sm:right-5 sm:bottom-24" }
] as const;

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
      className={`absolute z-10 max-w-[10.5rem] rounded-xl border border-white/20 bg-white/[0.94] px-3 py-2 shadow-[0_16px_48px_rgba(0,0,0,0.18)] backdrop-blur-md ${className ?? ""}`}
    >
      <p className="flex items-center gap-2 text-[0.7rem] font-semibold text-slate-900">
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 ${reduce ? "" : "animate-pulse"}`}
          aria-hidden
        />
        {label}
      </p>
      {detail && <p className="mt-0.5 text-[0.62rem] text-slate-500">{detail}</p>}
    </motion.div>
  );
}

function AmbientBackdrop() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgba(59,130,246,0.14),transparent_55%),radial-gradient(ellipse_55%_45%_at_50%_55%,rgba(99,102,241,0.04),transparent_60%),radial-gradient(ellipse_60%_40%_at_90%_100%,rgba(16,185,129,0.09),transparent_50%),linear-gradient(180deg,#f8fafc_0%,#eef2f7_45%,#f4f6fa_100%)]" />
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-400/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-300/12 blur-[110px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_42%,rgba(255,255,255,0.45),transparent_68%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.016)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.016)_1px,transparent_1px)] bg-[length:48px_48px] opacity-50" aria-hidden />
    </>
  );
}

function FaqItem({
  item,
  index,
  viewport,
  ease
}: {
  item: { q: string; a: string };
  index: number;
  viewport: { once: boolean; margin: string };
  ease: { duration: number; ease?: readonly [number, number, number, number] };
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ ...ease, delay: index * 0.04 }}
      className="group border-t border-slate-200/60 pt-7 first:border-t-0 first:pt-0"
    >
      <div className="flex gap-4 sm:gap-5">
        <span className="mt-0.5 shrink-0 text-[0.65rem] font-semibold tabular-nums tracking-[0.2em] text-slate-300 transition-colors group-hover:text-blue-500">
          {num}
        </span>
        <div>
          <h3 className="text-lg font-semibold leading-[1.35] tracking-tight text-slate-950 sm:text-[1.2rem]">
            {item.q}
          </h3>
          <p className="mt-2 text-sm leading-[1.65] text-slate-500/95">{item.a}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function PayleDuvidasHero({ ease }: { ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  return (
    <section className="relative overflow-hidden bg-[#0a0f18] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(59,130,246,0.35),transparent_42%),radial-gradient(circle_at_8%_100%,rgba(16,185,129,0.16),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:64px_64px] opacity-30" />

      <motion.div
        className="relative mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8 lg:py-[4.25rem]"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={ease}
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-blue-100">
          <IconSpark className="h-3 w-3 text-blue-300" />
          Dúvidas
        </p>
        <h1 className="mt-4 text-[2.35rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl">
          O que quem vende online pergunta antes de decidir.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          Cinco respostas diretas. O resto, na conversa.
        </p>
      </motion.div>
    </section>
  );
}

function ConversationPanel({
  viewport,
  reduce
}: {
  viewport: { once: boolean; margin: string };
  reduce: boolean | null;
}) {
  const ease = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <aside className="lg:sticky lg:top-20 lg:self-start">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={ease}
      >
        <div className="pointer-events-none absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-blue-500/22 via-transparent to-emerald-500/12 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0c1220] via-[#0f172a] to-[#0a0f18] shadow-[0_20px_50px_rgba(15,23,42,0.35),0_48px_110px_rgba(15,23,42,0.42)] ring-1 ring-white/[0.12] ring-inset">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <div className="relative min-h-[19rem] sm:min-h-[22rem] lg:min-h-[26rem]">
            <Image
              src="/payle-team-operation.png"
              alt="Equipe em conversa sobre operação de vendas"
              fill
              className="object-cover object-[center_22%]"
              sizes="(min-width: 1024px) 480px, 90vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/25 to-[#0a0f18]/5" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-transparent to-transparent" />

            {liveSignals.map((signal, i) => (
              <LiveBadge
                key={signal.label}
                label={signal.label}
                detail={signal.detail}
                className={signal.className}
                reduce={reduce}
                delay={0.08 + i * 0.06}
              />
            ))}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0f18] to-transparent px-6 pb-6 pt-20 sm:px-7 sm:pb-7">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-blue-200/90">Conversa</p>
              <p className="mt-1.5 text-xl font-semibold tracking-tight text-white sm:text-2xl">Na conversa com a Payle</p>
            </div>
          </div>

          <div className="relative border-t border-white/[0.08] bg-white/[0.04] px-6 py-5 backdrop-blur-md sm:px-7">
            <Link
              href={PAYLE_CONTATO_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(255,255,255,0.15)] transition hover:bg-blue-50"
            >
              Agendar conversa
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </aside>
  );
}

export function PayleDuvidasSections({ viewport }: { viewport: { once: boolean; margin: string } }) {
  const reduce = useReducedMotion();
  const ease = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative overflow-hidden border-t border-slate-200/60">
      <AmbientBackdrop />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-14">
          <div className="order-2 lg:order-1">
            <motion.div
              className="mb-7 max-w-lg lg:mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={ease}
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-[1.7rem]">
                Respostas curtas. Sem manual.
              </h2>
              <p className="mt-2 text-sm text-slate-500">Linguagem de operação — não de central de ajuda.</p>
            </motion.div>

            <div className="rounded-2xl border border-white/90 bg-white/92 px-5 py-7 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-sm sm:px-7 sm:py-8">
              {faqEditorial.map((item, i) => (
                <FaqItem key={item.q} item={item} index={i} viewport={viewport} ease={ease} />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ConversationPanel viewport={viewport} reduce={reduce} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PayleDuvidasClosingCta() {
  const reduce = useReducedMotion();
  const ease = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="relative overflow-hidden bg-[#060a12] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(59,130,246,0.28),transparent_50%),radial-gradient(circle_at_85%_70%,rgba(16,185,129,0.12),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:56px_56px] opacity-25" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-14">
          <motion.div
            className="relative z-10 lg:py-4"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={ease}
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-blue-200/90">Próximo passo</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Vamos conversar sobre a sua operação?
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-400">
              Conte como você vende. Sem pacote empurrado — só clareza.
            </p>
            <Link
              href={PAYLE_CONTATO_HREF}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_16px_48px_rgba(255,255,255,0.2),0_0_36px_rgba(59,130,246,0.18)] transition hover:bg-blue-50 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_20px_56px_rgba(255,255,255,0.24),0_0_44px_rgba(59,130,246,0.22)]"
            >
              Conversar com a Payle
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ ...ease, delay: 0.08 }}
          >
            <div className="pointer-events-none absolute -inset-5 rounded-[2.25rem] bg-blue-500/22 blur-[4rem]" />
            <div className="relative min-h-[21rem] overflow-hidden rounded-[2rem] ring-1 ring-white/[0.12] sm:min-h-[25rem] lg:min-h-[30rem]">
              <Image
                src="/payle-human-support.png"
                alt="Atendimento humano com contexto do pedido"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 580px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/85 via-[#060a12]/15 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-[#060a12]/65 via-transparent to-transparent lg:from-[#060a12]/85" />

              <LiveBadge
                label="Suporte com contexto"
                detail="pedido + pagamento visíveis"
                className="bottom-6 left-6 sm:bottom-8 sm:left-8"
                reduce={reduce}
                delay={0.15}
              />
              <LiveBadge
                label="Operação ao vivo"
                detail="time alinhado"
                className="right-6 top-6 sm:right-8 sm:top-8"
                reduce={reduce}
                delay={0.22}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
