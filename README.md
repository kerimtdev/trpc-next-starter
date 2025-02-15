# Next.js + tRPC Starter Kit

A modern full-stack starter template built with Next.js, tRPC, DrizzleORM, and React Query.

## Features

- 🚀 [Next.js](https://nextjs.org/) with App Router
- 🔗 [tRPC](https://trpc.io/) for end-to-end typesafe APIs
- 📚 [Drizzle ORM](https://orm.drizzle.team/) for database operations
- 🔄 [TanStack Query](https://tanstack.com/query/latest) for data fetching
- ⚡ [Turbopack](https://turbo.build/pack) for faster development
- 📁 Organized project structure:
  - `/app` - Next.js app router pages and API routes
  - `/package` - Shared components, hooks, and utilities
  - `/server` - Backend logic with tRPC routers and database schema

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```
3. Set the environment variables:
   ```
   DB_NAME=
   DB_HOST=
   DB_PORT=
   DB_USER=
   DB_PASSWORD=
   ```
4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```
