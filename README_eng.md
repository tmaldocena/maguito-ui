# MaguitoUI ✨

> **66+ React components** with Neo-Brutalist aesthetics and organic "Bubbly" touches.

[![npm version](https://img.shields.io/npm/v/maguitoui.svg?style=for-the-badge&color=F18652)](https://www.npmjs.com/package/maguitoui)
[![npm downloads](https://img.shields.io/npm/dm/maguitoui?style=for-the-badge&color=79BCE8)](https://www.npmjs.com/package/maguitoui)
[![license](https://img.shields.io/npm/l/maguitoui?style=for-the-badge&color=A2D149)](LICENSE)

A component library designed to give your projects **real personality**. Bold borders, offset shadows, organic curves, and a fully customizable theming system.

<p align="center">
  <strong>Designed with 💜 by <a href="https://github.com/tmaldocena">Maguito Studio</a></strong>
</p>

**[📖 Full Documentation](https://ui.maguitostudio.com.ar)** · **[🇪🇸 README en Español](README.md)**

---

## Installation

```bash
npm install maguitoui lucide-react
```

## Requirements

- **Node.js** >= 18
- **npm** >= 9

### Project Structure

## Requirements

| Dependency | Version | Note |
|---|---|---|
| **React** | `>= 18.0.0` | peer dependency |
| **React DOM** | `>= 18.0.0` | peer dependency |
| **Tailwind CSS** | `>= 3.0.0` | peer dependency |
| **Lucide React** | `>= 0.200.0` | peer dependency (icons) |

## Setup

### 1. Tailwind Preset

Add the official preset to your `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('maguitoui/preset')
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/maguitoui/**/*.{js,ts,jsx,tsx}",
  ],
}
```

This gives you instant access to colors (`maguito-orange`, `maguito-blue`, etc.), radii (`rounded-maguito-lg`), and fonts from the design system.

### 2. Global Styles

Import the CSS variables in your entry point (`main.tsx`, `App.tsx`, etc.):

```tsx
import 'maguitoui/styles';
```

### 3. You're ready!

```tsx
import { Button, Card, Input, Badge } from 'maguitoui';
import 'maguitoui/styles';

function MyComponent() {
  return (
    <Card className="p-6" shadowColor="orange">
      <Badge variant="primary">New</Badge>
      <h2 className="text-2xl font-bold mt-4">Hello MaguitoUI</h2>
      <Input label="Email" placeholder="you@email.com" className="mt-4" />
      <Button variant="primary" className="mt-4">Submit</Button>
    </Card>
  );
}
```

## Customizable CSS Variables

Override design variables in your global CSS to adapt MaguitoUI to your brand:

```css
:root {
  /* Colors */
  --maguito-primary: #F18652;    /* Main orange */
  --maguito-secondary: #79BCE8;  /* Secondary blue */
  --maguito-accent: #FDCB63;     /* Yellow accent */
  --maguito-bg: #FEFEFC;         /* Background */
  --maguito-text: #2C2C2C;       /* Main text */
  --maguito-danger: #E95B6F;     /* Red error */
  --maguito-success: #A2D149;    /* Green success */
  --maguito-warning: #FBBF24;    /* Yellow warning */
  --maguito-info: #67E8F9;       /* Cyan info */

  /* Geometry */
  --maguito-radius-lg: 40px;     /* Large radius (cards, modals) */
  --maguito-radius-md: 16px;     /* Medium radius (buttons, inputs) */
  --maguito-radius-sm: 8px;      /* Small radius (badges, chips) */

  /* Strokes & Shadows */
  --maguito-stroke: 3px;         /* Border width */
  --maguito-shadow-depth: 6px;   /* Offset shadow depth */

  /* Typography */
  --maguito-font-body: 'Plus Jakarta Sans', sans-serif;
  --maguito-font-display: 'Fredoka', sans-serif;
}
```

Every variable has a default value, so you only need to override the ones you want to change.

## Components

### 🎯 Actions
`Button` · `FAB` · `Swap` · `Dropdown` · `DropdownItem`

### 📍 Navigation
`Navbar` · `Dock` · `DockItem` · `Breadcrumbs` · `Pagination` · `Tabs` · `Steps` · `Link`

### 📦 Cards & Layout
`Card` · `Fieldset` · `Filter` · `Drawer` · `Stack` · `Indicator` · `Artboard`

### 📝 Forms
`Input` · `Textarea` · `Checkbox` · `Radio` · `Toggle` · `Select` · `Slider` · `Rating` · `FileInput` · `Label` · `Validator` · `Join` · `Kbd`

### 💬 Feedback
`Spinner` · `LoadingDots` · `Progress` · `RadialProgress` · `Skeleton` · `Toast` · `Tooltip` · `Alert` · `Badge` · `Status`

### 🎨 Content
`Avatar` · `Divider` · `Stat` · `Table` · `TableHead` · `TableBody` · `TableRow` · `TableHeader` · `TableCell` · `Timeline` · `List` · `ChatBubble` · `Carousel` · `Hero` · `Mask` · `Diff` · `Hover3DCard`

### 🔧 Interactive
`Accordion` · `Modal` · `Calendar` · `Countdown` · `ThemeController`

### ⚡ Utilities
`cn(...classes)` — utility for combining conditional classes

## Included Themes

MaguitoUI comes with 4 theme presets you can use or customize:

| Theme | Style |
|---|---|
| **Mago de Luz** | Warm, the original Maguito Studio style |
| **Hechicero Oscuro** | High contrast for night sessions |
| **Cyber Mage** | Neon energy, futuristic vibes |
| **Pastel Pixie** | Maximum softness for relaxed interfaces |

## License

[MIT License](LICENSE) — Free for personal and commercial use.

---

<p align="center">
  Designed and developed with magic by <strong>Maguito Studio</strong>
</p>
