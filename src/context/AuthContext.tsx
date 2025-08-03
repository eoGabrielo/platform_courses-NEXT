'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Interface dos dados que o usuário logado terá
interface AuthUser {
  email: string;
  tipo: string;
  user: string;
}

// Interface do contexto
interface AuthContextType {
  currentUser: AuthUser | null;
  login: (userData: AuthUser) => void;
  logout: () => void;
}

// Cria o contexto com valores padrão
const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  login: () => {},
  logout: () => {},
});

// Componente provedor que envolve a aplicação
export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  //carrega os dados do localStorage (se existirem)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  //salvando os dados no localStorage também
  const login = (userData: AuthUser) => {
    localStorage.setItem("user", JSON.stringify(userData)); //Armazena
    setCurrentUser(userData); // atualiza o estado global
  };

  //limpa o localStorage e o estado
  const logout = () => {
    localStorage.removeItem("user"); //Limpa armazenamento
    setCurrentUser(null); // limpa o estado
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para acessar o contexto de forma fácil
export function useAuth() {
  return useContext(AuthContext);
}
