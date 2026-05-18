import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Payle - Tema claro",
  description:
    "Landing Payle em branco e azul para checkout personalizado, integracoes com Shopify, e-commerce, infoprodutos e gateways de pagamento."
};

export default function BrancoAzulLayout({ children }: { children: ReactNode }) {
  return children;
}
