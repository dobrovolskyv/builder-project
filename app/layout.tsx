import type { Metadata } from "next";

import "./styles/globals.css";
import { Providers } from "./providers";

import Header from "./layout/Header/page";

import { Container } from '@chakra-ui/react'
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
          <Container maxW='1400px' minH="100%" display="flex" flexDir="column" justifyContent="space-between">
            <Header />
            <Nav />
            {children}
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
