'use client'

import Link from 'next/link';
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';


export default function Software() {

  const { currentUser, logout } = useAuth();
  const router = useRouter();


  if(currentUser?.tipo == "admin"){
    router.push('/cursos/software')
  }else{
    if (currentUser?.tipo !== "condominio") {
    router.push('/');
    alert("Seu usuario não permite!")
    return;
  }
  }


  return (
    <div className="flex justify-center min-h-screen w-full mx-auto p-6 bg-gray-800 text-white">
      <div className='max-w-5xl'>
        <h1 className="text-3xl font-bold mb-6 text-center">Bem vindo USUÁRIO! qual sua duvida ?</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Link 1 */}
          <Link href="/cursos/cadastro-unidade" className="block bg-gray-900 hover:bg-gray-600 rounded p-4 text-lg font-semibold text-center transition">
            Cadastro de Unidade
          </Link>

          {/* Link 2 */}
          <Link href="/cursos/cadastro-morador" className="block bg-gray-900 hover:bg-gray-600 rounded p-4 text-lg font-semibold text-center transition">
            Cadastro de Morador
          </Link>

          {/* Link 3 */}
          <Link href="/cursos/ativando-app" className="block bg-gray-900 hover:bg-gray-600 rounded p-4 text-lg font-semibold text-center transition">
            Ativando Aplicativo
          </Link>

          {/* Link 4 */}
          <Link href="/cursos/ativar-remover-facial" className="block bg-gray-900 hover:bg-gray-600 rounded p-4 text-lg font-semibold text-center transition">
            Ativando e Removendo Facial
          </Link>

          {/* Link 5 */}
          <Link href="/cursos/cadastro-veiculo" className="block bg-gray-900 hover:bg-gray-600 rounded p-4 text-lg font-semibold text-center transition">
            Cadastro de Veículo
          </Link>

          {/* Link 6 */}
          <Link href="/cursos/ativando-tag-veiculo" className="block bg-gray-900 hover:bg-gray-600 rounded p-4 text-lg font-semibold text-center transition">
            Ativando Tag do Veículo
          </Link>
        </div>
      </div>
    </div>
  );
}
