import "./globals.css";
import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Payle - Checkout moderno para operações que querem crescer",
    template: "%s | Payle"
  },
  description:
    "A Payle cria uma experiência de pagamento clara para o cliente e uma rotina mais visível para e-commerces, Shopify, infoprodutos e operações digitais.",
  keywords: [
    "Payle",
    "checkout",
    "gateway de pagamentos",
    "Shopify",
    "WooCommerce",
    "infoproduto",
    "e-commerce",
    "recuperação de carrinho",
    "checkout personalizado"
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
