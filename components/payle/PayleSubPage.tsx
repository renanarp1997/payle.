"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ComponentType, SVGProps } from "react";
import { PayleBeneficiosClosingCta, PayleBeneficiosHero, PayleBeneficiosSections } from "./PayleBeneficiosPage";
import { PayleContactSection } from "./PayleContactSection";
import { PayleInnerMarketingPage, type InnerMarketingPageKey } from "./PayleInnerMarketingPages";
import { PayleOperacaoClosingCta, PayleOperacaoHero, PayleOperacaoMainSections } from "./PayleOperacaoPage";
import { PayleProdutoClosingCta, PayleProdutoHero, PayleProdutoMainSections } from "./PayleProdutoPage";
import { PayleSiteHeader } from "./PayleSiteHeader";
import { PAYLE_CONTATO_HREF, PAYLE_FLUXO_HREF } from "./payleSiteNav";
import {
  IconActivity,
  IconArrowRight,
  IconBolt,
  IconCardLock,
  IconCheck,
  IconLayers,
  IconPanel,
  IconPlug,
  IconWallet,
  IconWebhook
} from "./PayleIcons";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;
type PageKey = "produto" | "beneficios" | "operacao" | "integracoes" | "recursos" | "checkout" | "planos" | "duvidas" | "fluxo" | "contato";

const pageContent: Record<
  PageKey,
  {
    eyebrow: string;
    title: string;
    body: string;
    image: string;
    cards: [string, string, SvgIcon][];
  }
> = {
  produto: {
    eyebrow: "Produto",
    title: "Você vende. A Payle organiza o caminho do pagamento.",
    body: "Do primeiro clique ao pedido aprovado, a Payle conecta checkout, pagamento, status e entrega em uma experiência clara para o cliente e fácil de acompanhar pela sua equipe.",
    image: "/payle-customer-checkout.png",
    cards: [
      ["Pedido aprovado", "Confirmação clara para o cliente e para a equipe no mesmo instante.", IconCheck],
      ["Pix confirmado", "Aprovação rápida, sem mensagens soltas no suporte.", IconBolt],
      ["Status enviado", "Mídia e automações recebem o sinal sem você lembrar na mão.", IconActivity]
    ]
  },
  beneficios: {
    eyebrow: "Beneficios",
    title: "Menos atrito no pagamento. Mais tranquilidade para vender.",
    body: "A Payle organiza checkout, tracking, pagamentos e status para sua equipe acompanhar a venda com clareza — do clique no anúncio até o pedido aprovado.",
    image: "/payle-team-operation.png",
    cards: [
      ["Menos improviso", "Rotina mais clara para acompanhar pagamentos sem caos de abas e prints.", IconActivity],
      ["Cliente mais confiante", "Checkout e status legíveis reduzem dúvida na hora de pagar.", IconPanel],
      ["Equipe com visão", "Pedidos e eventos no mesmo contexto, menos investigação manual.", IconLayers]
    ]
  },
  operacao: {
    eyebrow: "Operações",
    title: "Mais clareza para acompanhar sua operação todos os dias.",
    body: "Acompanhe pedidos, pagamentos aprovados, eventos enviados e recuperação de carrinho sem depender de conversas soltas ou planilhas paralelas.",
    image: "/payle-team-operation.png",
    cards: [
      ["Pedidos em movimento", "Sua equipe enxerga o que acabou de acontecer e o que precisa de atenção.", IconActivity],
      ["Recuperação com contexto", "Carrinhos retomados sem parecer insistente ou desconectado.", IconWebhook],
      ["Rotina mais leve", "Menos tempo procurando status, mais tempo atendendo bem.", IconLayers]
    ]
  },
  integracoes: {
    eyebrow: "Integrações",
    title: "Tudo conectado no mesmo fluxo.",
    body: "Shopify, WooCommerce, gateways, ERPs, infoprodutos e automações entram em uma jornada organizada ao redor do checkout e da operação.",
    image: "/payle-human-support.png",
    cards: [
      ["Lojas e canais", "Shopify, WooCommerce e operações digitais trabalhando com o mesmo status.", IconWallet],
      ["Gateways", "Pix, cartão e boleto acompanhados com sinais claros de aprovação.", IconCardLock],
      ["Automações", "Eventos para tracking, entrega e atendimento no momento certo.", IconBolt]
    ]
  },
  recursos: {
    eyebrow: "Recursos",
    title: "Recursos para vender com mais controle e menos improviso.",
    body: "Tracking, recuperação, dashboard, relatórios, automações e status se conectam para dar mais previsibilidade ao pós-clique da venda.",
    image: "/payle-human-support.png",
    cards: [
      ["Tracking confiável", "Eventos importantes enviados para mídia, analytics e rotinas internas.", IconActivity],
      ["Dashboard operacional", "Uma visão clara para aprovações, carrinhos e entregas.", IconPanel],
      ["Relatórios e status", "Leitura simples para entender gargalos e agir melhor.", IconLayers]
    ]
  },
  checkout: {
    eyebrow: "Checkout",
    title: "Checkout claro para quem compra e simples para quem vende.",
    body: "Pix, cartão, boleto e experiência mobile em uma interface objetiva, com aprovação visível e menos ansiedade para cliente e equipe.",
    image: "/payle-customer-checkout.png",
    cards: [
      ["Mobile primeiro", "Uma jornada confortável para comprar pelo celular.", IconWallet],
      ["Pagamento simples", "Pix, cartão e boleto em uma tela direta, sem ruído.", IconCardLock],
      ["Aprovação visível", "Cliente entende o status e a equipe acompanha em tempo real.", IconCheck]
    ]
  },
  planos: {
    eyebrow: "Planos",
    title: "Escolha um plano que acompanha sua operação.",
    body: "Comece com uma base organizada e evolua para recuperação, eventos, automações e acompanhamento dedicado conforme seu volume cresce.",
    image: "/payle-team-operation.png",
    cards: [
      ["Essencial", "Checkout personalizado, status e integrações principais.", IconCheck],
      ["Operação", "Recuperação, eventos e painel para a rotina do time.", IconActivity],
      ["Escala", "Fluxos sob medida para marcas com volume e complexidade.", IconLayers]
    ]
  },
  duvidas: {
    eyebrow: "Dúvidas",
    title: "Dúvidas frequentes sobre a Payle.",
    body: "Respostas objetivas para entender como a Payle entra na sua loja, nos seus meios de pagamento e na rotina da equipe.",
    image: "/payle-consultants-highfive.png",
    cards: [
      ["Preciso trocar minha loja?", "Não. A Payle se conecta à estrutura atual quando a integração permite.", IconPlug],
      ["Funciona com Pix e cartão?", "Sim. O fluxo acompanha meios de pagamento conforme os gateways conectados.", IconCardLock],
      ["Minha equipe vê o status?", "Sim. A operação ganha uma leitura clara do pedido até a entrega.", IconActivity]
    ]
  },
  fluxo: {
    eyebrow: "Fluxo",
    title: "Veja como a Payle entra no seu fluxo de venda.",
    body: "Produto, checkout, pagamento, aprovação e entrega deixam de ser etapas soltas e passam a conversar em uma jornada única.",
    image: "/payle-team-operation.png",
    cards: [
      ["Produto", "A oferta chega organizada ao checkout.", IconWallet],
      ["Pagamento", "O cliente escolhe o meio e recebe clareza.", IconCardLock],
      ["Entrega", "A aprovação libera o próximo passo sem confusão.", IconBolt]
    ]
  },
  contato: {
    eyebrow: "Contato",
    title: "Fale com a Payle.",
    body: "Comercial e suporte com contexto: volume, integracoes e proximos passos em uma conversa objetiva.",
    image: "/payle-consultants-highfive.png",
    cards: [
      ["Comercial", "Proposta alinhada ao seu cenario e canais.", IconCheck],
      ["Resposta humana", "Time que entende checkout, pedido e pagamento.", IconActivity],
      ["Integracoes", "Avaliamos gateways e loja na mesma conversa.", IconPlug]
    ]
  }
};

const flowSteps = [
  ["Produto", "Oferta clara e dados da compra preparados para o checkout.", IconWallet],
  ["Checkout", "Tela mobile e objetiva para o cliente concluir sem esforço.", IconPanel],
  ["Pagamento", "Pix, cartão ou boleto com status organizado.", IconCardLock],
  ["Aprovação", "Pedido aprovado e equipe avisada no momento certo.", IconCheck],
  ["Entrega", "Acesso, produto ou próximo passo liberado com menos fricção.", IconBolt]
] satisfies [string, string, SvgIcon][];

const innerMarketingPages: Record<InnerMarketingPageKey, true> = {
  recursos: true,
  planos: true,
  duvidas: true
};

function isInnerMarketingPage(page: PageKey): page is InnerMarketingPageKey {
  return page in innerMarketingPages;
}

export function PayleSubPage({ page }: { page: PageKey }) {
  const reduce = useReducedMotion();
  const data = pageContent[page];
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
  const viewport = { once: true, margin: "-80px" };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-950">
      <PayleSiteHeader />

      <main>
        {page === "produto" ? (
          <>
            <PayleProdutoHero ease={ease} />
            <PayleProdutoMainSections viewport={viewport} />
            <PayleProdutoClosingCta />
          </>
        ) : page === "beneficios" ? (
          <>
            <PayleBeneficiosHero ease={ease} />
            <PayleBeneficiosSections viewport={viewport} />
            <PayleBeneficiosClosingCta />
          </>
        ) : page === "operacao" ? (
          <>
            <PayleOperacaoHero ease={ease} />
            <PayleOperacaoMainSections viewport={viewport} />
            <PayleOperacaoClosingCta />
          </>
        ) : isInnerMarketingPage(page) ? (
          <PayleInnerMarketingPage page={page} ease={ease} viewport={viewport} />
        ) : (
          <>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(59,130,246,0.32),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(16,185,129,0.16),transparent_26%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[length:76px_76px] opacity-35" />
          <div className="relative mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={ease}>
              <p className="inline-flex rounded-full border border-white/15 bg-white/[0.10] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                {data.eyebrow}
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {data.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {data.body}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={PAYLE_CONTATO_HREF} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50">
                  Conversar com especialista
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link href={PAYLE_FLUXO_HREF} className="inline-flex items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.12]">
                  Ver fluxo
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 22, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ ...ease, delay: 0.08 }} className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] p-2 shadow-[0_34px_110px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <div className="relative h-[19rem] overflow-hidden rounded-[1.5rem] sm:h-[28rem]">
                  <Image src={data.image} alt={data.title} fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
                    {data.cards.map(([title, body, Icon]) => (
                      <div key={title} className="rounded-2xl border border-white/15 bg-white/[0.14] p-4 text-white shadow-lg backdrop-blur-xl">
                        <Icon className="h-5 w-5 text-emerald-300" />
                        <p className="mt-3 text-sm font-semibold">{title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-300">{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {page === "contato" ? (
          <PayleContactSection />
        ) : (
        <section className="relative overflow-hidden bg-white py-20">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {page === "fluxo" ? (
              <div className="grid gap-4 lg:grid-cols-5">
                {flowSteps.map(([title, body, Icon], index) => (
                  <article key={title} className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
                    {index < flowSteps.length - 1 && <div className="absolute left-[calc(50%+2rem)] top-11 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-blue-300 to-transparent lg:block" />}
                    <span className="text-xs font-semibold text-blue-600">0{index + 1}</span>
                    <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 font-semibold text-slate-950">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-3">
                {data.cards.map(([title, body, Icon]) => (
                  <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-lg font-semibold text-slate-950">{title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
        )}

        {page !== "contato" && (
        <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.28),transparent_30%)]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Quer ver a Payle encaixada na sua operação?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
              A gente olha seu cenário, entende seus canais e mostra como checkout, pagamentos, status e entrega podem conversar melhor.
            </p>
            <Link href={PAYLE_CONTATO_HREF} className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-50">
              Conversar com a Payle
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
        )}
          </>
        )}
      </main>
    </div>
  );
}
