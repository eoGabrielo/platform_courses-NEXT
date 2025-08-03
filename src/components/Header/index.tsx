"use client";
import Image from "next/image";
import LogoRocken from "../../../public/LogoRocken.png";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  return (
    <header className="w-full bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-gray-100 shadow-lg">
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

        {/* Foto/Avatar */}
        <div className="hidden sm:flex ml-6 items-center">
          {currentUser && (
            <p className="text-white font-semibold">
              Olá, {currentUser.user}!
            </p>
          )}
        </div>

        {/* Botão menu mobile */}
        <button
          className="sm:hidden ml-auto flex items-center px-3 py-2 border rounded text-gray-400 border-gray-600 hover:text-cyan-400 hover:border-cyan-400 transition-colors duration-300"
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
            absolute top-16 left-0 w-full bg-gray-800 bg-opacity-95 z-20 flex-col items-center gap-4 py-4
            sm:static sm:flex sm:flex-row sm:items-center sm:gap-8 sm:bg-transparent sm:py-0 sm:w-auto
            transition-all
          `}
        >
          {!currentUser && (
            <Link
              href="/cadastro"
              className="py-1 px-2 hover:text-cyan-400 transition-colors duration-300 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Cadastro
            </Link>
          )}

          <Link
            href="/sobre"
            className="py-1 px-2 hover:text-cyan-400 transition-colors duration-300 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>

          {currentUser ? (
            <Link
              href="/cursos"
              className="py-1 px-3 bg-cyan-700 text-white rounded hover:bg-cyan-500 transition-colors duration-300 font-bold shadow"
              onClick={() => setMenuOpen(false)}
            >
              Cursos
            </Link>
          ) : (
            <Link
              href="/cursos"
              className="py-1 px-3 text-gray-700 pointer-events-none cursor-not-allowed rounded bg-gray-200/30"
            >
              Cursos
            </Link>
          )}

          {!currentUser && (
            <Link
              href="/entrar"
              className="py-1 px-3 hover:text-cyan-400 transition-colors duration-300 font-medium animate-pulse"
              onClick={() => setMenuOpen(false)}
            >
              Entrar
            </Link>
          )}

          {currentUser && (
            <button
              className="cursor-pointer py-1 px-3 hover:text-cyan-400 transition-colors duration-300 font-medium animate-pulse"
              onClick={logout}
            >
              Sair
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
