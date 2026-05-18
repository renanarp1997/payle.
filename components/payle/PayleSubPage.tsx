"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ComponentType, SVGProps } from "react";
import { PayleContactSection } from "./PayleContactSection";
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
    title: "Uma experiência de pagamento criada para operações modernas.",
    body: "A Payle une checkout, dashboard, pagamentos e controle operacional para sua equipe vender com mais clareza, sem transformar a rotina em um emaranhado de abas.",
    image: "/payle-customer-checkout.png",
    cards: [
      ["Checkout com marca", "Uma tela familiar, clara e pronta para reduzir dúvida na hora da compra.", IconPanel],
      ["Dashboard vivo", "Pedidos, pagamentos e eventos em uma leitura simples para o time.", IconActivity],
      ["Controle de ponta a ponta", "Do pedido criado até a entrega liberada, tudo ganha status.", IconCheck]
    ]
  },
  beneficios: {
    eyebrow: "Beneficios",
    title: "Menos improviso no pagamento. Mais confianca na rotina.",
    body: "Tracking, recuperacao, dashboard e status se conectam para dar mais previsibilidade ao pos-clique da venda.",
    image: "/payle-human-support.png",
    cards: [
      ["Tracking confiavel", "Eventos importantes enviados para midia, analytics e rotinas internas.", IconActivity],
      ["Dashboard operacional", "Uma visao clara para aprovacoes, carrinhos e entregas.", IconPanel],
      ["Relatorios e status", "Leitura simples para entender gargalos e agir melhor.", IconLayers]
    ]
  },
  operacao: {
    eyebrow: "Operação",
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

const planCards = [
  ["Essencial", "Para começar", "Checkout personalizado, status de pagamento e integrações principais para organizar a base."],
  ["Operação", "Mais vendido", "Recuperação, eventos rastreados, dashboard e contexto para suporte acompanhar a venda."],
  ["Escala", "Sob medida", "Fluxos personalizados, múltiplas lojas e acompanhamento dedicado para alto volume."]
];

const faqItems = [
  ["A Payle substitui minha loja?", "Não. Ela entra para organizar a experiência de checkout, status, eventos e acompanhamento ao redor da estrutura que você já usa."],
  ["Consigo usar com Pix, cartão e boleto?", "Sim. A disponibilidade depende das integrações e gateways conectados, mas o objetivo é deixar esses meios claros no fluxo."],
  ["A equipe comercial consegue acompanhar?", "Sim. A Payle foi pensada para dar contexto: pedido, pagamento, recuperação, evento e entrega em uma leitura mais humana."],
  ["Preciso de implantação complexa?", "O escopo depende da operação, mas o desenho é feito para encaixar sem quebrar sua rotina atual."]
];

const flowSteps = [
  ["Produto", "Oferta clara e dados da compra preparados para o checkout.", IconWallet],
  ["Checkout", "Tela mobile e objetiva para o cliente concluir sem esforço.", IconPanel],
  ["Pagamento", "Pix, cartão ou boleto com status organizado.", IconCardLock],
  ["Aprovação", "Pedido aprovado e equipe avisada no momento certo.", IconCheck],
  ["Entrega", "Acesso, produto ou próximo passo liberado com menos fricção.", IconBolt]
] satisfies [string, string, SvgIcon][];

const productModules = [
  ["Checkout inteligente", "Uma pagina de pagamento limpa, responsiva e alinhada a identidade da marca.", IconPanel],
  ["Pagamentos conectados", "Pix, cartao e boleto entram no fluxo com status compreensivel para cliente e equipe.", IconCardLock],
  ["Dashboard operacional", "Pedidos, aprovacoes, eventos e recuperacao aparecem em uma visao de rotina.", IconActivity],
  ["Entrega organizada", "Acesso, produto fisico ou proximo passo avancam com menos dependencia manual.", IconBolt]
] satisfies [string, string, SvgIcon][];

const productUseCases = [
  ["E-commerce", "Loja, gateway e entrega conversando sem espalhar contexto em varias ferramentas."],
  ["Infoprodutos", "Pagamento aprovado, acesso liberado e suporte com clareza sobre cada pedido."],
  ["Agencias", "Um padrao de checkout e tracking para operar diferentes clientes com consistencia."]
];

export function PayleSubPage({ page }: { page: PageKey }) {
  const reduce = useReducedMotion();
  const data = pageContent[page];
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-950">
      <PayleSiteHeader />

      <main>
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
            {page === "produto" ? (
              <div className="grid gap-10">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {productModules.map(([title, body, Icon]) => (
                    <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="mt-5 text-lg font-semibold text-slate-950">{title}</h2>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
                    </article>
                  ))}
                </div>

                <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_30px_100px_rgba(15,23,42,0.16)] lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[22rem]">
                    <Image
                      src="/payle-customer-checkout.png"
                      alt="Checkout Payle em uso no celular"
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/[0.14] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">checkout + operacao</p>
                      <p className="mt-2 text-xl font-semibold">O cliente compra com clareza. A equipe acompanha com contexto.</p>
                    </div>
                  </div>

                  <div className="relative bg-[radial-gradient(circle_at_90%_0%,rgba(37,99,235,0.28),transparent_34%)] p-6 text-white sm:p-8">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold">Pedido #1842</p>
                          <p className="mt-1 text-xs text-slate-400">Checkout integrado via Payle</p>
                        </div>
                        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">aprovado</span>
                      </div>
                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {[
                          ["R$ 427,90", "valor aprovado"],
                          ["18s", "Pix confirmado"],
                          ["100%", "status enviado"]
                        ].map(([value, label]) => (
                          <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                            <p className="text-2xl font-semibold">{value}</p>
                            <p className="mt-1 text-xs text-slate-400">{label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3">
                      {productUseCases.map(([title, body]) => (
                        <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                          <p className="font-semibold">{title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-300">{body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : page === "planos" ? (
              <div className="grid gap-5 lg:grid-cols-3">
                {planCards.map(([name, tag, text], index) => (
                  <article key={name} className={`rounded-3xl border p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] ${index === 1 ? "border-blue-200 bg-blue-50/80 ring-4 ring-blue-50" : "border-slate-200 bg-white"}`}>
                    <p className="text-sm font-semibold text-blue-600">{tag}</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-950">{name}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
                    <Link href={PAYLE_CONTATO_HREF} className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                      Falar sobre plano
                    </Link>
                  </article>
                ))}
              </div>
            ) : page === "duvidas" ? (
              <div className="grid gap-4 lg:grid-cols-2">
                {faqItems.map(([question, answer]) => (
                  <article key={question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
                    <h2 className="text-lg font-semibold text-slate-950">{question}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
                  </article>
                ))}
              </div>
            ) : page === "fluxo" ? (
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
      </main>
    </div>
  );
}
