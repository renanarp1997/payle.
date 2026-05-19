"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconSpark } from "./PayleIcons";
import { PAYLE_CONTATO_HREF, PAYLE_FLUXO_HREF } from "./payleSiteNav";

type PlanId = "essencial" | "operacao" | "escala";

type PlanMoment = {
  id: PlanId;
  name: string;
  title: string;
  story: string;
  fitLine: string;
  image: string;
  imageAlt: string;
  overlays: { label: string; detail?: string }[];
};

const plans: PlanMoment[] = [
  {
    id: "essencial",
    name: "Essencial",
    title: "Primeiros pedidos, operação simples.",
    story:
      "Uma pessoa organizando a base: checkout claro, pagamento legível e a sensação de que nada se perde no caminho.",
    fitLine: "Você está começando a vender com mais ordem — e quer clareza antes de escalar.",
    image: "/payle-customer-checkout.png",
    imageAlt: "Pessoa finalizando compra com checkout claro",
    overlays: [{ label: "Pedido aprovado", detail: "status visível" }]
  },
  {
    id: "operacao",
    name: "Operação",
    title: "Equipe acompanhando cada venda.",
    story:
      "Tracking ativo, recuperação com contexto e suporte que entende o pedido — sem caçar print em cinco abas.",
    fitLine: "Você vende todo dia e precisa que o time enxergue o que aconteceu em cada pagamento.",
    image: "/payle-team-operation.png",
    imageAlt: "Equipe acompanhando pedidos e operação no dia a dia",
    overlays: [
      { label: "Pix confirmado", detail: "há 2 min" },
      { label: "Cliente retomou checkout" }
    ]
  },
  {
    id: "escala",
    name: "Escala",
    title: "Volume alto, canais coordenados.",
    story:
      "Múltiplas lojas, picos de campanha e um time alinhado — operação estruturada quando o ritmo não para.",
    fitLine: "Você já escala e precisa de regras, volume e acompanhamento à altura do seu crescimento.",
    image: "/payle-consultants-highfive.png",
    imageAlt: "Time celebrando operação de vendas em escala",
    overlays: [{ label: "4 canais sincronizados", detail: "operação unificada" }]
  }
];

const evolutionLine = ["Essencial", "Operação", "Escala"];

/** Mesmo enquadramento retangular do hero — não força formato vertical nas fotos. */
const planPhotoFrameClass =
  "relative aspect-[5/4] w-full min-h-[18rem] overflow-hidden rounded-[2rem] sm:min-h-[22rem] lg:min-h-[26rem]";

function LiveOverlay({
  label,
  detail,
  className,
  reduce
}: {
  label: string;
  detail?: string;
  className?: string;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`rounded-2xl bg-white/92 px-3.5 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-md ${className ?? ""}`}
    >
      <p className="flex items-center gap-2 text-xs font-medium text-slate-900">
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 ${reduce ? "" : "animate-pulse"}`}
          aria-hidden
        />
        {label}
      </p>
      {detail && <p className="mt-0.5 text-[0.65rem] text-slate-500">{detail}</p>}
    </motion.div>
  );
}

function PlanScene({
  plan,
  index,
  viewport,
  ease,
  reduce
}: {
  plan: PlanMoment;
  index: number;
  viewport: { once: boolean; margin: string };
  ease: { duration: number; ease?: readonly [number, number, number, number] };
  reduce: boolean | null;
}) {
  const imageFirst = index % 2 === 0;

  return (
    <section className={index % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className={`relative ${imageFirst ? "lg:col-start-1" : "lg:col-start-2 lg:row-start-1"}`}
          >
            <motion.div
              className={planPhotoFrameClass}
              initial={{ opacity: 0, scale: 1.02 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ ...ease, delay: 0.05 }}
            >
              <Image src={plan.image} alt={plan.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 560px, 100vw" priority={index === 0} />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewport}
                transition={ease}
              />
              {plan.overlays[0] && (
                <LiveOverlay
                  label={plan.overlays[0].label}
                  detail={plan.overlays[0].detail}
                  reduce={reduce}
                  className="absolute left-4 top-4 sm:left-6 sm:top-6"
                />
              )}
              {plan.overlays[1] && (
                <LiveOverlay
                  label={plan.overlays[1].label}
                  detail={plan.overlays[1].detail}
                  reduce={reduce}
                  className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6"
                />
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.08 }}
            className={`max-w-lg ${imageFirst ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`}
          >
            <p className="text-sm font-medium text-slate-500">{plan.name}</p>
            {plan.id === "operacao" && (
              <span className="mt-2 inline-block text-xs font-medium text-blue-600">Fase mais comum hoje</span>
            )}
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">{plan.title}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{plan.story}</p>
            <p className="mt-8 border-l-2 border-slate-200 pl-4 text-sm leading-7 text-slate-500">{plan.fitLine}</p>
            <Link
              href={PAYLE_CONTATO_HREF}
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-blue-700"
            >
              Conversar sobre {plan.name}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function PaylePlanosHero({ ease }: { ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0a0f18] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(59,130,246,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={ease}>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/90">
              <IconSpark className="h-3.5 w-3.5" />
              Planos
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3rem]">
              Operações humanas funcionando melhor.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate-400">
              Não é tabela de preços — é a maturidade da sua rotina: da clareza inicial ao volume com time coordenado.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-400">
              {evolutionLine.map((label, i) => (
                <span key={label} className="flex items-center gap-3">
                  <span className={i === 1 ? "font-medium text-white" : ""}>{label}</span>
                  {i < evolutionLine.length - 1 && <span className="text-slate-600">·</span>}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={PAYLE_CONTATO_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Conversar com a Payle
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={PAYLE_FLUXO_HREF}
                className="inline-flex items-center justify-center text-sm font-medium text-slate-300 transition hover:text-white"
              >
                Ver como a operação flui
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.06 }}
            className={planPhotoFrameClass}
          >
            <Image
              src="/payle-team-operation.png"
              alt="Equipe acompanhando operação de vendas"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 620px, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18]/80 via-transparent to-transparent" />
            <LiveOverlay label="Operação ao vivo" detail="equipe acompanhando pedidos" reduce={reduce} className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto sm:max-w-[14rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function PaylePlanosSections({ viewport }: { viewport: { once: boolean; margin: string } }) {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <section className="border-b border-slate-100 bg-white py-10 lg:py-14">
        <motion.div
          className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={ease}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Três momentos da mesma operação</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Pessoas, não painéis. Cada fase é um capítulo do dia a dia de quem vende.
          </p>
        </motion.div>
      </section>

      {plans.map((plan, index) => (
        <PlanScene key={plan.id} plan={plan} index={index} viewport={viewport} ease={ease} reduce={reduce} />
      ))}

      <section className="bg-slate-950 py-20 text-white lg:py-28">
        <motion.div
          className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={ease}
        >
          <p className="text-lg leading-relaxed text-slate-300">
            A estrutura cresce com você — checkout, recuperação, tracking e analytics entram no ritmo quando fazem sentido, sem
            empurrar o que ainda não precisa.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            {evolutionLine.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

export function PaylePlanosClosingCta() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={planPhotoFrameClass}>
            <Image
              src="/payle-human-support.png"
              alt="Pessoa no suporte com contexto humano do pedido"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Qual capítulo é o seu hoje?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Conte como sua equipe trabalha. A gente ajuda a enxergar a fase certa — com calma e sem pacote desnecessário.
            </p>
            <Link
              href={PAYLE_CONTATO_HREF}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Conversar com a Payle
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


