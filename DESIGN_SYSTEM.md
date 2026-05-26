# Design System Documentation

This portfolio is built using a component-based design system approach. Here's everything you need to know about the system.

## 🎨 Design Tokens

### Color System

Our color system uses a three-tier token structure:

#### Primary Colors
```css
--color-primary-50: #f0f9ff
--color-primary-100: #e0f2fe
--color-primary-500: #0ea5e9 (Base)
--color-primary-900: #0c4a6e
```

#### Accent Colors
```css
--color-accent-50: #fdf4ff
--color-accent-500: #d946ef (Base)
--color-accent-900: #701a75
```

#### Usage
```tsx
// In Tailwind classes
className="text-primary-600 bg-accent-100"

// In CSS
color: theme('colors.primary.600')
```

### Typography

#### Font Families
- **Sans-serif**: Inter (Primary font)
- **Monospace**: System mono (Code blocks)

#### Font Sizes
```
text-sm   → 14px
text-base → 16px
text-lg   → 18px
text-xl   → 20px
text-2xl  → 24px
text-3xl  → 30px
text-4xl  → 36px
text-5xl  → 48px
```

### Spacing Scale

Based on 4px base unit:
```
1  → 4px    (0.25rem)
2  → 8px    (0.5rem)
4  → 16px   (1rem)
6  → 24px   (1.5rem)
8  → 32px   (2rem)
12 → 48px   (3rem)
16 → 64px   (4rem)
20 → 80px   (5rem)
```

### Border Radius
```
rounded-md  → 6px
rounded-lg  → 8px
rounded-xl  → 12px
rounded-2xl → 16px
rounded-full → 9999px
```

### Shadows
```
shadow-sm  → Subtle
shadow     → Default
shadow-md  → Medium
shadow-lg  → Large (cards)
shadow-xl  → Extra large
```

## 🧩 Component Library

### Button

A versatile button component with multiple variants and sizes.

#### Variants
- **Primary**: Gradient background (primary to accent)
- **Secondary**: Gray background
- **Outline**: Border only

#### Sizes
- **sm**: Small (px-4 py-2)
- **md**: Medium (px-6 py-3)
- **lg**: Large (px-8 py-4)

#### Usage
```tsx
import { Button } from '@/components/ui/button';

// Basic usage
<Button>Click Me</Button>

// With variants
<Button variant="secondary" size="lg">
  Secondary Large
</Button>

// With props
<Button 
  variant="outline" 
  onClick={handleClick}
  disabled={isLoading}
>
  Submit
</Button>
```

#### Props
```typescript
interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
```

### Card

A container component with optional hover effects.

#### Usage
```tsx
import { Card } from '@/components/ui/card';

<Card hover={true}>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Without hover
<Card hover={false}>
  <p>Static content</p>
</Card>
```

#### Props
```typescript
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean; // Default: true
}
```

#### Features
- Automatic fade-in animation
- Optional hover lift effect
- Dark mode support
- Rounded corners with shadow

### Theme Toggle

Dark/light mode toggle with smooth transition.

#### Usage
```tsx
import { ThemeToggle } from '@/components/ui/theme-toggle';

<ThemeToggle />
```

#### Features
- Animated toggle switch
- Sun/moon icons
- Smooth color transitions
- Persistent theme selection

## 📐 Layout Components

### Navigation

Responsive navigation bar with mobile menu.

#### Features
- Fixed position (sticky header)
- Backdrop blur effect
- Mobile hamburger menu
- Active link highlighting
- Integrated theme toggle

#### Customization
```tsx
// Edit navItems in components/layout/navigation.tsx
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '#about' },
  // Add more items
];
```

### Footer

Three-column footer with links and social media.

#### Sections
- About text
- Quick links
- Social media icons
- Copyright notice

## 🎭 Animation System

### Framer Motion Patterns

#### Fade In
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

#### Scroll-based Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

#### Hover Effects
```tsx
<motion.div
  whileHover={{ y: -5 }}
  transition={{ duration: 0.3 }}
>
  Hoverable Content
</motion.div>
```

### Built-in Animations

Available in Tailwind config:
```tsx
className="animate-fade-in"
className="animate-slide-up"
className="animate-slide-in"
```

## 🌓 Dark Mode

### Implementation

Using `next-themes` for seamless dark mode:

```tsx
// Provider setup (already in layout)
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

### Usage in Components

```tsx
// Tailwind dark mode classes
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-gray-100">
    Text that adapts to theme
  </p>
</div>
```

### Color Patterns
- Light backgrounds: `bg-white`, `bg-gray-50`
- Dark backgrounds: `dark:bg-gray-900`, `dark:bg-gray-950`
- Light text: `text-gray-900`, `text-gray-700`
- Dark text: `dark:text-gray-100`, `dark:text-gray-300`

## 📱 Responsive Design

### Breakpoints
```
sm:  640px  (Mobile landscape / Tablet)
md:  768px  (Tablet)
lg:  1024px (Desktop)
xl:  1280px (Large desktop)
2xl: 1536px (Extra large)
```

### Mobile-First Approach

Always design for mobile first, then add larger breakpoint styles:

```tsx
// Mobile by default, tablet+
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

// Hide on mobile, show on tablet+
<div className="hidden md:block">
  Desktop only content
</div>

// Grid layout example
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map(item => <Card key={item.id} />)}
</div>
```

## ♿ Accessibility

### Built-in Features
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast (WCAG AA)
- Screen reader friendly

### Examples

```tsx
// Accessible button
<button
  aria-label="Close menu"
  onClick={handleClose}
>
  <CloseIcon />
</button>

// Accessible link
<a
  href="#main-content"
  className="sr-only focus:not-sr-only"
>
  Skip to main content
</a>

// Form labels
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

## 🎯 Best Practices

### Component Composition

Prefer composition over prop drilling:

```tsx
// Good ✅
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Body>Content</Card.Body>
</Card>

// Avoid ❌
<Card 
  title="Title" 
  content="Content"
  hasHeader={true}
/>
```

### Naming Conventions

- **Components**: PascalCase (`Button`, `ThemeToggle`)
- **Files**: kebab-case (`theme-toggle.tsx`)
- **Props**: camelCase (`onClick`, `isActive`)
- **CSS classes**: Use Tailwind utilities

### File Organization

```
components/
  ├── ui/           # Reusable UI components
  ├── layout/       # Layout components
  ├── sections/     # Page sections
  └── providers/    # Context providers
```

## 🔧 Extending the System

### Adding a New Component

1. Create component file: `components/ui/your-component.tsx`
2. Add TypeScript interface
3. Implement with Tailwind classes
4. Export from `components/index.ts`
5. Document usage

```tsx
// components/ui/badge.tsx
'use client';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${variants[variant]}`}>
      {children}
    </span>
  );
}
```

### Adding New Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  // Add new color
  brand: {
    50: '#...',
    500: '#...',
    900: '#...',
  }
}
```

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Docs](https://nextjs.org/docs)
- [Radix UI](https://www.radix-ui.com/) (for complex components)
- [Headless UI](https://headlessui.com/) (alternative primitives)

---

This design system is built to be:
- ✅ Scalable
- ✅ Maintainable  
- ✅ Accessible
- ✅ Performant
- ✅ Developer-friendly

Happy building! 🚀
