
import "./globals.css";
import Header from "@/components/Header";

import Footer from "@/components/Footer";
import FotoLinks from "../../public/previ.png"

export const metadata = {
  title: 'Minha Página | Rocken Sistemas',
  description: 'Aprenda como cadastrar moradores, veículos e configurar facial.',
  openGraph: {
    title: 'Minha Página | Rocken Sistemas',
    description: 'Aprenda como cadastrar moradores, veículos e configurar facial.',
    url: {FotoLinks},
    siteName: 'Rocken Sistemas',
    images: [
      {
        url: {FotoLinks}, // imagem pública
        width: 1200,
        height: 630,
        alt: 'Imagem de exemplo do guia Rocken',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
