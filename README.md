# MaguitoUI

> Librería de componentes React con estética Neo-Brutalista y toques orgánicos ("Bubbly").

[![npm version](https://img.shields.io/npm/v/maguitoui.svg?style=for-the-badge&color=F18652)](https://www.npmjs.com/package/maguitoui)
[![npm downloads](https://img.shields.io/npm/dm/maguitoui?style=for-the-badge&color=79BCE8)](https://www.npmjs.com/package/maguitoui)
[![license](https://img.shields.io/npm/l/maguitoui?style=for-the-badge&color=A2D149)](LICENSE)

**Documentación oficial:** [ui.maguitostudio.com.ar](https://ui.maguitostudio.com.ar)

---

## Desarrollo Local

### Requisitos

- **Node.js** >= 18
- **npm** >= 9

### Instalación

```bash
npm install
```

### Estructura del Proyecto

```
maguito-ui/
├── components/          # Componentes de la UI de documentación
│   └── MaguitoUI.tsx    # Fuente de los 66 componentes de la librería
├── pages/               # Páginas de la documentación (Vite + React)
├── lib.ts               # Entry point para tsup (exporta todos los componentes)
├── tailwind-preset.js   # Preset oficial de Tailwind CSS
├── MaguitoStyles.css    # Variables CSS y estilos globales
├── types.ts             # Tipos TypeScript compartidos
└── package.json         # Configuración del paquete npm
```

### Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo (documentación interactiva) |
| `npm run build:app` | Build de la aplicación de documentación |
| `npm run build:lib` | Compila la librería con `tsup` (CJS + ESM + DTS) |
| `npm run preview` | Previsualiza el build de la app |

### Publicar en NPM

```bash
# 1. Build
npm run build:lib

# 2. Login (si no estás logueado)
npm login

# 3. Bump de versión
npm version patch   # 1.1.2 → 1.1.3
npm version minor   # 1.1.2 → 1.2.0
npm version major   # 1.1.2 → 2.0.0

# 4. Publicar
npm publish --access public
```

> El script `prepublishOnly` corre `build:lib` automáticamente antes de publicar.

## Configuración del Paquete

### `package.json` exports

```json
{
  "exports": {
    ".": {
      "types": "./dist/lib.d.ts",
      "import": "./dist/lib.mjs",
      "require": "./dist/lib.js"
    },
    "./preset": "./tailwind-preset.js",
    "./styles": "./MaguitoStyles.css"
  }
}
```

### Build con tsup

```bash
tsup lib.ts --format cjs,esm --dts --clean --minify --sourcemap
```

Genera:
- `dist/lib.js` — CommonJS
- `dist/lib.mjs` — ESM
- `dist/lib.d.ts` / `dist/lib.d.mts` — TypeScript definitions

## Temas Incluidos

| Tema | Estilo |
|---|---|
| **Mago de Luz** | Cálido, el estilo original de Maguito Studio |
| **Hechicero Oscuro** | Alto contraste para sesiones nocturnas |
| **Cyber Mage** | Energía neón, vibras futuristas |
| **Pastel Pixie** | Suavidad máxima para interfaces relajadas |

## Roadmap

- [ ] Componentes adicionales (Toast system, DataTable avanzado)
- [ ] Mejora en accesibilidad (ARIA labels, focus management)
- [ ] Más temas predefinidos
- [ ] Testing con Vitest + Testing Library
- [ ] Storybook para documentación de componentes

## Licencia

[MIT License](LICENSE) — Libre para uso personal y comercial.

---

Diseñado y desarrollado con 💜 por **Maguito Studio**
