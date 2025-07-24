# Lumina Beauty - Futuristic Cosmetics E-commerce Platform

## Overview

This is a modern, futuristic-themed beauty e-commerce platform built with React, Express.js, and PostgreSQL. The application features a dark, neon-inspired design with 3D elements, animations, and a comprehensive product catalog system. It's designed as a full-stack web application with a REST API backend and a responsive frontend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with clear separation between frontend, backend, and data layers:

- **Frontend**: React with TypeScript, using modern hooks and component patterns
- **Backend**: Express.js REST API server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui components for consistent design
- **Build System**: Vite for fast development and optimized production builds
- **State Management**: TanStack Query for server state and local React state for UI

## Key Components

### Frontend Architecture
- **Component Structure**: Modern React functional components with hooks
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **3D Graphics**: Three.js integration for background animations and product viewers
- **Animations**: Custom CSS animations with Tailwind utilities

### Backend Architecture
- **API Design**: RESTful endpoints following standard conventions
- **Middleware**: Express middleware for logging, error handling, and request parsing
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Session Management**: Session-based cart functionality using localStorage for session IDs
- **Development Server**: Vite integration for hot module replacement in development

### Database Schema
- **Products**: Core product information with pricing, categories, ratings, and inventory
- **Categories**: Product categorization system with slugs and descriptions
- **Cart Items**: Session-based shopping cart with product references
- **Newsletter**: Email subscription system for marketing

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query for caching and state management
2. **API Processing**: Express server handles requests, validates data, and interacts with database
3. **Database Operations**: Drizzle ORM performs type-safe database queries
4. **Response Handling**: Data flows back through the API layer to the frontend components
5. **UI Updates**: React components re-render based on updated state from queries

## External Dependencies

### Core Technologies
- **Database**: Neon serverless PostgreSQL for cloud-hosted database
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Validation**: Zod for runtime type validation and schema generation
- **Icons**: Font Awesome for consistent iconography
- **Fonts**: Google Fonts (Montserrat, Inter) for typography

### Development Tools
- **Build Tool**: Vite for fast builds and development server
- **Type Checking**: TypeScript for type safety across the stack
- **Database Migrations**: Drizzle Kit for schema management
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

### 3D Graphics
- **Three.js**: For background particle effects and product 3D viewers
- **Custom Cursor**: JavaScript-based custom cursor with hover effects

## Deployment Strategy

The application is configured for deployment on platforms like Replit or similar Node.js hosting services:

### Build Process
1. **Frontend Build**: Vite compiles React app to static files in `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database Setup**: Drizzle migrations create and update database schema

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Development**: Uses Vite dev server with HMR and middleware integration
- **Production**: Serves static files from Express server with API routes

### Session Management
- **Client Sessions**: Uses localStorage to generate and persist session IDs
- **Cart Persistence**: Shopping cart items are tied to session IDs for temporary storage
- **Newsletter**: Email subscriptions are stored permanently in the database

The application is designed to be easily deployable with minimal configuration, requiring only a PostgreSQL database connection to be fully functional.