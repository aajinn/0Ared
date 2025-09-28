# Admin Panel Design Document

## Overview

The admin panel will be a secure, web-based content management system integrated into the existing Next.js portfolio website. It will provide a comprehensive interface for managing all dynamic content, including blog posts, navigation, widgets, static pages, media files, and site settings. The design leverages Next.js App Router, TypeScript, and Tailwind CSS to maintain consistency with the existing codebase while providing a modern, intuitive admin experience.

## Architecture

### High-Level Architecture

The admin panel follows a layered architecture pattern:

```
┌─────────────────────────────────────┐
│           Admin UI Layer            │
│     (React Components + Forms)      │
├─────────────────────────────────────┤
│          API Route Layer            │
│    (Next.js API Routes + Auth)      │
├─────────────────────────────────────┤
│         Service Layer               │
│   (Business Logic + Validation)     │
├─────────────────────────────────────┤
│         Data Access Layer           │
│  (File System + Content Management) │
└─────────────────────────────────────┘
```

### Authentication Strategy

**Design Decision**: Use Next.js middleware with session-based authentication rather than JWT tokens for simplicity and security in a single-user scenario.

**Rationale**: Since this is a personal portfolio with a single admin user, session-based auth provides better security with automatic expiration and easier implementation than managing JWT refresh tokens.

### Content Management Strategy

**Design Decision**: Maintain the existing file-based content structure while adding a database layer for metadata and configuration.

**Rationale**: This preserves the current markdown-based blog system while enabling dynamic management. The hybrid approach allows for version control of content while providing admin convenience.

## Components and Interfaces

### Core Components

#### 1. Authentication Components
- `LoginForm`: Handles admin authentication
- `AuthGuard`: Protects admin routes
- `SessionProvider`: Manages authentication state

#### 2. Layout Components
- `AdminLayout`: Main admin panel layout with navigation
- `AdminSidebar`: Navigation menu for admin sections
- `AdminHeader`: Top bar with user info and logout

#### 3. Content Management Components
- `BlogPostEditor`: Rich text editor for blog posts with markdown support
- `BlogPostList`: Table view of all blog posts with actions
- `MediaUploader`: Drag-and-drop file upload interface
- `MediaGallery`: Grid view of uploaded media files

#### 4. Configuration Components
- `NavigationEditor`: Drag-and-drop interface for menu management
- `WidgetManager`: Dynamic widget configuration interface
- `SettingsPanel`: Form-based site configuration management

### API Interface Design

#### Authentication Endpoints
```typescript
POST /api/admin/auth/login
POST /api/admin/auth/logout
GET  /api/admin/auth/session
```

#### Content Management Endpoints
```typescript
GET    /api/admin/posts           // List all blog posts
POST   /api/admin/posts           // Create new blog post
GET    /api/admin/posts/[slug]    // Get specific blog post
PUT    /api/admin/posts/[slug]    // Update blog post
DELETE /api/admin/posts/[slug]    // Delete blog post

GET    /api/admin/media           // List media files
POST   /api/admin/media           // Upload media file
DELETE /api/admin/media/[id]      // Delete media file

GET    /api/admin/navigation      // Get navigation structure
PUT    /api/admin/navigation      // Update navigation

GET    /api/admin/widgets         // Get widget configuration
PUT    /api/admin/widgets         // Update widgets

GET    /api/admin/pages           // List static pages
POST   /api/admin/pages           // Create new page
PUT    /api/admin/pages/[slug]    // Update page
DELETE /api/admin/pages/[slug]    // Delete page

GET    /api/admin/settings        // Get site settings
PUT    /api/admin/settings        // Update site settings

GET    /api/admin/analytics       // Get analytics data
```

## Data Models

### Blog Post Model
```typescript
interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  publishedAt: Date;
  updatedAt: Date;
  status: 'draft' | 'published';
  tags: string[];
  metadata: {
    seoTitle?: string;
    seoDescription?: string;
    featuredImage?: string;
  };
}
```

### Navigation Model
```typescript
interface NavigationItem {
  id: string;
  title: string;
  url: string;
  order: number;
  parent?: string;
  isExternal: boolean;
}

interface NavigationStructure {
  items: NavigationItem[];
  updatedAt: Date;
}
```

### Widget Model
```typescript
interface Widget {
  id: string;
  type: 'hero' | 'projects' | 'skills' | 'contact';
  title: string;
  content: Record<string, any>;
  order: number;
  isVisible: boolean;
}
```

### Media File Model
```typescript
interface MediaFile {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  uploadedAt: Date;
  alt?: string;
  caption?: string;
}
```

### Site Settings Model
```typescript
interface SiteSettings {
  title: string;
  description: string;
  keywords: string[];
  author: {
    name: string;
    email: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
  };
  analytics: {
    googleAnalyticsId?: string;
  };
}
```

## Error Handling

### Client-Side Error Handling
- **Form Validation**: Real-time validation with clear error messages
- **API Error Display**: Toast notifications for API errors
- **Fallback UI**: Error boundaries for component failures
- **Loading States**: Skeleton loaders and progress indicators

### Server-Side Error Handling
- **Authentication Errors**: 401 responses with redirect to login
- **Authorization Errors**: 403 responses for insufficient permissions
- **Validation Errors**: 400 responses with detailed field errors
- **File System Errors**: 500 responses with safe error messages
- **Rate Limiting**: 429 responses for excessive requests

### Error Recovery Strategies
- **Auto-save**: Periodic saving of form data to prevent loss
- **Retry Logic**: Automatic retry for transient failures
- **Offline Support**: Queue operations when network is unavailable
- **Backup Creation**: Automatic backups before destructive operations

## Testing Strategy

### Unit Testing
- **Component Testing**: React Testing Library for UI components
- **API Testing**: Jest for API route handlers
- **Utility Testing**: Pure function testing for helpers
- **Validation Testing**: Schema validation testing

### Integration Testing
- **Authentication Flow**: End-to-end login/logout testing
- **Content CRUD**: Full create/read/update/delete workflows
- **File Upload**: Media upload and processing testing
- **Form Submission**: Complete form workflows

### End-to-End Testing
- **Admin Workflows**: Complete user journeys through admin tasks
- **Cross-Browser**: Testing across different browsers
- **Responsive Design**: Testing on various screen sizes
- **Performance**: Load testing for large content sets

### Security Testing
- **Authentication**: Session management and timeout testing
- **Authorization**: Access control verification
- **Input Validation**: XSS and injection prevention
- **File Upload**: Malicious file upload prevention

## Implementation Considerations

### Performance Optimizations
- **Code Splitting**: Lazy loading of admin components
- **Caching**: Aggressive caching of static content
- **Pagination**: Large content lists with pagination
- **Image Optimization**: Automatic image resizing and compression

### Security Measures
- **CSRF Protection**: Token-based CSRF prevention
- **Input Sanitization**: XSS prevention for all user inputs
- **File Upload Security**: MIME type validation and file scanning
- **Rate Limiting**: API endpoint protection against abuse

### Accessibility Features
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliance
- **Focus Management**: Proper focus handling in modals and forms

### Mobile Responsiveness
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Touch Interactions**: Touch-friendly interface elements
- **Viewport Optimization**: Proper viewport meta tags
- **Performance**: Optimized for mobile networks

## Technology Integration

### Next.js App Router Integration
- **Route Groups**: Organize admin routes under `/admin` group
- **Middleware**: Authentication middleware for admin routes
- **Server Components**: Leverage server components for data fetching
- **Client Components**: Interactive components with 'use client'

### Tailwind CSS Styling
- **Design System**: Consistent spacing, colors, and typography
- **Component Variants**: Reusable component styles
- **Dark Mode**: Optional dark theme support
- **Custom Components**: Admin-specific UI components

### TypeScript Integration
- **Type Safety**: Full type coverage for all components and APIs
- **Interface Definitions**: Shared types between client and server
- **Generic Components**: Reusable typed components
- **API Type Safety**: Typed API responses and requests

This design provides a comprehensive foundation for implementing a secure, user-friendly admin panel that integrates seamlessly with the existing Next.js portfolio website while maintaining code quality and performance standards.