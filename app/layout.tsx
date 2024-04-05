import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Providers } from "./providers";
import { fonts } from "./fonts";
import Header from "./layout/Header/page";
import theme from "./styles/theme"
import { ColorModeScript, Container, useColorModeValue } from '@chakra-ui/react'
import Nav from "./layout/Nav/page";
import Footer from "./layout/Footer/page";

import '@fontsource-variable/montserrat';







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
    <html lang="ru">
        <body className="body">
      <Providers >
          <Container maxW='1400px'>
            <Header />
            <Nav />
            {/* <main>
              {children}
            </main> */}
            {children}
             {/* <Providers>{children}</Providers> */}
            <Footer />
          </Container>
      </Providers>
        </body>
    </html>
  );
}
