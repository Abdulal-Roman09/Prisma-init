# Prisma Init – Basic CRUD + Pagination + Sorting

A minimal, clean, and production-ready starting point using **Prisma 5** with PostgreSQL.  
Focuses only on core features:

- Full CRUD operations  
- Server-side Pagination  
- Dynamic Sorting (any field + asc/desc)  
- Case-insensitive Search & Filtering  

No framework — just pure Prisma + TypeScript.

## Features

- Prisma 5.10+
- TypeScript + ts-node-dev (auto restart)
- Pagination with total count & metadata
- Dynamic sorting & search
- Relation example (User → Post)
- Ready to plug into Express, Fastify, Next.js API, Hono, etc.

## Prerequisites

- Node.js ≥ 18  
- PostgreSQL (local or cloud)
- Git

## How to Clone & Run (Step by Step)

```bash
# 1. Clone the project
git clone https://github.com/your-username/prisma-init.git
cd prisma-init

# 2. Install dependencies
npm install
# or
pnpm install
# or
yarn

# 3. Create .env file (MUST do this)
cp .env.example .env

# 4. Open .env and put your PostgreSQL URL
# Example for local PostgreSQL:
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/prisma_init?schema=public"

# If you don't have DB yet, create one first:
#   createdb prisma_init   (if using psql)

# 5. Run migration + generate Prisma Client
npx prisma migrate dev --name init

# 6. Start the project (with auto-restart)
npm run dev
```
## .env.example
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/prisma_init?schema=public"
```
## Project Structure
```
├── prisma/
│   └── schema.prisma          # Models & relations
├── src/
│   ├── index.ts               # Full example with CRUD
│   └── pagination-sorting.ts  # Reusable pagination function
├── .env                       # Your database URL
├── package.json
└── README.md
```
## Want to Add Data Quickly?
```
npx prisma studio

```
## License MIT © 2025
```

Just copy-paste this into your `README.md` — it's 100% English, clean, and GitHub-ready.  
Let me know if you want badges (Prisma, TypeScript, Node.js, etc.) added!
```
