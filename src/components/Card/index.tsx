import Link from "next/link";

interface CardProps {
  titulo: string;
  descricao: string;
  link: string;
}

export default function Card({ titulo, descricao, link }: CardProps) {
  return (
    <div className="w-full sm:w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-md ring-1 ring-gray-400/40 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg duration-300 flex flex-col">
      
    
      

      {/* Conteúdo */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
          {titulo}
        </h3>

        {/* Descrição */}
        <p
          className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow overflow-hidden"
          style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }} 
        >
          {descricao}
        </p>

        {/* Link */}
        <Link
          href={link}
          className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline mt-auto"
        >
          Ver mais →
        </Link>
      </div>
    </div>
  );
}
