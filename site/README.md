# Component Gallery

Standard component gallery for **@borgtj/react**. This site showcases all components from the library in a single-page, sidebar-navigable layout.

## Structure

- **Sidebar**: Fixed left nav — Overview, Design Tokens, Button, Forms & Inputs, Data Display, Overlays.
- **Main**: Scrollable content with one section per category. Each section has a title, short description, and live demos in blocks.

## Scripts

```bash
pnpm dev      # Start dev server (Vite)
pnpm build    # Production build
pnpm preview  # Preview production build
```

## Adding components

1. Add a new entry to `src/config/nav.ts` (id + label).
2. Add a new `GallerySection` in `src/App.tsx` with the same `id`, and use `DemoBlock` for each demo.

No changes are required in the component library (`@borgtj/react`); the gallery only consumes it.
