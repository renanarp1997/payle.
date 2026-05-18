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
    default: "Payle - Checkout moderno para operacoes que querem crescer",
    template: "%s | Payle"
  },
  description:
    "A Payle cria uma experiencia de pagamento clara para o cliente e uma rotina mais visivel para e-commerces, Shopify, infoprodutos e operacoes digitais.",
  keywords: [
    "Payle",
    "checkout",
    "gateway de pagamentos",
    "Shopify",
    "WooCommerce",
    "infoproduto",
    "e-commerce",
    "recuperacao de carrinho",
    "checkout personalizado"
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
