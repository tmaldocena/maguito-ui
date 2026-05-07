# MaguitoUI ✨

> **66 componentes React** con estética Neo-Brutalista y toques orgánicos ("Bubbly").

[![npm version](https://img.shields.io/npm/v/maguitoui.svg?style=for-the-badge&color=F18652)](https://www.npmjs.com/package/maguitoui)
[![npm downloads](https://img.shields.io/npm/dm/maguitoui?style=for-the-badge&color=79BCE8)](https://www.npmjs.com/package/maguitoui)
[![license](https://img.shields.io/npm/l/maguitoui?style=for-the-badge&color=A2D149)](LICENSE)

Librería de componentes diseñada para que tus proyectos tengan **personalidad propia**. Bordes sólidos, sombras desplazadas, curvas orgánicas y un sistema de temas totalmente personalizable.

<p align="center">
  <strong>Diseñado con 💜 por <a href="https://github.com/tmaldocena">Maguito Studio</a></strong>
</p>

---

## Instalación

```bash
npm install maguitoui lucide-react
```

## Requisitos

| Dependencia | Versión | Nota |
|---|---|---|
| **React** | `>= 18.0.0` | peer dependency |
| **React DOM** | `>= 18.0.0` | peer dependency |
| **Tailwind CSS** | `>= 3.0.0` | peer dependency |
| **Lucide React** | `>= 0.200.0` | peer dependency (iconos) |

## Configuración

### 1. Tailwind Preset

Agrega el preset oficial a tu `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('maguitoui/preset')
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/maguitoui/**/*.{js,ts,tsx}",
  ],
}
```

Esto te da acceso automático a colores (`maguito-orange`, `maguito-blue`, etc.), radios (`rounded-maguito-lg`) y fuentes del sistema de diseño.

### 2. Estilos Globales

Importa las variables CSS en tu punto de entrada (`main.tsx`, `App.tsx`, etc.):

```tsx
import 'maguitoui/styles';
```

### 3. ¡Listo!

```tsx
import { Button, Card, Input, Badge } from 'maguitoui';
import 'maguitoui/styles';

function MiComponente() {
  return (
    <Card className="p-6" shadowColor="orange">
      <Badge variant="primary">Nuevo</Badge>
      <h2 className="text-2xl font-bold mt-4">Hola MaguitoUI</h2>
      <Input label="Email" placeholder="tu@email.com" className="mt-4" />
      <Button variant="primary" className="mt-4">Enviar</Button>
    </Card>
  );
}
```

## Variables CSS Personalizables

Puedes sobrescribir las variables de diseño en tu CSS global para adaptar MaguitoUI a tu marca:

```css
:root {
  /* Colores */
  --maguito-primary: #F18652;    /* Naranja principal */
  --maguito-secondary: #79BCE8;  /* Azul secundario */
  --maguito-accent: #FDCB63;     /* Amarillo acento */
  --maguito-bg: #FEFEFC;         /* Fondo */
  --maguito-text: #2C2C2C;       /* Texto principal */
  --maguito-danger: #E95B6F;     /* Rojo error */
  --maguito-success: #A2D149;    /* Verde éxito */
  --maguito-warning: #FBBF24;    /* Amarillo alerta */
  --maguito-info: #67E8F9;       /* Cyan info */

  /* Geometría */
  --maguito-radius-lg: 40px;     /* Radio grande (cards, modales) */
  --maguito-radius-md: 16px;     /* Radio medio (botones, inputs) */
  --maguito-radius-sm: 8px;      /* Radio pequeño (badges, chips) */

  /* Trazos y sombras */
  --maguito-stroke: 3px;         /* Grosor de borde */
  --maguito-shadow-depth: 6px;   /* Profundidad de sombra desplazada */

  /* Tipografías */
  --maguito-font-body: 'Plus Jakarta Sans', sans-serif;
  --maguito-font-display: 'Fredoka', sans-serif;
}
```

Cada variable tiene un valor por defecto, así que solo necesitás sobrescribir las que querés cambiar.

## Componentes

### 🎯 Acciones
`Button` · `FAB` · `Swap` · `Dropdown` · `DropdownItem`

### 📍 Navegación
`Navbar` · `Dock` · `DockItem` · `Breadcrumbs` · `Pagination` · `Tabs` · `Steps` · `Link`

### 📦 Cards & Layout
`Card` · `Fieldset` · `Filter` · `Drawer` · `Stack` · `Indicator` · `Artboard`

### 📝 Formularios
`Input` · `Textarea` · `Checkbox` · `Radio` · `Toggle` · `Select` · `Slider` · `Rating` · `FileInput` · `Label` · `Validator` · `Join` · `Kbd`

### 💬 Feedback
`Spinner` · `LoadingDots` · `Progress` · `RadialProgress` · `Skeleton` · `Toast` · `Tooltip` · `Alert` · `Badge` · `Status`

### 🎨 Contenido
`Avatar` · `Divider` · `Stat` · `Table` · `TableHead` · `TableBody` · `TableRow` · `TableHeader` · `TableCell` · `Timeline` · `List` · `ChatBubble` · `Carousel` · `Hero` · `Mask` · `Diff` · `Hover3DCard`

### 🔧 Interactivos
`Accordion` · `Modal` · `Calendar` · `Countdown` · `ThemeController`

### ⚡ Utilities
`cn(...classes)` — utilidad para combinar clases condicionales

## Documentación Completa

Explorá los 66 componentes con demos interactivas, código copiable y personalización en tiempo real:

**👉 [Ver documentación oficial](https://ui.maguitostudio.com.ar)**

## Temas Incluidos

MaguitoUI viene con 4 presets de temas que podés usar o personalizar:

| Tema | Estilo |
|---|---|
| **Mago de Luz** | Cálido, el estilo original de Maguito Studio |
| **Hechicero Oscuro** | Alto contraste para sesiones nocturnas |
| **Cyber Mage** | Energía neón, vibras futuristas |
| **Pastel Pixie** | Suavidad máxima para interfaces relajadas |

## Licencia

[MIT License](LICENSE) — Libre para uso personal y comercial.

---

<p align="center">
  Diseñado y desarrollado con magia por <strong>Maguito Studio</strong>
</p>
