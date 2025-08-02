'use client';
import { useState } from 'react';
import { db } from "@/api/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    async function handleLogin(e: any) {
        e.preventDefault();

        if (!email || !senha) {
            alert('Preencha todos os campos');
            return;
        }

        try {
            // Referência da coleção
            const usuariosRef = collection(db, "usuarios");

            // Consulta filtrando por email e senha
            const q = query(
                usuariosRef,
                where("email", "==", email),
                where("senha", "==", senha),
            );

            const querySnapshot = await getDocs(q);

            console.log(querySnapshot.empty)

            if (querySnapshot.empty) {
                alert("Usuário não encontrado ou dados incorretos.");
                return;
            }

            // Se chegou aqui, login ok
            alert("Login realizado com sucesso!");
            // Aqui pode redirecionar ou atualizar estado de autenticação

            setEmail('');
            setSenha('');
            

        } catch (error) {
            console.error("Erro no login:", error);
            alert("Erro ao tentar logar. Tente novamente.");
        }
    }

    return (
        <div className="sm w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-md ring-1 ring-gray-400/40 overflow-hidden transition-transform hover:shadow-lg duration-300 p-6 mx-auto my-30">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Faça login na sua conta
            </h1>

            <form className="flex flex-col gap-4">
                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                    </label>
                    <input
                        placeholder='Digite seu email...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="usuario"
                        required
                        className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Senha */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Senha
                    </label>
                    <input
                        placeholder='Digite sua senha...'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        type="password"
                        name="senha"
                        required
                        className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Botão */}
                <button
                    onClick={handleLogin}
                    type="submit"
                    className="mt-2 w-full py-2 px-4 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition duration-200"
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}
