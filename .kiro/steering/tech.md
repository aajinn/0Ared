# Technology Stack

## Framework & Runtime
- **Next.js 14.2.7** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type-safe JavaScript
- **Node.js** - Runtime environment

## Styling & UI
- **Tailwind CSS 3.4.12** - Utility-first CSS framework
- **PostCSS 8.4.47** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Inter Font** - Google Font with variable font support

## Content & Markdown
- **react-markdown 9.0.1** - Markdown rendering
- **remark-gfm 4.0.0** - GitHub Flavored Markdown support

## Development Tools
- **ESLint** - Code linting with Next.js config
- **TypeScript** - Static type checking

## Deployment
- **Vercel** - Hosting platform
- **pnpm** - Package manager (preferred based on lock file)

## Common Commands

### Development
```bash
pnpm dev          # Start development server on localhost:3000
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Package Management
```bash
pnpm install      # Install dependencies
pnpm add <pkg>    # Add new dependency
pnpm add -D <pkg> # Add dev dependency
```

## Configuration Notes
- Uses App Router (not Pages Router)
- TypeScript strict mode enabled
- Path aliases configured with `@/*` pointing to root
- Tailwind configured for `src/**` directory structure