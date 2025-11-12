# VALORANT Landing Page

A modern, animated landing page inspired by VALORANT's design language, built with React and GSAP.

## Overview

This project is a single-page application featuring smooth scroll animations, character showcases, and interactive elements that capture the aesthetic of VALORANT.

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and development server
- **GSAP** - Animation library with ScrollTrigger and SplitText plugins
- **Framer Motion** - React animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lenis** - Smooth scroll library

## Project Structure

```
public/
├── fonts/
│ ├── DINNextW1G.otf
│ ├── FF-Mark-Medium.otf
│ └── Tungsten-Bold.ttf
├── videos/

src/
├── assets/ # Images, SVGs, and fonts
│ ├── PNGs/
│ ├── Svg/
│ └── fonts/
├── components/ # Modular React components
│ ├── About/
│ ├── Cypher/
│ ├── Hero/
│ ├── Navbar/
│ └── Preloader/
├── constants/ # Config and shared data
│ └── colors.js
├── App.jsx
└── index.css
```

## Key Features

- Interactive User experience
- Smooth animations

### Scroll Animations
The Cypher section uses ScrollTrigger with:
- Pinning for immersive storytelling
- Scrub-based animations tied to scroll position
- Sequential text reveals and element transitions
- Dynamic zoom effect on scroll completion

## Fonts

Custom fonts are loaded via @font-face:
- **Tungsten Bold** - Display headings
- **DIN Next W1G** - UI elements and buttons
- **FF Mark Medium** - Body text

## Color System

Colors are defined in CSS variables and JavaScript constants:
- `--nav-background` - Dark navigation background
- `--primary-background` - Light beige for text and backgrounds
- `--secondary-background` - Red accent color

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

The project is configured for Vercel deployment:
- Root directory: `./`
- Build command: `npm run build`
- Output directory: `dist`

## Browser Support

Modern browsers with support for:
- CSS Grid and Flexbox
- ES6+ JavaScript
- CSS Custom Properties
- Intersection Observer API

## Performance Considerations

- Video files use WebM format with MP4 fallback
- Fonts are preloaded for optimal rendering
- Animations use GPU-accelerated properties (transform, opacity)
- Scroll animations are optimized with GSAP's scrub feature
- Used Lenis for smooth scroll

## License

This is a portfolio/educational project inspired by VALORANT. All VALORANT-related assets and trademarks belong to Riot Games.
