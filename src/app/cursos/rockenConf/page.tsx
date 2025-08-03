'use client'
import CardCurso from "@/components/CardCurso"
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';


export default function RockenConfig() {

  const { currentUser, logout } = useAuth();
  const router = useRouter();


  if (currentUser?.tipo == "admin") {
    {/*Faça nada*/}
  } else {
    if (currentUser?.tipo !== "tecnico") {
      router.push('/');
      return;
    }
  }


  return (
    <div className="flex justify-center min-h-screen w-full mx-auto p-6 bg-gray-700 text-white">
      <div className='max-w-5xl'>
        <h1 className="text-3xl font-bold mb-6 text-center">Bem-vindo TÉCNICO! qual sua dúvida?</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Link 1 */}
          <CardCurso assunto="Configuração do Facial Hikvision" />

          {/* Link 2 */}
          <CardCurso assunto="Configuração Impressora Control ID" />

          {/* Link 3 */}
          <CardCurso assunto="Parâmetros da Inversora" />

        </div>
      </div>
    </div>
  );
}
