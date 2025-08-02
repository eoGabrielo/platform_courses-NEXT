'use client'
import Container from "@/components/Container";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';

export default function Cursos() {

 const { currentUser, logout } = useAuth();
 const router = useRouter();

 if(!currentUser){
  alert("Faça login para ter acesso a essa pagina!")
  router.push('/')
  return;
 }

  return (
    <Container>
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Escolha qual video aula deseja assistir:
      </h1>
      <div className="flex flex-col gap-6">
        <Link
          href="/cursos/software"
          className="relative block rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 p-8 shadow-lg hover:scale-105 transition-transform min-h-[180px]"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Aulas do Software
          </h2>
          <p className="text-white opacity-90">
            Aprenda a utilizar todas as funcionalidades do nosso sistema, desde o
            básico até recursos avançados para otimizar sua rotina.
          </p>
        </Link>
        <Link
          href="/cursos/rockenConf"
          className="relative block rounded-xl bg-gradient-to-r from-green-600 to-green-400 p-8 shadow-lg hover:scale-105 transition-transform min-h-[180px]"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Configurações para Técnicos
          </h2>
          <p className="text-white opacity-90">
            Guia completo para técnicos: configurações, manutenção e dicas para
            garantir o melhor desempenho do sistema.
          </p>
        </Link>
      </div>
    </Container>
  );
}
