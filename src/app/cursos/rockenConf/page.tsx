import Link from 'next/link';

export default function rockenConfig() {
  return (
    <div className="min-h-screen w-full max-w-5xl mx-auto p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Bem-vindo técnico, qual sua dúvida?</h1>

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
  );
}
