"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  IconActivity,
  IconArrowRight,
  IconBolt,
  IconCardLock,
  IconCheck,
  IconLayers,
  IconPanel,
  IconPlug,
  IconSpark,
  IconWallet,
  IconWebhook
} from "./PayleIcons";
import { PAYLE_CONTATO_HREF, PAYLE_FLUXO_HREF } from "./payleSiteNav";

export type InnerMarketingPageKey = "recursos" | "planos" | "duvidas";

type IconName = "activity" | "bolt" | "card" | "check" | "layers" | "panel" | "plug" | "wallet" | "webhook";

const icons: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  activity: IconActivity,
  bolt: IconBolt,
  card: IconCardLock,
  check: IconCheck,
  layers: IconLayers,
  panel: IconPanel,
  plug: IconPlug,
  wallet: IconWallet,
  webhook: IconWebhook
};

const planDeck = [
  ["Essencial", "Para começar", "Checkout personalizado, status de pagamento e integrações principais para organizar a base."],
  ["Operação", "Mais vendido", "Recuperação, eventos rastreados, dashboard e contexto para suporte acompanhar a venda."],
  ["Escala", "Sob medida", "Fluxos personalizados, múltiplas lojas e acompanhamento dedicado para alto volume."]
] as const;

const faqFull = [
  ["A Payle substitui minha loja?", "Não. Ela entra para organizar checkout, status, eventos e acompanhamento ao redor da estrutura que você já usa."],
  ["Consigo usar com Pix, cartão e boleto?", "Sim. A disponibilidade depende dos gateways conectados; o fluxo deixa cada meio legível para quem compra."],
  ["A equipe vê o andamento dos pedidos?", "Sim. Pedido, pagamento, recuperação e entrega ganham leitura única, com menos ida e volta entre ferramentas."],
  ["Preciso trocar gateway?", "Não necessariamente. Avaliamos o que já está em uso e como encaixar no desenho da Payle."],
  ["Funciona com Shopify ou WooCommerce?", "Sim. A ideia é conversar com seu canal de venda sem obrigar troca de plataforma."],
  ["Quanto tempo leva para colocar no ar?", "Depende do escopo e integrações; o time comercial alinha prazos realistas na conversa inicial."],
  ["Dá para acompanhar campanhas e eventos?", "Sim. Eventos importantes podem alimentar mídia e analytics com mais consistência."],
  ["O suporte fica com contexto do pedido?", "Sim. Menos prints soltos: o histórico ajuda quem atende o cliente."]
] as const;

const innerConfigs: Record<
  InnerMarketingPageKey,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroBody: string;
    heroImage: string;
    floatCards: { title: string; subtitle: string; tone?: "emerald" | "blue" | "amber" }[];
    pillars: { title: string; body: string; icon: IconName }[];
    bandTitle: string;
    bandBody: string;
    bandItems?: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaChecklist: string[];
  }
> = {
  recursos: {
    heroEyebrow: "Recursos",
    heroTitle: "Tudo o que ajuda você a vender com mais controle no pós-clique.",
    heroBody:
      "Tracking, recuperação, leitura de pedido e sinais para o time — reunidos para dar previsibilidade depois que o cliente clica em comprar.",
    heroImage: "/payle-human-support.png",
    floatCards: [
      { title: "Tracking ativo", subtitle: "Eventos com destino claro", tone: "emerald" },
      { title: "Dashboard vivo", subtitle: "Rotina que acompanha volume", tone: "blue" },
      { title: "Recuperação inteligente", subtitle: "Mensagens com contexto", tone: "amber" }
    ],
    pillars: [
      {
        title: "Eventos para mídia e analytics",
        body: "Sinais de compra e pagamento com menos ruído para otimizar campanhas.",
        icon: "bolt"
      },
      {
        title: "Recuperação de carrinho",
        body: "Lembretes alinhados à marca, sem tom genérico nem promessa exagerada.",
        icon: "webhook"
      },
      {
        title: "Leitura operacional",
        body: "Pedidos e status em um lugar que a equipe adota no dia a dia.",
        icon: "activity"
      },
      {
        title: "Checkout com identidade",
        body: "Experiência de pagamento coerente com a loja e com o que o cliente espera.",
        icon: "panel"
      },
      {
        title: "Integrações principais",
        body: "Loja, gateway e entrega conversando dentro do mesmo desenho.",
        icon: "plug"
      },
      {
        title: "Base para escalar",
        body: "Quando o volume cresce, o fluxo não vira um emaranhador de exceções manuais.",
        icon: "layers"
      }
    ],
    bandTitle: "Feito para quem precisa de previsibilidade, não só de tela bonita.",
    bandBody:
      "Recursos só valem quando entram na rotina. A Payle nasce para acompanhar e-commerce, infoproduto e operações que não param de vender.",
    bandItems: undefined,
    ctaTitle: "Ver como os recursos encaixam na sua loja?",
    ctaBody:
      "Na conversa, alinhamos quais sinais importam para você — tracking, recuperação, painel — e como isso aparece no dia a dia.",
    ctaChecklist: ["Priorizar o que mais traz atrito hoje", "Ver exemplos de fluxo e eventos", "Combinar rollout em etapas"]
  },
  planos: {
    heroEyebrow: "Planos",
    heroTitle: "Um plano que acompanha de quem está começando a quem escala.",
    heroBody:
      "Comece com base sólida e evolua para recuperação, eventos e acompanhamento dedicado conforme seu volume pedir mais estrutura.",
    heroImage: "/payle-consultants-highfive.png",
    floatCards: [
      { title: "Essencial", subtitle: "Base organizada", tone: "blue" },
      { title: "Operação", subtitle: "Mais contexto no dia a dia", tone: "emerald" },
      { title: "Escala", subtitle: "Fluxo sob medida", tone: "amber" }
    ],
    pillars: [
      {
        title: "Escolha por fase",
        body: "Sem obrigar pacote cheio no primeiro dia: encaixe o que faz sentido agora.",
        icon: "check"
      },
      {
        title: "Conversa comercial honesta",
        body: "Proposta alinhada a volume, integrações e time disponível.",
        icon: "wallet"
      },
      {
        title: "Evolução clara",
        body: "Caminho para aumentar recuperação, eventos e suporte quando crescer.",
        icon: "layers"
      },
      {
        title: "Suporte que entende pagamento",
        body: "Time acostumado a pedido, gateway e checkout — não só vendas genéricas.",
        icon: "activity"
      }
    ],
    bandTitle: "Como saber qual plano combina com você?",
    bandBody:
      "Volume de pedidos, canais (Shopify, Woo, infoproduto…) e quantas pessoas olham pagamento todo dia costumam ditar o pacote ideal — conversamos isso com transparência.",
    bandItems: ["Poucos pedidos e quer organizar base?", "Já escala e precisa de painel vivo?", "Múltiplas lojas ou regras específicas?"],
    ctaTitle: "Falar com a Payle sobre planos?",
    ctaBody:
      "Traga seu cenário. Montamos uma proposta que respeita onde você está e para onde quer ir, sem empurrar o que não usa.",
    ctaChecklist: ["Entender volume e integrações", "Comparar pacotes com exemplos", "Receber próximos passos objetivos"]
  },
  duvidas: {
    heroEyebrow: "Dúvidas",
    heroTitle: "Respostas diretas antes de você dar o próximo passo.",
    heroBody:
      "Transparência sobre loja, gateway, Pix, cartão, equipe e implantação — para você decidir com segurança.",
    heroImage: "/payle-consultants-highfive.png",
    floatCards: [
      { title: "Sem pegadinha", subtitle: "Resposta clara", tone: "emerald" },
      { title: "Time humano", subtitle: "Fala com quem entende checkout", tone: "blue" },
      { title: "Integração", subtitle: "Avaliamos o que você já usa", tone: "amber" }
    ],
    pillars: [
      {
        title: "Dúvidas sobre troca de loja",
        body: "Na maioria dos cenários a Payle conecta ao que já existe.",
        icon: "plug"
      },
      {
        title: "Meios de pagamento",
        body: "Pix, cartão e boleto entram conforme seu gateway suportar.",
        icon: "card"
      },
      {
        title: "Visibilidade para o time",
        body: "Operação acompanha pedido e pagamento em leitura única.",
        icon: "activity"
      }
    ],
    bandTitle: "Ainda com dúvida?",
    bandBody: "Seguem as perguntas mais frequentes. Se faltar algo, é só chamar no contato — explicamos com calma.",
    bandItems: undefined,
    ctaTitle: "Prefere tirar dúvidas na conversa?",
    ctaBody:
      "Mande uma mensagem com seu contexto. Respondemos com linguagem humana, sem folha de especificação fria.",
    ctaChecklist: ["Explicar sua loja e gateways", "Esclarecer o que ele já viu no site", "Agendar próximo passo se fizer sentido"]
  }
};

function toneClass(tone: "emerald" | "blue" | "amber" | undefined) {
  switch (tone) {
    case "emerald":
      return "border-emerald-400/35 bg-emerald-950/80";
    case "amber":
      return "border-amber-400/30 bg-amber-950/75";
    default:
      return "border-blue-400/30 bg-blue-950/75";
  }
}

function PayleInnerClosingCta({
  title,
  body,
  checklist,
  image,
  imageAlt
}: {
  title: string;
  body: string;
  checklist: string[];
  image: string;
  imageAlt?: string;
}) {
  const closingAlt = imageAlt ?? `Ilustração complementando o convite: ${title}`;
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0f172a] to-blue-950 py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-12 top-14 hidden rounded-xl border border-white/12 bg-white/[0.07] px-3 py-2 text-[0.65rem] font-semibold text-slate-100 shadow-lg backdrop-blur-md sm:block">
        Próximo passo claro
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.45rem]">{title}</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">{body}</p>
            <Link
              href={PAYLE_CONTATO_HREF}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(255,255,255,0.15)] transition hover:bg-blue-50"
            >
              Conversar com a Payle
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-[0_32px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">Na conversa</p>
              <ul className="mt-5 space-y-3">
                {checklist.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/22 text-emerald-300">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10">
                <div className="relative h-36">
                  <Image src={image} alt={closingAlt} fill className="object-cover" sizes="420px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 to-transparent" />
                </div>
                <p className="absolute bottom-3 left-3 right-3 text-xs text-white/90">Humano, direto e sem jargão vazio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PayleInnerMarketingPage({
  page,
  ease,
  viewport
}: {
  page: InnerMarketingPageKey;
  ease: { duration: number; ease?: readonly [number, number, number, number] };
  viewport: { once: boolean; margin: string };
}) {
  const reduce = useReducedMotion();
  const cfg = innerConfigs[page];
  const IconSparkLocal = IconSpark;

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(59,130,246,0.32),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(16,185,129,0.16),transparent_26%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[length:76px_76px] opacity-35" />
        <div className="relative mx-auto min-h-[calc(100vh-4rem)] max-w-7xl px-4 py-12 sm:px-6 lg:min-h-[calc(100vh-3.5rem)] lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={ease}>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.10] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                <IconSparkLocal className="h-3.5 w-3.5 text-blue-300" />
                {cfg.heroEyebrow}
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.05rem]">{cfg.heroTitle}</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">{cfg.heroBody}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={PAYLE_CONTATO_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(255,255,255,0.12)] transition hover:bg-blue-50"
                >
                  Conversar com a Payle
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={PAYLE_FLUXO_HREF}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.12]"
                >
                  Ver fluxo
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...ease, delay: reduce ? 0 : 0.05 }}
              className="relative mx-auto w-full max-w-xl lg:max-w-none"
            >
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-gradient-to-br from-slate-900/80 to-slate-950 shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[5/4] min-h-[20rem] sm:aspect-[4/3] sm:min-h-[24rem]">
                  <Image
                    src={cfg.heroImage}
                    alt={`Ilustração visual no destaque: ${cfg.heroTitle}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 520px, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-950/20 to-transparent" />
                </div>

                {cfg.floatCards[0] && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...ease, delay: 0.12 }}
                    className="absolute left-3 top-3 right-3 sm:left-4 sm:right-auto sm:max-w-[12rem]"
                  >
                    <div className={`rounded-2xl border p-3 shadow-xl backdrop-blur-xl ${toneClass(cfg.floatCards[0].tone)}`}>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-200">{cfg.floatCards[0].title}</p>
                      <p className="mt-1 text-xs text-slate-200">{cfg.floatCards[0].subtitle}</p>
                    </div>
                  </motion.div>
                )}
                {cfg.floatCards[1] && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...ease, delay: 0.18 }}
                    className="absolute right-3 top-[28%] max-w-[11rem] sm:right-5"
                  >
                    <div className={`rounded-xl border px-3 py-2 shadow-lg backdrop-blur-md ${toneClass(cfg.floatCards[1].tone)}`}>
                      <p className="text-xs font-semibold text-white">{cfg.floatCards[1].title}</p>
                      <p className="text-[0.65rem] text-slate-300">{cfg.floatCards[1].subtitle}</p>
                    </div>
                  </motion.div>
                )}
                {cfg.floatCards[2] && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...ease, delay: 0.24 }}
                    className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-4 sm:w-[12rem]"
                  >
                    <div className={`rounded-xl border px-3 py-2 shadow-xl backdrop-blur-md ${toneClass(cfg.floatCards[2].tone)}`}>
                      <p className="text-xs font-semibold text-white">{cfg.floatCards[2].title}</p>
                      <p className="text-[0.65rem] text-slate-300">{cfg.floatCards[2].subtitle}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {page === "planos" ? (
        <section className="relative overflow-hidden bg-white py-20 lg:py-28">
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={ease}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Três caminhos para estruturar sua Payle</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Do essencial ao sob medida — sempre com checkout claro e operação que acompanha o pagamento.
              </p>
            </motion.div>
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {planDeck.map(([name, tag, text], index) => (
                <motion.article
                  key={name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ ...ease, delay: index * 0.06 }}
                  className={`rounded-3xl border p-7 shadow-[0_20px_70px_rgba(15,23,42,0.08)] ${index === 1 ? "border-blue-200 bg-blue-50/80 ring-4 ring-blue-50" : "border-slate-200 bg-white"}`}
                >
                  <p className="text-sm font-semibold text-blue-600">{tag}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">{name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
                  <Link
                    href={PAYLE_CONTATO_HREF}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Falar sobre {name.toLowerCase()}
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: 0.12 }}
              className="mt-16 grid gap-6 lg:grid-cols-2"
            >
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-slate-950">{cfg.bandTitle}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{cfg.bandBody}</p>
              </div>
              <ul className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
                {cfg.bandItems?.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      ) : page === "duvidas" ? (
        <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={ease}
              className="text-center text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              Perguntas frequentes
            </motion.h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {faqFull.map(([q, a], i) => (
                <motion.article
                  key={q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ ...ease, delay: (i % 4) * 0.03 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)]"
                >
                  <h3 className="text-lg font-semibold text-slate-950">{q}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{a}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="relative overflow-hidden bg-white py-20 lg:py-28">
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 rounded-full bg-emerald-100/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">O que você passa a ter na prática</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Cada recurso existe para reduzir atrito depois do clique — sem prometer milagre, só organização.
              </p>
            </motion.div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cfg.pillars.map((p, i) => {
                const Icon = icons[p.icon];
                return (
                  <motion.article
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ ...ease, delay: i * 0.04 }}
                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:border-blue-200"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-950">{p.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{p.body}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {page !== "planos" && page !== "duvidas" && (
        <section className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-24">
          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/4 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease}>
                <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{cfg.bandTitle}</h2>
                <p className="mt-6 text-base leading-8 text-slate-300">{cfg.bandBody}</p>
                {cfg.bandItems && (
                  <ul className="mt-8 space-y-4">
                    {cfg.bandItems.map((t) => (
                      <li key={t} className="flex gap-3 text-sm leading-6 text-slate-200">
                        <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: 0.06 }}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">Resumo</p>
                <p className="mt-4 text-lg font-medium leading-relaxed text-white">
                  Recursos da Payle servem para uma coisa: vender com mais clareza depois do anúncio.
                </p>
                <div className="relative mt-6 h-48 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={cfg.heroImage}
                    alt={`Imagem de apoio ao resumo: ${cfg.bandTitle}`}
                    fill
                    className="object-cover opacity-90"
                    sizes="480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {page === "recursos" && (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <h3 className="text-xl font-semibold text-slate-950">Integra com o seu ecossistema</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Lojas, gateways e automações entram no mesmo fluxo em torno do checkout — sem prometer troca radical da sua stack.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Shopify", "WooCommerce", "Pix", "Cartão", "Boleto", "Tracking", "Recuperação"].map((t) => (
                  <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <PayleInnerClosingCta
        title={cfg.ctaTitle}
        body={cfg.ctaBody}
        checklist={cfg.ctaChecklist}
        image={cfg.heroImage}
        imageAlt={`Ilustração no encerramento da página ${cfg.heroEyebrow}`}
      />
    </>
  );
}
