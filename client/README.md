# Envases La Merced — Cliente

Proyecto frontend (cliente) para el catálogo de Envases La Merced. Aplicación creada con Vite + React y TailwindCSS para explorar productos, filtros y paginación.

## Características principales

- Catálogo de productos con tarjetas y paginación.
- Filtros por categoría, material, volumen e industria.
- Componentes reutilizables en `src/components`.

## Requisitos

- Node.js 18+ (recomendado)
- npm o yarn

## Instalación

1. Clonar el repositorio (desde la carpeta raíz del proyecto):

```bash
git clone <repo-url>
cd envases_la_merced/client
```

2. Instalar dependencias:

```bash
npm install
# o
yarn
```

## Scripts útiles

Usa los scripts definidos en `package.json`:

- `npm run dev` — Inicia el servidor de desarrollo (Vite).
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza el build localmente.
- `npm run lint` — Ejecuta ESLint sobre el código.

Ejemplo:

```bash
npm run dev
```

## Estructura destacada

Rutas y carpetas principales dentro del cliente:

- `src/` — Código fuente del cliente.
  - `src/main.jsx` — Entrada principal.
  - `src/App.jsx` — Componente raíz.
  - `src/components/` — Componentes UI y páginas.
    - `src/components/Page/Products.jsx` — Página del catálogo.
    - `src/components/common/` — Componentes reutilizables (UI, filtros, paginación).

## Desarrollo y buenas prácticas

- Mantener componentes pequeños y reutilizables en `src/components`.
- Ejecutar `npm run lint` antes de commitear cambios.
- Añadir pruebas y documentación para componentes complejos.

## Despliegue

1. Generar build:

```bash
npm run build
```

2. Servir la carpeta `dist` en el servidor que uses (Netlify, Vercel, servidor estático, etc.).

## Contribuir

1. Crear una rama para la funcionalidad o fix: `git checkout -b feat/nombre`.
2. Hacer commits claros y pequeños.
3. Abrir un pull request describiendo el cambio.

## Licencia y contacto

Incluye la licencia del proyecto en la raíz si aplica. Para dudas o coordinar cambios, contacta al mantenedor del repo.

---

Documento generado y adaptado al estado actual del cliente.
