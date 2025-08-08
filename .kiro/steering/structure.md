# Project Structure

## Root Directory
```
├── src/                    # Source code
├── content/               # Markdown blog posts and content
├── public/                # Static assets
├── .kiro/                 # Kiro configuration and steering
├── .next/                 # Next.js build output
├── node_modules/          # Dependencies
└── config files           # Various config files
```

## Source Code Organization (`src/`)
```
src/
├── app/                   # Next.js App Router
│   ├── admin/            # Admin routes
│   ├── api/              # API routes
│   ├── blog/             # Blog routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable React components
│   ├── Description.tsx
│   ├── Header.tsx
│   └── SectionCard.tsx
└── middleware.ts         # Next.js middleware
```

## Content Structure (`content/`)
- Markdown files with frontmatter for blog posts
- Each file represents a blog post or article
- Frontmatter includes: title, date, slug
- Content covers development logs, tutorials, and project showcases

## Public Assets (`public/`)
- Favicon files and app icons
- Images and screenshots
- Static assets served directly

## Key Conventions

### File Naming
- React components: PascalCase (e.g., `Header.tsx`)
- Pages: lowercase (e.g., `page.tsx`)
- Content files: kebab-case (e.g., `dev-log-*.md`)

### Import Paths
- Use `@/` alias for imports from root
- Example: `import Header from "@/src/components/Header"`

### Component Structure
- Components in `src/components/` are reusable
- Page-specific components can be co-located with routes
- Layout components handle page structure and metadata

### Content Management
- Blog posts stored as Markdown in `content/` directory
- Frontmatter required for metadata
- File naming follows descriptive kebab-case pattern