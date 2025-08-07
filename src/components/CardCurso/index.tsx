import Link from 'next/link';



export default function CardCurso ({assunto, link}: {assunto: string, link: string} ){
    return(
        <Link href={link} className="block bg-gray-900 hover:bg-gray-600 rounded p-4 text-lg font-semibold text-center transition">
            {assunto}
          </Link>
    )
}





