"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  IconActivity,
  IconArrowRight,
  IconBolt,
  IconCheck,
  IconLayers,
  IconPanel,
  IconSpark,
  IconSplit,
  IconWallet,
  IconWebhook
} from "./PayleIcons";
import { PAYLE_CONTATO_HREF, PAYLE_FLUXO_HREF } from "./payleSiteNav";

const beforeOperacao = [
  "Print do Pix no WhatsApp do suporte",
  "Planilha paralela para saber o que aprovou",
  "Carrinho abandonado sem saber quem era",
  "Campanha rodando sem evento confiável",
  "Cliente perguntando “caiu?” toda hora"
];

const afterOperacao = [
  "Pedido com histórico desde o clique",
  "Pix, cartão e boleto no mesmo fio narrativo",
  "Recuperação com contexto da compra",
  "Evento enviado quando faz sentido",
  "Time responde olhando o pedido, não adivinhando"
];

const dayAfterSteps = [
  {
    time: "09:12",
    title: "Pedido aprovado",
    body: "Marina vê #2841 aprovado antes do café esfriar — sem abrir três abas.",
    tone: "emerald" as const
  },
  {
    time: "09:18",
    title: "Pix confirmado",
    body: "Confirmação chega pro cliente e pro suporte no mesmo instante.",
    tone: "blue" as const
  },
  {
    time: "10:41",
    title: "Carrinho retomado",
    body: "Rafael manda lembrete com o que estava no carrinho — não um “volte a comprar” genérico.",
    tone: "amber" as const
  },
  {
    time: "11:03",
    title: "Evento enviado",
    body: "Meta e Google recebem o sinal; mídia e operação param de discordar.",
    tone: "violet" as const
  },
  {
    time: "11:07",
    title: "Entrega liberada",
    body: "Acesso ou envio dispara sem alguém colar código na mão.",
    tone: "emerald" as const
  }
];

const liveFeed = [
  { at: "agora", who: "Marina", what: "aprovou pedido #2841 via Pix", status: "ok" as const },
  { at: "2 min", who: "Sistema", what: "evento Purchase enviado · campanha Black", status: "info" as const },
  { at: "5 min", who: "Rafael", what: "retomou carrinho · Curso Vivo", status: "warn" as const },
  { at: "8 min", who: "Bianca", what: "liberou entrega · pedido #2836", status: "ok" as const },
  { at: "12 min", who: "Cliente", what: "voltou ao checkout · lembrete lido", status: "info" as const }
];

const inProgress = [
  { id: "#2843", label: "Aguardando Pix", pct: 62, who: "Loja Casa Lume" },
  { id: "#2842", label: "Em análise antifraude", pct: 40, who: "Infoproduto" },
  { id: "#2840", label: "Recuperação enviada", pct: 88, who: "Shopify · Studio Norte" }
];

const operationalTimeline = [
  { step: "Clique no anúncio", detail: "Origem e oferta já vêm amarradas ao pedido." },
  { step: "Checkout", detail: "Cliente entende valor e meio de pagamento sem sair da marca." },
  { step: "Pagamento", detail: "Pix, cartão ou boleto — cada um com status legível." },
  { step: "Aprovação", detail: "Time e cliente sabem que deu certo, na hora." },
  { step: "Pós-venda", detail: "Evento, entrega e suporte no mesmo contexto." }
];

const scenarios = [
  {
    tag: "Shopify",
    title: "Loja que vende todo dia e não pode perder o fio",
    body: "Pedidos da vitrine entram com status claro. Black Friday deixa de ser “cadê esse Pix?” no grupo da equipe.",
    image: "/payle-customer-checkout.png",
    moment: "12 pedidos na última hora · 2 aguardando confirmação"
  },
  {
    tag: "Infoproduto",
    title: "Lançamento com volume e suporte no limite",
    body: "Aprovação libera acesso; recuperação lembra quem parou no meio do checkout sem parecer spam.",
    image: "/payle-team-operation.png",
    moment: "47 acessos liberados hoje · 6 carrinhos em retomada"
  },
  {
    tag: "Agência",
    title: "Várias marcas, uma rotina que escala",
    body: "Cada cliente com contexto próprio — menos planilha compartilhada e menos “me manda print do gateway”.",
    image: "/payle-consultants-highfive.png",
    moment: "3 contas ativas · padrão único de status"
  }
];

const rhythmPoints = [
  {
    title: "Menos caos na segunda-feira",
    body: "Picos de pedido deixam de virar caça ao tesouro entre loja, gateway e planilha."
  },
  {
    title: "Menos retrabalho no suporte",
    body: "Quem atende abre o pedido e vê o que aconteceu — não reconstrói a história no WhatsApp."
  },
  {
    title: "Mais previsibilidade no dia",
    body: "Você sabe o que está em aberto, o que aprovou e o que ainda precisa de um empurrão."
  }
];

const closingChecklist = [
  "Mapear como sua equipe acompanha pedido hoje",
  "Ver feed, timeline e cenários com exemplos reais",
  "Combinar próximo passo sem empurrar ferramenta"
];

function toneBorder(tone: "emerald" | "blue" | "amber" | "violet") {
  const map = {
    emerald: "border-emerald-500/30 bg-emerald-500/10",
    blue: "border-blue-500/30 bg-blue-500/10",
    amber: "border-amber-500/30 bg-amber-500/10",
    violet: "border-violet-500/30 bg-violet-500/10"
  };
  return map[tone];
}

function toneDot(tone: "emerald" | "blue" | "amber" | "violet") {
  const map = {
    emerald: "bg-emerald-400",
    blue: "bg-blue-400",
    amber: "bg-amber-400",
    violet: "bg-violet-400"
  };
  return map[tone];
}

export function PayleOperacaoHero({ ease }: { ease: { duration: number; ease?: readonly [number, number, number, number] } }) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#070b14] text-white">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
        animate={reduce ? undefined : { opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl"
        animate={reduce ? undefined : { opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:72px_72px] opacity-30"
        animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "72px 72px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-8 top-28 hidden rounded-xl border border-white/10 bg-slate-900/90 px-3 py-2 text-xs shadow-xl backdrop-blur-md lg:block"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...ease, delay: 0.35 }}
      >
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-semibold text-emerald-200">Ao vivo</span>
          <span className="text-slate-400">· 4 movimentos nos últimos 12 min</span>
        </span>
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-6 top-36 hidden max-w-[10rem] rounded-xl border border-amber-400/25 bg-amber-950/80 px-3 py-2 shadow-lg backdrop-blur-md sm:block"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...ease, delay: 0.42 }}
      >
        <p className="text-[0.65rem] font-semibold text-amber-200">Carrinho retomado</p>
        <p className="text-xs text-white">com contexto da compra</p>
      </motion.div>

      <div className="relative mx-auto min-h-[calc(100vh-4rem)] max-w-7xl px-4 py-14 sm:px-6 lg:min-h-[calc(100vh-3.5rem)] lg:px-8">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-32 left-4 hidden max-w-[11rem] rounded-xl border border-blue-400/25 bg-blue-950/85 px-3 py-2 shadow-lg backdrop-blur-md lg:block"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...ease, delay: 0.48 }}
        >
          <p className="text-[0.65rem] font-semibold text-blue-200">Pix confirmado</p>
          <p className="text-xs text-white">#2841 · há 2 min</p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={ease}>
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
              <IconSpark className="h-3.5 w-3.5 text-blue-300" />
              Operações
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.05rem]">
              O dia a dia de quem vende — com menos improviso e mais contexto.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              A Payle não é só um painel bonito. É a rotina de pedido, pagamento, recuperação e entrega conversando — para sua equipe parar de
              reconstruir história em print e planilha.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Menos caos. Menos retrabalho. Mais clareza sobre o que está em andamento, o que aprovou e o que ainda precisa de atenção.
            </p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...ease, delay: 0.1 }}
            >
              <Link
                href={PAYLE_CONTATO_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(255,255,255,0.12)] transition hover:bg-blue-50"
              >
                Ver na minha operação
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={PAYLE_FLUXO_HREF}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.10]"
              >
                Como o fluxo se encaixa
              </Link>
            </motion.div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Pedidos em andamento", "Status em tempo real", "Feed de eventos"].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  <IconCheck className="h-3 w-3 text-emerald-400" />
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...ease, delay: reduce ? 0 : 0.06 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[1.35rem] border border-white/[0.12] bg-white/[0.06] p-1.5 shadow-[0_32px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <motion.div
                className="overflow-hidden rounded-[1.15rem] border border-white/10 bg-slate-950"
                animate={reduce ? undefined : { y: [0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-3 py-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <motion.div
                    className="flex items-center gap-1.5"
                    animate={reduce ? undefined : { opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="h-2 w-2 rounded-full bg-red-400/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </motion.div>
                  <span className="text-[0.65rem] font-semibold text-slate-400">Operação · terça, 14:32</span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-[0.6rem] font-semibold text-emerald-300">
                    sincronizado
                  </span>
                </motion.div>

                <motion.div
                  className="grid lg:grid-cols-[0.95fr_1.05fr]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="border-b border-white/10 p-3 lg:border-b-0 lg:border-r">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Pedidos em andamento</p>
                    <ul className="mt-3 space-y-2">
                      {inProgress.map((order, i) => (
                        <motion.li
                          key={order.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + i * 0.06 }}
                          className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5"
                        >
                          <motion.div
                            className="flex items-center justify-between gap-2"
                            animate={reduce ? undefined : { opacity: [1, 0.85, 1] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                          >
                            <motion.div>
                              <p className="text-xs font-semibold text-white">{order.id}</p>
                              <p className="text-[0.65rem] text-slate-400">{order.who}</p>
                            </motion.div>
                            <span className="text-[0.65rem] font-medium text-blue-200">{order.label}</span>
                          </motion.div>
                          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
                              initial={{ width: 0 }}
                              animate={{ width: `${order.pct}%` }}
                              transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </div>
                        </motion.li>
                      ))}
                    </ul>

                    <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">Timeline do pedido #2841</p>
                    <ol className="mt-2 space-y-1.5 border-l border-white/10 pl-3">
                      {["Checkout iniciado", "Pix gerado", "Pix confirmado", "Entrega liberada"].map((ev, i) => (
                        <motion.li
                          key={ev}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + i * 0.08 }}
                          className="relative text-[0.7rem] text-slate-300"
                        >
                          <span
                            className={`absolute -left-[0.85rem] top-1.5 h-1.5 w-1.5 rounded-full ${i < 3 ? "bg-emerald-400" : "bg-slate-600"}`}
                          />
                          {ev}
                        </motion.li>
                      ))}
                    </ol>
                  </div>

                  <div className="bg-[radial-gradient(circle_at_90%_0%,rgba(59,130,246,0.12),transparent_40%)] p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-white">Atividade recente</p>
                      <motion.span
                        className="text-[0.6rem] text-emerald-300"
                        animate={reduce ? undefined : { opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        atualizando
                      </motion.span>
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {liveFeed.map((row, i) => (
                        <motion.li
                          key={row.what}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.07 }}
                          className={`rounded-lg border px-2.5 py-2 text-[0.7rem] ${
                            row.status === "ok"
                              ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-50"
                              : row.status === "warn"
                                ? "border-amber-500/25 bg-amber-500/10 text-amber-50"
                                : "border-white/10 bg-white/[0.04] text-slate-200"
                          }`}
                        >
                          <span className="text-[0.6rem] text-slate-400">{row.at}</span>
                          <p className="font-medium">
                            <span className="text-white/90">{row.who}</span> {row.what}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function PayleOperacaoMainSections({ viewport }: { viewport: { once: boolean; margin: string } }) {
  const reduce = useReducedMotion();
  const ease = reduce ? { duration: 0.01 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <>
      <section className="relative bg-white py-20 lg:py-28">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl lg:block"
          animate={reduce ? undefined : { x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-0 top-1/4 hidden h-48 w-48 rounded-full bg-emerald-100/50 blur-3xl lg:block"
          animate={reduce ? undefined : { y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-8 right-1/4 hidden rounded-lg border border-slate-200/80 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-md lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={ease}
        >
          Operação em movimento
        </motion.div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Rotina real, não slide de produto</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Quem vende todo dia vive entre campanha, gateway, loja e cliente no WhatsApp. A Payle entra para dar fio — não para empilhar mais
              um lugar para olhar sem contexto.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-5 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {rhythmPoints.map((p) => (
              <motion.article
                key={p.title}
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: ease } }}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-950">{p.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{p.body}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.08 }}
            className="mt-14 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl lg:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={ease}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">Timeline operacional</p>
                <h3 className="mt-2 text-2xl font-semibold">Do clique à entrega, sem buraco na história</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Cada etapa deixa rastro. Quando o suporte abre o pedido, não precisa perguntar de novo o que o cliente já fez.
                </p>
              </motion.div>
              <motion.ol
                className="space-y-0"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
              >
                {operationalTimeline.map((item, i) => (
                  <motion.li
                    key={item.step}
                    variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0, transition: ease } }}
                    className="relative flex gap-4 pb-6 last:pb-0"
                  >
                    {i < operationalTimeline.length - 1 && (
                      <span className="absolute left-[0.55rem] top-6 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-blue-500/50 to-transparent" />
                    )}
                    <span className="relative z-10 mt-0.5 flex h-[1.15rem] w-[1.15rem] shrink-0 items-center justify-center rounded-full bg-blue-500 text-[0.55rem] font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.step}</p>
                      <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Como fica o dia depois que a operação ganha contexto
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Não é mágica — é saber, na hora certa, que o pedido aprovou, o Pix caiu, o carrinho voltou e a entrega seguiu sem ninguém
              remendar na mão.
            </p>
          </motion.div>

          <div className="relative mt-14">
            <div className="absolute left-4 right-4 top-8 hidden h-0.5 bg-gradient-to-r from-emerald-300 via-blue-300 to-violet-300 lg:block" aria-hidden />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {dayAfterSteps.map((step, i) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ ...ease, delay: i * 0.05 }}
                  className={`relative rounded-2xl border p-5 ${toneBorder(step.tone)}`}
                >
                  <span className={`inline-block h-1.5 w-1.5 rounded-full ${toneDot(step.tone)}`} />
                  <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-500">{step.time}</p>
                  <h3 className="mt-1 text-base font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.1 }}
            className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
              <div className="flex items-center justify-between gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewport}
                  transition={ease}
                >
                  <p className="text-sm font-semibold text-slate-950">Feed de eventos</p>
                  <p className="text-xs text-slate-500">O que a equipe enxerga sem abrir cinco ferramentas</p>
                </motion.div>
                <motion.span
                  className="rounded-full bg-emerald-50 px-3 py-1 text-[0.65rem] font-semibold text-emerald-700"
                  animate={reduce ? undefined : { scale: [1, 1.03, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  em tempo real
                </motion.span>
              </div>
              <ul className="mt-6 space-y-3">
                {liveFeed.map((row, i) => (
                  <motion.li
                    key={`feed-${row.what}`}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ ...ease, delay: i * 0.04 }}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <motion.div
                      className="min-w-0 flex-1"
                      animate={reduce ? undefined : { opacity: i === 0 ? [1, 0.92, 1] : 1 }}
                      transition={{ duration: 2.5, repeat: i === 0 ? Infinity : 0 }}
                    >
                      <p className="text-[0.65rem] font-medium text-slate-400">{row.at}</p>
                      <p className="text-sm text-slate-800">
                        <span className="font-semibold">{row.who}</span> {row.what}
                      </p>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">Histórico do pedido #2841</p>
              <p className="mt-2 text-lg font-semibold">Contexto operacional completo</p>
              <ul className="mt-6 space-y-4 border-l border-white/15 pl-4">
                {[
                  ["14:32", "Checkout · Studio Norte · Shopify"],
                  ["14:33", "Pix gerado · R$ 297,00"],
                  ["14:35", "Pix confirmado · cliente notificado"],
                  ["14:35", "Evento Purchase · campanha Black"],
                  ["14:36", "Entrega · acesso liberado"]
                ].map(([t, d], i) => (
                  <motion.li
                    key={d}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ ...ease, delay: 0.15 + i * 0.05 }}
                    className="relative"
                  >
                    <span className="absolute -left-[1.15rem] top-1.5 h-2 w-2 rounded-full bg-emerald-400" />
                    <p className="text-[0.65rem] text-slate-500">{t}</p>
                    <p className="text-sm text-slate-200">{d}</p>
                  </motion.li>
                ))}
              </ul>
              <div className="relative mt-8 h-36 overflow-hidden rounded-xl border border-white/10">
                <Image src="/payle-team-operation.png" alt="Equipe acompanhando operação com contexto" fill className="object-cover opacity-80" sizes="400px" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"
                  animate={reduce ? undefined : { opacity: [0.85, 0.95, 0.85] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <p className="absolute bottom-3 left-3 right-3 text-xs text-slate-300">Operação funcionando — não só métrica parada na tela.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={ease}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Antes da Payle vs com a Payle</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              A diferença não é ter “mais software”. É parar de apagar incêndio com print, planilha e mensagem solta.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...ease, delay: 0.05 }}
              className="rounded-[1.75rem] border border-rose-200/90 bg-gradient-to-br from-rose-50/50 to-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.06)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-rose-600">Antes da Payle</p>
              <p className="mt-2 text-xl font-semibold text-slate-950">Quando cada venda vira investigação</p>
              <ul className="mt-8 space-y-4">
                {beforeOperacao.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-2 h-1 w-4 shrink-0 rounded-full bg-rose-300" aria-hidden />
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
              className="rounded-[1.75rem] border border-emerald-400/35 bg-gradient-to-br from-slate-950 via-[#0f172a] to-slate-900 p-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.35)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Com a Payle</p>
              <p className="mt-2 text-xl font-semibold">Quando a equipe sabe onde olhar</p>
              <ul className="mt-8 space-y-4">
                {afterOperacao.map((t) => (
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

      <section className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={ease} className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Cenários de quem vende de verdade</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Shopify, infoproduto ou agência: o caos muda de forma, mas a necessidade de contexto é a mesma.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {scenarios.map((s, i) => (
              <motion.article
                key={s.tag}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...ease, delay: i * 0.06 }}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] transition hover:border-blue-400/30"
              >
                <div className="relative h-40">
                  <Image src={s.image} alt={`Cenário ${s.tag}`} fill className="object-cover transition group-hover:scale-[1.02]" sizes="360px" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"
                    whileHover={{ opacity: 0.9 }}
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {s.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{s.body}</p>
                  <p className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-200">
                    {s.moment}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...ease, delay: 0.12 }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: IconWallet, label: "Menos improviso", text: "Rotina que a equipe adota, não planilha que só uma pessoa entende." },
              { icon: IconActivity, label: "Mais contexto", text: "Cada movimento com histórico — do clique ao pós-venda." },
              { icon: IconWebhook, label: "Recuperação humana", text: "Lembrete certo, na hora certa, sem tom de robô." },
              { icon: IconLayers, label: "Mais previsibilidade", text: "Saber o que está em aberto antes do cliente cobrar." }
            ].map(({ icon: Icon, label, text }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <Icon className="h-5 w-5 text-blue-300" />
                <p className="mt-3 font-semibold">{label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={ease}
        >
          <div className="grid items-center gap-10 rounded-[1.75rem] border border-slate-200 bg-white p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Operação em movimento</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950">“Antes eu abria loja, gateway e planilha. Hoje olho o pedido e sei o que fazer.”</h3>
              <p className="mt-4 text-sm text-slate-600">— Camila, operação em e-commerce Shopify</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Shopify", "WooCommerce", "Pix", "Recuperação", "Tracking", "Entrega"].map((t) => (
                  <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white">
              <div className="flex items-center gap-2">
                <IconPanel className="h-5 w-5 text-blue-300" />
                <p className="text-sm font-semibold">Notificações que fazem sentido</p>
              </div>
              <ul className="mt-4 space-y-2">
                {[
                  "Pedido #2841 aprovado",
                  "Pix confirmado · cliente avisado",
                  "Carrinho retomado · Curso Vivo",
                  "Evento enviado · Black Friday"
                ].map((n, i) => (
                  <motion.li
                    key={n}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ ...ease, delay: 0.1 + i * 0.05 }}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm"
                  >
                    <IconBolt className="h-3.5 w-3.5 shrink-0 text-amber-300" />
                    {n}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export function PayleOperacaoClosingCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0f172a] to-blue-950 py-20 text-white lg:py-28">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl"
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Quer ver isso na sua rotina de vendas?</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Conte como sua equipe trabalha hoje — loja, gateway, volume, quem atende o cliente. Mostramos onde a Payle tira peso sem
              prometer milagre.
            </p>
            <Link
              href={PAYLE_CONTATO_HREF}
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-blue-50"
            >
              Conversar com a Payle
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">Na conversa</p>
            <ul className="mt-5 space-y-3">
              {closingChecklist.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <div className="relative mt-8 h-36 overflow-hidden rounded-2xl border border-white/10">
              <Image src="/payle-human-support.png" alt="Conversa com time Payle" fill className="object-cover" sizes="420px" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
