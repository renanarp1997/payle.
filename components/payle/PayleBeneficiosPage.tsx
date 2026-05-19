"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  IconActivity,
  IconArrowRight,
  IconBolt,
  IconCardLock,
  IconCheck,
  IconLayers,
  IconPanel,
  IconSpark,
  IconSplit,
  IconWebhook
} from "./PayleIcons";
import { PAYLE_CONTATO_HREF, PAYLE_FLUXO_HREF } from "./payleSiteNav";

const beforeBenefits = [
  "Checkout confuso",
  "Pagamentos espalhados",
  "Cliente chamando no suporte",
  "Carrinho abandonado sem contexto",
  "Equipe olhando várias ferramentas"
];

const afterBenefits = [
  "Checkout claro",
  "Status visíveis",
  "Pagamentos organizados",
  "Recuperação com contexto",
  "Time acompanha tudo com mais calma"
];

const mainBenefits: { title: string; body: string; icon: keyof typeof benefitIcons }[] = [
  {
    title: "Menos dúvida no checkout",
    body: "O cliente entende o valor, escolhe como pagar e finaliza sem sentir que saiu da experiência da sua marca.",
    icon: "panel"
  },
  {
    title: "Mais controle para a equipe",
    body: "Pedidos, pagamentos, eventos e recuperação aparecem em uma rotina mais fácil de acompanhar.",
    icon: "activity"
  },
  {
    title: "Recuperação com bom senso",
    body: "Você consegue retomar vendas sem comunicação agressiva ou promessa exagerada.",
    icon: "webhook"
  },
  {
    title: "Tracking mais confiável",
    body: "Eventos importantes ajudam mídia, analytics e operação a entenderem melhor o caminho da venda.",
    icon: "layers"
  },
  {
    title: "Menos ferramentas abertas",
    body: "Loja, gateway, entrega e status conversam melhor dentro de um fluxo mais organizado.",
    icon: "split"
  },
  {
    title: "Mais previsibilidade",
    body: "Quando cada etapa tem status, sua equipe sabe o que aconteceu e qual é o próximo passo.",
    icon: "check"
  }
];

const benefitIcons = {
  panel: IconPanel,
  activity: IconActivity,
  webhook: IconWebhook,
  layers: IconLayers,
  split: IconSplit,
  check: IconCheck
};

const humanMetrics = [
  {
    title: "Menos etapas confusas",
    body: "A jornada do pagamento deixa de ser um labirinto de telas e mensagens soltas."
  },
  {
    title: "Mais clareza para o cliente",
    body: "Quem compra enxerga valor, meios de pagamento e confirmação sem adivinhar o próximo passo."
  },
  {
    title: "Menos retrabalho manual",
    body: "Sua equipe gasta menos tempo caçando status e mais tempo resolvendo o que importa."
  },
  {
    title: "Mais contexto para o time",
    body: "Cada movimento aparece com histórico: menos “cadê esse pedido?” no meio do dia."
  }
];

const testimonials = [
  {
    quote: "Antes eu precisava conferir loja, gateway e planilha. Agora o fluxo ficou muito mais claro.",
    name: "Lucas",
    role: "e-commerce",
    image: "/payle-team-operation.png"
  },
  {
    quote: "Quando o cliente entende o pagamento, o suporte diminui.",
    name: "Marina",
    role: "infoprodutora",
    image: "/payle-customer-checkout.png"
  },
  {
    quote: "Padronizar o checkout deixou nossa operação mais profissional.",
    name: "Rafael",
    role: "agência",
    image: "/payle-consultants-highfive.png"
  }
];

const storyFeed = [
  { time: "Agora", label: "Pedido #2156 · aprovado", tone: "ok" as const },
  { time: "Há 3 min", label: "Cliente voltou ao checkout · lembrete enviado", tone: "info" as const },
  { time: "Há 8 min", label: "Pix confirmado · confirmação ao cliente", tone: "ok" as const },
  { time: "Há 14 min", label: "Evento enviado · campanha e analytics", tone: "info" as const }
];

const checklistBeneficios = [
  "Entender onde o pagamento gera atrito na sua operação",
  "Ver o que sua equipe precisa enxergar todos os dias",
  "Combinar próximos passos com calma, sem empurrar feature"
];

export function PayleBeneficiosHero({ ease }: { ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_15%_20%,rgba(59,130,246,0.22),transparent),radial-gradient(circle_at_90%_85%,rgba(16,185,129,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:64px_64px] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 pb-16 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={ease}>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">
              <IconSpark className="h-3.5 w-3.5 text-emerald-300" />
              Benefícios
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.05rem]">
              Menos atrito no pagamento. Mais tranquilidade para vender.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              A Payle organiza checkout, tracking, pagamentos e status para sua equipe acompanhar a venda com clareza — do clique no anúncio até o pedido aprovado.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Menos improviso, menos confusão no checkout, menos abandono sem contexto e menos suporte por dúvida simples — com visibilidade para quem opera todos os dias.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={PAYLE_CONTATO_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(255,255,255,0.14)] transition hover:bg-emerald-50"
              >
                Conversar com a Payle
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={PAYLE_FLUXO_HREF}
                className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.10]"
              >
                Ver como funciona o fluxo
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.05 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-gradient-to-br from-slate-900/80 to-slate-950 shadow-[0_36px_90px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[5/4] min-h-[20rem] sm:aspect-[4/3] sm:min-h-[24rem]">
                <Image
                  src="/payle-team-operation.png"
                  alt="Equipe acompanhando vendas e pagamentos no notebook"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 560px, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ease, delay: 0.12 }}
                className="absolute left-3 top-3 right-3 sm:left-4 sm:right-auto sm:max-w-[11.5rem]"
              >
                <div className="rounded-2xl border border-emerald-400/35 bg-emerald-950/85 p-3 shadow-xl backdrop-blur-xl">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-300">Pedido aprovado</p>
                  <p className="mt-1 text-base font-semibold text-white">Pedido #2108</p>
                  <p className="mt-0.5 text-xs text-emerald-100/80">Cliente e time alinhados na hora</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...ease, delay: 0.18 }}
                className="absolute right-2 top-[22%] max-w-[10.5rem] sm:right-4"
              >
                <div className="rounded-xl border border-blue-400/30 bg-blue-950/80 px-3 py-2 shadow-lg backdrop-blur-md">
                  <p className="text-xs font-semibold text-blue-100">Cliente voltou ao checkout</p>
                  <p className="text-[0.65rem] text-blue-200/85">Retomada com contexto da compra</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...ease, delay: 0.24 }}
                className="absolute left-2 top-[40%] hidden max-w-[9.5rem] sm:left-4 sm:block"
              >
                <div className="rounded-xl border border-white/15 bg-white/12 px-3 py-2 shadow-lg backdrop-blur-md">
                  <p className="text-xs font-semibold text-white">Pix confirmado</p>
                  <p className="text-[0.65rem] text-slate-300">Aprovação em segundos</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ease, delay: 0.3 }}
                className="absolute right-2 bottom-[28%] max-w-[11rem] sm:right-5"
              >
                <div className="flex items-center gap-2 rounded-xl border border-violet-300/25 bg-violet-950/75 px-3 py-2 shadow-lg backdrop-blur-md">
                  <IconBolt className="h-4 w-4 shrink-0 text-violet-300" />
                  <div>
                    <p className="text-xs font-semibold text-white">Evento enviado</p>
                    <p className="text-[0.65rem] text-slate-400">Mídia e analytics atualizados</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ease, delay: 0.36 }}
                className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-3 sm:w-[12.5rem]"
              >
                <div className="rounded-xl border border-amber-400/25 bg-amber-950/75 px-3 py-2.5 shadow-xl backdrop-blur-md">
                  <p className="text-xs font-semibold text-amber-100">Carrinho recuperado</p>
                  <p className="text-[0.65rem] text-amber-200/80">Sem pressa, com mensagem certa</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function PayleBeneficiosSections({ viewport }: { viewport: { once: boolean; margin: string } }) {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 translate-x-1/3 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">O que muda no seu dia a dia</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Comparar antes e depois ajuda a ver benefício onde dói: na rotina, no suporte e na falta de visão — não só no cadastro de ferramenta.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: 0.05 }}
              className="rounded-[1.75rem] border border-rose-200/80 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-600">Antes da Payle</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">Quando tudo vira improviso</p>
              <ul className="mt-8 space-y-4">
                {beforeBenefits.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" aria-hidden />
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
              className="rounded-[1.75rem] border border-emerald-400/35 bg-gradient-to-br from-slate-950 to-[#0f172a] p-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.35)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Depois da Payle</p>
              <p className="mt-2 text-lg font-semibold text-white">Quando a venda ganha ritmo</p>
              <ul className="mt-8 space-y-4">
                {afterBenefits.map((t) => (
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

      <section className="relative bg-white py-20 lg:py-28">
        <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Benefícios que você sente na operação</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Cada card abaixo reflete uma dor real de quem vende: confusão, carrinho parado, ferramentas espalhadas e equipe sem norte. A Payle endereça isso com clareza, não com jargão.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mainBenefits.map((b, i) => {
              const Icon = benefitIcons[b.icon];
              return (
                <motion.article
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ ...ease, delay: i * 0.04 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:border-blue-200 hover:shadow-[0_26px_70px_rgba(37,99,235,0.08)]"
                >
                  <span className="text-xs font-bold text-blue-600/70">{(i + 1).toString().padStart(2, "0")}</span>
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 text-blue-700 ring-1 ring-blue-100/80">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{b.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{b.body}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Na prática, o benefício aparece na rotina.</h2>
              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                Imagine uma loja que vende todos os dias, recebe pedidos por Pix, cartão e boleto, acompanha campanhas e ainda precisa responder clientes. Sem organização, cada venda vira uma investigação. Com a Payle, a jornada fica mais clara: o cliente paga, o pedido ganha status e a equipe sabe onde olhar.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: 0.06 }}
              className="relative"
            >
              <div className="absolute -right-2 top-8 z-10 hidden rounded-xl border border-white/15 bg-slate-900/95 px-3 py-2 text-left shadow-xl backdrop-blur-md sm:block">
                <p className="text-[0.65rem] font-semibold text-emerald-300">Ao vivo</p>
                <p className="text-xs text-white">3 eventos nos últimos minutos</p>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_32px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">Atividade recente</p>
                    <p className="text-xs text-slate-400">O que a equipe veria em um painel organizado</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[0.65rem] font-semibold text-emerald-300">sincronizado</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {storyFeed.map((row) => (
                    <li
                      key={row.label}
                      className={`flex gap-3 rounded-2xl border px-4 py-3 text-sm ${
                        row.tone === "ok"
                          ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-50"
                          : "border-white/10 bg-slate-900/60 text-slate-200"
                      }`}
                    >
                      <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-wide text-slate-500">{row.time}</span>
                      <span className="leading-6">{row.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative h-36">
                    <Image src="/payle-human-support.png" alt="Pessoa no suporte com contexto do pedido" fill className="object-cover" sizes="480px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                  </div>
                  <p className="absolute bottom-3 left-3 right-3 text-xs text-white/90">Menos “me manda o print do pagamento”. Mais conversa com contexto.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Resultados em linguagem humana</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Sem porcentagem milagrosa. O foco é o que melhora na sensação de trabalhar com pagamentos todos os dias — clareza, menos retrabalho e time alinhado.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {humanMetrics.map((m, i) => (
              <motion.article
                key={m.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: i * 0.05 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-[0_18px_55px_rgba(15,23,42,0.06)]"
              >
                <p className="text-base font-semibold leading-snug text-slate-950">{m.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{m.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Feito para quem vive de venda</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">Vozes reais de perfis que sentem atrito no pagamento — e o alívio quando o fluxo fica legível.</p>
          </motion.div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: i * 0.06 }}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50/80 to-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-blue-100">
                    <Image src={t.image} alt={`Foto de ${t.name}, ${t.role}`} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
                <p className="mt-5 flex-1 text-sm leading-7 text-slate-700">“{t.quote}”</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-emerald-700">
                  <IconCardLock className="h-4 w-4" />
                  Menos ruído na operação
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PayleBeneficiosClosingCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1222] via-slate-950 to-blue-950 py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute -left-28 top-12 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-16 animate-pulse rounded-2xl border border-white/12 bg-white/[0.07] px-3 py-2 text-[0.65rem] font-semibold text-slate-100 shadow-lg backdrop-blur-md">
        Carrinho retomado · com contexto
      </div>
      <div className="pointer-events-none absolute bottom-24 left-[8%] hidden rounded-2xl border border-emerald-400/25 bg-emerald-950/70 px-3 py-2 text-[0.65rem] font-semibold text-emerald-100 shadow-lg backdrop-blur-md sm:block">
        Evento enviado · tracking ok
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.45rem]">Quer vender com menos improviso?</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              A gente entende sua operação e mostra como a Payle pode organizar checkout, pagamentos, tracking e recuperação em um fluxo mais claro.
            </p>
            <Link
              href={PAYLE_CONTATO_HREF}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(255,255,255,0.15)] transition hover:bg-emerald-50"
            >
              Conversar com a Payle
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-4 top-1/3 z-10 hidden rounded-xl border border-white/15 bg-slate-900/95 px-3 py-2 text-left shadow-xl backdrop-blur-md lg:block">
              <p className="text-[0.65rem] font-semibold text-blue-200">Status</p>
              <p className="text-xs text-white">Pagamento refletiu no painel</p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-[0_32px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">Na conversa com a Payle</p>
              <ul className="mt-5 space-y-3">
                {checklistBeneficios.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/22 text-emerald-300">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10">
                <div className="relative h-40">
                  <Image src="/payle-team-operation.png" alt="Equipe alinhada na operação de vendas" fill className="object-cover" sizes="420px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 to-transparent" />
                </div>
                <p className="absolute bottom-3 left-3 right-3 text-xs text-white/90">Benefício de verdade é time e cliente falando a mesma língua no pagamento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
