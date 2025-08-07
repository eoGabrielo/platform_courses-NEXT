import Link from "next/link";

// Definindo os tipos com interface
interface CardCursoProps {
  assunto: string;
  link: string;
}

export default function CardCurso({ assunto, link }: CardCursoProps) {
  return (
    <Link
      href={link}
      className="block bg-gray-900 hover:bg-gray-600 rounded p-4 text-lg font-semibold text-center transition"
    >
      {assunto}
    </Link>
  );
}
