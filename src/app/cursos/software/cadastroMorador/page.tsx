'use client'

import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from 'next/navigation';

export default function ConfigFacialHikivisionSoftware() {


    const { currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (currentUser?.tipo !== "admin" && currentUser?.tipo !== "tecnico") {
            router.push("/");
        }
    }, [currentUser, router]);

    const passos = [
        "Clique na opção **Cadastro de Dispositivos de Acesso**.",
        "Selecione **Hikvision**.",
        "Clique em **Biometria e Facial**.",
        "No campo **Tipo**, escolha a **segunda opção - DS-K1T671 / DS-K1T331 / DS-K1T341**.",
        "Preencha o **Nome do Dispositivo**.",
        "Abaixo, insira o **Endereço IP**.",
        "Em seguida, coloque a **Porta 80**.",
        "No campo **Login**, digite **admin**.",
        "Em seguida, digite a senha **tec250684**.",
        "Selecione a **Saída** do dispositivo, precisa ser diferente cada um.",
        "No campo ao lado (Label), repita o **nome da descrição**.",
        "Marque a **caixinha lateral para salvar**.",
        "Clique em **Configurar Servidor de Eventos**.",
        "Se aparecer a mensagem de **sucesso**, a conexão está correta.",
        "Por fim, clique no botão **Salvar**."
    ];


    return (
        <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white">
            <div className="max-w-4xl mx-auto space-y-10">
                {/* Título */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-center text-emerald-400">
                    Cadastro morador - Software
                </h1>

                {/* Vídeo */}
                <div className="rounded-xl overflow-hidden shadow-lg" style={{ height: '600px' }}>
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/HLc6o1o6qss" // formato embed
                        title="Tutorial Hikvision"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Lista de passos */}
                <ol className="space-y-6">
                    {passos.map((passo, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-4 bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-cyan-600/30 transition"
                        >
                            <div className="flex-shrink-0 w-10 h-10 bg-emerald-400 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                {index + 1}
                            </div>
                            <p
                                className="text-lg leading-relaxed text-white"
                                dangerouslySetInnerHTML={{
                                    __html: passo.replace(
                                        /\*\*(.*?)\*\*/g,
                                        "<strong class='text-emerald-400'>$1</strong>"
                                    ),
                                }}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
