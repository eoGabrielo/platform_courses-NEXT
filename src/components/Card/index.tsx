import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
  titulo: string;
  descricao: string;
  link: string;
  imgHref: StaticImageData;
}

export default function Card({ titulo, descricao, link, imgHref }: CardProps) {
  return (
    <div className="w-full sm:w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-md ring-1 ring-gray-400/40 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg duration-300 flex flex-col">
      
      {/* Imagem 
      
      <div className="relative w-full h-44">
        <Link href={link}>
          <Image
            src={imgHref}
            alt={titulo}
            fill
            className="object-cover"
          />
        </Link>
      </div>
      
      */}
      

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
