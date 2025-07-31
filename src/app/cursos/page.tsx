import Container from "@/components/Container";
<<<<<<< HEAD
import Card from "@/components/Card";
=======
import Link from "next/link";
>>>>>>> be62d91 (pagCursos Soft/Tec)

export default function Cursos() {
  return (
    <Container>
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Escolha qual video aula deseja assistir:
      </h1>
<<<<<<< HEAD
      <div className="flex bg-gray-500 flex-wrap justify-center items-center gap-2">
        <Card
          link="/"
          titulo="Aulas do Sistema de Software"
          descricao="Aprenda a utilizar todas as funcionalidades do nosso sistema, desde o básico até recursos avançados para otimizar sua rotina."
        />
        <Card
          link="/"
          titulo="Configurações para Técnicos"
          descricao="Guia completo para técnicos: configurações, manutenção e dicas para garantir o melhor desempenho do sistema."
        />
=======
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
>>>>>>> be62d91 (pagCursos Soft/Tec)
      </div>
    </Container>
  );
}
