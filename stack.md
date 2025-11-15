# Tech Stack

## Core Framework
- **Next.js** 15.1.4
  - App Router (src/app directory structure)
  - React Server Components (RSC)
  - Turbopack (development bundler)
- **React** 19.0.0
- **React DOM** 19.0.0
- **TypeScript** 5.x

## Styling & CSS
- **Tailwind CSS** 3.4.1
  - Dark mode support (class-based)
  - CSS Variables for theming
  - Custom color system (background, foreground, card, popover, primary, secondary, muted, accent, destructive, border, input, ring, chart)
  - Custom border radius system
- **PostCSS** 8
- **tailwindcss-animate** 1.0.7 (animation utilities)
- **tailwind-merge** 2.6.0 (merge Tailwind classes)
- **clsx** 2.1.1 (conditional classnames)

## UI Component Libraries
- **shadcn/ui** (New York style)
  - Component system with TypeScript support
  - CSS Variables based theming
  - Lucide React as icon library
- **Headless UI** 2.2.0 (@headlessui/react)
- **Lucide React** 0.471.1 (icon library)
- **class-variance-authority** 0.7.1 (component variant management)

## Animation & Interactions
- **Framer Motion** 11.18.0
- **Swiper** 11.2.1 (carousel/slider component)

## Typography
- **Inter** (Google Fonts via next/font/google)
  - Subset: Latin
  - Display: swap

## Analytics & Tracking
- **Facebook Pixel** (custom implementation)

## Development Tools
- **ESLint** 9
  - Next.js core-web-vitals config
  - Next.js TypeScript config
  - Flat config format (eslint.config.mjs)
- **pnpm** (package manager)

## Build & Configuration
- **Turbopack** (Next.js bundler for development)
- **TypeScript** strict mode enabled
- Path aliases configured (@/* → ./src/*)

## Project Structure
- App Router architecture (Next.js 13+)
- TypeScript throughout
- Component-based architecture
- Separation of concerns (components, lib, app directories)

