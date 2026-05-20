"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import { IconArrowRight, IconSpark } from "./PayleIcons";
import { PAYLE_CONTATO_HREF } from "./payleSiteNav";

const topBadges = ["Gateway sob sua gestão", "Liquidação PIX ágil", "Atribuição e métricas"];

function HeroSceneBackdrop({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Bloom principal — abraça a cena */}
      <motion.div
        className="absolute -right-[10%] top-[8%] h-[85%] w-[95%] rounded-full blur-[100px] sm:blur-[130px]"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 58% 48%, rgba(59,130,246,0.42) 0%, rgba(37,99,235,0.18) 38%, transparent 68%)",
        }}
        animate={reduce ? undefined : { opacity: [0.75, 1, 0.75] }}
        transition={reduce ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute right-[5%] top-[28%] h-[50%] w-[55%] rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.14) 0%, transparent 70%)",
        }}
      />
      {/* Névoa / chão */}
      <div
        className="absolute -bottom-[8%] right-[0%] h-[45%] w-full blur-[60px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 60% 100%, rgba(30,58,138,0.35) 0%, rgba(2,6,23,0.15) 50%, transparent 72%)",
        }}
      />
      <div
        className="absolute bottom-0 left-[20%] right-0 h-[35%]"
        style={{
          background: "linear-gradient(to top, rgba(2,6,23,0.85) 0%, transparent 100%)",
        }}
      />
      {/* Arco de luz */}
      <div className="absolute right-[15%] top-[20%] h-px w-[55%] bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />
      <div className="absolute right-[20%] bottom-[32%] h-px w-[40%] bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent" />
      {/* Partículas */}
      {[
        ["72%", "24%"],
        ["88%", "38%"],
        ["58%", "52%"],
        ["82%", "68%"],
        ["48%", "30%"],
      ].map(([left, top], i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-cyan-300/40 shadow-[0_0_14px_rgba(34,211,238,0.5)]"
          style={{ left, top }}
        />
      ))}
    </div>
  );
}

export function PayleHero() {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: reduce ? 0 : 0.04 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: ease },
  };

  return (
    <section className="relative overflow-hidden bg-[#020617]">
      {/* Fundo global */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_75%_45%,rgba(37,99,235,0.28),transparent_60%),radial-gradient(ellipse_40%_35%_at_10%_15%,rgba(59,130,246,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:72px_72px] opacity-[0.45] [mask-image:radial-gradient(ellipse_100%_85%_at_50%_0%,#000_25%,transparent_80%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-950/20 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-14 pt-11 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-8 lg:px-8 lg:pb-20 lg:pt-16 xl:gap-10">
        {/* —— Texto —— */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 min-w-0 lg:max-w-[36rem] lg:py-4"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {topBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[0.65rem] font-medium text-slate-400 backdrop-blur-sm sm:text-xs"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-100 backdrop-blur-sm sm:mt-5"
          >
            <IconSpark className="h-3.5 w-3.5 text-blue-300" />
            Checkout com identidade da sua marca
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance mt-5 text-[1.9rem] font-semibold leading-[1.08] tracking-tight text-white sm:mt-6 sm:text-[2.4rem] lg:mt-7 lg:text-[2.85rem] xl:text-[3.25rem]"
          >
            O ponto em que o cliente{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              conclui a compra
            </span>{" "}
            com{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">confiança</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-[0.95rem] leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8"
          >
            Conecte PIX, cartão e boleto ao gateway que você já utiliza. Uma experiência alinhada à sua marca com
            acompanhamento em tempo real.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-3"
          >
            <motion.a
              href={PAYLE_CONTATO_HREF}
              className="payle-cta inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset,0_18px_44px_rgba(255,255,255,0.1)] transition duration-200 hover:bg-slate-50"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              Falar com especialistas
              <IconArrowRight className="h-4 w-4 shrink-0" />
            </motion.a>
            <motion.a
              href="/checkout"
              className="payle-cta inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.06] px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition duration-200 hover:border-blue-400/35 hover:bg-white/[0.1] hover:text-white"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              Ver jornada de checkout
            </motion.a>
          </motion.div>
        </motion.div>

        {/* —— Cena visual (referência) —— */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ease, delay: reduce ? 0 : 0.12 }}
          className="relative z-10 w-full min-w-0 lg:-ml-4 xl:-ml-8"
        >
          <div className="relative mx-auto w-full lg:mx-0 lg:max-w-none">
            <div className="relative h-[min(26rem,82vw)] w-full sm:h-[30rem] lg:h-[min(40rem,72vh)] lg:min-h-[38rem] xl:h-[42rem]">
              <HeroSceneBackdrop reduce={reduce} />

              {/* Palco da imagem */}
              <div className="absolute inset-0 z-10 flex items-end justify-center overflow-visible sm:justify-end">
                <div className="relative h-full w-full max-w-none origin-bottom scale-[1.02] sm:scale-[1.08] lg:scale-[1.14] xl:scale-[1.2]">
                  {/* Glow atrás da pessoa */}
                  <div
                    className="pointer-events-none absolute bottom-[18%] right-[18%] h-[55%] w-[65%] rounded-full blur-[70px] lg:blur-[90px]"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(96,165,250,0.35) 0%, rgba(59,130,246,0.12) 50%, transparent 72%)",
                    }}
                  />
                  <div
                    className="relative h-full w-full"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to top, transparent 0%, black 6%), radial-gradient(ellipse 95% 82% at 72% 78%, black 52%, transparent 80%)",
                      maskImage:
                        "linear-gradient(to top, transparent 0%, black 6%), radial-gradient(ellipse 95% 82% at 72% 78%, black 52%, transparent 80%)",
                      WebkitMaskComposite: "source-over",
                      maskComposite: "add",
                    }}
                  >
                    <Image
                      src="/cara2.png"
                      alt="Especialista Payle gerenciando checkout e conversão"
                      fill
                      priority
                      sizes="(min-width: 1280px) 640px, (min-width: 1024px) 560px, 90vw"
                      className="object-contain object-bottom sm:object-[78%_100%]"
                      style={{
                        filter:
                          "drop-shadow(0 32px 64px rgba(0,0,0,0.45)) drop-shadow(0 0 120px rgba(59,130,246,0.15))",
                      }}
                    />
                    <div className="pointer-events-none absolute inset-x-[5%] bottom-0 h-[28%] bg-gradient-to-t from-[#020617] from-10% via-[#020617]/70 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
