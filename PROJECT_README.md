# UX Frontend Developer Portfolio

A modern, performant portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and MDX. Showcasing expertise in component libraries, design systems, and bridging the gap between design and code.

## ✨ Features

- 🎨 **Modern Design System** - Built with design tokens and reusable components
- 🌓 **Dark Mode** - Seamless theme switching with next-themes
- 📝 **MDX Blog/Case Studies** - Write rich content with React components
- ⚡ **Performance Optimized** - Fast page loads and smooth animations
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessibility** - WCAG 2.1 AA compliant components
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🎯 **TypeScript** - Type-safe development experience

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── case-studies/          # Case study pages
│   │   ├── [slug]/
│   │   │   ├── page.mdx       # MDX case study content
│   │   │   └── layout.tsx
│   │   └── page.tsx           # Case studies list page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── layout/
│   │   ├── navigation.tsx     # Navigation bar
│   │   └── footer.tsx         # Footer
│   ├── providers/
│   │   └── theme-provider.tsx # Theme context
│   ├── sections/              # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── work.tsx
│   │   └── contact.tsx
│   └── ui/                    # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── theme-toggle.tsx
├── public/                    # Static assets
├── mdx-components.tsx         # MDX component overrides
├── tailwind.config.js         # Tailwind configuration
├── next.config.ts             # Next.js configuration
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### 1. Personal Information

Update the following files with your information:

**`components/layout/navigation.tsx`**
```typescript
// Change "YourName" to your actual name
<div className="text-2xl font-bold...">
  YourName
</div>
```

**`app/layout.tsx`**
```typescript
export const metadata: Metadata = {
  title: "Your Name - UX Frontend Developer",
  description: "Your custom description...",
};
```

**`components/sections/hero.tsx`**
```typescript
// Update stats and text to match your experience
```

### 2. Color Scheme

Modify the design tokens in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color scale
  },
  accent: {
    // Your accent color scale
  },
}
```

### 3. Adding Case Studies

Create a new MDX file in `app/case-studies/[slug]/page.mdx`:

```mdx
---
title: 'Your Case Study Title'
date: '2024'
description: 'Brief description'
tags: ['React', 'TypeScript']
---

# Your Case Study Title

Your content here...
```

### 4. Projects

Update the projects array in `components/sections/work.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Description',
    image: '/path/to/image.jpg',
    tags: ['Tag1', 'Tag2'],
    link: '/case-studies/your-project',
  },
  // Add more projects...
];
```

### 5. Skills

Modify the skills array in `components/sections/about.tsx`:

```typescript
const skills = [
  {
    category: 'Your Category',
    items: ['Skill 1', 'Skill 2', ...],
  },
  // Add more categories...
];
```

### 6. Social Links

Update social links in:
- `components/layout/footer.tsx`
- `components/sections/contact.tsx`

## 🎨 Component Library

The project includes a reusable component library:

### Button Component

```tsx
import { Button } from '@/components/ui/button';

<Button variant="primary" size="lg">
  Click Me
</Button>
```

Variants: `primary`, `secondary`, `outline`  
Sizes: `sm`, `md`, `lg`

### Card Component

```tsx
import { Card } from '@/components/ui/card';

<Card hover={true}>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Theme Toggle

```tsx
import { ThemeToggle } from '@/components/ui/theme-toggle';

<ThemeToggle />
```

## 📱 Responsive Design

The portfolio is mobile-first and fully responsive:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Screen reader friendly

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Deploy!

```bash
npm run build
```

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted

## 📦 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## 🎯 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Code splitting and lazy loading
- Optimized images and fonts

## 📄 License

MIT License - feel free to use this portfolio template for your own projects!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

**Built with ❤️ using Next.js and TypeScript**
