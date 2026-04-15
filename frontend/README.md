# Youth of Diverse Families Website

> **Млади од семејна разновидност** — A modern, accessible website for a Macedonian youth association supporting young people from diverse family structures.

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06b6d4?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building & Deployment](#building--deployment)
- [Theming & Styling](#theming--styling)
- [Internationalization (i18n)](#internationalization-i18n)
- [Accessibility](#accessibility)
- [Contributing](#contributing)

---

## 🎯 Overview

This is a modern, fully-accessible website built for a Macedonian youth organization. The site promotes the association's mission of supporting young people from diverse family structures through various programs, events, opportunities, and educational content.

**Live URL:** [ydf.mk](https://ydf.mk)

---

## 🛠 Tech Stack

### Core Framework

- **Next.js 16** — React-based framework with SSG support
- **React 19** — UI library
- **TypeScript 5.7** — Type-safe JavaScript

### Styling & UI

- **Tailwind CSS 3.4** — Utility-first CSS framework
- **Radix UI** — Headless, accessible component library
- **next-themes** — Dark/light mode management
- **Lucide React** — Icon library

### Forms & Validation

- **React Hook Form** — Efficient form handling
- **Zod** — TypeScript-first schema validation

### Utilities

- **clsx & tailwind-merge** — CSS class management
- **date-fns** — Date manipulation
- **recharts** — Data visualization
- **sonner** — Toast notifications
- **embla-carousel** — Carousel component

### Development

- **PostCSS** — CSS processing
- **ESLint** — Code linting

---

## ✨ Features

- ✅ **Multilingual Support** — 7 languages (Macedonian, English, German, Italian, French, Serbian, Albanian)
- ✅ **Dark Mode** — Automatic theme switching with persistence
- ✅ **Full Accessibility** — WCAG compliant with skip links, semantic HTML, ARIA labels
- ✅ **Responsive Design** — Mobile-first, works on all screen sizes
- ✅ **SSG Export** — Static site generation for optimal performance
- ✅ **Component Library** — 40+ reusable UI components from Radix UI
- ✅ **Modern Styling** — CSS variables with Tailwind tokens
- ✅ **SEO Optimized** — Next.js metadata and structured markup
- ✅ **Newsletter Integration** — Email subscription support
- ✅ **Events Management** — Dedicated events page
- ✅ **Opportunities Listing** — Career and volunteer opportunities
- ✅ **News Section** — Blog-style content management
- ✅ **Contact Form** — Secure contact submissions
- ✅ **Sponsor Recognition** — Dedicated sponsors section

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ or **pnpm** 9+
- **pnpm** package manager (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/ydf-website.git
cd ydf-website

# Install dependencies
pnpm install
```

### Development Server

```bash
# Start the development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site. Any changes save automatically.

### Build for Production

```bash
# Build the static site
pnpm build

# Start the production server (optional)
pnpm start
```

The `output: 'export'` setting in [next.config.mjs](next.config.mjs) generates a fully static site suitable for any hosting provider.

---

## 📁 Project Structure

```
├── app/                      # Next.js app directory
│   ├── layout.tsx            # Root layout with providers
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles & theme variables
│   └── [route]/              # Dynamic routes (about, contact, events, etc.)
│
├── components/               # Reusable React components
│   ├── header.tsx            # Navigation & theme toggle
│   ├── footer.tsx            # Footer component
│   ├── language-switcher.tsx # Locale selector
│   ├── skip-link.tsx         # Accessibility skip link
│   ├── home/                 # Home page sections
│   │   ├── hero-section.tsx
│   │   ├── pillars-section.tsx
│   │   ├── opportunities-teaser.tsx
│   │   ├── sponsors-section.tsx
│   │   └── ...
│   └── ui/                   # Radix UI component wrappers
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ... (40+ more)
│
├── lib/                      # Utility functions & config
│   ├── i18n.ts              # Translation system
│   ├── locale-context.tsx   # Locale provider
│   ├── utils.ts             # Helper functions
│   └── translations/        # i18n files
│       ├── mk.json
│       ├── en.json
│       └── ... (5 more)
│
├── hooks/                    # Custom React hooks
│   ├── use-theme.ts
│   ├── use-toast.ts
│   └── use-mobile.tsx
│
├── public/                   # Static assets
│   ├── brochure/
│   ├── images/
│   │   ├── media/
│   │   ├── sponsors/
│   │   └── team/
│   └── styles/
│
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.mjs       # PostCSS configuration
└── package.json             # Dependencies & scripts
```

---

## 🔧 Development

### Key Commands

| Command      | Purpose                                  |
| ------------ | ---------------------------------------- |
| `pnpm dev`   | Start development server with hot reload |
| `pnpm build` | Build for static export                  |
| `pnpm start` | Serve production build locally           |
| `pnpm lint`  | Run ESLint                               |

### Adding New Pages

1. Create a new directory in `app/` (e.g., `app/new-page/`)
2. Add a `page.tsx` file with your content
3. These automatically become routes (e.g., `/new-page`)

### Adding New Components

1. Create component files in `components/`
2. Use TypeScript for type safety
3. Export as named exports

```tsx
// components/my-component.tsx
export function MyComponent() {
  return <div>Hello</div>;
}
```

---

## 🎨 Theming & Styling

### How Theming Works

The project uses **Tailwind CSS** with **CSS variables** for semantic color tokens. This allows both light and dark modes with custom branding.

- **Light/Dark Variables:** [app/globals.css](app/globals.css)
- **Tailwind Tokens:** [tailwind.config.ts](tailwind.config.ts)
- **Theme Provider:** [components/theme-provider.tsx](components/theme-provider.tsx)
- **Theme Toggle:** [components/header.tsx](components/header.tsx)

### How It Works

1. A small inline script in [app/layout.tsx](app/layout.tsx#L31) sets the theme before paint, preventing FOUC (Flash of Unstyled Content)
2. `ThemeProvider` manages theme state and persistence using localStorage
3. CSS variables update dynamically based on the selected theme
4. The `dark` class on the `html` element controls dark mode styles

### Customizing Colors

Edit the CSS variables in [app/globals.css](app/globals.css):

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.6%;
  --primary: 9 100% 64%;
  /* ... more variables */
}

.dark {
  --background: 0 0% 3.6%;
  --foreground: 0 0% 98%;
  /* ... dark mode overrides */
}
```

Then map them in [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  background: "hsl(var(--background))",
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // ...
}
```

---

## 🌐 Internationalization (i18n)

### Supported Languages

- 🇲🇰 Macedonian (mk)
- 🇬🇧 English (en)
- 🇩🇪 Deutsch (de)
- 🇮🇹 Italiano (it)
- 🇫🇷 Français (fr)
- 🇷🇸 Srpski (sr)
- 🇦🇱 Shqip (sq)

### Translation System

Translations are managed in [lib/i18n.ts](lib/i18n.ts) with JSON files in [lib/translations/](lib/translations/).

**Usage in Components:**

```tsx
import { useLocale } from "@/lib/locale-context";
import { t } from "@/lib/i18n";

export function MyComponent() {
  const locale = useLocale();
  return <h1>{t("page.title", locale)}</h1>;
}
```

**Adding a New Language:**

1. Create a new JSON file in [lib/translations/](lib/translations/) (e.g., `es.json`)
2. Add translations with the same keys as existing files
3. Update [lib/i18n.ts](lib/i18n.ts) to import and register the language
4. Update the `Locale` type and `localeNames` object

### Translation Files

Each language has its own JSON file containing key-value pairs:

```json
{
  "page.title": "Youth of Diverse Families",
  "nav.home": "Home",
  "nav.about": "About"
}
```

---

## ♿ Accessibility

This website is built with **WCAG 2.1 AA** compliance in mind.

### Key Accessibility Features

- ✅ **Skip Link** — Direct navigation to main content ([components/skip-link.tsx](components/skip-link.tsx))
- ✅ **Semantic HTML** — Proper heading hierarchy, landmark roles
- ✅ **ARIA Labels** — Descriptive labels for screen readers
- ✅ **Keyboard Navigation** — Full keyboard support
- ✅ **Color Contrast** — Meets WCAG AA standards
- ✅ **Focus Indicators** — Visible focus states for keyboard users
- ✅ **Alt Text** — Descriptive image descriptions
- ✅ **Form Validation** — Clear error messages and guidance
- ✅ **Language Declaration** — Proper `lang` attribute on HTML elements
- ✅ **Accessibility Page** — Educational content about accessibility ([app/accessibility/page.tsx](app/accessibility/page.tsx))

### Testing Accessibility

- Use browser DevTools accessibility inspector
- Test with keyboard navigation (Tab, Enter, Escape)
- Use screen reader (NVDA, JAWS, or VoiceOver)
- Run automated checks: [WAVE](https://wave.webaim.org/), [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 🚀 Building & Deployment

### Static Export

The project is configured for **static export** via `output: 'export'` in [next.config.mjs](next.config.mjs). This generates a fully static HTML/CSS/JS site.

```bash
pnpm build
# Creates an 'out/' directory with static files
```

### Deployment Options

**Vercel** (Recommended)

```bash
# Deploy with Vercel CLI
vercel deploy
```

**Other Platforms** (GitHub Pages, Netlify, etc.)

```bash
# Build and deploy the 'out' directory
pnpm build
# Upload 'out/' contents to your hosting
```

### Environment Variables

If using API endpoints, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 📝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

### Code Style

- Use TypeScript for type safety
- Follow existing naming conventions
- Write semantic HTML
- Maintain accessibility standards
- Keep components focused and reusable

---

## 📜 License

[Add your license information here - e.g., MIT, Creative Commons, etc.]

---

## 📞 Contact & Support

For questions or support, visit:

- **Website:** [ydf.mk](https://ydf.mk)
- **Contact Page:** [ydf.mk/contact](https://ydf.mk/contact)
- **Email:** [Add contact email]

---

## 🙏 Acknowledgments

- **Radix UI** — Accessible component primitives
- **Tailwind CSS** — Utility-first CSS framework
- **Next.js** — React framework
- **Contributors & Supporters** — Thank you for building diverse, inclusive spaces

---

**Built with ❤️ by Pedzo and Base42 members**
