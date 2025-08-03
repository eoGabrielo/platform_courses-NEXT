'use client'

import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';
import CardCurso from '@/components/CardCurso';

export default function Software() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  if (currentUser?.tipo !== "admin" && currentUser?.tipo !== "condominio") {
    router.push('/');
    return;
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 min-h-screen">
      <section className="py-12 px-4 max-w-5xl mx-auto text-gray-100">

        {/* Título levemente diferente */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-emerald-400 mb-3">
            Bem-vindo, Usuário!
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Tutoriais rápidos para ajudar os funcionarios do condominio a usar o sistema Rocken com facilidade e confiança.
          </p>
        </div>

        {/* Cards no mesmo estilo da outra página */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardCurso assunto="Cadastro de Unidade" />
          <CardCurso assunto="Cadastro de Morador" />
          <CardCurso assunto="Ativando Aplicativo" />
          <CardCurso assunto="Ativando e Removendo Facial" />
          <CardCurso assunto="Cadastro de Veículo" />
          <CardCurso assunto="Ativando Tag do Veículo" />
        </div>

      </section>
    </div>
  );
}
