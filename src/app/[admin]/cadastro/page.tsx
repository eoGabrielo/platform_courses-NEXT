'use client';
import { useState, useEffect } from 'react';
import { db } from "@/api/firebase";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext";

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
    const [cadastroOk, setCadastroOk] = useState(false);
    const [message, setMessage] = useState(false);
    const [senhaFraca, setSenhaFraca] = useState(false);
    const [senhaVisivel, setSenhaVisivel] = useState(false);


    const { currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (currentUser?.tipo !== 'admin') {
            router.push('/');
        }
    }, [currentUser]);

    //função de validação de senha forte
    function senhaForte(senha: string): boolean {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(senha);
    }


    // Função para deixar todas as primeiras letras maiúsculas
    function capitalizarNome(nome: string): string {
        return nome
            .toLowerCase() // coloca tudo minúsculo
            .split(' ') // separa por espaço
            .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)) // capitaliza a primeira letra
            .join(' '); // junta novamente
    }


    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (!user || !email || !senha || !tipo) {
            setMessage(true);
            setTimeout(() => setMessage(false), 5000);
            return;
        }

        if (!senhaForte(senha)) {
            setSenhaFraca(true); // Ativa mensagem de senha fraca
            setTimeout(() => setSenhaFraca(false), 5000);
            return;
        }


        const dataUser: UserData = {
            user: capitalizarNome(user),
            email,
            senha,
            tipo
        };

        // Verifica se o email já está cadastrado
        const usuariosRef = collection(db, "usuarios");
        const q = query(usuariosRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            setMessage(true);
            setTimeout(() => setMessage(false), 8000);
            console.log("Esse email já está cadastrado!");
            return;
        }

        try {
            await addDoc(collection(db, "usuarios"), dataUser);
            setUser('');
            setEmail('');
            setSenha('');
            setTipo('');
            setCadastroOk(true);

        } catch (err) {
            console.error("ERRO: " + err);
            setMessage(true);
            setTimeout(() => setMessage(false), 5000);
        }
    }

    return (
        <div className='bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900'>
            <div className="max-w-md mx-auto py-25 p-8 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 rounded-2xl shadow-lg text-gray-100">
                <h1 className="text-2xl font-extrabold text-cyan-400 mb-6 text-center">
                    Cadastre um novo usuário
                </h1>

                <form className="flex flex-col gap-4">
                    {/* Usuário */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-300" htmlFor="user">
                            Usuário
                        </label>
                        <input
                            id="user"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            type="text"
                            required
                            className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-300" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            required
                            className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    {/* Senha */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-300" htmlFor="senha">
                            Senha
                        </label>

                        <div className="relative">
                            <input
                                id="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                type={senhaVisivel ? "text" : "password"} // alterna visibilidade
                                required
                                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 pr-10"
                            />

                            {/* Ícone de olho */}
                            <button
                                type="button"
                                onClick={() => setSenhaVisivel(!senhaVisivel)}
                                className="pr-2 cursor-pointer absolute right-2 top-2 text-gray-400 hover:text-white"
                            >
                                {senhaVisivel ? 'Esconder' : 'Ver'}
                            </button>
                        </div>
                    </div>

                    {/* Tipo */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-300" htmlFor="tipo">
                            Tipo
                        </label>
                        <select
                            id="tipo"
                            value={tipo}
                            required
                            onChange={(e) => setTipo(e.target.value)}
                            className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                            <option value="">Selecione um tipo</option>
                            <option value="tecnico">Técnico</option>
                            <option value="condominio">Condomínio</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* Mensagem de sucesso */}
                    {cadastroOk && (
                        <div className="text-center py-3 text-green-400 font-semibold">
                            <p>Cadastro realizado com sucesso!</p>
                            <p>Usuario Já tem acesso aos cursos da sua categoria.</p>
                        </div>
                    )}

                    {/* Mensagem de erro */}
                    {message && (
                        <p className="text-center text-red-500 font-semibold">
                            Preencha todos os campos corretamente ou email já cadastrado.
                        </p>
                    )}

                    {/*Logica se a senha for fraca.*/}
                    {senhaFraca && (
                        <p className="text-center text-yellow-500 font-semibold">
                            A senha deve ter ao menos 8 caracteres, incluindo letra maiúscula, minúscula, número e símbolo.
                        </p>
                    )}

                    {/* Botão */}
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full rounded-md bg-cyan-600 py-2 text-white font-bold hover:bg-cyan-700 transition-colors duration-200"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}
