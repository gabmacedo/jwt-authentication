# 🔐 JWT Auth Study Project

Projeto simples de autenticação utilizando **Fastify**, **Prisma**, **SQLite** e **JWT**, criado com o objetivo de estudar conceitos de autenticação em APIs Node.js.

## 🚀 Tecnologias

- Fastify
- TypeScript
- Prisma ORM
- SQLite
- JWT (`@fastify/jwt`)
- BCrypt (`bcrypt-ts`)

## 📚 O que foi implementado

- Cadastro de usuários
- Login com e-mail e senha
- Hash de senhas
- Geração de token JWT
- Proteção de rotas autenticadas
- Integração com Prisma e SQLite

## 📦 Dependências principais

| Dependência | Função |
|------------|---------|
| fastify | Framework web |
| @fastify/jwt | Autenticação JWT |
| @prisma/client | Cliente Prisma |
| @prisma/adapter-better-sqlite3 | Adaptador SQLite |
| bcrypt-ts | Hash de senhas |

## 🛠️ Executando o projeto

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
```

Execute as migrations:

```bash
npx prisma migrate dev
```

Inicie a aplicação:

```bash
npm run dev
```

## 🎯 Objetivo

Este projeto foi desenvolvido apenas para fins de estudo, com foco em entender:

- Autenticação baseada em JWT
- Hash de senhas
- Middleware de autenticação
- Integração do Fastify com Prisma
- Boas práticas básicas para APIs

---

Feito para aprendizado e experimentação 🚀
