import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white py-24">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32">
        
        {/* Logo e nome */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-wide text-white">Platform Courses</span>
        </div>

        {/* Links rápidos */}
        <nav className="flex gap-6 text-sm justify-center w-full md:w-auto">
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Início</a>
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Sobre</a>
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Serviços</a>
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Contato</a>
        </nav>

        {/* Redes sociais */}
        <div className="flex gap-6">
          <a href="#" aria-label="Facebook" className="hover:text-cyan-400 transition-colors duration-300">
            <FaFacebookF size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-cyan-400 transition-colors duration-300">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors duration-300">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      {/* Informações de contato */}
      <div className="mt-8 text-center text-sm text-gray-300 space-y-1 max-w-5xl mx-auto px-4">
        <p><strong>Atendimento:</strong> 0800 200 1212</p>
        <p><strong>Telefones:</strong> (11) 3473-1212 / (11) 3473-1212</p>
      </div>

      <div className="mt-6 text-center text-xs text-gray-400 max-w-5xl mx-auto px-4">
        &copy; {new Date().getFullYear()} Platform Courses. Todos os direitos reservados. Desenvolvido por Platform Courses.
      </div>
    </footer>
  );
}
