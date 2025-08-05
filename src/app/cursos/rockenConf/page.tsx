'use client'
import CardCurso from "@/components/CardCurso"
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';
import {useEffect} from "react"

export default function RockenConfig() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser?.tipo !== "admin" && currentUser?.tipo !== "tecnico") {
      router.push("/");
    }
  }, [currentUser]);


  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 min-h-screen">
      <section className="py-12 px-4 max-w-5xl mx-auto text-gray-100">

        {/* Título */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-cyan-400 mb-3">
            Bem-vindo, Técnico!
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Selecione abaixo o assunto com o qual precisa de ajuda. Cada módulo foi pensado para facilitar sua atuação no dia a dia com a Rocken.
          </p>
        </div>

        {/* Cards de cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardCurso assunto="Configuração do Facial Hikvision" />
          <CardCurso assunto="Configuração Impressora Control ID" />
          <CardCurso assunto="Parâmetros da Inversora" />
        </div>

      </section>
    </div>
  );
}
