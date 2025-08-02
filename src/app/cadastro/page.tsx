'use client';
import { useState } from 'react';
import { db } from "@/api/firebase"

import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

interface UserData {
    user: string;
    email: string;
    senha: string;
    tipo: string;
}


export default function Cadastro() {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipo, setTipo] = useState('');



    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (!user || !email || !senha || !tipo || tipo === "") {
            alert('Todos os dados precisa ser preenchidos')
            return;
        }

        const dataUser: UserData = {
            user: user,
            email: email,
            senha: senha,
            tipo: tipo,
        }

        // Consulta para verificar se o email já existe
        const usuariosRef = collection(db, "usuarios");
        const q = query(usuariosRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            // Se encontrar algum documento, email já existe
            alert("Esse email já está cadastrado!");
            return;
        }

        try {
            await addDoc(collection(db, "usuarios"), dataUser);
            alert('Dados enviados com sucesso! ')

            setUser('');
            setEmail('');
            setSenha('');
            setTipo('');
            
        } catch (err) {
            console.error("ERRO: " + err)
            alert('Erro ao cadastrar usuário. Tente novamente.');
        }

    };


    return (
        <div className="sm w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-md ring-1 ring-gray-400/40 overflow-hidden transition-transform hover:shadow-lg duration-300 p-6 mx-auto my-10 ">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Preencha os campos abaixo para cadastrar um novo usuário
            </h1>

            <form className="flex flex-col gap-4">
                {/* Usuário */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Usuário
                    </label>
                    <input
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        type="text"
                        name="user"
                        required
                        className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
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
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        type="password"
                        name="senha"
                        required
                        className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Tipo */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Tipo
                    </label>
                    <select
                        value={tipo}
                        required
                        onChange={(e) => setTipo(e.target.value)}
                        name="tipo"
                        className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">Selecione um tipo</option>
                        <option value="tecnico">Técnico</option>
                        <option value="condominio">Condomínio</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                {/* Botão */}
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="mt-2 w-full py-2 px-4 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition duration-200"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}
