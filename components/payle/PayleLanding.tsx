"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import { ComponentType, SVGProps } from "react";
import { type PayleThemeId } from "./payleTheme";
import { PayleContactSection } from "./PayleContactSection";
import { PayleSiteHeader } from "./PayleSiteHeader";
import { PAYLE_CONTATO_HREF } from "./payleSiteNav";
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

const metrics = [
  { value: "R$ 18.420", label: "processados hoje", trend: "+12%" },
  { value: "84%", label: "aprovacao no fluxo", trend: "estavel" },
  { value: "32", label: "eventos rastreados", trend: "ao vivo" }
];

const benefits: { eyebrow: string; title: string; body: string; stat: string; Icon: SvgIcon }[] = [
  {
    eyebrow: "Marca",
    title: "Seu cliente entende o pagamento sem esforco",
    body: "A pagina fica clara, bonita e familiar. Menos duvida no checkout, mais tranquilidade para quem esta comprando.",
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
    body: "Pix, cartao e boleto aparecem em uma jornada objetiva para o comprador concluir sem se sentir perdido.",
    stat: "menos friccao",
    Icon: IconCardLock
  },
  {
    eyebrow: "Dados",
    title: "Status vivo para acompanhar a venda",
    body: "Pedido criado, Pix aprovado, evento enviado, entrega liberada. Tudo com sinais simples para agir mais rapido.",
    stat: "ao vivo",
    Icon: IconActivity
  },
  {
    eyebrow: "Recuperacao",
    title: "Recupere sem parecer insistente",
    body: "Lembretes de carrinho entram com contexto e cuidado, sem transformar sua marca em uma maquina de mensagens.",
    stat: "com bom senso",
    Icon: IconWebhook
  },
  {
    eyebrow: "Crescimento",
    title: "Uma operação mais tranquila para crescer",
    body: "Loja, infoproduto ou agencia: a Payle ajuda a manter a base organizada enquanto o volume aumenta.",
    stat: "crescimento saudavel",
    Icon: IconLayers
  }
];

const useCases = [
  {
    title: "Lojas Shopify",
    body: "Venda com uma experiencia de pagamento mais alinhada a sua marca.",
    Icon: IconWallet
  },
  {
    title: "Infoprodutos",
    body: "Pagamento organizado e entrega automatizada apos aprovacao.",
    Icon: IconSpark
  },
  {
    title: "Agencias",
    body: "Padronize checkout, tracking e recuperacao para diferentes clientes.",
    Icon: IconSplit
  }
];

const channels = ["Shopify", "WooCommerce", "Infoproduto", "Educe", "Bling", "Tiny"];
const gateways = ["Asaas", "Mercado Pago", "PagSeguro", "Efi", "Stone", "Cielo", "Pagar.me", "Appmax", "Dom"];

const flow = [
  { step: "01", title: "Produto", body: "Oferta clara, dados da compra e origem do pedido.", Icon: IconWallet },
  { step: "02", title: "Checkout", body: "Tela responsiva com identidade da sua marca.", Icon: IconPanel },
  { step: "03", title: "Pagamento", body: "Pix, cartao ou boleto em uma jornada simples.", Icon: IconCardLock },
  { step: "04", title: "Aprovacao", body: "Status visivel para cliente e operação.", Icon: IconCheck },
  { step: "05", title: "Entrega", body: "Pedido, acesso ou arquivo liberado com menos friccao.", Icon: IconBolt }
];

const checkoutEvents: { label: string; body: string; tone: "blue" | "slate" | "emerald"; Icon: SvgIcon }[] = [
  { label: "Pix aprovado", body: "Pedido liberado em segundos", tone: "blue", Icon: IconBolt },
  { label: "Evento enviado", body: "Meta e Google receberam sinal", tone: "slate", Icon: IconActivity },
  { label: "Entrega pronta", body: "Acesso liberado automaticamente", tone: "emerald", Icon: IconCheck }
];

const liveActivities = [
  { name: "Marina", action: "aprovou um pedido via Pix", time: "agora" },
  { name: "Rafael", action: "recuperou um carrinho", time: "2 min" },
  { name: "Bianca", action: "liberou acesso ao produto", time: "5 min" }
];

const heroNotifications = [
  "Pix aprovado",
  "Pedido liberado",
  "Carrinho recuperado",
  "Shopify sincronizada"
];

const socialLogos = ["Nuvem Azul", "Casa Lume", "Studio Norte", "Curso Vivo", "Marca Boa"];

const testimonials = [
  {
    quote: "A maior mudanca foi parar de apagar incendio no checkout. Agora a equipe sabe o que aconteceu em cada pedido.",
    name: "Camila R.",
    role: "Operação de e-commerce"
  },
  {
    quote: "O cliente entende o pagamento e a gente acompanha os eventos sem depender de varias abas abertas.",
    name: "Diego M.",
    role: "Agencia de performance"
  },
  {
    quote: "Ficou mais facil vender infoproduto com entrega automatica sem deixar o suporte sobrecarregado.",
    name: "Livia A.",
    role: "Produtora digital"
  }
];

const footerGroups = [
  { title: "Produto", links: ["Checkout", "Dashboard", "Tracking", "Recuperacao"] },
  { title: "Integracoes", links: ["Shopify", "Gateways", "ERPs", "Infoprodutos"] },
  { title: "Empresa", links: ["Sobre", "Seguranca", "Status", "Privacidade"] },
  { title: "Contato", links: ["Comercial", "Suporte", "LinkedIn", "Email"] }
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
    <div className="min-h-screen overflow-hidden bg-white text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.13),transparent_34%),linear-gradient(rgba(37,99,235,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.026)_1px,transparent_1px)] bg-[length:100%_100%,88px_88px,88px_88px]" />

      <PayleSiteHeader />

      <main className="relative z-10">
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(59,130,246,0.32),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(16,185,129,0.16),transparent_26%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[length:76px_76px] opacity-35" />

          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-14 lg:pt-12">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.10] px-3 py-1.5 text-xs font-semibold text-blue-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur">
                <IconSpark className="h-4 w-4 text-blue-300" />
                Para equipes que vendem todos os dias
              </motion.div>
              <motion.h1 variants={fadeUp} className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[4.35rem]">
                Voce vende. A Payle organiza o checkout por tras.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Checkout claro vende mais. A Payle conecta sua loja, pagamento, eventos e recuperacao para sua equipe trabalhar com menos estresse e mais previsibilidade.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <motion.a href={PAYLE_CONTATO_HREF} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_22px_50px_rgba(255,255,255,0.16)] transition hover:bg-blue-50" whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={reduce ? undefined : { scale: 0.97 }}>
                  Conversar com especialista
                  <IconArrowRight className="h-4 w-4" />
                </motion.a>
                <motion.a href="/produto" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.18] bg-white/[0.08] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-blue-300/60 hover:bg-white/[0.12]" whileHover={reduce ? undefined : { scale: 1.02 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
                  Ver produto
                </motion.a>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {["Cliente entende sem esforco", "Pedido aprovado com status", "Equipe acompanha em tempo real"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.08] px-3 py-2 text-sm text-slate-200 backdrop-blur">
                    <IconCheck className="h-4 w-4 text-emerald-300" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ ...ease, delay: reduce ? 0 : 0.12 }} className="relative">
              <div className="absolute -left-6 top-6 z-10 hidden w-48 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.12] text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:block">
                <div className="relative h-20">
                  <Image src="/payle-team-operation.png" alt="Equipe acompanhando pedidos em uma operação de e-commerce" fill sizes="192px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                </div>
                <div className="p-2.5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-blue-100">Rotina da equipe</p>
                  <p className="mt-1 text-xs font-semibold">Menos tempo procurando status.</p>
                </div>
              </div>
              <div className="absolute -right-1 bottom-10 hidden w-48 rounded-2xl border border-white/15 bg-white/[0.12] p-2.5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:block">
                <p className="text-xs font-semibold">Carrinho recuperado</p>
                <div className="mt-2 h-1.5 rounded-full bg-white/[0.12]">
                  <div className="h-1.5 w-3/4 rounded-full bg-emerald-400" />
                </div>
                <p className="mt-1.5 text-[0.65rem] text-slate-300">cliente voltou pelo lembrete certo</p>
              </div>

              <div className="rounded-[1.35rem] border border-white/[0.14] bg-white/[0.10] p-1.5 shadow-[0_28px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.2rem] border border-white/12 bg-slate-900">
                  <div className="relative h-32 border-b border-white/10 sm:h-36">
                    <Image
                      src="/payle-team-operation.png"
                      alt="Equipe acompanhando vendas em tempo real com a Payle"
                      fill
                      priority
                      sizes="(min-width: 1024px) 680px, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/35 to-transparent" />
                    <div className="absolute left-3 top-3 max-w-[14rem]">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-blue-100">Operação acontecendo</p>
                      <h2 className="mt-1 text-base font-semibold leading-snug text-white sm:text-lg">Vendas, equipe e checkout no mesmo ritmo.</h2>
                    </div>
                    <div className="absolute bottom-2.5 left-3 right-3 flex flex-wrap gap-1.5">
                      {heroNotifications.map((item) => (
                        <span key={item} className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/[0.16] px-2 py-0.5 text-[0.65rem] font-semibold text-white shadow-md backdrop-blur">
                          <IconCheck className="h-2.5 w-2.5 text-emerald-300" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.06] px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-300" />
                      <span className="h-2 w-2 rounded-full bg-amber-300" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="rounded-full border border-blue-300/30 bg-blue-400/10 px-2 py-0.5 text-[0.65rem] font-semibold text-blue-100">payle dashboard</span>
                  </div>

                  <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                    <div className="border-b border-white/10 bg-slate-950/70 p-3 lg:border-b-0 lg:border-r">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">Visão da operação</p>
                          <h2 className="mt-1 text-lg font-semibold text-white">Pagamentos em movimento</h2>
                        </div>
                        <span className="rounded-xl bg-emerald-400/10 p-2 text-emerald-300">
                          <IconActivity className="h-4 w-4" />
                        </span>
                      </div>

                      <div className="mt-3 grid gap-2">
                        {metrics.map((metric) => (
                          <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.06] p-2.5">
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-base font-semibold text-white">{metric.value}</p>
                              <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-300">{metric.trend}</span>
                            </div>
                            <p className="mt-0.5 text-[0.7rem] text-slate-400">{metric.label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.05] p-2.5">
                        <div className="flex items-end gap-1">
                          {[38, 54, 42, 66, 58, 78, 71, 88].map((height, index) => (
                            <div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500 to-cyan-300" style={{ height: Math.round(height * 0.42) }} />
                          ))}
                        </div>
                        <div className="mt-2 flex items-center justify-between text-[0.65rem] text-slate-400">
                          <span>aprovacoes</span>
                          <span>ultimas 8h</span>
                        </div>
                      </div>

                      <div className="mt-2 space-y-1">
                        {liveActivities.map((activity, index) => (
                          <div key={activity.name} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-2 py-1.5">
                            <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-semibold text-white ${index === 0 ? "bg-blue-500" : index === 1 ? "bg-emerald-500" : "bg-slate-600"}`}>
                              {activity.name.slice(0, 1)}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-[0.7rem] text-slate-200">{activity.name} {activity.action}</p>
                              <p className="text-[0.62rem] text-slate-500">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[radial-gradient(circle_at_80%_0%,rgba(34,197,94,0.18),transparent_34%),linear-gradient(145deg,#eff6ff,#ffffff_46%,#ecfdf5)] p-3">
                      <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-xs font-semibold text-slate-950">Checkout ativo</p>
                            <p className="mt-0.5 text-[0.65rem] text-slate-500">Loja integrada via Payle</p>
                          </div>
                          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-700">Seguro</span>
                        </div>

                        <div className="mt-3 space-y-1.5">
                          {checkoutEvents.map(({ label, body, tone, Icon }) => {
                            return (
                              <div key={label} className={`rounded-xl border p-2 ${tone === "blue" ? "border-blue-200 bg-blue-50" : tone === "emerald" ? "border-emerald-200 bg-emerald-50" : "border-slate-200 bg-slate-50"}`}>
                                <div className="flex items-start justify-between gap-2">
                                  <div>
                                    <p className={`text-xs font-semibold ${tone === "blue" ? "text-blue-900" : tone === "emerald" ? "text-emerald-900" : "text-slate-900"}`}>{label}</p>
                                    <p className={`mt-0.5 text-[0.65rem] ${tone === "blue" ? "text-blue-700" : tone === "emerald" ? "text-emerald-700" : "text-slate-500"}`}>{body}</p>
                                  </div>
                                  <Icon className={tone === "emerald" ? "h-4 w-4 shrink-0 text-emerald-600" : "h-4 w-4 shrink-0 text-blue-600"} />
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <button className="mt-3 w-full rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.22)]">
                          Finalizar compra
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="produto" className="relative border-b border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={container} className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
              <motion.div variants={fadeUp}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Produto</p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Menos estresse entre o pedido e o pagamento aprovado.
                </h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-base leading-8 text-slate-600">
                Pessoas vendem para pessoas. A Payle cuida da parte que costuma gerar duvida: checkout, status, eventos e entrega, para sua equipe trabalhar com mais calma.
              </motion.p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="mt-12 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_26px_90px_rgba(15,23,42,0.14)] lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[19rem]">
                <Image src="/payle-team-operation.png" alt="Equipe de e-commerce usando dashboard para acompanhar pedidos" fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 to-transparent" />
              </div>
              <div className="bg-[radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.25),transparent_28%)] p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Operação real</p>
                <h3 className="mt-3 text-2xl font-semibold">Uma manha mais tranquila para acompanhar vendas.</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Pedidos aprovados, carrinhos retomados e entregas liberadas aparecem como sinais simples. Ninguem precisa ficar perguntando em varios canais se a venda deu certo.
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

        <section id="beneficios" className="relative overflow-hidden bg-slate-50 py-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Beneficios</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Menos improviso no pagamento. Mais confianca na rotina.
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
              <div className="relative min-h-[24rem]">
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
                  Em vez de telas soltas, a Payle mostra o que aconteceu e o que precisa de atencao. O time entende a venda sem depender de varias abas abertas.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Pedido aprovado", "status claro para a equipe"],
                    ["Cliente atualizado", "menos chamados repetidos"],
                    ["Gateway conectado", "operação sem troca radical"],
                    ["Entrega liberada", "fluxo finalizado com seguranca"]
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

        <section className="relative overflow-hidden bg-white py-20">
          <div className="absolute left-0 top-8 h-72 w-72 rounded-full bg-blue-100/80 blur-3xl" />
          <div className="absolute bottom-6 right-0 h-80 w-80 rounded-full bg-emerald-100/70 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-950 shadow-[0_34px_110px_rgba(15,23,42,0.18)]">
              <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
                <div className="relative min-h-[34rem] overflow-hidden">
                  <Image
                    src="/payle-team-operation.png"
                    alt="Equipe de e-commerce acompanhando pedidos e pagamentos em tempo real"
                    fill
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                  <div className="absolute left-5 right-5 top-5 flex flex-wrap gap-2">
                    {socialLogos.slice(0, 4).map((logo) => (
                      <span key={logo} className="rounded-full border border-white/20 bg-white/[0.14] px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur">
                        {logo}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/[0.14] p-5 text-white shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Operação real</p>
                    <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight">
                      Existem pessoas acompanhando cada pedido.
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">
                      Pedidos aprovados, carrinhos retomados e entregas liberadas aparecem como sinais simples. A equipe respira melhor quando sabe o que esta acontecendo.
                    </p>
                  </div>
                </div>

                <div className="relative bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.22),transparent_30%)] p-5 sm:p-7">
                  <div className="grid gap-4 sm:grid-cols-3">
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

        <section id="integracoes" className="relative overflow-hidden bg-white py-20">
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <motion.div initial={{ opacity: 0, x: reduce ? 0 : -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewport} transition={ease}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">Integracoes</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Um ecossistema conectado ao redor do checkout.
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Sua loja, gateways, ERP e entrega digital podem trabalhar no mesmo fluxo. A Payle organiza a experiencia para que o cliente pague e sua equipe acompanhe.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_26px_90px_rgba(15,23,42,0.1)]">
                <div className="absolute inset-6 rounded-[1.5rem] border border-dashed border-blue-200" />
                <div className="relative grid gap-5 md:grid-cols-[1fr_0.86fr_1fr] md:items-center">
                  <div className="space-y-3">
                    {channels.slice(0, 3).map((name) => (
                      <div key={name} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                        {name}
                      </div>
                    ))}
                  </div>

                  <div className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-blue-200 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-[0_24px_70px_rgba(37,99,235,0.25)]">
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

        <section id="checkout" className="relative overflow-hidden bg-slate-950 py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.25),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(16,185,129,0.14),transparent_24%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Checkout</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Do produto aprovado ate a entrega, cada etapa com status.
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Uma jornada visual para o cliente e operacional para sua equipe: pedido, checkout, pagamento, aprovacao e entrega conectados.
              </p>
            </motion.div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={viewport} className="mt-12 grid gap-4 lg:grid-cols-5">
              {flow.map((item, index) => (
                <motion.div key={item.title} variants={fadeUp} className="relative">
                  {index < flow.length - 1 && <div className="absolute left-[calc(50%+2rem)] top-10 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-blue-400/70 to-transparent lg:block" />}
                  <div className="relative h-full rounded-3xl border border-white/12 bg-white/[0.07] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur">
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

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={ease}
              className="mt-10 grid overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] shadow-[0_28px_90px_rgba(0,0,0,0.24)] backdrop-blur lg:grid-cols-[0.88fr_1.12fr]"
            >
              <div className="relative min-h-[25rem]">
                <Image
                  src="/payle-customer-checkout.png"
                  alt="Cliente comprando pelo celular com checkout simples"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/[0.14] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                  <p className="text-sm font-semibold text-white">Seu cliente entende o pagamento sem esforco.</p>
                  <p className="mt-1 text-xs text-slate-300">Uma tela clara no momento em que a compra acontece.</p>
                </div>
              </div>

              <div className="relative p-6 sm:p-8">
                <div className="absolute right-6 top-6 hidden rounded-3xl border border-white/15 bg-white/[0.10] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur md:block">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">aprovado</p>
                  <p className="mt-2 text-2xl font-semibold text-white">R$ 289,70</p>
                  <p className="text-xs text-slate-400">pedido liberado</p>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Jornada humana</p>
                <h3 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white">
                  Cliente compra, Payle organiza, equipe acompanha.
                </h3>
                <p className="mt-4 max-w-xl leading-8 text-slate-300">
                  Do celular do cliente ao painel da operação, cada etapa ganha um status simples. Menos ansiedade para quem compra, menos retrabalho para quem atende.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    ["Cliente escolhe Pix", "checkout claro no celular"],
                    ["Pagamento aprovado", "pedido atualizado na hora"],
                    ["Equipe recebe contexto", "suporte sabe o que responder"],
                    ["Entrega liberada", "produto ou acesso segue o fluxo"]
                  ].map(([label, body], index) => (
                    <div key={label} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">{index + 1}</span>
                      <div>
                        <p className="font-semibold text-white">{label}</p>
                        <p className="mt-1 text-sm text-slate-400">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <PayleContactSection />
      </main>

      <footer className="relative border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <IconPayleMark className="h-5 w-5" />
              </span>
              <p className="font-semibold text-slate-950">
                pay<span className="text-blue-600">le</span>
              </p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
              Checkout moderno para e-commerces, infoprodutores e operacoes digitais que precisam vender com mais clareza.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-slate-950">{group.title}</h3>
                <div className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <a key={link} href="#" className="block text-sm text-slate-500 transition hover:text-blue-600">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
