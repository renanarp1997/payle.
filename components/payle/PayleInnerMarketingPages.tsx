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

export type InnerMarketingPageKey = "operacao";

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
  operacao: {
    heroEyebrow: "Operações",
    heroTitle: "Sua operação de vendas com menos ruído e mais clareza.",
    heroBody:
      "Pedidos, pagamentos, recuperação e eventos deixam de viver em conversas soltas. A Payle ajuda o time a ver o que importa no ritmo do dia.",
    heroImage: "/payle-team-operation.png",
    floatCards: [
      { title: "Pedido em análise", subtitle: "Time sabe de onde veio o alerta", tone: "blue" },
      { title: "Carrinho retomado", subtitle: "Lembrete com contexto da compra", tone: "amber" },
      { title: "Evento enviado", subtitle: "Mídia e operação alinhadas", tone: "emerald" }
    ],
    pillars: [
      {
        title: "Painel que acompanha o dia",
        body: "Aprovações, pendências e movimentos recentes em uma leitura objetiva para quem opera.",
        icon: "activity"
      },
      {
        title: "Recuperação com histórico",
        body: "Voltar atrás de carrinho sem perder o fio da meada de cada cliente.",
        icon: "webhook"
      },
      {
        title: "Status que o suporte entende",
        body: "Menos “me manda o comprovante” genérico: o pedido carrega contexto.",
        icon: "panel"
      },
      {
        title: "Menos planilha paralela",
        body: "Reduzir colagem manual entre loja, gateway e planilha de controle.",
        icon: "layers"
      },
      {
        title: "Gateways no mesmo fluxo",
        body: "Pix, cartão e boleto aparecem como parte da mesma narrativa operacional.",
        icon: "card"
      },
      {
        title: "Time mais tranquilo",
        body: "Cada etapa com status claro: menos caça ao tesouro no meio da tarde.",
        icon: "check"
      }
    ],
    bandTitle: "Na prática, o dia fica mais previsível.",
    bandBody:
      "Campanhas, picos de tráfego e dias com muitos pedidos continuam existindo — a diferença é saber onde olhar quando algo precisa de atenção.",
    bandItems: [
      "Você enxerga o que foi aprovado e o que ainda está em aberto.",
      "Recuperação e eventos não ficam escondidos em outro sistema.",
      "A equipe responde cliente com base no que realmente aconteceu no pedido."
    ],
    ctaTitle: "Quer organizar a rotina da sua operação?",
    ctaBody:
      "Conte como sua equipe trabalha hoje: canais, volume e principais dores. Mostramos onde a Payle encaixa com calma.",
    ctaChecklist: ["Mapear ferramentas e gargalos", "Ver painel e eventos com exemplos", "Definir próximo passo sem pressa"]
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
        <div className="relative mx-auto max-w-7xl px-4 py-12 pb-16 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
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

      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 rounded-full bg-emerald-100/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                O que muda no dia a dia da operação
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Menos correção manual, mais leitura única: pedido, pagamento, recuperação e eventos no mesmo ritmo.
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
                  Operação boa é time que enxerga o pagamento sem depender de cinco abas abertas.
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
