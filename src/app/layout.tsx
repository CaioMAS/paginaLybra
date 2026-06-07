import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lybra Empreendimentos | Engenharia & Construção Civil",
  description: "Há mais de 11 anos realizando projetos industriais, comerciais e residenciais com qualidade, eficiência e sustentabilidade no norte de Minas Gerais.",
  keywords: "construção civil, engenharia, Montes Claros, Lybra, reformas, galpões industriais, obras de saúde, cabeamento estruturado",
  authors: [{ name: "Lybra Empreendimentos" }],
  icons: {
    icon: "/LOGO_ICON.png",
    shortcut: "/LOGO_ICON.png",
    apple: "/LOGO_ICON.png",
  },
  openGraph: {
    title: "Lybra Empreendimentos | Engenharia & Construção Civil",
    description: "Realizamos projetos industriais, comerciais e residenciais com o mais alto padrão de qualidade e eficiência.",
    url: "https://www.lybraempreendimentos.com.br",
    siteName: "Lybra Empreendimentos",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
