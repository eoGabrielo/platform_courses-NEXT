import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-24">
      <div className="mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-15 md:gap-32">
        {/* Logo e nome */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-wide">Rocken Sistemas</span>
        </div>

        {/* Links rápidos */}
        <nav className="flex gap-6 text-sm justify-center w-full md:w-auto">
          <a href="#" className="hover:text-cyan-400 transition">Início</a>
          <a href="#" className="hover:text-cyan-400 transition">Sobre</a>
          <a href="#" className="hover:text-cyan-400 transition">Serviços</a>
          <a href="#" className="hover:text-cyan-400 transition">Contato</a>
        </nav>

        {/* Redes sociais */}
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-cyan-400 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-cyan-400 transition">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      {/* Informações de contato */}
      <div className="mt-8 text-center text-sm text-gray-300 space-y-1">
        <p><strong>Atendimento:</strong> 0800 200 3873</p>
        <p><strong>Telefones:</strong> (11) 3473-0571 / (11) 3473-3873</p>
      </div>

      <div className="mt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Rocken Sistemas. Todos os direitos reservados. Desenvolvido por Rocken Sistemas.
      </div>
    </footer>

  );
}
