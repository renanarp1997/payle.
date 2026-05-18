"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { IconArrowRight, IconMail } from "./PayleIcons";

export function PayleContactSection() {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
  const viewport = { once: true, margin: "-80px" as const };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#f8fbff] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_32%),linear-gradient(rgba(37,99,235,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.045)_1px,transparent_1px)] bg-[length:100%_100%,28px_28px,28px_28px]" />
      <div className="pointer-events-none absolute -left-10 bottom-24 h-48 w-48 rounded-full border border-blue-200/80" />
      <div className="pointer-events-none absolute -right-10 top-10 h-56 w-56 rounded-full border border-dashed border-blue-200/60" />
      <svg className="pointer-events-none absolute left-0 top-20 hidden h-20 w-full text-blue-200/80 lg:block" viewBox="0 0 1200 90" fill="none" aria-hidden>
        <path d="M0 62C178 20 318 34 466 54C647 79 802 70 967 38C1060 20 1130 21 1200 30" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={ease}
        className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.96fr_1fr] lg:items-center"
      >
        <div>
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-600 shadow-[0_14px_34px_rgba(37,99,235,0.12)]">
            <IconMail className="h-7 w-7" />
          </div>
          <h2 className="mt-7 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Validar o checkout com a identidade da sua marca?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Deixe seu nome e o WhatsApp. Abrimos uma conversa com o time para próximos passos, avaliação quando aplicável e proposta alinhada ao seu volume e às integrações necessárias.
          </p>

          <form className="mt-9 grid max-w-2xl gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              required
              placeholder="Nome completo"
              className="min-h-12 rounded-full border border-slate-300 bg-white px-5 text-sm font-medium text-slate-950 shadow-[0_10px_24px_rgba(15,23,42,0.06)] outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
            <input
              type="tel"
              required
              placeholder="(11) 99999-9999"
              className="min-h-12 rounded-full border border-slate-300 bg-white px-5 text-sm font-medium text-slate-950 shadow-[0_10px_24px_rgba(15,23,42,0.06)] outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(37,99,235,0.28)] transition hover:bg-blue-700 sm:col-span-1"
            >
              Conversar no WhatsApp
              <IconArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-6 max-w-2xl text-xs leading-6 text-slate-500">
            Ao continuar para o WhatsApp, você autoriza o contato da equipe Payle sobre produtos e serviços, conforme sua solicitação.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
            <div className="relative h-[18rem] sm:h-[24rem]">
              <Image
                src="/payle-consultants-highfive.png"
                alt="Atendimento comercial com consultores dedicados ao projeto"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-stone-700/70 px-5 py-4 text-white shadow-[0_16px_36px_rgba(0,0,0,0.22)] backdrop-blur-md">
                <p className="text-sm font-semibold">Atendimento comercial com consultores dedicados ao seu projeto</p>
                <p className="mt-1 text-xs text-white/80">Foto ilustrativa</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
