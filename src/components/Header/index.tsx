"use client";
import Image from "next/image";
import LogoRocken from "../../../public/LogoRocken.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [login, setLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser, logout } = useAuth();





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
            href="/cadastro"
            onClick={() => setMenuOpen(false)}
          >
            Cadastro
          </Link>
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

          <Link
            className="py-1 px-3 hover:text-[#ccc] transition-colors duration-300 font-medium animate-pulse"
            href="/entrar"
          >
            Entrar
          </Link>
        </nav>

        {/* Foto/Avatar */}
        <div className="hidden sm:flex ml-6 items-center">
          <span className="text-gray-300 mr-2">
          {currentUser && <p>Olá, {currentUser.user}!</p>}
          </span>
        </div>
      </div>
    </header>
  );
}
