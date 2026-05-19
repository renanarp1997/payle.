"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { IconActivity, IconArrowRight, IconCardLock, IconSpark } from "./PayleIcons";
import { PAYLE_CONTATO_HREF } from "./payleSiteNav";

const topBadges = ["Gateway sob sua gestão", "Liquidação PIX ágil", "Atribuição e métricas"];

const linePoints = [4, 8, 6, 12, 10, 16, 14, 20];

function HeroLineChart() {
  const w = 120;
  const h = 36;
  const max = Math.max(...linePoints);
  const coords = linePoints
    .map((v, i) => {
      const x = (i / (linePoints.length - 1)) * w;
      const y = h - (v / max) * (h - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-9 w-full" aria-hidden>
      <defs>
        <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke="url(#heroLineGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points={coords} />
    </svg>
  );
}

function HeroBarChart() {
  const bars = [38, 52, 44, 68, 58, 82];
  return (
    <div className="flex h-9 items-end gap-1" aria-hidden>
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-violet-500 via-blue-500 to-cyan-400"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function MetricCard({
  title,
  value,
  trend,
  chart,
  className,
}: {
  title: string;
  value: string;
  trend: string;
  chart: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`rounded-2xl border border-white/12 bg-slate-950/55 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-3.5 ${className ?? ""}`}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <p className="text-[0.65rem] font-medium text-slate-400 sm:text-xs">{title}</p>
      <div className="mt-1 flex items-end justify-between gap-2">
        <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">{value}</p>
        <span className="shrink-0 text-[0.65rem] font-semibold text-emerald-400 sm:text-xs">{trend}</span>
      </div>
      <div className="mt-2">{chart}</div>
    </motion.div>
  );
}

export function PayleHero() {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.07 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: ease },
  };

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(59,130,246,0.2),transparent_40%),radial-gradient(circle_at_88%_68%,rgba(59,130,246,0.08),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:72px_72px] opacity-40" />

      <motion.div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-8 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Coluna esquerda */}
        <motion.div variants={container} initial="hidden" animate="show" className="min-w-0">
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {topBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[0.65rem] font-medium text-slate-300 sm:px-3 sm:py-1.5 sm:text-xs"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-100 sm:mt-5"
          >
            <IconSpark className="h-3.5 w-3.5 text-blue-300" />
            Checkout com identidade da sua marca
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance mt-5 max-w-xl text-[1.7rem] font-semibold leading-[1.14] tracking-tight text-white sm:mt-6 sm:text-[2.1rem] sm:leading-[1.1] lg:text-[2.55rem]"
          >
            O ponto em que o cliente{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              conclui a compra
            </span>{" "}
            com{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">confiança</span>.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 max-w-lg text-[0.95rem] leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">
            Conecte PIX, cartão e boleto ao gateway que você já utiliza. Uma experiência alinhada à sua marca com
            acompanhamento em tempo real.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex w-full max-w-md flex-col gap-2.5 sm:mt-8 sm:max-w-none sm:flex-row sm:gap-3">
            <motion.a
              href={PAYLE_CONTATO_HREF}
              className="payle-cta bg-white text-slate-950 shadow-[0_20px_48px_rgba(255,255,255,0.12)] transition hover:bg-blue-50"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              Falar com especialistas
              <IconArrowRight className="h-4 w-4 shrink-0" />
            </motion.a>
            <motion.a
              href="/checkout"
              className="payle-cta border border-white/[0.16] bg-white/[0.06] text-white backdrop-blur transition hover:border-blue-300/50 hover:bg-white/[0.1]"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              Ver jornada de checkout
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Coluna direita — imagem + métricas */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ease, delay: reduce ? 0 : 0.12 }}
          className="relative mx-auto w-full min-w-0 max-w-[30rem] overflow-visible sm:max-w-[32rem] lg:mx-0 lg:max-w-none lg:min-h-[38rem] xl:min-h-[42rem]"
        >
          {/* Elementos flutuantes sutis */}
          <motion.span
            className="pointer-events-none absolute right-6 top-[18%] z-10 hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-blue-300 shadow-lg backdrop-blur-md lg:flex"
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={reduce ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <IconCardLock className="h-4 w-4" />
          </motion.span>
          <motion.span
            className="pointer-events-none absolute bottom-[32%] right-2 z-10 hidden h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-emerald-300 shadow-md backdrop-blur-md sm:flex"
            animate={reduce ? undefined : { y: [0, 5, 0] }}
            transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <IconActivity className="h-3.5 w-3.5" />
          </motion.span>
          <span className="pointer-events-none absolute left-[8%] top-[42%] z-0 h-1.5 w-1.5 rounded-full bg-blue-400/35 shadow-[0_0_10px_rgba(96,165,250,0.3)]" />
          <span className="pointer-events-none absolute right-[28%] top-[12%] z-0 h-1 w-1 rounded-full bg-cyan-300/30 shadow-[0_0_8px_rgba(34,211,238,0.25)]" />
          <span className="pointer-events-none absolute bottom-[38%] left-[18%] z-0 hidden h-px w-16 bg-gradient-to-r from-transparent via-blue-400/25 to-transparent sm:block" />

          {/* Cards — tamanho fixo; mobile acima da foto, desktop flutuantes */}
          <div className="relative z-20 mb-3 grid grid-cols-2 gap-2 sm:mb-4 sm:gap-3 lg:pointer-events-none lg:absolute lg:inset-0 lg:mb-0 lg:block [&_*]:lg:pointer-events-auto">
            <MetricCard
              title="Conversão de checkout"
              value="82,4%"
              trend="+12%"
              chart={<HeroLineChart />}
              className="lg:absolute lg:left-0 lg:top-[6%] lg:w-[11.5rem] xl:w-[12.5rem]"
            />
            <MetricCard
              title="Vendas aprovadas"
              value="R$ 128.540"
              trend="+18%"
              chart={<HeroBarChart />}
              className="lg:absolute lg:bottom-[28%] lg:left-[4%] lg:w-[11.5rem] xl:w-[12.5rem]"
            />
          </div>

          {/* Imagem + iluminação integrada */}
          <motion.div className="relative z-[5] w-full bg-transparent lg:absolute lg:-left-[2%] lg:-right-[6%] lg:bottom-0 lg:top-[11%]">
            <div className="relative mx-auto h-[min(32rem,92vw)] w-full bg-transparent sm:h-[35rem] lg:h-full lg:min-h-[34rem]">
              <div className="absolute inset-x-[-2%] bottom-0 top-0 origin-bottom scale-[1.08] sm:scale-[1.14] lg:scale-[1.32] xl:scale-[1.38]">
                <motion.div
                  className="pointer-events-none absolute left-[-4%] top-[24%] z-0 h-[36%] w-[40%] rounded-full blur-[100px]"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 70% at 35% 50%, rgba(59,130,246,0.09) 0%, transparent 68%)",
                  }}
                />
                <motion.div
                  className="pointer-events-none absolute bottom-[26%] left-1/2 z-0 h-[58%] w-[72%] -translate-x-1/2 rounded-full blur-[110px] sm:blur-[130px]"
                  style={{
                    background:
                      "radial-gradient(ellipse 68% 58% at 50% 52%, rgba(96,165,250,0.14) 0%, rgba(59,130,246,0.05) 42%, transparent 72%)",
                  }}
                  animate={reduce ? undefined : { opacity: [0.7, 0.92, 0.7] }}
                  transition={reduce ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="relative z-[1] h-full w-full"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(ellipse 88% 78% at 50% 64%, #000 42%, transparent 76%), linear-gradient(to right, transparent 0%, #000 4%, #000 96%, transparent 100%)",
                    maskImage:
                      "radial-gradient(ellipse 88% 78% at 50% 64%, #000 42%, transparent 76%), linear-gradient(to right, transparent 0%, #000 4%, #000 96%, transparent 100%)",
                    WebkitMaskComposite: "source-in",
                    maskComposite: "intersect",
                  }}
                >
                  <Image
                    src="/cara.png"
                    alt="Especialista Payle gerenciando checkout e conversão"
                    fill
                    priority
                    sizes="(min-width: 1280px) 720px, (min-width: 1024px) 620px, 92vw"
                    className="object-contain object-bottom [mix-blend-mode:lighten]"
                    style={{
                      filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.22))",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
