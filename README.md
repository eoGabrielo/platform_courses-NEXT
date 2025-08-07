# Rocken Sistemas - Portal de Suporte e Cursos

## Descrição

Este projeto foi desenvolvido para uma empresa que possui procedimentos internos que os funcionários precisam seguir, além de fornecer suporte com vídeos e tutoriais escritos sobre o uso do software da empresa.  

- Funcionários da empresa têm acesso restrito apenas aos conteúdos específicos da empresa.  
- Clientes (usuários) têm acesso à página de cursos relacionados ao software.  
- Apenas administradores têm permissão para cadastrar e gerenciar usuários no sistema.

## Funcionalidades Principais

- Sistema de autenticação e autorização baseado em tipos de usuários (`admin`, `técnico` e `condomínio`).  
- Cadastro e gerenciamento de usuários restrito a administradores.  
- Página de cursos acessível somente para usuários autenticados.  
- Interface responsiva e amigável com navegação dinâmica.  
- Busca e filtro avançados para gerenciar usuários.  
- Suporte a senha forte com validação no cadastro.  
- Context API para gerenciamento global do estado de autenticação.  

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) (React Framework para SSR e SSG)  
- [Firebase Firestore](https://firebase.google.com/docs/firestore) (Banco de dados NoSQL em tempo real)  
- [Tailwind CSS](https://tailwindcss.com/) (Framework CSS utilitário para estilização rápida)  
- React Context API (Gerenciamento de estado global)  
- [Vercel](https://vercel.com/) (Hospedagem e deploy)

## Como rodar o projeto localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
