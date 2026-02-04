# KianGreenUp Design Language Skill

> **Purpose**: This document defines the design language, visual patterns, and UI specifications for the KianGreenUp landing website. Use this as a reference when refactoring or modifying the UI to maintain visual consistency.

---

## 1. Tech Stack

- **Framework**: React 19 with TanStack Router
- **Styling**: Tailwind CSS v4 (pure)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

---

## 2. Color Palette

### Primary Colors (Green - Brand Identity)
| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | `#f0fdf4` | Light backgrounds, hover states |
| `primary-100` | `#dcfce7` | Badges, pills, subtle backgrounds |
| `primary-200` | `#bbf7d0` | Decorative elements |
| `primary-300` | `#86efac` | Gradient components |
| `primary-400` | `#4ade80` | Accent highlights |
| `primary-500` | `#22c55e` | Focus rings, interactive states |
| `primary-600` | `#16a34a` | **Primary buttons**, CTAs, links |
| `primary-700` | `#15803d` | Button hover states |
| `primary-800` | `#166534` | Dark accents |
| `primary-900` | `#14532d` | Deep green text |

### Secondary Colors (Blue - Complementary)
| Usage | Classes |
|-------|---------|
| Gradient partner | `blue-50` to `blue-600` |
| CTA gradients | `from-blue-600 to-green-600` |
| Icon accents | `text-blue-600` |
| Background accents | `bg-blue-50`, `bg-blue-100` |

### Neutral Colors (Gray Scale)
| Token | Usage |
|-------|-------|
| `gray-50` | Section backgrounds |
| `gray-100` | Card borders, dividers |
| `gray-200` | Border lines |
| `gray-300` | Input borders, disabled states |
| `gray-400` | Partner logos, muted text |
| `gray-600` | Body text, descriptions |
| `gray-700` | Secondary text, navigation |
| `gray-800` | Dark gradients |
| `gray-900` | Headings, primary text, dark sections |
| `white` | Card backgrounds, text on dark |

### Semantic Colors
| Color | Usage |
|-------|-------|
| `red-500` / `red-600` | Error states, validation |
| `yellow-400` | Star ratings (filled) |
| `orange-600` | Clock/time icons |
| `purple-600` | Address/location icons, process icons |

---

## 3. Typography

### Font Families
```css
--font-sans: "Inter var, system-ui, sans-serif"   /* Body text */
--font-heading: "Poppins, system-ui, sans-serif"  /* Headings */
--font-mono: "Fira Code, monospace"               /* Code blocks */
```

### Heading Scale
| Level | Classes | Usage |
|-------|---------|-------|
| H1 | `text-4xl sm:text-5xl lg:text-6xl font-bold` | Page titles |
| H2 | `text-3xl sm:text-4xl font-bold` | Section titles |
| H3 | `text-xl font-semibold` or `text-2xl font-bold` | Card titles, subsections |
| H4 | `text-sm font-semibold uppercase tracking-wide` | Labels, categories |

### Body Text Scale
| Size | Classes | Usage |
|------|---------|-------|
| Large | `text-xl` or `text-lg` | Subtitles, lead paragraphs |
| Base | `text-base` | Body content |
| Small | `text-sm` | Labels, metadata, captions |
| XSmall | `text-xs` | Fine print, supplementary info |

### Text Colors
| Element | Classes |
|---------|---------|
| Primary headings | `text-gray-900` |
| Body text | `text-gray-700` or `text-gray-600` |
| Muted/secondary | `text-gray-500` or `text-gray-400` |
| Links | `text-primary-600 hover:text-primary-700` or `text-green-600` |
| On dark backgrounds | `text-white`, `text-green-100`, `text-gray-300` |
| Error text | `text-red-600` or `text-red-500` |

---

## 4. Spacing System

### Section Spacing
- **Section padding**: `py-20 px-6` (vertical 80px, horizontal 24px)
- **Container max-width**: `max-w-7xl` (1280px) or `max-w-6xl`, `max-w-4xl`, `max-w-3xl`
- **Container padding**: `px-4 sm:px-6 lg:px-8`

### Component Spacing
| Context | Pattern |
|---------|---------|
| Section title margin | `mb-12` or `mb-16` |
| Card padding | `p-6` or `p-8` |
| Grid gaps | `gap-6`, `gap-8`, `gap-12` |
| Element spacing | `mb-4`, `mb-6`, `mb-8` |
| Icon spacing | `gap-2`, `gap-3`, `gap-4` |
| Button icon margin | `mr-2` or `ml-2` |

### Layout Patterns
| Pattern | Classes |
|---------|---------|
| Two-column grid | `grid md:grid-cols-2 gap-8` or `gap-12` |
| Three-column grid | `grid md:grid-cols-3 gap-8` |
| Four-column grid | `grid sm:grid-cols-2 lg:grid-cols-4 gap-6` |
| Content + sidebar | `grid lg:grid-cols-3 gap-12` (2:1 ratio) |
| Centered content | `max-w-Xxl mx-auto text-center` |

---

## 5. Components

### Buttons
**Variants:**
| Variant | Classes |
|---------|---------|
| Primary | `bg-primary-600 text-white hover:bg-primary-700` |
| Secondary | `bg-gray-200 text-gray-900 hover:bg-gray-300` |
| Outline | `border-2 border-primary-600 text-primary-600 hover:bg-primary-50` |
| Ghost | `text-gray-700 hover:bg-gray-100` |

**Sizes:**
| Size | Classes |
|------|---------|
| Small | `px-4 py-2 text-sm` |
| Medium | `px-6 py-3 text-base` |
| Large | `px-8 py-4 text-lg` |

**Shared styles:**
```
inline-flex items-center justify-center rounded-lg font-medium transition-colors
focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
disabled:opacity-50 disabled:cursor-not-allowed
```

**Animation:** `whileHover={{ scale: 1.02 }}` `whileTap={{ scale: 0.98 }}`

### Cards
```
bg-white rounded-xl p-6 shadow-sm border border-gray-100
transition-shadow duration-300
```
**Hover effect:** `y: -5, boxShadow: '0 10px 40px rgba(0,0,0,0.1)'`

### Inputs
```
w-full px-4 py-2 border border-gray-300 rounded-lg
focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
transition-colors
```
**Error state:** `border-red-500 focus:ring-red-500`

### Badges/Pills
```
inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 
rounded-full text-sm font-medium
```
Alternative: `px-3 py-1` for smaller badges

### Icon Containers
```
p-3 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl
```
or: `p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl`

---

## 6. Gradients

### Background Gradients
| Pattern | Classes |
|---------|---------|
| Hero/Page backgrounds | `bg-gradient-to-br from-green-50 via-white to-blue-50` |
| Alternative hero | `bg-gradient-to-br from-blue-50 via-white to-green-50` |
| Stats section | `bg-gradient-to-br from-gray-50 to-blue-50` |

### CTA/Dark Gradients
| Pattern | Classes |
|---------|---------|
| Primary CTA | `bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900` |
| Secondary CTA | `bg-gradient-to-r from-green-600 to-blue-600` |
| Green section | `bg-gradient-to-br from-green-600 via-green-700 to-green-800` |
| Blue-Green CTA | `bg-gradient-to-r from-blue-600 to-green-600` |

### Element Gradients
| Pattern | Classes |
|---------|---------|
| Logo/badge | `bg-gradient-to-br from-green-500 to-blue-500` |
| Icon containers | `bg-gradient-to-br from-green-100 to-blue-100` |
| Timeline markers | `bg-gradient-to-br from-green-600 to-blue-600` |
| Header CTA button | `bg-gradient-to-r from-green-600 to-blue-600` |

---

## 7. Shadows & Effects

### Shadow Scale
| Level | Classes | Usage |
|-------|---------|-------|
| Subtle | `shadow-sm` | Cards, default state |
| Medium | `shadow-md` | Buttons, elevated elements |
| Large | `shadow-lg` | CTA buttons, header |
| Hover | `shadow-xl` or custom `0 10px 40px rgba(0,0,0,0.1)` | Card hover states |

### Glass Effect
```
bg-white/30 backdrop-blur-md      /* Light glass */
bg-black/30 backdrop-blur-md      /* Dark glass */
bg-white/10 backdrop-blur-sm      /* Subtle glass on dark */
bg-white/95 backdrop-blur-sm      /* Header */
```

### Background Patterns
Dot pattern for dark sections:
```css
backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
backgroundSize: '40px 40px',
opacity: 0.1
```

---

## 8. Animations

### Framer Motion Animations

**FadeIn Component:**
```javascript
initial: { opacity: 0, y: 20 }      // or x: 20/-20 for left/right
whileInView: { opacity: 1, y: 0 }
viewport: { once: true, margin: '-50px' }
transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.55, 1.4] }
```
Directions: `up`, `down`, `left`, `right`

**ScaleIn Component:**
```javascript
initial: { opacity: 0, scale: 0.9 }
whileInView: { opacity: 1, scale: 1 }
viewport: { once: true }
transition: { duration: 0.3, delay, ease: 'easeOut' }
```

**Button Interactions:**
```javascript
whileHover: { scale: 1.02 }
whileTap: { scale: 0.98 }
```

**Card Hover:**
```javascript
whileHover: { y: -5, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }
transition: { duration: 0.3 }
```

**Floating Animation (Hero):**
```javascript
animate: { y: [0, -20, 0] }
transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
```

**Background Blob Animation:**
```javascript
animate: {
  scale: [1, 1.2, 1],
  opacity: [0.3, 0.5, 0.3],
  x: [0, 50, 0],
  y: [0, 30, 0]
}
transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
```

**Staggered Entry:**
Apply `delay: index * 0.1` for grid items

### CSS Animations (globals.css)
```css
--animate-fadeIn: fadeIn 0.5s ease-in-out;
--animate-slideUp: slideUp 0.5s ease-out;
--animate-slideDown: slideDown 0.5s ease-out;
--animate-scaleIn: scaleIn 0.3s ease-out;
--animate-float: float 3s ease-in-out infinite;
```

### Micro-interactions
- **Link underline:** `w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300`
- **Arrow slide:** `group-hover:translate-x-1 transition-transform`
- **Icon translate:** `group-hover:gap-2 transition-all`

---

## 9. Layout Patterns

### Header
- Fixed position: `fixed top-0 left-0 right-0 z-50`
- Background: `bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm`
- Height: `h-16`
- Entry animation: slides down from `y: -100`

### Page Structure
```
pt-16             /* Account for fixed header */
min-h-screen
bg-white
```

### Section Pattern
```jsx
<section className="py-20 bg-{color}">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-{size} mx-auto">
      {/* Optional centered title block */}
      <div className="text-center mb-16">
        <h2>...</h2>
        <p>...</p>
      </div>
      {/* Content */}
    </div>
  </div>
</section>
```

### Content Width Hierarchy
- Full width grids: `max-w-6xl` or `max-w-7xl`
- Content sections: `max-w-4xl`
- Centered CTAs: `max-w-3xl`
- Form content: `max-w-2xl`

---

## 10. Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | 0px+ | Mobile-first base |
| `sm:` | 640px+ | Small tablets |
| `md:` | 768px+ | Tablets, 2-column layouts |
| `lg:` | 1024px+ | Desktop, 3-4 column layouts |

### Common Patterns
```
text-4xl sm:text-5xl lg:text-6xl          /* Responsive headings */
grid sm:grid-cols-2 lg:grid-cols-3        /* Responsive grids */
flex-col sm:flex-row                       /* Stack to row */
hidden lg:flex                             /* Desktop-only elements */
lg:hidden                                  /* Mobile-only elements */
px-4 sm:px-6 lg:px-8                      /* Responsive padding */
```

---

## 11. Icon Usage

### Icon Library: Lucide React
Common icons used:
- **Navigation**: `Menu`, `X`, `ArrowRight`, `ArrowLeft`
- **Actions**: `Phone`, `Mail`, `Send`, `Download`
- **Features**: `Leaf`, `Recycle`, `TrendingUp`, `TrendingDown`, `Zap`
- **Industry**: `Car`, `Cpu`, `Factory`, `ShoppingBag`, `Building`, `Package`
- **UI**: `CheckCircle`, `Quote`, `Star`, `Target`, `Lightbulb`, `Users`, `Award`
- **Info**: `MapPin`, `Clock`

### Icon Sizing
| Context | Size |
|---------|------|
| Inline with text | `w-4 h-4` |
| Button icons | `w-5 h-5` |
| Card icons | `w-6 h-6` |
| Feature icons | `w-8 h-8` |
| Large feature icons | `w-10 h-10` or `w-12 h-12` |
| Hero icons | `w-32 h-32` |

---

## 12. State Patterns

### Interactive States
| State | Pattern |
|-------|---------|
| Hover | Scale up slightly, color intensify, shadow increase |
| Active/Tap | Scale down slightly |
| Focus | Ring outline with offset |
| Disabled | `opacity-50 cursor-not-allowed` |
| Loading | Spinner with `animate-spin`, "Loading..." text |

### Form Validation
| State | Pattern |
|-------|---------|
| Default | `border-gray-300` |
| Focus | `ring-2 ring-primary-500 border-transparent` |
| Error | `border-red-500 focus:ring-red-500` |
| Success message | `bg-green-50 border-green-200 text-green-800` |

---

## 13. Z-Index Scale

| Level | Value | Usage |
|-------|-------|-------|
| Base | 0 | Default content |
| Elevated | 10 | Floating elements, badges |
| Header | 50 | Fixed header |
| Modal/Overlay | Would be higher if needed |

---

## 14. Key Design Principles

1. **Clean & Modern**: White backgrounds with subtle gray tones, minimal visual clutter
2. **Green-Blue Gradient Identity**: Primary brand colors create eco-friendly, professional feel
3. **Generous Whitespace**: Sections use `py-20`, cards use `p-6+`, consistent gaps
4. **Soft Edges**: `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`
5. **Subtle Depth**: Light shadows, hover elevation, glass effects
6. **Smooth Interactions**: 300ms transitions, spring-like animations
7. **Progressive Disclosure**: Staggered animations guide eye through content
8. **Responsive First**: Mobile layouts stack, desktop layouts expand horizontally
9. **Accessibility**: Focus rings, semantic colors, sufficient contrast
10. **Consistency**: Repeated patterns across sections (title + subtitle + content)

---

## 15. DaisyUI Migration Notes

When migrating to DaisyUI, map these patterns:

| Current Pattern | DaisyUI Equivalent |
|-----------------|-------------------|
| Button variants | `btn`, `btn-primary`, `btn-ghost`, `btn-outline` |
| Cards | `card`, `card-body` |
| Inputs | `input`, `input-bordered` |
| Badges | `badge`, `badge-success` |
| Form groups | `form-control`, `label` |
| Grid layouts | Keep Tailwind grid system |
| Colors | Define theme colors in DaisyUI config |

**Important:** Preserve custom gradients, animations, and spacing patterns that aren't covered by DaisyUI components.
