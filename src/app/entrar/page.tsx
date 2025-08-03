'use client';
import { useState } from 'react';
import { db } from "@/api/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loginOk, setLoginOk] = useState(false);
    const [loginBad, setLoginBad] = useState(false);
    const [message, setMessage] = useState(false);

    const { login } = useAuth();
    const router = useRouter();

    async function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (!email || !senha) {
            setMessage(true);
            setTimeout(() => setMessage(false), 4000);
            return;
        }

        try {
            const usuariosRef = collection(db, "usuarios");

            const q = query(
                usuariosRef,
                where("email", "==", email),
                where("senha", "==", senha)
            );

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setLoginBad(true);
                setTimeout(() => setLoginBad(false), 4000);
                return;
            }

            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();

            login({
                email: userData.email,
                tipo: userData.tipo,
                user: userData.user,
            });

            setLoginBad(false);
            setLoginOk(true);

            setTimeout(() => {
                router.push('/cursos');
            }, 1000);
        } catch (error) {
            setLoginOk(false);
            setLoginBad(true);
            console.error("Erro no login:", error);
        }
    }

    return (
        <div className='bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900'>
            <div className="max-w-md mx-auto py-25 p-8 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 rounded-2xl shadow-lg text-gray-100">
                <h1 className="text-2xl font-extrabold text-cyan-400 mb-6 text-center">
                    Faça login na sua conta
                </h1>

                <form className="flex flex-col gap-4">
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block mb-1 font-semibold text-gray-300">
                            Email
                        </label>
                        <input
                            id="email"
                            placeholder="Digite seu email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            required
                            className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    {/* Senha */}
                    <div>
                        <label htmlFor="senha" className="block mb-1 font-semibold text-gray-300">
                            Senha
                        </label>
                        <input
                            id="senha"
                            placeholder="Digite sua senha..."
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            type="password"
                            required
                            className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    {/* Mensagens */}
                    {loginOk && (
                        <div className="text-center text-green-400 font-semibold">
                            <p>Login realizado com sucesso!</p>
                        </div>
                    )}
                    {loginBad && (
                        <div className="text-center text-red-500 font-semibold">
                            <p>Usuário não encontrado ou dados incorretos.</p>
                        </div>
                    )}
                    {message && (
                        <p className="text-center text-red-500 font-semibold">
                            Preencha todos os campos!
                        </p>
                    )}

                    {/* Botão */}
                    <button
                        onClick={handleLogin}
                        type="submit"
                        className="w-full rounded-md bg-cyan-600 py-2 text-white font-bold hover:bg-cyan-700 transition-colors duration-200"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}
