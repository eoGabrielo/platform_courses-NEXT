'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Card from '@/components/Card';
import Container from '@/components/Container';



export default function Home() {
  const { currentUser } = useAuth(); // Pega o usuário atual
  const router = useRouter();

  const handleAccessCourses = () => {
    if (currentUser) {
      router.push("/cursos"); // Redireciona se logado
    } else {
      router.push("/entrar")
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 min-h-screen text-gray-100">

      {/* Hero Section com botão para cursos */}
      <main className="relative h-screen w-full">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4 text-cyan-400">
            Bem-vindo ao Nosso Site
          </h1>

          <p className="text-lg max-w-xl text-gray-300 mb-6">
            Aqui você encontra informações sobre nossos serviços, cursos, novidades e muito mais. Explore o site e descubra tudo que temos a oferecer.
          </p>

          {/* Botão de acesso com verificação de login */}
          <Link href='/entrar?login=required'>
            <button
              onClick={handleAccessCourses}
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold cursor-pointer py-3 px-6 rounded-full transition"
            >
              Acessar Cursos
            </button>
          </Link>
        </div>
      </main>

      {/* Cards com conteúdos */}
      <section className="py-12">
        <Container>
          <h2 className="text-4xl font-extrabold mb-8 text-cyan-400 text-center">
            Veja o que você pode encontrar:
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Card
              link="/"
              titulo="Configurações"
              descricao="Dicas, orientações claras e tutoriais passo a passo que facilitam o uso do software e configuração dos equipamentos, garantindo que o sistema seja utilizado de forma simples, eficiente e sem complicações."
            />
            <Card
              link="/"
              titulo="Software"
              descricao="Este site foi criado para ajudar os usuários e técnicos da empresa a tirarem o máximo proveito do sistema."
            />
          </div>
        </Container>
      </section>

    </div>
  );
}
