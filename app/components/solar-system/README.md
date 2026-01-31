# Solar System Component

An interactive, animated solar system UI component for Next.js, perfect for developer portfolios and tech stack visualizations.

## Features

- 🌌 **Deep space background** with twinkling star field
- 🪐 **10 orbiting planets** representing different technologies
- 🎞️ **Smooth Framer Motion animations** with orbits at varying speeds
- ⏯️ **Play/pause control** via central core button
- 💫 **Hover tooltips** showing technology names
- 📱 **Fully responsive** - scales from mobile to desktop
- ⚡ **Performance optimized** with useCallback and GPU-friendly transforms

## Technologies Displayed

| Planet | Technology | Color |
|--------|-----------|-------|
| 🔵 | React | Cyan |
| 🔷 | TypeScript | Blue |
| ⚪ | Next.js | White |
| 🟡 | JavaScript | Yellow |
| 🟢 | Node.js | Green |
| 🔵 | Tailwind CSS | Teal |
| 🔵 | PostgreSQL | Indigo |
| 🔵 | Docker | Blue |
| 🔴 | Git | Orange/Red |
| 🔵 | Flutter | Dark Blue |

## Usage

```tsx
import { SolarSystem } from "@/app/components/solar-system";

export default function Home() {
  return (
    <main>
      <SolarSystem />
    </main>
  );
}
```

## Component Structure

```
solar-system/
├── index.ts              # Barrel exports
├── types.ts              # TypeScript interfaces
├── data.tsx              # Planet configuration data
├── SolarSystem.tsx       # Main orchestrator component
├── Planet.tsx            # Individual planet with orbit animation
├── Orbit.tsx             # Orbit ring visual
├── CenterCore.tsx        # Central play/pause control
├── StarBackground.tsx    # Animated star field
├── InfoPanel.tsx         # Technology detail popup
├── HoverTooltip.tsx      # Floating hover label
├── icons/
│   └── TechIcons.tsx     # SVG icons for all technologies
└── hooks/
    └── useOrbitAnimation.ts  # Animation state management
```

## Customization

### Adding/Modifying Planets

Edit [data.tsx](app/components/solar-system/data.tsx):

```tsx
{
  id: "your-tech",
  name: "Your Technology",
  description: "Brief description",
  color: "#hexcolor",
  icon: <YourIcon className="w-full h-full" />,
  orbitRadius: 300,        // Distance from center (px)
  speed: 50,               // Seconds per full rotation
  direction: "clockwise",  // or "counter-clockwise"
  size: 48,                // Planet diameter (px)
  initialAngle: 90,        // Starting position (degrees)
}
```

### Styling

The component uses:
- **Tailwind CSS** for utility classes
- **Inline styles** for dynamic colors (required for planet-specific theming)
- **Framer Motion** for all animations

### Performance Notes

- Stars are generated deterministically to avoid hydration mismatches
- Animations use `transform` and `opacity` only (GPU-accelerated)
- `useCallback` prevents unnecessary re-renders
- Responsive scaling uses CSS transforms, not recalculating layout

## Dependencies

```json
{
  "framer-motion": "^11.x",
  "clsx": "^2.x",
  "tailwind-merge": "^2.x"
}
```

## Browser Support

Works in all modern browsers that support:
- CSS Grid/Flexbox
- CSS Transforms
- requestAnimationFrame
