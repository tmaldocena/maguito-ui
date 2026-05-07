# MaguitoUI ✨

> **66 componentes React** con estética Neo-Brutalista y toques orgánicos ("Bubbly").

[![npm version](https://img.shields.io/npm/v/maguitoui.svg?style=for-the-badge&color=F18652)](https://www.npmjs.com/package/maguitoui)
[![npm downloads](https://img.shields.io/npm/dm/maguitoui?style=for-the-badge&color=79BCE8)](https://www.npmjs.com/package/maguitoui)
[![license](https://img.shields.io/npm/l/maguitoui?style=for-the-badge&color=A2D149)](LICENSE)

Librería de componentes diseñada para que tus proyectos tengan **personalidad propia**. Bordes sólidos, sombras desplazadas, curvas orgánicas y un sistema de temas totalmente personalizable.

---

## Características

- **66 componentes** listos para usar: botones, cards, inputs, tablas, modales, timelines, carousels y más
- **100% personalizable** con variables CSS: colores, bordes, sombras, tipografías
- **4 temas incluidos**: claro, oscuro, cyber y pastel
- **TypeScript** completo con tipos y autocompletado
- **Tailwind CSS** preset oficial para integración instantánea
- **Zero runtime overhead**: componentes ligeros y optimizados
- **MIT License**: libre para uso personal y comercial

## Instalación Rápida

```bash
npm install maguitoui lucide-react
```

```tsx
import { Button, Card, Input } from 'maguitoui';
import 'maguitoui/styles';

<Card>
  <Input label="Email" placeholder="tu@email.com" />
  <Button variant="primary">Enviar</Button>
</Card>
```

## Documentación Interactiva

Este repositorio incluye un sitio de documentación con demos de todos los componentes. Podés correrlo localmente:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La documentación estará disponible en `http://localhost:5173` con:
- Demos interactivas de cada componente
- Código copiable con un click
- Personalización de temas en tiempo real
- Vista preview + código para cada showcase

## Estructura del Proyecto

```
maguitoui/
├── components/
│   ├── MaguitoUI.tsx    # 66 componentes de la librería
│   └── Layout.tsx        # Layout de la documentación
├── pages/
│   ├── Home.tsx          # Landing page
│   ├── Intro.tsx         # Página de introducción
│   ├── ComponentsDoc.tsx # Galería de componentes
│   ├── InstallationDoc.tsx
│   ├── ThemesDoc.tsx     # Personalización de temas
│   └── PublishingDoc.tsx
├── lib.ts                # Entry point de la librería
├── types.ts              # Tipos TypeScript
├── MaguitoStyles.css     # Variables CSS base
├── tailwind-preset.js    # Preset oficial de Tailwind
└── package.json
```

## Variables CSS

Todas las variables de diseño son personalizables:

| Variable | Default | Descripción |
|---|---|---|
| `--maguito-primary` | `#F18652` | Color principal (naranja) |
| `--maguito-secondary` | `#79BCE8` | Color secundario (azul) |
| `--maguito-accent` | `#FDCB63` | Color de acento (amarillo) |
| `--maguito-bg` | `#FEFEFC` | Color de fondo |
| `--maguito-text` | `#2C2C2C` | Color de texto |
| `--maguito-radius-lg` | `40px` | Radio grande |
| `--maguito-radius-md` | `16px` | Radio medio |
| `--maguito-stroke` | `3px` | Grosor de borde |
| `--maguito-shadow-depth` | `6px` | Profundidad de sombra |

## Publicar en npm

Si querés contribuir o publicar tu propia versión:

```bash
npm run build:lib    # Compilar la librería
npm version patch    # Incrementar versión
npm publish          # Publicar a npm
```

El script `prepublishOnly` se encarga del build automáticamente.

## Roadmap

- [ ] Más variantes de componentes
- [ ] Soporte para React Server Components
- [ ] Modo animaciones reducidas (prefers-reduced-motion)
- [ ] Pruebas unitarias con Vitest
- [ ] Storybook para visual testing

## Licencia

[MIT](LICENSE) — Libre para uso personal y comercial.

---

<p align="center">
  Diseñado y desarrollado con magia por <strong>Maguito Studio</strong>
</p>
