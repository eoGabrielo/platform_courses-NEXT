'use client';

import { useState, useEffect } from "react";
import { collection, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/api/firebase";
import Container from "@/components/Container";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';

interface UsuarioProps {
    id: string;
    email: string;
    senha: string;
    tipo: string;
    user: string;
}

export default function GerenciarUsuarios() {
    const [usuarios, setUsuarios] = useState<UsuarioProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<UsuarioProps>>({});
    const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
    const { currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (currentUser?.tipo !== 'admin') {
            router.push('/');
        }
    }, [currentUser, router]);

    // Busca usuários
    useEffect(() => {
        fetchUsuarios();
    }, []);

    async function fetchUsuarios() {
        setLoading(true);
        setError(null);
        try {
            const usuariosCol = collection(db, "usuarios");
            const usuariosSnapshot = await getDocs(usuariosCol);
            const usuariosList: UsuarioProps[] = usuariosSnapshot.docs.map(doc => ({
                id: doc.id,
                ...(doc.data() as Omit<UsuarioProps, 'id'>),
            }));
            setUsuarios(usuariosList);
        } catch (err) {
            setError("Erro ao buscar usuários");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    // Inicia edição
    function startEdit(usuario: UsuarioProps) {
        setEditingId(usuario.id);
        setFormData(usuario);
    }

    // Cancela edição
    function cancelEdit() {
        setEditingId(null);
        setFormData({});
    }

    // Atualiza valores no formulário
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Salva edição no Firestore
    async function saveEdit() {
        if (!editingId) return;
        try {
            const userDocRef = doc(db, "usuarios", editingId);
            await updateDoc(userDocRef, {
                email: formData.email,
                senha: formData.senha,
                tipo: formData.tipo,
                user: formData.user,
            });
            // Atualiza localmente para não precisar buscar tudo de novo
            setUsuarios(prev => prev.map(u => u.id === editingId ? { ...(u), ...formData } as UsuarioProps : u));
            cancelEdit();
        } catch (err) {
            console.error("Erro ao salvar usuário", err);
            alert("Erro ao salvar. Tente novamente.");
        }
    }

    // Exclui usuário do Firestore
    async function deleteUser(id: string) {
        try {
            await deleteDoc(doc(db, "usuarios", id));
            setUsuarios(prev => prev.filter(u => u.id !== id));
            if (editingId === id) cancelEdit();
            setConfirmDeleteId(null);
        } catch (err) {
            console.error("Erro ao excluir usuário", err);
            alert("Erro ao excluir. Tente novamente.");
        }
    }

    // Função que retorna as classes de cor dourada ou azul conforme o tipo do usuário
    function getTextColorClasses(usuario: UsuarioProps) {
        if (usuario.tipo === 'admin') {
            return {
                mainTitle: "text-yellow-400",
                label: "text-yellow-300",
                labelStrong: "font-semibold text-yellow-400",
                editButtonBg: "bg-yellow-600",
                editButtonHover: "hover:bg-yellow-700",
            };
        }
        return {
            mainTitle: "text-cyan-300",
            label: "text-cyan-400",
            labelStrong: "font-semibold text-cyan-400",
            editButtonBg: "bg-cyan-600",
            editButtonHover: "hover:bg-cyan-700",
        };
    }

    return (
        <div className="min-h-screen p-6 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-gray-100">
            <Container>
                <h1 className="text-3xl font-extrabold mb-8 text-cyan-400">Gerenciar Usuários</h1>

                {loading && <p className="text-center text-gray-400">Carregando usuários...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                {!loading && !error && usuarios.length === 0 && (
                    <p className="text-center text-gray-400">Nenhum usuário encontrado.</p>
                )}

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {usuarios.map(usuario => {
                        const colors = getTextColorClasses(usuario);
                        return (
                            <div
                                key={usuario.id}
                                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                            >
                                {editingId === usuario.id ? (
                                    <>
                                        <input
                                            type="text"
                                            name="user"
                                            value={formData.user || ""}
                                            onChange={handleChange}
                                            className="w-full mb-2 rounded border border-gray-600 bg-gray-700 px-3 py-1 text-gray-100"
                                            placeholder="Nome do usuário"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email || ""}
                                            onChange={handleChange}
                                            className="w-full mb-2 rounded border border-gray-600 bg-gray-700 px-3 py-1 text-gray-100"
                                            placeholder="Email"
                                        />
                                        <input
                                            type="text"
                                            name="senha"
                                            value={formData.senha || ""}
                                            onChange={handleChange}
                                            className="w-full mb-2 rounded border border-gray-600 bg-gray-700 px-3 py-1 text-gray-100"
                                            placeholder="Senha"
                                        />
                                        <select
                                            name="tipo"
                                            value={formData.tipo || ""}
                                            onChange={handleChange}
                                            className="w-full mb-4 rounded border border-gray-600 bg-gray-700 px-3 py-1 text-gray-100"
                                        >
                                            <option value="">Selecione o tipo</option>
                                            <option value="admin">Admin</option>
                                            <option value="tecnico">Técnico</option>
                                            <option value="condominio">Condomínio</option>
                                        </select>

                                        <div className="flex justify-between">
                                            <button
                                                onClick={saveEdit}
                                                className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition"
                                            >
                                                Salvar
                                            </button>
                                            <button
                                                onClick={cancelEdit}
                                                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
                                            >
                                                Cancelar
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h2 className={`text-xl font-semibold mb-4 truncate ${colors.mainTitle}`}>
                                            {usuario.user || "Sem nome"}
                                        </h2>
                                        <div className="space-y-2 text-sm text-gray-300">
                                            <p><span className={colors.labelStrong}>ID:</span> {usuario.id}</p>
                                            <p><span className={colors.labelStrong}>Email:</span> {usuario.email}</p>
                                            <p>
                                                <span className={colors.labelStrong}>Senha:</span>{" "}
                                                <span className="select-all bg-gray-700 rounded px-1 py-0.5">{usuario.senha}</span>
                                            </p>
                                            <p><span className={colors.labelStrong}>Tipo:</span> {usuario.tipo}</p>
                                        </div>

                                        <div className="mt-4 flex justify-between items-center">
                                            <button
                                                onClick={() => startEdit(usuario)}
                                                className={`${colors.editButtonBg} ${colors.editButtonHover} text-white px-4 py-2 rounded transition cursor-pointer`}
                                            >
                                                Editar
                                            </button>

                                            {confirmDeleteId === usuario.id ? (
                                                <div className="flex gap-2 items-center">
                                                    <span className="text-sm text-red-400 font-semibold">Confirmar exclusão?</span>
                                                    <button
                                                        onClick={() => deleteUser(usuario.id)}
                                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition"
                                                    >
                                                        Sim
                                                    </button>
                                                    <button
                                                        onClick={() => setConfirmDeleteId(null)}
                                                        className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded transition"
                                                    >
                                                        Não
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => setConfirmDeleteId(usuario.id)}
                                                    className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
                                                >
                                                    Excluir
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    );
}
