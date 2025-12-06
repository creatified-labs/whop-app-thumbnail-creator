# Frosted Glass UI Design System

A complete, production-ready design system for building beautiful AI-powered applications with glassmorphism aesthetics.

## 🎨 Design Philosophy

- **Dark Theme First**: Optimized for dark backgrounds with purple/violet accents
- **Glassmorphism**: Frosted glass effects with backdrop blur and transparency
- **Modern Animations**: Smooth transitions, glows, and gradient shifts
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **TypeScript**: Fully typed components with proper interfaces

## 📦 Components

### FrostedButton

A versatile button component with multiple variants and states.

**Variants:**
- `primary` - Gradient purple button (default)
- `secondary` - Frosted glass button
- `ghost` - Transparent with hover effect
- `outline` - Border-only style
- `gradient` - Animated gradient background

**Sizes:** `sm`, `md`, `lg`, `xl`

**Props:**
- `loading` - Shows spinner and disables button
- `leftIcon` - Icon on the left side
- `rightIcon` - Icon on the right side

**Example:**
```tsx
import { FrostedButton } from "@/components/ui";
import { Sparkles } from "lucide-react";

<FrostedButton 
  variant="primary" 
  size="lg"
  leftIcon={<Sparkles className="w-4 h-4" />}
  loading={isLoading}
>
  Generate Thumbnail
</FrostedButton>
```

### FrostedCard

Card components with glassmorphism effects.

**Components:**
- `FrostedCard` - Main container
- `FrostedCardHeader` - Header section
- `FrostedCardTitle` - Title text
- `FrostedCardDescription` - Subtitle/description
- `FrostedCardBody` - Main content area
- `FrostedCardFooter` - Footer section
- `FrostedFeatureCard` - Special card with icon and hover effects

**Props:**
- `glow` - Adds purple glow effect
- `gradient` - Adds gradient overlay
- `hover` - Enable/disable hover effects (default: true)

**Example:**
```tsx
import { 
  FrostedCard, 
  FrostedCardHeader, 
  FrostedCardTitle,
  FrostedCardBody 
} from "@/components/ui";

<FrostedCard glow>
  <FrostedCardHeader>
    <FrostedCardTitle>Card Title</FrostedCardTitle>
  </FrostedCardHeader>
  <FrostedCardBody>
    <p>Card content goes here</p>
  </FrostedCardBody>
</FrostedCard>
```

**Feature Card Example:**
```tsx
import { FrostedFeatureCard } from "@/components/ui";
import { Zap } from "lucide-react";

<FrostedFeatureCard
  icon={<Zap className="w-6 h-6" />}
  title="Lightning Fast"
  description="Generate thumbnails in seconds"
  glow
/>
```

### FrostedInput

Form input components with glassmorphism styling.

**Components:**
- `FrostedInput` - Text input
- `FrostedTextarea` - Multi-line text input
- `FrostedSelect` - Dropdown select
- `FrostedLabel` - Form label

**Props:**
- `label` - Label text
- `error` - Error message (shows in red)
- `leftIcon` - Icon on the left (Input only)
- `rightIcon` - Icon on the right (Input only)

**Example:**
```tsx
import { FrostedInput, FrostedTextarea } from "@/components/ui";
import { Mail, Lock } from "lucide-react";

<FrostedInput
  label="Email"
  type="email"
  placeholder="Enter your email"
  leftIcon={<Mail className="w-5 h-5" />}
  error={errors.email}
/>

<FrostedTextarea
  label="Description"
  placeholder="Enter description..."
  rows={4}
/>
```

## 🎭 Utility Classes

### Glass Effects
```css
.glass              /* Basic frosted glass */
.glass-hover        /* Hover state for glass */
.glass-strong       /* Stronger glass effect */
.glass-subtle       /* Subtle glass effect */
```

### Gradient Text
```css
.gradient-text          /* Violet to purple */
.gradient-text-primary  /* Primary gradient */
.gradient-text-accent   /* Pink to violet */
```

### Gradient Backgrounds
```css
.gradient-primary    /* Violet to purple */
.gradient-secondary  /* Gray gradient */
.gradient-accent     /* Pink to violet */
```

### Glow Effects
```css
.glow           /* Purple glow */
.glow-hover     /* Glow on hover */
.glow-strong    /* Intense glow */
```

### Shadows
```css
.shadow-glass      /* Glass shadow */
.shadow-glass-lg   /* Large glass shadow */
.shadow-glass-xl   /* Extra large glass shadow */
```

### Animations
```css
.animate-shimmer        /* Shimmer effect */
.animate-pulse-glow     /* Pulsing glow */
.animate-float          /* Floating animation */
.animate-gradient-shift /* Gradient shift */
```

## 🎨 Color Palette

**Background:**
- Base: `gray-900` to `purple-900/20` gradient
- Glass: `white/5` with `backdrop-blur-xl`

**Borders:**
- Default: `white/10`
- Hover: `white/20`
- Strong: `white/15`

**Text:**
- Primary: `white`
- Muted: `white/60`
- Subtle: `white/40`

**Accents:**
- Primary: `violet-600` to `purple-600`
- Accent: `pink-500` via `purple-500` to `violet-500`

**Shadows:**
- Glass: `rgba(0, 0, 0, 0.37)`
- Glow: `rgba(139, 92, 246, 0.3)`

## 🚀 Usage

### Import Components
```tsx
// Individual imports
import { FrostedButton } from "@/components/ui/frosted-button";
import { FrostedCard } from "@/components/ui/frosted-card";
import { FrostedInput } from "@/components/ui/frosted-input";

// Or use the index file
import { 
  FrostedButton, 
  FrostedCard, 
  FrostedInput 
} from "@/components/ui";
```

### Use Utility Classes
```tsx
<div className="glass rounded-xl p-6 shadow-glass">
  <h1 className="gradient-text text-3xl font-bold">
    Hello World
  </h1>
  <p className="text-muted">
    This is a frosted glass container
  </p>
</div>
```

## 📱 Demo Page

Visit `/demo` to see all components in action with interactive examples.

## 🛠️ Tech Stack

- **Next.js 14** - App Router
- **TypeScript** - Full type safety
- **Tailwind CSS 4** - Styling
- **class-variance-authority** - Variant management
- **lucide-react** - Icons
- **clsx + tailwind-merge** - Class merging

## 🎯 Best Practices

1. **Always use the `cn()` utility** for merging classes
2. **Prefer composition** over creating new components
3. **Use semantic HTML** for accessibility
4. **Test with keyboard navigation**
5. **Keep animations subtle** for better UX
6. **Use TypeScript types** for all props

## 📝 Notes

- The CSS warnings about `@apply` and `@config` are expected and won't affect runtime
- All components use `forwardRef` for proper ref handling
- Components are fully compatible with React 19
- Dark theme is the primary focus, but components work in light mode too

## 🔧 Customization

### Modify Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --primary: 262 83% 58%;
  --accent: 262 83% 58%;
  /* ... */
}
```

### Extend Components
Use the `cn()` utility to add custom classes:
```tsx
<FrostedButton className="custom-class">
  Button
</FrostedButton>
```

### Create Variants
Use `class-variance-authority` for new variants:
```tsx
import { cva } from "class-variance-authority";

const myVariants = cva("base-classes", {
  variants: {
    // Your variants
  }
});
```

## 📄 License

Part of the Whop App Thumbnail Creator project.
