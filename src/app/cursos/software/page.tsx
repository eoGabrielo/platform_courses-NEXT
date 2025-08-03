'use client'

import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';
import CardCurso from '@/components/CardCurso';


export default function Software() {

  const { currentUser, logout } = useAuth();
  const router = useRouter();


  if (currentUser?.tipo == "admin") {
    {/*Faça nada*/}
  } else {
    if (currentUser?.tipo !== "condominio") {
      router.push('/');
      return;
    }
  }


  return (
    <div className="flex justify-center min-h-screen w-full mx-auto p-6 bg-gray-800 text-white">
      <div className='max-w-5xl'>
        <h1 className="text-3xl font-bold mb-6 text-center">Bem vindo USUÁRIO! qual sua duvida ?</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Link 1 */}
          <CardCurso assunto="Cadastro de Unidade" />

          {/* Link 2 */}
          <CardCurso assunto="Cadastro de Morador" />

          {/* Link 3 */}
          <CardCurso assunto="Ativando Aplicativo" />

          {/* Link 4 */}
          <CardCurso assunto="Ativando e Removendo Facial" />

          {/* Link 5 */}
          <CardCurso assunto="Cadastro de Veículo" />

          {/* Link 6 */}
          <CardCurso assunto="Ativando Tag do Veículo" />

        </div>
      </div>
    </div>
  );
}
