# NariCare Website

## Project Overview
NariCare is a breastfeeding support platform that helps mothers overcome breastfeeding challenges with expert care and smart AI. The website showcases the app's features and provides information about the service.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with Shadcn/ui
- **Icons**: Lucide React

## Project Structure
```
src/
├── components/ui/          # Reusable UI components (Shadcn/ui)
├── screens/               # Main page components
│   └── NaricareLanding/   # Landing page sections
├── lib/                   # Utilities and helpers
└── index.tsx              # App entry point
```

## Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System
- **Primary Color**: #8383ed (purple)
- **Typography**: Merriweather (headings), Poppins (body)
- **Background**: #fffcf8 (warm white)
- **Text Colors**: #0f1728 (dark), #475466 (gray)

## Key Features
- Responsive design with mobile-first approach
- Custom button components with gradient borders
- Stats section with metrics display
- Hero section with app download CTAs
- Testimonials and FAQ sections

## Component Conventions
- Use TypeScript for all components
- Follow Shadcn/ui patterns for UI components
- Implement responsive design with Tailwind breakpoints
- Use absolute imports for components: `@/components/ui/*`

## Known Issues
- None currently identified

## Recent Changes
- Fixed responsive layout issues in hero section
- Improved button spacing and mobile layout
- Made hero image responsive across all screen sizes
- Enhanced stats card with better mobile experience