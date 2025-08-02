'use client'
import Link from 'next/link';
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';


export default function rockenConfig() {

  const { currentUser, logout } = useAuth();
    const router = useRouter();


  if(currentUser?.tipo == "admin"){
    router.push('/cursos/software')
  }else{
    if (currentUser?.tipo !== "tecnico") {
    router.push('/cursos');
    alert("Seu usuario não permite!")
    return;
  }
  }


  return (
    <div className="flex justify-center min-h-screen w-full mx-auto p-6 bg-gray-700 text-white">
      <div className='max-w-5xl'>
        <h1 className="text-3xl font-bold mb-6 text-center">Bem-vindo TÉCNICO! qual sua dúvida?</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Link 1 */}
          <Link
            href="/cursos/configuracao-facial-hikvision"
            className="block bg-gray-800 hover:bg-gray-700 rounded p-4 text-lg font-semibold text-center transition"
          >
            Configuração do Facial Hikvision
          </Link>

          {/* Link 2 */}
          <Link
            href="/cursos/configuracao-impressora-controlid"
            className="block bg-gray-800 hover:bg-gray-700 rounded p-4 text-lg font-semibold text-center transition"
          >
            Configuração Impressora Control ID
          </Link>

          {/* Link 3 */}
          <Link
            href="/cursos/parametros-inversora"
            className="block bg-gray-800 hover:bg-gray-700 rounded p-4 text-lg font-semibold text-center transition"
          >
            Parâmetros da Inversora
          </Link>
        </div>
      </div>
    </div>
  );
}
