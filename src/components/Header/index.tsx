"use client";
import Image from "next/image";
import LogoRocken from "../../../public/LogoRocken.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [login, setLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    /*APENAS TESTES*/
    if (login === false) {
      router.push("/");
    } else {
      alert("Bem-vindo(a) ao sistema Rocken Sistemas!");
    }
  }, [login]);

  return (
    <header className="w-full bg-gray-800 text-white shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src={LogoRocken}
              priority={true}
              alt="LogoRocken"
              className="w-54 h-24 sm:w-44 object-contain transition-all duration-300"
            />
          </Link>
        </div>

        {/* Botão menu mobile */}
        <button
          className="sm:hidden ml-auto flex items-center px-3 py-2 border rounded text-gray-300 border-gray-600 hover:text-white hover:border-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>

        {/* Navegação */}
        <nav
          className={`
          ${menuOpen ? "flex" : "hidden"}
          absolute top-30 left-0 w-full bg-gray-700 z-20 flex-col items-center gap-4 py-4
          sm:static sm:flex sm:flex-row sm:items-center sm:gap-8 sm:bg-transparent sm:py-0 sm:w-auto
          transition-all
        `}
        >
          <Link
            className="py-1 px-2 hover:text-[#ccc] transition-colors duration-300 font-medium"
            href="/sobre"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>
          {login ? (
            <Link
              href="/cursos"
              className="py-1 px-3 bg-[#133c4a] text-white rounded hover:bg-[#6b7679] transition-colors duration-300 font-bold shadow"
              onClick={() => setMenuOpen(false)}
            >
              Cursos
            </Link>
          ) : (
            <Link
              className="py-1 px-3 text-gray-700 pointer-events-none cursor-not-allowed rounded bg-gray-200/30"
              href="/cursos"
            >
              Cursos
            </Link>
          )}
          {login ? (
            <button
              onClick={() => {
                setLogin(!login);
                setMenuOpen(false);
              }}
              className="py-1 px-3 rounded hover:bg-gray-700 transition-colors duration-300"
            >
              <span className="cursor-pointer">Sair</span>
            </button>
          ) : (
            <button
              onClick={() => {
                setLogin(!login);
                setMenuOpen(false);
              }}
            >
              <Link
                className="py-1 px-3 hover:text-[#ccc] transition-colors duration-300 font-medium animate-pulse"
                href="/"
              >
                Entrar
              </Link>
            </button>
          )}
        </nav>

        {/* Foto/Avatar */}
        <div className="hidden sm:flex ml-6 items-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 text-gray-300 font-bold text-sm border-2 border-gray-600">
            FOTO
          </span>
        </div>
      </div>
    </header>
  );
}
