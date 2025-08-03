import Link from 'next/link';



export default function CardCurso ({assunto}: {assunto: string} ){
    return(
        <Link href="/cursos/cadastro-unidade" className="block bg-gray-900 hover:bg-gray-600 rounded p-4 text-lg font-semibold text-center transition">
            {assunto}
          </Link>
    )
}





