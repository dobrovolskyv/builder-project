import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Providers } from "./providers";
import { fonts } from "./fonts";
import Header from "./components/Header";
import theme from "./styles/theme"
import { ColorModeScript } from '@chakra-ui/react'
import Page from "./page";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Строительаня компания",
  description: "Постройка частных домов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={fonts.rubik.variable}>
      <Providers>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Header/>
        {children}
      </body>
      </Providers>
    </html>
  );
}
