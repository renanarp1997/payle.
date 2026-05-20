"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import { ComponentType, SVGProps } from "react";
import { type PayleThemeId } from "./payleTheme";
import { PayleContactSection } from "./PayleContactSection";
import { PayleHero } from "./PayleHero";
import { PayleSiteHeader } from "./PayleSiteHeader";
import {
  IconActivity,
  IconArrowRight,
  IconBolt,
  IconCardLock,
  IconCheck,
  IconLayers,
  IconPanel,
  IconPayleMark,
  IconPlug,
  IconSpark,
  IconSplit,
  IconWallet,
  IconWebhook
} from "./PayleIcons";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

const benefits: { eyebrow: string; title: string; body: string; stat: string; Icon: SvgIcon }[] = [
  {
    eyebrow: "Marca",
    title: "Seu cliente entende o pagamento sem esforço",
    body: "A página fica clara, bonita e familiar. Menos dúvida no checkout, mais tranquilidade para quem está comprando.",
    stat: "mais clareza",
    Icon: IconPanel
  },
  {
    eyebrow: "Operações",
    title: "Menos tempo resolvendo checkout",
    body: "Gateways, pedidos e eventos aparecem no mesmo lugar. Sua equipe perde menos tempo procurando resposta.",
    stat: "rotina organizada",
    Icon: IconPlug
  },
  {
    eyebrow: "Pagamento",
    title: "Pagamento simples, mesmo no dia cheio",
    body: "Pix, cartão e boleto aparecem em uma jornada objetiva para o comprador concluir sem se sentir perdido.",
    stat: "menos fricção",
    Icon: IconCardLock
  },
  {
    eyebrow: "Dados",
    title: "Status vivo para acompanhar a venda",
    body: "Pedido criado, Pix aprovado, evento enviado, entrega liberada. Tudo com sinais simples para agir mais rápido.",
    stat: "ao vivo",
    Icon: IconActivity
  },
  {
    eyebrow: "Recuperação",
    title: "Recupere sem parecer insistente",
    body: "Lembretes de carrinho entram com contexto e cuidado, sem transformar sua marca em uma máquina de mensagens.",
    stat: "com bom senso",
    Icon: IconWebhook
  },
  {
    eyebrow: "Crescimento",
    title: "Uma operação mais tranquila para crescer",
    body: "Loja, infoproduto ou agência: a Payle ajuda a manter a base organizada enquanto o volume aumenta.",
    stat: "crescimento saudavel",
    Icon: IconLayers
  }
];

const useCases = [
  {
    title: "Lojas Shopify",
    body: "Venda com uma experiência de pagamento mais alinhada à sua marca.",
    Icon: IconWallet
  },
  {
    title: "Infoprodutos",
    body: "Pagamento organizado e entrega automatizada após aprovação.",
    Icon: IconSpark
  },
  {
    title: "Agências",
    body: "Padronize checkout, tracking e recuperação para diferentes clientes.",
    Icon: IconSplit
  }
];

const channels = ["Shopify", "WooCommerce", "Infoproduto", "Educe", "Bling", "Tiny"];
const gateways = ["Asaas", "Mercado Pago", "PagSeguro", "Efi", "Stone", "Cielo", "Pagar.me", "Appmax", "Dom"];

const flow = [
  { step: "01", title: "Produto", body: "Oferta clara, dados da compra e origem do pedido.", Icon: IconWallet },
  { step: "02", title: "Checkout", body: "Tela responsiva com identidade da sua marca.", Icon: IconPanel },
  { step: "03", title: "Pagamento", body: "Pix, cartão ou boleto em uma jornada simples.", Icon: IconCardLock },
  { step: "04", title: "Aprovação", body: "Status visível para cliente e operação.", Icon: IconCheck },
  { step: "05", title: "Entrega", body: "Pedido, acesso ou arquivo liberado com menos fricção.", Icon: IconBolt }
];

const testimonials = [
  {
    quote: "A maior mudança foi parar de apagar incêndio no checkout. Agora a equipe sabe o que aconteceu em cada pedido.",
    name: "Camila R.",
    role: "Operação de e-commerce"
  },
  {
    quote: "O cliente entende o pagamento e a gente acompanha os eventos sem depender de várias abas abertas.",
    name: "Diego M.",
    role: "Agência de performance"
  },
  {
    quote: "Ficou mais fácil vender infoproduto com entrega automática sem deixar o suporte sobrecarregado.",
    name: "Livia A.",
    role: "Produtora digital"
  }
];

export function PayleLanding({ theme: _theme }: { theme: PayleThemeId }) {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
  const viewport = { once: true, margin: "-80px" as const };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.07 } }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: ease }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.13),transparent_34%),linear-gradient(rgba(37,99,235,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.026)_1px,transparent_1px)] bg-[length:100%_100%,88px_88px,88px_88px]" />

      <PayleSiteHeader />

      <main className="relative z-10 w-full max-w-[100vw] overflow-x-hidden">
        <PayleHero />


        <section id="produto" className="relative border-b border-slate-200 bg-white payle-section-y">
          <div className="payle-container">
            <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={container} className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
              <motion.div variants={fadeUp}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Produto</p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Menos estresse entre o pedido e o pagamento aprovado.
                </h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-base leading-8 text-slate-600">
                Pessoas vendem para pessoas. A Payle cuida da parte que costuma gerar dúvida: checkout, status, eventos e entrega, para sua equipe trabalhar com mais calma.
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="mt-10 grid overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 shadow-[0_26px_90px_rgba(15,23,42,0.14)] sm:mt-12 sm:rounded-[2rem] lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[14rem] sm:min-h-[19rem]">
                <Image src="/payle-team-operation.png" alt="Equipe de e-commerce usando dashboard para acompanhar pedidos" fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 to-transparent" />
              </div>
              <div className="bg-[radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.25),transparent_28%)] p-5 text-white sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Operação real</p>
                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">Uma manhã mais tranquila para acompanhar vendas.</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Pedidos aprovados, carrinhos retomados e entregas liberadas aparecem como sinais simples. Ninguém precisa ficar perguntando em vários canais se a venda deu certo.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Pedido aprovado", "Cliente atualizado", "Entrega liberada", "Suporte com contexto"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm text-slate-200">
                      <IconCheck className="mb-2 h-4 w-4 text-emerald-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={viewport} className="mt-12 grid gap-5 md:grid-cols-3">
              {useCases.map((item) => (
                <motion.article key={item.title} variants={fadeUp} whileHover={reduce ? undefined : { y: -6 }} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(37,99,235,0.12)]">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100 opacity-0 blur-2xl transition group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                    <item.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="relative mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="beneficios" className="relative overflow-hidden bg-slate-50 payle-section-y">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Benefícios</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Menos improviso no pagamento. Mais confiança na rotina.
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Cada detalhe foi pensado para reduzir atrito, mostrar status importantes e dar ao time uma leitura melhor do que acontece na venda.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={ease}
              className="mt-12 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_26px_90px_rgba(15,23,42,0.10)] lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="relative min-h-[16rem] sm:min-h-[20rem] lg:min-h-[24rem]">
                <Image
                  src="/payle-human-support.png"
                  alt="Pessoa usando notebook com apoio humano da Payle"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/[0.16] p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                  <p className="text-sm font-semibold">Uma operação mais tranquila para sua equipe.</p>
                  <p className="mt-1 text-xs text-blue-100">Menos tempo resolvendo checkout. Mais contexto para atender melhor.</p>
                </div>
              </div>
              <div className="relative bg-[radial-gradient(circle_at_90%_0%,rgba(37,99,235,0.16),transparent_30%)] p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Rotina organizada</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  O checkout vira uma conversa clara entre cliente, pagamento e equipe.
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Em vez de telas soltas, a Payle mostra o que aconteceu e o que precisa de atenção. O time entende a venda sem depender de várias abas abertas.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Pedido aprovado", "status claro para a equipe"],
                    ["Cliente atualizado", "menos chamados repetidos"],
                    ["Gateway conectado", "operação sem troca radical"],
                    ["Entrega liberada", "fluxo finalizado com segurança"]
                  ].map(([label, body]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <IconCheck className="h-5 w-5 text-emerald-500" />
                      <p className="mt-3 font-semibold text-slate-950">{label}</p>
                      <p className="mt-1 text-sm text-slate-500">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-3xl border border-blue-100 bg-blue-50 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-blue-950">Mais clareza para quem compra e para quem opera.</p>
                      <p className="mt-1 text-xs text-blue-700">Checkout, eventos e suporte falando a mesma lingua.</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">ao vivo</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={viewport} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item) => (
                <motion.article key={item.title} variants={fadeUp} whileHover={reduce ? undefined : { y: -7 }} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition hover:border-blue-200 hover:shadow-[0_26px_80px_rgba(37,99,235,0.12)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{item.eyebrow}</span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <item.Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <IconCheck className="h-4 w-4" />
                    {item.stat}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white payle-section-y">
          <div className="absolute left-0 top-8 h-72 w-72 rounded-full bg-blue-100/80 blur-3xl" />
          <div className="absolute bottom-6 right-0 h-80 w-80 rounded-full bg-emerald-100/70 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={ease}
              className="relative isolate overflow-hidden rounded-[32px] border-[3px] border-[#dbe7ff]/40 bg-slate-950 shadow-[0_24px_64px_-12px_rgba(37,99,235,0.28),0_34px_110px_rgba(15,23,42,0.18)] [backface-visibility:hidden]"
              style={{
                clipPath: "inset(0 round 32px)",
                WebkitClipPath: "inset(0 round 32px)",
              }}
            >
              <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
                <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[26rem] lg:min-h-[34rem]">
                  <Image
                    src="/payle-team-operation.png"
                    alt="Equipe de e-commerce acompanhando pedidos e pagamentos em tempo real"
                    fill
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/[0.14] p-5 text-white shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Operação real</p>
                    <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
                      Existem pessoas acompanhando cada pedido.
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">
                      Pedidos aprovados, carrinhos retomados e entregas liberadas aparecem como sinais simples. A equipe respira melhor quando sabe o que está acontecendo.
                    </p>
                  </div>
                </div>

                <div className="relative bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.22),transparent_30%)] p-5 sm:p-7">
                  <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-3 sm:gap-4">
                    {[
                      ["1.248", "pedidos acompanhados"],
                      ["18 min", "tempo economizado"],
                      ["97%", "clientes atualizados"]
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.08] p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur">
                        <p className="text-2xl font-semibold">{value}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-300">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.08] p-5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">Atividade em tempo real</p>
                        <p className="mt-1 text-xs text-slate-400">O que a equipe ve durante o dia</p>
                      </div>
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">ao vivo</span>
                    </div>
                    <div className="mt-5 space-y-3">
                      {[
                        ["MR", "Marina aprovou pedido via Pix", "agora", "bg-blue-500"],
                        ["RF", "Rafael recuperou um carrinho", "2 min", "bg-emerald-500"],
                        ["BA", "Bianca liberou acesso ao curso", "5 min", "bg-slate-600"],
                        ["CS", "Suporte recebeu contexto do pedido", "8 min", "bg-indigo-500"]
                      ].map(([initials, text, time, color]) => (
                        <div key={text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/35 px-3 py-3">
                          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${color}`}>
                            {initials}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm text-slate-100">{text}</p>
                            <p className="text-xs text-slate-500">{time}</p>
                          </div>
                          <IconCheck className="h-4 w-4 text-emerald-300" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white p-5 text-slate-950 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">Pedido #1842</p>
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">aprovado</span>
                      </div>
                      <p className="mt-3 text-2xl font-semibold">R$ 427,90</p>
                      <div className="mt-4 h-2 rounded-full bg-slate-100">
                        <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400" />
                      </div>
                      <p className="mt-3 text-xs text-slate-500">checkout, pagamento e entrega conectados</p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold">C</span>
                        <div>
                          <p className="font-semibold">Camila R.</p>
                          <p className="text-xs text-slate-400">Operação de e-commerce</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-200">
                        "A gente parou de perguntar em qual etapa o pedido travou. Agora todo mundo enxerga."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="mt-6 grid gap-4 lg:grid-cols-3">
              {testimonials.slice(0, 3).map((item, index) => (
                <article key={item.name} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white ${index === 0 ? "bg-blue-600" : index === 1 ? "bg-slate-900" : "bg-emerald-600"}`}>
                      {item.name.slice(0, 1)}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-950">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">"{item.quote}"</p>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="integracoes" className="relative overflow-hidden bg-white payle-section-y">
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <motion.div initial={{ opacity: 0, x: reduce ? 0 : -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewport} transition={ease}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Integrações</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Um ecossistema conectado ao redor do checkout.
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Sua loja, gateways, ERP e entrega digital podem trabalhar no mesmo fluxo. A Payle organiza a experiência para que o cliente pague e sua equipe acompanhe.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="relative rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_26px_90px_rgba(15,23,42,0.1)] sm:rounded-[2rem] sm:p-5">
                <div className="absolute inset-4 rounded-[1.25rem] border border-dashed border-blue-200 sm:inset-6 sm:rounded-[1.5rem]" />
                <div className="relative flex flex-col items-center gap-6 md:grid md:grid-cols-[1fr_0.86fr_1fr] md:items-center md:gap-5">
                  <div className="space-y-3">
                    {channels.slice(0, 3).map((name) => (
                      <div key={name} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                        {name}
                      </div>
                    ))}
                  </div>

                  <div className="relative mx-auto flex h-36 w-36 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-[0_24px_70px_rgba(37,99,235,0.25)] sm:h-44 sm:w-44">
                    <div className="absolute inset-3 rounded-full border border-white/20" />
                    <IconPayleMark className="h-12 w-12" />
                    <span className="absolute -bottom-3 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-lg">Payle</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {gateways.slice(0, 8).map((name) => (
                      <span key={name} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-center text-xs font-semibold text-slate-600 shadow-sm">
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="checkout" className="relative overflow-hidden bg-slate-950 payle-section-y text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.25),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(16,185,129,0.14),transparent_24%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Checkout</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Do produto aprovado até a entrega, cada etapa com status.
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Uma jornada visual para o cliente e operacional para sua equipe: pedido, checkout, pagamento, aprovação e entrega conectados.
              </p>
            </motion.div>

            <div className="payle-h-scroll mt-10 sm:mt-12">
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={viewport} className="flex snap-x snap-mandatory gap-3 lg:grid lg:grid-cols-5 lg:gap-4 lg:snap-none">
              {flow.map((item, index) => (
                <motion.div key={item.title} variants={fadeUp} className="payle-h-scroll-item relative">
                  {index < flow.length - 1 && <div className="absolute left-[calc(50%+2rem)] top-10 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-blue-400/70 to-transparent lg:block" />}
                  <div className="relative h-full rounded-2xl border border-white/12 bg-white/[0.07] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur sm:rounded-3xl sm:p-5">
                    <span className="text-xs font-semibold text-blue-300">{item.step}</span>
                    <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200 ring-1 ring-blue-300/20">
                      <item.Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
                  </div>
                </motion.div>
              ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewport}
              transition={ease}
              className="mt-10"
            >
              <div
                className="relative isolate overflow-hidden rounded-[32px] border-[3px] border-[#dbe7ff]/40 bg-[#07111f] shadow-[0_24px_64px_-12px_rgba(37,99,235,0.32),0_32px_80px_-20px_rgba(2,6,23,0.65)] [backface-visibility:hidden]"
                style={{
                  clipPath: "inset(0 round 32px)",
                  WebkitClipPath: "inset(0 round 32px)",
                }}
              >
              <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="relative min-h-[16rem] sm:min-h-[22rem] lg:min-h-[25rem]">
                <div className="absolute inset-0 [&>span]:!absolute [&>span]:!inset-0 [&>span]:!block [&>span]:!size-full [&_img]:!size-full [&_img]:!object-cover">
                  <Image
                    src="/payle-customer-checkout.png"
                    alt="Cliente comprando pelo celular com checkout simples"
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-[#07111f]/20 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[min(40%,12rem)] bg-gradient-to-l from-[#07111f] via-[#07111f]/90 to-transparent lg:w-[38%]" />
                <div className="absolute bottom-5 left-5 right-5 z-10 rounded-2xl border border-white/[0.08] bg-[#0c1628]/90 p-4 shadow-[0_12px_40px_rgba(2,6,23,0.35)]">
                  <p className="text-sm font-semibold text-white">Seu cliente entende o pagamento sem esforço.</p>
                  <p className="mt-1 text-xs text-slate-300">Uma tela clara no momento em que a compra acontece.</p>
                </div>
              </div>

              <div className="relative flex flex-col gap-8 bg-[#07111f] p-6 sm:gap-10 sm:p-8 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-12 lg:p-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-16 bg-gradient-to-r from-transparent to-[#07111f] lg:block" aria-hidden />
                <div className="relative z-[1] flex min-w-0 w-full max-w-xl flex-1 flex-col md:max-w-[28rem] lg:max-w-[32rem]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Jornada humana</p>
                  <h3 className="mt-4 text-balance text-[1.65rem] font-semibold leading-[1.2] tracking-tight text-white sm:mt-5 sm:text-[1.85rem] md:text-[1.95rem] lg:text-3xl">
                    Cliente compra, Payle organiza, equipe acompanha.
                  </h3>
                  <p className="mt-5 max-w-lg text-[0.95rem] leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
                    Do celular do cliente ao painel da operação, cada etapa ganha um status simples. Menos ansiedade para quem compra, menos retrabalho para quem atende.
                  </p>

                  <div className="mt-6 w-full shrink-0 md:hidden">
                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.05] p-5 shadow-[0_12px_40px_rgba(2,6,23,0.3)] backdrop-blur-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">Aprovado</p>
                      <p className="mt-3 text-2xl font-semibold tracking-tight text-white">R$ 289,70</p>
                      <p className="mt-1.5 text-xs leading-5 text-slate-400">Pedido liberado</p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3 sm:mt-10">
                    {[
                      ["Cliente escolhe Pix", "checkout claro no celular"],
                      ["Pagamento aprovado", "pedido atualizado na hora"],
                      ["Equipe recebe contexto", "suporte sabe o que responder"],
                      ["Entrega liberada", "produto ou acesso segue o fluxo"]
                    ].map(([label, body], index) => (
                      <div key={label} className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">{index + 1}</span>
                        <div className="min-w-0">
                          <p className="font-semibold text-white">{label}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-400">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-[1] hidden w-[12.5rem] shrink-0 md:block lg:w-[13.5rem]">
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.05] p-5 shadow-[0_12px_40px_rgba(2,6,23,0.3)] backdrop-blur-md lg:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">Aprovado</p>
                    <p className="mt-3 text-2xl font-semibold tracking-tight text-white lg:text-[1.65rem]">R$ 289,70</p>
                    <p className="mt-1.5 text-xs leading-5 text-slate-400">Pedido liberado</p>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </motion.div>
          </div>
        </section>

        <PayleContactSection />
      </main>
    </div>
  );
}
