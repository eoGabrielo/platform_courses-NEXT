
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "../context/AuthContext";



export const metadata = {
  title: 'Minha Página | Plataforma',
  description: 'Aprenda como cadastrar moradores, veículos e configurar facial.',
  openGraph: {
    title: 'Minha Página | Plataforma',
    description: 'Aprenda como cadastrar moradores, veículos e configurar facial.',
    url: 'https://rocken-sistemas.vercel.app/', // substitua pelo seu domínio real
    siteName: 'Plataforma',
    images: [
      {
        url: '/previ.png',  // caminho relativo para a imagem na pasta /public
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
    <html lang="en"
    >
      <body
      >
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
