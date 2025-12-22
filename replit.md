# ClownPierce Profile Website

## Overview

A personal portfolio/fan website for ClownPierce, a Dutch Minecraft YouTuber known as "The Deadliest Player." The site showcases his gaming persona with a dark, intense visual design featuring PvP-focused imagery, bold typography, and a modern gaming aesthetic. Built as a full-stack TypeScript application with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and effects
- **Theme System**: Custom ThemeProvider supporting dark/light modes (dark default)
- **Build Tool**: Vite with path aliases (@/, @shared/, @assets/)

### Backend Architecture
- **Runtime**: Node.js with TypeScript (tsx for development)
- **Framework**: Express.js
- **API Pattern**: RESTful endpoints prefixed with /api
- **Storage**: Abstracted storage interface (IStorage) with in-memory implementation
- **Static Serving**: Express static middleware serves built client assets

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: shared/schema.ts (shared between client/server)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Migrations**: Drizzle Kit for database migrations (output: ./migrations)

### Project Structure
```
├── client/          # React frontend application
│   └── src/
│       ├── components/ui/  # shadcn/ui components
│       ├── pages/          # Route page components
│       ├── hooks/          # Custom React hooks
│       └── lib/            # Utilities and query client
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Data access layer
│   └── vite.ts      # Vite dev server integration
├── shared/          # Shared types and schemas
└── attached_assets/ # Static assets (images)
```

### Build System
- Development: Vite dev server with HMR, proxied through Express
- Production: Vite builds to dist/public, esbuild bundles server to dist/index.cjs
- Key dependencies are bundled to reduce cold start times

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires DATABASE_URL environment variable)
- **Drizzle ORM**: Database access and schema management
- **connect-pg-simple**: Session storage (available but not currently in use)

### UI/Styling
- **Radix UI**: Headless component primitives (dialog, dropdown, tabs, etc.)
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **react-icons**: Additional icons (SI icons for social platforms)
- **Embla Carousel**: Carousel component

### Frontend Libraries
- **TanStack React Query**: Data fetching and caching
- **React Hook Form**: Form handling with Zod resolvers
- **Framer Motion**: Animation library
- **date-fns**: Date formatting utilities
- **vaul**: Drawer component
- **cmdk**: Command menu component

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type checking
- **Drizzle Kit**: Database migration tooling
- **esbuild**: Server bundling for production