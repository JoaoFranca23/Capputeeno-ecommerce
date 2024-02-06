import "./globals.css";
import { Header } from "./components/header";
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { DefaultProviders } from "./components/default-provider";

const saira = Saira({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "o Melhor Ecommerce do Brasil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={saira.className}>
        <DefaultProviders>
          <Header />

          {children}
        </DefaultProviders>
      </body>
    </html>
  );
}
