'use client'
import Container from "@/components/Container";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';

export default function Cursos() {
  const { currentUser } = useAuth();
  const router = useRouter();

  if (!currentUser) {
    router.push('/');
    return null;
  }

  return (
    <div className="text-center p-2 flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
      <h1 className="text-3xl mt-8 font-extrabold text-white mb-8 text-center">
        Qual assunto é sua dúvida:
      </h1>
      <div className="flex flex-col gap-6 mb-7 p-4 max-w-4xl">
        <Link
          href="/cursos/software"
          className="relative block rounded-2xl bg-gradient-to-r from-cyan-600 to-cyan-400 p-8 shadow-lg hover:scale-105 transition-transform min-h-[180px]"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Aulas do Software
          </h2>
          <p className="text-white opacity-90">
            Aprenda a utilizar todas as funcionalidades do nosso sistema, desde o básico até recursos avançados para otimizar sua rotina.
          </p>
        </Link>
        <Link
          href="/cursos/rockenConf"
          className="relative block rounded-2xl bg-gradient-to-r from-green-600 to-green-400 p-8 shadow-lg hover:scale-105 transition-transform min-h-[180px]"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Configurações para Técnicos
          </h2>
          <p className="text-white opacity-90">
            Guia completo para técnicos: configurações, manutenção e dicas para garantir o melhor desempenho no serviço.
          </p>
        </Link>
      </div>
    </div>
  );
}
