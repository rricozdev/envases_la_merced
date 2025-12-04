# Sistema de Diseño - Envases La Merced SPA

Sistema completo de variables CSS para el manejo de temas claro/oscuro, tipografía responsiva y paleta de colores corporativa.

## 📋 Tabla de Contenidos

- [Instalación](#instalación)
- [Variables CSS](#variables-css)
- [Uso](#uso)
- [Ejemplos](#ejemplos)
- [Responsive](#responsive)

---

## 🎨 Instalación

Copia el siguiente código en tu archivo CSS principal (por ejemplo, `styles.css` o `variables.css`):

```css
:root {
  /* ----------------------------------- */
  /* Tipografía Global                   */
  /* ----------------------------------- */
  --font-family-primary: "Montserrat", sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* ----------------------------------- */
  /* Colores de Marca (Neutrales)        */
  /* ----------------------------------- */
  --color-brand-primary: #004d60;
  --color-brand-accent: #00a89e;
  --color-brand-accent-hover: #008f85;

  /* ----------------------------------- */
  /* Tamaños de Fuente (Desktop)         */
  /* ----------------------------------- */
  --font-size-h1: 52px;
  --font-size-h2: 40px;
  --font-size-h3: 28px;
  --font-size-body: 17px;
  --font-size-button: 17px;
  --font-size-small: 14px;
}

/* ========================================================= 
                        Modo Claro ========================================================= */

.light-mode {
  /* Colores de Texto */
  --color-text-primary: #333333;
  --color-text-secondary: #666666;
  --color-text-on-accent: #ffffff;
  --color-text-on-primary-dark: #ffffff;
  --color-text-link: var(--color-brand-primary);
  --color-text-link-hover: var(--color-brand-accent);

  /* Colores de Fondo */
  --color-background-main: #ffffff;
  --color-background-secondary: #f0f2f5;
  --color-background-tertiary: #e8ecef;
  --color-background-hero-overlay: rgba(0, 0, 0, 0.5);

  /* Botón Primario (Turquesa) */
  --color-btn-primary-background: var(--color-brand-accent);
  --color-btn-primary-background-hover: var(--color-brand-accent-hover);
  --color-btn-primary-text: var(--color-text-on-accent);

  /* Botón Secundario (Azul Oscuro) */
  --color-btn-secondary-background: var(--color-brand-primary);
  --color-btn-secondary-background-hover: #003b4a;
  --color-btn-secondary-text: var(--color-text-on-primary-dark);

  /* Navbar */
  --color-navbar-background: #ffffff;
  --color-navbar-text: var(--color-text-primary);
  --color-navbar-text-hover: var(--color-brand-accent);
  --color-navbar-dropdown-background: #ffffff;
  --color-navbar-dropdown-item-hover: var(--color-background-secondary);

  /* Bordes */
  --color-border-light: #dddddd;
  --color-border-input: #cccccc;
}

/* =========================================================
                  Modo Oscuro 
========================================================= */

.dark-mode {
  /* Colores de Texto */
  --color-text-primary: #e0e0e0;
  --color-text-secondary: #b0b0b0;
  --color-text-on-accent: #ffffff;
  --color-text-on-primary-dark: #ffffff;
  --color-text-link: var(--color-brand-accent);
  --color-text-link-hover: #ffffff;

  /* Colores de Fondo */
  --color-background-main: #1a1a2e;
  --color-background-secondary: #2c2c42;
  --color-background-tertiary: #3d3d5a;
  --color-background-hero-overlay: rgba(0, 0, 0, 0.65);

  /* Botón Primario (Turquesa) */
  --color-btn-primary-background: var(--color-brand-accent);
  --color-btn-primary-background-hover: var(--color-brand-accent-hover);
  --color-btn-primary-text: var(--color-text-on-accent);

  /* Botón Secundario (Azul Oscuro) */
  --color-btn-secondary-background: var(--color-brand-primary);
  --color-btn-secondary-background-hover: #003b4a;
  --color-btn-secondary-text: var(--color-text-on-primary-dark);

  /* Navbar */
  --color-navbar-background: #1a1a2e;
  --color-navbar-text: var(--color-text-primary);
  --color-navbar-text-hover: var(--color-brand-accent);
  --color-navbar-dropdown-background: #2c2c42;
  --color-navbar-dropdown-item-hover: var(--color-background-tertiary);

  /* Bordes */
  --color-border-dark: #4c4c6a;
  --color-border-input: #5a5a70;
}

/*
========================================================
        Responsive - Tablet (768px - 1199px)
========================================================= */

@media (max-width: 1199px) {
  :root {
    --font-size-h1: 44px;
    --font-size-h2: 34px;
    --font-size-h3: 24px;
    --font-size-body: 16px;
    --font-size-button: 16px;
    --font-size-small: 13px;
  }
}

/* ========================================================= 
Responsive - Mobile (< 768px)
========================================================= */

@media (max-width: 767px) {
  :root {
    --font-size-h1: 36px;
    --font-size-h2: 28px;
    --font-size-h3: 20px;
    --font-size-body: 15px;
    --font-size-button: 15px;
    --font-size-small: 12px;
  }
}
```

---

## 🚀 Uso

### Activar Tema

Agrega la clase correspondiente al elemento `<body>` o contenedor principal:

```html
<!-- Modo Claro -->
<body class="light-mode">
  <!-- Tu contenido aquí -->
</body>

<!-- Modo Oscuro -->
<body class="dark-mode">
  <!-- Tu contenido aquí -->
</body>
```

### Toggle de Tema con JavaScript

```javascript
// Guardar preferencia en localStorage
const setTheme = (theme) => {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
};

// Cargar tema guardado
const savedTheme = localStorage.getItem("theme") || "light-mode";
document.body.className = savedTheme;
```

---

## 📚 Ejemplos de Uso

### Tipografía

```css
h1 {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

p {
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
  line-height: 1.6;
}
```

### Botones

#### Botón Primario (Turquesa)

```css
.btn-primary {
  background-color: var(--color-btn-primary-background);
  color: var(--color-btn-primary-text);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-semibold);
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--color-btn-primary-background-hover);
}
```

**Uso:** Para acciones principales como "Llamar ahora", "Solicitar cotización", etc.

#### Botón Secundario (Azul Oscuro)

```css
.btn-secondary {
  background-color: var(--color-btn-secondary-background);
  color: var(--color-btn-secondary-text);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-semibold);
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-secondary:hover {
  background-color: var(--color-btn-secondary-background-hover);
}
```

**Uso:** Para acciones secundarias como "Solicitar cotización desde esta sucursal", "Ver más", etc.

### Cards

```css
.card {
  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border-light);
  border-radius: 8px;
  padding: 24px;
}

.card-title {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: 12px;
}

.card-text {
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
}
```

### Navbar

```css
.navbar {
  background-color: var(--color-navbar-background);
  padding: 16px 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-link {
  color: var(--color-navbar-text);
  text-decoration: none;
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-medium);
  transition: color 0.3s ease;
}

.navbar-link:hover {
  color: var(--color-navbar-text-hover);
}
```

### Links

```css
a {
  color: var(--color-text-link);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--color-text-link-hover);
  text-decoration: underline;
}
```

---

## 📱 Responsive

El sistema incluye breakpoints automáticos:

| Dispositivo | Breakpoint     | H1   | H2   | H3   | Body | Button |
| ----------- | -------------- | ---- | ---- | ---- | ---- | ------ |
| **Desktop** | > 1199px       | 52px | 40px | 28px | 17px | 17px   |
| **Tablet**  | 768px - 1199px | 44px | 34px | 24px | 16px | 16px   |
| **Mobile**  | < 768px        | 36px | 28px | 20px | 15px | 15px   |

---

## 🎨 Paleta de Colores

### Colores de Marca

```css
--color-brand-primary: #004D60         /* Azul Oscuro */
--color-brand-accent: #00A89E          /* Turquesa */
--color-brand-accent-hover: #008F85    /* Turquesa Hover */
```

### Botones

#### Botón Primario (Turquesa - Acción Principal)

- **Fondo:** `#00A89E`
- **Hover:** `#008F85`
- **Texto:** `#FFFFFF`
- **Uso:** "Llamar ahora", "Contactar", acciones destacadas

#### Botón Secundario (Azul Oscuro - Acción Secundaria)

- **Fondo:** `#004D60`
- **Hover:** `#003B4A`
- **Texto:** `#FFFFFF`
- **Uso:** "Solicitar cotización", "Ver más", acciones complementarias

### Modo Claro

- **Fondo Principal:** `#FFFFFF`
- **Fondo Secundario:** `#F0F2F5`
- **Fondo Terciario:** `#E8ECEF`
- **Texto Principal:** `#333333`
- **Texto Secundario:** `#666666`
- **Bordes:** `#DDDDDD`

### Modo Oscuro

- **Fondo Principal:** `#1A1A2E`
- **Fondo Secundario:** `#2C2C42`
- **Fondo Terciario:** `#3D3D5A`
- **Texto Principal:** `#E0E0E0`
- **Texto Secundario:** `#B0B0B0`
- **Bordes:** `#4C4C6A`

---

## 📝 Notas

- Asegúrate de importar la fuente **Montserrat** desde Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

---

## 📄 Licencia

© 2024 Envases La Merced. Todos los derechos reservados.
