# Shopify Sports Store

Uma aplicação fullstack simples e funcional construída com **TypeScript**, **Next.js** no frontend e **Node.js + Express** no backend. Foco em boas práticas, arquitetura organizada, integração com APIs REST e SSR para uma loja de produtos esportivos.

---

## Rodar o projeto localmente

### Pré-requisitos

- Docker e Docker Compose instalados
- Node.js (versão 18+)
- Yarn ou npm

### Backend

1. Clone o repositório e vá para a pasta backend:

```bash
cd backend
```

2. Crie seu arquivo `.env` baseado no `.env-example`:

```bash
cp .env-example .env
# depois edite o .env para configurar sua senha do Postgres
```

3. Suba o banco com Docker:

```bash
docker-compose up -d
```

4. Instale as dependências e rode o seed do banco:

```bash
npm install
npx prisma migrate deploy
npx prisma db seed
```

5. Rode o backend em modo dev:

```bash
npm run dev
```

6. Opcional: rode os testes em modo watch (pra ficar vendo as paradas rolando):

```bash
npm run test:dev
```

7. Para testar as rotas, importe o arquivo do Postman:

```
backend/shopify.postman_collection.json
```

---

### Frontend

1. Vá para a pasta frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o frontend em modo dev:

```bash
npm run dev
```

---

## 🚀 Principais decisões técnicas

- **SSR (Server-Side Rendering)**: Usei SSR no Next.js porque a loja tem produtos esportivos com estoque e promoções que mudam rápido. Assim, a página sempre carrega com dados atualizados e melhora a experiência do usuário e SEO.
- **Backend com Node + Express**: arquitetura simples, organizada e fácil de escalar, usando controllers, services e middlewares.
- **Prisma + PostgreSQL**: Prisma como ORM para facilitar o acesso ao banco, migrations e seed, além do PostgreSQL rodando no Docker para ambiente consistente.
- **Docker Compose**: garante que o ambiente do banco seja idêntico em qualquer lugar, fácil de levantar.
- **Testes com Jest + ts-jest**: para garantir qualidade e evitar regressões no backend.
- **API REST bem organizada**: rotas separadas, controllers focados, serviços que fazem a lógica do negócio e middlewares para tratamento de erros.
- **Frontend com TailwindCSS + shadcn/ui**: para estilização rápida e componentes UI reutilizáveis.
- **TypeScript em fullstack**: segurança de tipos e melhor manutenção do código.

---

## Estrutura do projeto

```plaintext
backend/
├── prisma/                 # Migrations, schema e seed
├── src/
│   ├── controllers/        # Controllers das rotas
│   ├── database/           # Config Prisma
│   ├── middlewares/        # Tratamento de erros
│   ├── routes/             # Rotas Express
│   ├── services/           # Lógica de negócio
│   ├── tests/              # Testes Jest
│   └── utils/              # Helpers, erros customizados
├── shopify.postman_collection.json
└── docker-compose.yml      # Banco PostgreSQL

frontend/
├── pages/                  # Páginas Next.js com SSR
├── components/             # Componentes React reutilizáveis
└── styles/                 # Tailwind e customizações
```
