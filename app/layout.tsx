import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Providers } from "./providers";
import { fonts } from "./fonts";
import Header from "./components/Header/page";
import theme from "./styles/theme"
import { ColorModeScript, Container, useColorModeValue } from '@chakra-ui/react'
import Nav from "./components/Nav/page";
import Footer from "./components/Footer/page";



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
      <Providers >
        <body >
          <Container maxW='1400px'>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Header />
            <Nav />
            <main>
              {children}
            </main>
            <Footer />
          </Container>
        </body>
      </Providers>
    </html>
  );
}
