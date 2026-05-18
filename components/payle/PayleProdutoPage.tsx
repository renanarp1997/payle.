"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  IconActivity,
  IconArrowRight,
  IconBolt,
  IconCardLock,
  IconCheck,
  IconPanel,
  IconSpark
} from "./PayleIcons";
import { PAYLE_CONTATO_HREF, PAYLE_FLUXO_HREF } from "./payleSiteNav";

const productPillars: { title: string; body: string; icon: "panel" | "card" | "activity" | "bolt" }[] = [
  {
    title: "Checkout com a sua marca",
    body: "Uma página de pagamento clara, responsiva e com a identidade da sua loja, para o cliente comprar sem se sentir perdido.",
    icon: "panel"
  },
  {
    title: "Pagamentos sem confusão",
    body: "Pix, cartão e boleto aparecem de forma simples, com status compreensíveis para quem compra e para quem acompanha.",
    icon: "card"
  },
  {
    title: "Operação visível",
    body: "Pedidos, aprovações, eventos e recuperação aparecem em uma leitura única, sem depender de várias abas abertas.",
    icon: "activity"
  },
  {
    title: "Entrega mais organizada",
    body: "Produto físico, acesso digital ou próximo passo: tudo ganha status para sua equipe saber o que fazer.",
    icon: "bolt"
  }
];

const practiceSteps = [
  "Cliente chegou no checkout",
  "Escolheu a forma de pagamento",
  "Pagamento foi aprovado",
  "Pedido ganhou status",
  "Equipe acompanha tudo sem bagunça"
];

const humanProof = [
  {
    tag: "Loja Shopify",
    image: "/payle-team-operation.png",
    pain: "Gateway em um lugar, pedido em outro e planilha paralela virava rotina.",
    quote: "Antes eu precisava olhar gateway, loja e planilha. Agora enxergo o fluxo com mais clareza.",
    help: "A Payle junta checkout e status para você parar de costurar informação no escuro."
  },
  {
    tag: "Infoprodutor",
    image: "/payle-customer-checkout.png",
    pain: "Cliente com dúvida no pagamento virava avalanche de mensagem no suporte.",
    quote: "Quando o cliente entende o pagamento, o suporte diminui.",
    help: "Um fluxo de pagamento legível reduz ansiedade de quem compra e libera seu time."
  },
  {
    tag: "Agência",
    image: "/payle-human-support.png",
    pain: "Cada cliente com um checkout diferente deixava entrega inconsistente.",
    quote: "Padronizar o checkout ajudou a entregar uma experiência melhor para cada cliente.",
    help: "Um padrão Payle por conta mantém qualidade sem reinventar tudo a cada projeto."
  }
];

const beforeItems = ["Checkout confuso", "Status espalhados", "Cliente com dúvida", "Equipe sem visão"];
const afterItems = ["Checkout claro", "Pagamentos conectados", "Status visíveis", "Rotina mais previsível"];

const checklistCta = [
  "Entender seus canais e volume",
  "Ver onde o pagamento costuma travar",
  "Desenhar próximo passo com calma"
];

function PillarIcon({ kind }: { kind: (typeof productPillars)[number]["icon"] }) {
  const cls = "h-6 w-6";
  switch (kind) {
    case "panel":
      return <IconPanel className={cls} />;
    case "card":
      return <IconCardLock className={cls} />;
    case "activity":
      return <IconActivity className={cls} />;
    default:
      return <IconBolt className={cls} />;
  }
}

export function PayleProdutoHero({ ease }: { ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(59,130,246,0.32),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(16,185,129,0.16),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[length:76px_76px] opacity-35" />
      <div className="relative mx-auto min-h-[calc(100vh-4rem)] max-w-7xl px-4 py-12 sm:px-6 lg:min-h-[calc(100vh-3.5rem)] lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={ease}>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.10] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
              <IconSpark className="h-3.5 w-3.5 text-blue-300" />
              Produto
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Você vende. A Payle organiza o caminho do pagamento.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Do primeiro clique ao pedido aprovado, a Payle conecta checkout, pagamento, status e entrega em uma experiência clara para o cliente e fácil de acompanhar pela sua equipe.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={PAYLE_CONTATO_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(255,255,255,0.12)] transition hover:bg-blue-50"
              >
                Conversar com especialista
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
            transition={{ ...ease, delay: reduce ? 0 : 0.06 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.06] shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[4/5] min-h-[22rem] sm:min-h-[26rem] lg:aspect-[5/6]">
                <Image
                  src="/payle-customer-checkout.png"
                  alt="Pessoa finalizando uma compra no celular com checkout claro"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ease, delay: 0.15 }}
                className="absolute left-4 top-4 right-4 sm:left-5 sm:right-auto sm:max-w-[13.5rem]"
              >
                <div className="rounded-2xl border border-white/20 bg-slate-950/75 p-3.5 shadow-xl backdrop-blur-xl">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-300">Pedido aprovado</p>
                  <p className="mt-1 text-lg font-semibold text-white">R$ 427,90</p>
                  <p className="mt-0.5 text-xs text-slate-400">Cliente recebeu confirmação na hora</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...ease, delay: 0.22 }}
                className="absolute right-3 top-[28%] hidden sm:block sm:right-4"
              >
                <div className="rounded-xl border border-blue-300/30 bg-blue-500/20 px-3 py-2 shadow-lg backdrop-blur-md">
                  <p className="text-xs font-semibold text-blue-100">Pix confirmado</p>
                  <p className="text-[0.65rem] text-blue-200/90">em 18 segundos</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ease, delay: 0.28 }}
                className="absolute left-3 bottom-[32%] max-w-[11rem] sm:left-5"
              >
                <div className="rounded-xl border border-white/15 bg-white/[0.12] px-3 py-2 shadow-lg backdrop-blur-md">
                  <p className="text-xs font-semibold text-white">Carrinho recuperado</p>
                  <p className="text-[0.65rem] text-slate-300">Cliente voltou e concluiu</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...ease, delay: 0.34 }}
                className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-[13rem]"
              >
                <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-slate-950/70 px-3 py-2 shadow-xl backdrop-blur-xl">
                  <IconActivity className="h-4 w-4 shrink-0 text-blue-300" />
                  <div>
                    <p className="text-xs font-semibold text-white">Status enviado</p>
                    <p className="text-[0.65rem] text-slate-400">Meta e Google receberam o sinal</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function PayleProdutoMainSections({ viewport }: { viewport: { once: boolean; margin: string } }) {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: ease }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productPillars.map((item, i) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:border-blue-200/80 hover:shadow-[0_24px_60px_rgba(37,99,235,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 text-blue-600 ring-1 ring-blue-100/80 transition group-hover:from-blue-100/80 group-hover:to-white">
                  <PillarIcon kind={item.icon} />
                </div>
                <h2 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-slate-200 bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Na prática, a Payle entra onde a venda costuma travar.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Do checkout ao status do pedido, cada etapa fala a mesma língua: a da pessoa que está comprando e da equipe que precisa saber o que aconteceu.
            </p>
          </motion.div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={ease}
              className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.1)]"
            >
              <div className="relative aspect-[5/6] min-h-[20rem]">
                <Image
                  src="/payle-human-support.png"
                  alt="Profissional acompanhando vendas com atenção humana"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 480px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-transparent to-transparent" />
              </div>
              <p className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-slate-950/65 px-4 py-3 text-sm font-medium text-white shadow-lg backdrop-blur-md">
                Operação com cara de time de verdade — não de painel frio.
              </p>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={{ show: { transition: { staggerChildren: 0.07 } } }}
              className="grid gap-3"
            >
              {practiceSteps.map((text, index) => (
                <motion.li
                  key={text}
                  variants={fadeUp}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-950">{text}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
          >
            Feita para quem vende todos os dias.
          </motion.h2>
          <p
            className="mx-auto mt-4 max-w-xl text-center text-base leading-7 text-slate-600"
          >
            Pessoas reais, rotinas reais — e um caminho de pagamento que não some no meio do caminho.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {humanProof.map((block, i) => (
              <motion.article
                key={block.tag}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: i * 0.06 }}
                className="flex flex-col rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl ring-2 ring-white shadow-md">
                    <Image src={block.image} alt="" fill className="object-cover" sizes="56px" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">{block.tag}</p>
                    <p className="text-sm text-slate-500">Quem usa no dia a dia</p>
                  </div>
                </div>
                <p className="mt-5 text-sm font-medium leading-6 text-slate-800">{block.pain}</p>
                <blockquote className="mt-4 border-l-2 border-blue-500 pl-4 text-sm italic leading-7 text-slate-700">&ldquo;{block.quote}&rdquo;</blockquote>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{block.help}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-slate-950 py-20 text-white lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="text-center text-2xl font-semibold sm:text-3xl"
          >
            Antes e depois do caos do pós-clique
          </motion.h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={ease}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-300">Antes da Payle</p>
              <ul className="mt-6 space-y-4">
                {beforeItems.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/90" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: 0.08 }}
              className="rounded-[1.5rem] border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-slate-900/80 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Com a Payle</p>
              <ul className="mt-6 space-y-4">
                {afterItems.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-6 text-slate-100">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export function PayleProdutoClosingCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0f172a] to-blue-950 py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-12 animate-pulse rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.65rem] font-semibold text-blue-100 shadow-lg backdrop-blur-md">
        Pix aprovado · agora
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.5rem]">
              Quer entender como a Payle encaixa na sua operação?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              A gente olha seu cenário, seus canais de venda e mostra um caminho simples para organizar checkout, pagamentos e acompanhamento.
            </p>
            <Link
              href={PAYLE_CONTATO_HREF}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(255,255,255,0.18)] transition hover:bg-blue-50"
            >
              Conversar com a Payle
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -right-2 top-1/4 z-10 hidden rounded-xl border border-white/15 bg-slate-900/90 px-3 py-2 text-left shadow-xl backdrop-blur-md sm:block">
              <p className="text-[0.65rem] font-semibold text-emerald-300">Novo pedido</p>
              <p className="text-xs text-white">Pedido #1893 aprovado</p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-[0_32px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">Por onde começamos</p>
              <ul className="mt-5 space-y-3">
                {checklistCta.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10">
                <div className="relative h-36">
                  <Image
                    src="/payle-consultants-highfive.png"
                    alt="Equipe Payle em conversa com cliente"
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                </div>
                <p className="absolute bottom-3 left-3 right-3 text-xs text-white/90">
                  Conversa com people, não só com checklist de feature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
