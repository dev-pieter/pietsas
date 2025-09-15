# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript wedding website built with Vite and Tailwind CSS for **Pieter & Saskia's wedding**. The project follows a minimalist design approach with sculptural florals and a late-summer color palette (Blue Bayoux, Olive Green, Pampas, Rock Blue, Kilamanjaro). The site is for a wedding on February 7, 2026, at Hawksmoor House, Stellenbosch.

### Couple Information
- **Bride**: Saskia
- **Groom**: Pieter  
- **Wedding Date**: February 7, 2026
- **Venue**: Hawksmoor House, Stellenbosch, South Africa
- **Nicknames**: Piet & Sas (used in informal contexts)

## Development Commands

- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build` (includes TypeScript compilation)
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Architecture & Structure

### Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Routing**: React Router v7
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

### Key Directories
- `src/components/ui/` - shadcn/ui components (Button, Form, Navigation, etc.)
- `src/pages/` - Route-based page components (currently empty)
- `src/lib/utils.ts` - Utility functions including `cn()` for class merging
- `public/images/` - Wedding photos and assets
- `public/fonts/` - Custom font (Chaviera Regular)

### Configuration Files
- **TypeScript**: Uses project references with `tsconfig.app.json` and `tsconfig.node.json`
- **Path aliases**: `@/*` maps to `src/*` for clean imports
- **Tailwind**: v4 with CSS variables, neutral base color
- **ESLint**: TypeScript-ESLint with React hooks and refresh plugins

### Design System
- **Colors**: Deep Blue (#496677), Rock Blue (#9FB2CD), Pampas (#F0EDE8), Olive Green (#ABAC5A), Kilamanjaro (#271203)
- **Typography**: Elegant serif headers + clean sans-serif body text
- **Components**: Pre-configured shadcn/ui components with consistent styling

### Design Philosophy & Layout Approach
- **Minimal Design**: Clean, white backgrounds with ample white space
- **Typography-focused**: Large serif headings with letter spacing, minimal decorative elements
- **Navigation**: Fixed header with transparent background and backdrop blur
- **Responsive**: Mobile-first approach with hamburger menu on mobile, centered navigation on desktop
- **Color Usage**: Subtle color accents, primarily using neutral tones with brand colors for highlights
- **Layout**: Centered content with consistent max-width containers (max-w-4xl)
- **Spacing**: Generous padding and margins to create breathing room
- **Images**: Clean presentation without complex overlays or filters
- **Buttons**: Minimal styling, often text-based with hover states

### Site Structure (per SPEC.md)
The website should include: Homepage with hero, Our Story, Event Info, Travel & Stay, RSVP form, FAQ, Registry, and Footer sections. The design emphasizes relaxed elegance with minimal layout and ample white space.

## Development Notes

- The project uses React Router but currently has no defined routes in App.tsx
- shadcn/ui components are pre-installed and configured for immediate use
- All UI components use the `cn()` utility for conditional class merging
- The build process includes TypeScript compilation as a separate step
- Environment variables and RSVP integration may be needed based on requirements