import Image from "next/image";
import Link from "next/link";
import cursoImg from "../../../public/curso.jpg";

interface CardProps {
  titulo: string;
  descricao: string;
  link: string;
}

export default function Card({ titulo, descricao, link }: CardProps) {
  return (
    <div className="w-full sm:w-72 bg-gray-700 rounded p-4 shadow hover:shadow-lg transition flex flex-col items-center">
      <h3 className="text-xl font-bold mb-3 text-white text-center">
        {titulo}
      </h3>
      <Link href={link}>
        <Image
          src={cursoImg}
          alt="Imagem do curso"
          width={300}
          height={120}
          className="rounded mb-3 object-cover cursor-pointer"
        />
      </Link>

      <p className="text-sm text-gray-300 text-center mb-4">{descricao}</p>

      <Link
        href={link}
        className="text-[#fff] hover:text-[#ccc] font-semibold transition-colors"
      >
        Ver mais
      </Link>
    </div>
  );
}
