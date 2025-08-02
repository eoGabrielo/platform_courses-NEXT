'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

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

  // Função para logar e armazenar o usuário
  const login = (userData: AuthUser) => {
    setCurrentUser(userData);
  };

  // Função para deslogar
  const logout = () => {
    setCurrentUser(null);
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
