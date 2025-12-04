# 🚀 Proyecto SPA - Envases La Merced

## 🎨 Sistema de Diseño

### Tipografía

**Familia:** Montserrat (Google Fonts)

**Pesos disponibles:**

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

**Tamaños Responsivos:**

| Dispositivo | Breakpoint     | H1   | H2   | H3   | Body | Button | Small |
| ----------- | -------------- | ---- | ---- | ---- | ---- | ------ | ----- |
| **Desktop** | > 1199px       | 52px | 40px | 28px | 17px | 17px   | 14px  |
| **Tablet**  | 768px - 1199px | 44px | 34px | 24px | 16px | 16px   | 13px  |
| **Mobile**  | < 768px        | 36px | 28px | 20px | 15px | 15px   | 12px  |

---

### Paleta de Colores

#### Colores de Marca

```css
--color-brand-primary: #004D60         /* Azul Oscuro */
--color-brand-accent: #00A89E          /* Turquesa */
--color-brand-accent-hover: #008F85    /* Turquesa Hover */
```

#### Botones

**Botón Primario (Turquesa - Acción Principal)**

- Fondo: `#00A89E`
- Hover: `#008F85`
- Texto: `#FFFFFF`
- Uso: "Llamar ahora", "Contactar", acciones destacadas

**Botón Secundario (Azul Oscuro - Acción Secundaria)**

- Fondo: `#004D60`
- Hover: `#003B4A`
- Texto: `#FFFFFF`
- Uso: "Solicitar cotización", "Ver más", acciones complementarias

#### Modo Claro (Light Mode)

- **Fondos:**
  - Principal: `#FFFFFF`
  - Secundario: `#F0F2F5`
  - Terciario: `#E8ECEF`
- **Textos:**
  - Principal: `#333333`
  - Secundario: `#666666`
  - Enlaces: `#004D60` (hover: `#00A89E`)
- **Bordes:** `#DDDDDD`

#### Modo Oscuro (Dark Mode)

- **Fondos:**
  - Principal: `#1A1A2E`
  - Secundario: `#2C2C42`
  - Terciario: `#3D3D5A`
- **Textos:**
  - Principal: `#E0E0E0`
  - Secundario: `#B0B0B0`
  - Enlaces: `#00A89E` (hover: `#FFFFFF`)
- **Bordes:** `#4C4C6A`

#### Navbar

- **Light Mode:**
  - Fondo: `#FFFFFF`
  - Texto: `#333333` (hover: `#00A89E`)
  - Dropdown: `#FFFFFF` (hover item: `#F0F2F5`)
- **Dark Mode:**
  - Fondo: `#1A1A2E`
  - Texto: `#E0E0E0` (hover: `#00A89E`)
  - Dropdown: `#2C2C42` (hover item: `#3D3D5A`)

---

### Variables CSS Globales

El proyecto utiliza CSS Variables (Custom Properties) definidas en `src/styles/variables.css`:

```css
:root {
  /* Tipografía */
  --font-family-primary: "Montserrat", sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Tamaños (Desktop) */
  --font-size-h1: 52px;
  --font-size-h2: 40px;
  --font-size-h3: 28px;
  --font-size-body: 17px;
  --font-size-button: 17px;
  --font-size-small: 14px;

  /* Colores de Marca */
  --color-brand-primary: #004d60;
  --color-brand-accent: #00a89e;
  --color-brand-accent-hover: #008f85;
}
```

---

## 🎯 Objetivo del Proyecto

Desarrollar una **Single Page Application (SPA)** moderna y responsiva para Envases La Merced, enfocada en la venta de envases PET, presentación de sucursales y contacto corporativo. El sitio estará optimizado para marketing digital y campañas de ventas.

### Características Principales:

- ✨ Diseño moderno y responsivo
- 🚀 Optimizado para SEO y velocidad
- 📱 Experiencia móvil de primera clase
- 🛒 Sistema de cotización integrado
- 📍 Geolocalización de sucursales
- 💬 Integración con WhatsApp

---

## 🏗️ Alcance del Proyecto

### Secciones Principales

1. **Navbar**

   - Inicio, Productos, Sucursales, Quiénes Somos, Contacto
   - Botón destacado "Cotiza Aquí"

2. **Home / Hero**

   - Imagen profesional de envases PET
   - Título central y CTA "Solicitar cotización"
   - Sección de beneficios

3. **Productos PET**

   - Catálogo visual de productos
   - Ficha de detalle de cada producto
   - Botón "Cotizar este producto"

4. **Sucursales** (5 ubicaciones)

   - CDMX, Puebla, Veracruz, Neza, Querétaro
   - Mapa interactivo
   - Dirección, horarios, teléfonos
   - CTA "Solicitar cotización desde esta sucursal"

5. **Quiénes Somos**

   - Historia de la empresa
   - Fotografías de planta y equipo
   - Misión, visión y valores

6. **Contacto**

   - Formulario simple (nombre, empresa, teléfono, correo, mensaje)
   - Envío directo a correo electrónico

7. **Footer**
   - Información de contacto
   - Sucursales
   - Redes sociales
   - Enlaces legales

### ⭐ Funcionalidades Extra (Bonus)

#### 📍 Sistema de Geolocalización

- Detecta ubicación del usuario (con permiso)
- Calcula y muestra la sucursal más cercana
- Optimiza la experiencia de cotización

#### 🛒 Pseudo Carrito de Cotización

- Lista de productos seleccionados
- Selector de sucursal destino
- Genera mensaje formateado
- Envío directo a WhatsApp de la sucursal elegida

### 🔧 Funcionalidades Adicionales

- Botón flotante de WhatsApp
- Chatbot para soporte y cotizaciones
- Diseño 100% responsivo
- Optimización para dispositivos móviles y desktop

---

## 📅 Cronograma de Desarrollo (4 Semanas)

### 📊 Vista General de Hitos

| Semana   | Hitos                                  | Estado       |
| -------- | -------------------------------------- | ------------ |
| Semana 1 | Hito 1-3: Planificación, Setup, Diseño | ⏳ Pendiente |
| Semana 2 | Hito 4-6: Core y Catálogo              | ⏳ Pendiente |
| Semana 3 | Hito 7-9: Funcionalidades Extra        | ⏳ Pendiente |
| Semana 4 | Hito 10-14: Finalización y Lanzamiento | ⏳ Pendiente |

---

## 📝 Hitos Detallados

### SEMANA 1: Planificación, Diseño y Setup

#### 🎯 Hito 1: Kick-off y Recopilación de Contenido

**Duración:** Días 1-2  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Reunión de inicio con Ing. Malka Sánchez
- [ ] Definir paleta de colores, tipografías y guía de estilo
- [ ] Recopilar imágenes de productos PET (alta calidad)
- [ ] Obtener fotografías de plantas y equipo
- [ ] Recopilar textos corporativos (misión, visión, valores, historia)
- [ ] Obtener información detallada de cada sucursal
- [ ] Recopilar logos y recursos gráficos

**Entregable:** 📦 Carpeta con todos los assets digitales y documento con contenido textual

---

#### 🎯 Hito 2: Arquitectura Técnica y Setup Inicial

**Duración:** Días 3-4  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Configurar entorno de desarrollo
- [ ] Definir stack tecnológico (React/Vue/Angular + Tailwind CSS)
- [ ] Crear estructura de carpetas y componentes
- [ ] Setup de repositorio Git
- [ ] Configurar servicios externos:
  - [ ] API de Google Maps
  - [ ] API de WhatsApp Business
  - [ ] Servicio de envío de correos (EmailJS o similar)

**Entregable:** 📦 Repositorio configurado y documento técnico con arquitectura

---

#### 🎯 Hito 3: Diseño Finalizado

**Duración:** Días 5-7  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Ajustar mockups según feedback inicial
- [ ] Diseñar componentes responsivos
- [ ] Crear sistema de diseño (componentes reutilizables)
- [ ] Diseñar interfaz de geolocalización
- [ ] Diseñar pseudo carrito de compras
- [ ] Diseñar modal de selección de sucursal

**Entregable:** 📦 Mockups finales aprobados y sistema de diseño documentado

**🔍 Revisión 1 con Cliente:** Fin de Semana 1

---

### SEMANA 2: Desarrollo del Core

#### 🎯 Hito 4: Estructura Base y Navegación

**Duración:** Días 8-10  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Desarrollar Navbar responsivo
- [ ] Implementar routing (navegación entre secciones)
- [ ] Desarrollar Footer con enlaces y redes sociales
- [ ] Integrar botón flotante de WhatsApp
- [ ] Crear animaciones de transición entre páginas

**Entregable:** 📦 Navegación funcional y estructura base desplegada en ambiente de pruebas

---

#### 🎯 Hito 5: Sección Home y Hero

**Duración:** Días 11-12  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Desarrollar sección Hero con CTA principal
- [ ] Crear sección de beneficios
- [ ] Optimizar imágenes para carga rápida
- [ ] Implementar animaciones de entrada

**Entregable:** 📦 Landing page funcional con Hero y beneficios

---

#### 🎯 Hito 6: Catálogo de Productos PET

**Duración:** Días 13-14  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Crear grid responsivo de productos
- [ ] Desarrollar fichas individuales de producto con detalles
- [ ] Implementar botón "Cotizar este producto" funcional
- [ ] Crear lightbox para visualización de imágenes
- [ ] Agregar filtros básicos (opcional, si aplica)

**Entregable:** 📦 Catálogo completo de productos navegable

**🔍 Revisión 2 con Cliente:** Fin de Semana 2

---

### SEMANA 3: Funcionalidades Core y Extras

#### 🎯 Hito 7: Sistema de Geolocalización ⭐

**Duración:** Días 15-16  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Integrar API de geolocalización del navegador
- [ ] Implementar cálculo de distancias a sucursales
- [ ] Crear componente que muestra sucursal más cercana
- [ ] Manejar permisos de ubicación
- [ ] Implementar fallback si usuario no permite geolocalización

**Entregable:** 📦 Sistema de geolocalización funcional con detección de sucursal cercana

**Detalles Técnicos:**

```javascript
// Usar Geolocation API del navegador
// Calcular distancia con fórmula Haversine o Google Distance Matrix API
// Coordenadas de las 5 sucursales
const sucursales = [
  { nombre: "CDMX", lat: 0, lng: 0 },
  { nombre: "Puebla", lat: 0, lng: 0 },
  { nombre: "Veracruz", lat: 0, lng: 0 },
  { nombre: "Neza", lat: 0, lng: 0 },
  { nombre: "Querétaro", lat: 0, lng: 0 },
];
```

---

#### 🎯 Hito 8: Pseudo Carrito de Cotización ⭐

**Duración:** Días 17-18  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Desarrollar sistema de carrito en localStorage
- [ ] Implementar botón "Agregar al carrito" en productos
- [ ] Crear widget flotante mostrando productos seleccionados
- [ ] Desarrollar selector de sucursal destino
- [ ] Crear generador de mensaje formateado para WhatsApp
- [ ] Integrar con API de WhatsApp (redirección con mensaje)

**Entregable:** 📦 Carrito funcional con envío a WhatsApp de sucursal seleccionada

**Formato de Mensaje WhatsApp:**

```
Hola! Me gustaría solicitar cotización para:

- Envase PET 500ml (x10 unidades)
- Envase PET 1L (x5 unidades)
- Envase PET 2L (x3 unidades)

Sucursal preferida: CDMX
Nombre: [nombre del usuario]
Empresa: [empresa]
Teléfono: [teléfono]
```

---

#### 🎯 Hito 9: Sección de Sucursales

**Duración:** Días 19-20  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Crear páginas individuales para cada sucursal (5 en total)
- [ ] Integrar Google Maps embebido
- [ ] Mostrar información de contacto, horarios y teléfonos
- [ ] Agregar CTA "Solicitar cotización desde esta sucursal"
- [ ] Integrar con sistema de geolocalización (destacar sucursal cercana)

**Entregable:** 📦 Páginas de sucursales completas con mapas interactivos

**🔍 Revisión 3 con Cliente:** Fin de Semana 3

---

### SEMANA 4: Finalización y Lanzamiento

#### 🎯 Hito 10: Secciones Corporativas

**Duración:** Días 21-22  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Desarrollar "Quiénes Somos" con galería de fotos
- [ ] Crear formulario de contacto funcional con validaciones
- [ ] Integrar envío de correos
- [ ] Desarrollar sección de misión, visión y valores

**Entregable:** 📦 Secciones corporativas completas y formulario funcional

---

#### 🎯 Hito 11: Chatbot y Optimizaciones

**Duración:** Días 23-24  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Implementar chatbot flotante
- [ ] Optimizar rendimiento (lazy loading, compresión de imágenes)
- [ ] Optimizar SEO (meta tags, sitemap, robots.txt)
- [ ] Realizar pruebas de velocidad (Google PageSpeed Insights)

**Entregable:** 📦 Chatbot funcional y sitio optimizado

---

#### 🎯 Hito 12: Testing y QA

**Duración:** Días 25-26  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Pruebas en múltiples navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Pruebas responsivas en diferentes dispositivos
- [ ] Testing de formularios y envío de datos
- [ ] Verificación de enlaces y CTA
- [ ] Corrección de bugs identificados
- [ ] Testing del carrito y geolocalización

**Entregable:** 📦 Documento de pruebas con casos cubiertos y bugs corregidos

---

#### 🎯 Hito 13: Migración y Configuración de Dominio

**Duración:** Días 27-28  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Realizar backup del sitio actual
- [ ] Configurar correos corporativos (hasta 5 cuentas)
- [ ] Migrar la SPA al hosting actual
- [ ] Configurar SSL/HTTPS
- [ ] Configurar redirecciones necesarias
- [ ] Configurar Google Analytics (opcional)

**Entregable:** 📦 Sitio desplegado en producción con dominio actual funcionando

---

#### 🎯 Hito 14: Capacitación y Cierre

**Duración:** Día 28  
**Estado:** ⏳ Pendiente

**Actividades:**

- [ ] Sesión de capacitación con el cliente:
  - [ ] Uso del panel de correos corporativos
  - [ ] Gestión de solicitudes de cotización
  - [ ] Actualizaciones futuras de contenido
- [ ] Entrega de documentación técnica
- [ ] Entrega de credenciales de acceso
- [ ] Firma de acta de entrega-recepción

**Entregable:** 📦 Documentación completa, capacitación realizada y proyecto cerrado

**🔍 Revisión 4 con Cliente:** Pre-lanzamiento y ajustes finales

---

## ✅ Criterios de Aceptación por Hito

Cada hito será considerado completado cuando:

- ✅ El entregable esté funcional en ambiente de pruebas
- ✅ Haya sido revisado y aprobado por el cliente
- ✅ Se haya documentado en el repositorio
- ✅ No existan bugs críticos pendientes

---

## 🛠️ Stack Tecnológico Definido

### Frontend

- **Framework:** React 18+
- **Build Tool:** Vite
- **Estilos:** CSS Modules (Modular CSS)
- **Routing:** React Router DOM v6
- **Animaciones:** Framer Motion / CSS Animations

### APIs y Servicios

- **Geolocalización:** Geolocation API + Google Maps API
- **WhatsApp:** WhatsApp URL Scheme
- **Correo:** EmailJS
- **Maps:** Google Maps Embed API

### Herramientas

- **Control de Versiones:** Git + GitHub/GitLab
- **Package Manager:** npm / pnpm
- **Despliegue:** Hosting actual del cliente
- **Testing:** Vitest + React Testing Library
- **Performance:** Lighthouse / PageSpeed Insights
- **Linting:** ESLint + Prettier

---

## 📂 Estructura del Proyecto (Propuesta)

```
envases-la-merced/
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navbar.module.css
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.module.css
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Button.module.css
│   │   │   └── WhatsAppButton/
│   │   │       ├── WhatsAppButton.jsx
│   │   │       └── WhatsAppButton.module.css
│   │   ├── home/
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── Hero.module.css
│   │   │   └── Benefits/
│   │   │       ├── Benefits.jsx
│   │   │       └── Benefits.module.css
│   │   ├── products/
│   │   │   ├── ProductGrid/
│   │   │   │   ├── ProductGrid.jsx
│   │   │   │   └── ProductGrid.module.css
│   │   │   ├── ProductCard/
│   │   │   │   ├── ProductCard.jsx
│   │   │   │   └── ProductCard.module.css
│   │   │   └── ProductDetail/
│   │   │       ├── ProductDetail.jsx
│   │   │       └── ProductDetail.module.css
│   │   ├── branches/
│   │   │   ├── BranchList/
│   │   │   │   ├── BranchList.jsx
│   │   │   │   └── BranchList.module.css
│   │   │   └── BranchDetail/
│   │   │       ├── BranchDetail.jsx
│   │   │       └── BranchDetail.module.css
│   │   ├── cart/
│   │   │   ├── Cart/
│   │   │   │   ├── Cart.jsx
│   │   │   │   └── Cart.module.css
│   │   │   └── CartWidget/
│   │   │       ├── CartWidget.jsx
│   │   │       └── CartWidget.module.css
│   │   ├── geolocation/
│   │   │   └── NearestBranch/
│   │   │       ├── NearestBranch.jsx
│   │   │       └── NearestBranch.module.css
│   │   └── chatbot/
│   │       ├── Chatbot.jsx
│   │       └── Chatbot.module.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.css
│   │   ├── Products/
│   │   │   ├── Products.jsx
│   │   │   └── Products.module.css
│   │   ├── Branches/
│   │   │   ├── Branches.jsx
│   │   │   └── Branches.module.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       └── Contact.module.css
│   ├── services/
│   │   ├── geolocation.js
│   │   ├── whatsapp.js
│   │   ├── email.js
│   │   └── googleMaps.js
│   ├── hooks/
│   │   ├── useGeolocation.js
│   │   ├── useCart.js
│   │   └── useTheme.js
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── ThemeContext.jsx
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── distance.js
│   ├── data/
│   │   ├── products.js
│   │   └── branches.js
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   └── reset.css
│   ├── App.jsx
│   ├── App.module.css
│   └── main.jsx
├── .env.example
├── .env
├── .gitignore
├── .eslintrc.cjs
├── .prettierrc
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📋 Checklist de Contenido Necesario

### Imágenes

- [ ] Logo de Envases La Merced (PNG transparente, alta resolución)
- [ ] Imágenes de productos PET (mínimo 1 por producto, alta calidad)
- [ ] Fotografías de plantas y equipo (para sección "Quiénes Somos")
- [ ] Imagen Hero para landing page
- [ ] Íconos de redes sociales (si no se usan bibliotecas)

### Textos

- [ ] Historia de la empresa
- [ ] Misión, visión y valores
- [ ] Descripción de cada producto PET
- [ ] Beneficios de la empresa/productos

### Información de Sucursales

Para cada sucursal (CDMX, Puebla, Veracruz, Neza, Querétaro):

- [ ] Dirección completa
- [ ] Coordenadas (latitud, longitud)
- [ ] Horarios de atención
- [ ] Teléfono(s)
- [ ] Correo electrónico
- [ ] Número de WhatsApp

### Datos de Contacto

- [ ] Correo electrónico corporativo principal
- [ ] Teléfonos de contacto
- [ ] Enlaces a redes sociales (Facebook, Instagram, LinkedIn, etc.)
- [ ] Textos legales (Aviso de Privacidad, Términos y Condiciones)

---

## 🚀 Instrucciones de Desarrollo

### Configuración Inicial

```bash
# Clonar repositorio
git clone [URL_REPOSITORIO]
cd envases-la-merced

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus API keys

# Iniciar servidor de desarrollo
npm run dev
```

### Variables de Entorno (.env)

```bash
# Google Maps
VITE_GOOGLE_MAPS_API_KEY=tu_api_key_aqui

# EmailJS
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key

# WhatsApp (Números de sucursales)
VITE_WHATSAPP_CDMX=52XXXXXXXXXX
VITE_WHATSAPP_PUEBLA=52XXXXXXXXXX
VITE_WHATSAPP_VERACRUZ=52XXXXXXXXXX
VITE_WHATSAPP_NEZA=52XXXXXXXXXX
VITE_WHATSAPP_QUERETARO=52XXXXXXXXXX
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo (puerto 5173)

# Build
npm run build           # Genera build de producción
npm run preview         # Preview del build de producción

# Calidad de Código
npm run lint            # Ejecuta ESLint
npm run format          # Formatea código con Prettier

# Testing
npm run test            # Ejecuta pruebas con Vitest
npm run test:ui         # Interfaz visual de pruebas
npm run coverage        # Genera reporte de cobertura
```

### Dependencias Principales

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "framer-motion": "^10.16.0",
    "@emailjs/browser": "^3.11.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0",
    "vitest": "^1.0.0",
    "@testing-library/react": "^14.1.0"
  }
}
```

---

## 🎨 Guía de Estilos CSS

### Uso de CSS Modules

Cada componente tiene su propio archivo `.module.css`:

```jsx
// Button.jsx
import styles from "./Button.module.css";

export const Button = ({ children, variant = "primary" }) => {
  return (
    <button className={styles.button} data-variant={variant}>
      {children}
    </button>
  );
};
```

```css
/* Button.module.css */
.button {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-semibold);
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button[data-variant="primary"] {
  background-color: var(--color-btn-primary-background);
  color: var(--color-btn-primary-text);
}

.button[data-variant="primary"]:hover {
  background-color: var(--color-btn-primary-background-hover);
}

.button[data-variant="secondary"] {
  background-color: var(--color-btn-secondary-background);
  color: var(--color-btn-secondary-text);
}

.button[data-variant="secondary"]:hover {
  background-color: var(--color-btn-secondary-background-hover);
}
```

### Estructura de Archivos de Estilo

```
src/styles/
├── variables.css      # Variables CSS globales (colores, tipografía)
├── reset.css         # CSS Reset/Normalize
└── global.css        # Estilos globales (body, html, etc.)
```

### Importación en main.jsx

```jsx
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Importar estilos globales en orden
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 📊 Seguimiento del Proyecto

### Estados de Hitos

- ⏳ **Pendiente:** No iniciado
- 🚧 **En Progreso:** Actualmente en desarrollo
- ✅ **Completado:** Finalizado y aprobado
- ⚠️ **Bloqueado:** Esperando información/decisión

### Puntos de Revisión con el Cliente

1. **Revisión 1** (Fin Semana 1): Mockups finales y arquitectura
2. **Revisión 2** (Fin Semana 2): Navegación y catálogo de productos
3. **Revisión 3** (Fin Semana 3): Funcionalidades extras y sucursales
4. **Revisión 4** (Fin Semana 4): Pre-lanzamiento y ajustes finales

---

## 📞 Contactos del Proyecto

**Cliente:**

- Ing. Malka Sánchez
- Envases La Merced

**Desarrollador:**

- Ing. Ricardo Rico
- Email: rricoz@protonmail.com

---

## 📝 Notas Importantes

### Consideraciones Técnicas

1. **Dominio y Hosting:** Se utilizará el dominio y hosting actuales
2. **Correos Corporativos:** Configurar hasta 5 cuentas según plan contratado
3. **Sin Backend:** SPA pura, sin necesidad de servidor backend
4. **Sin Base de Datos:** Toda la información es estática o se gestiona del lado del cliente
5. **CSS Modules:** Cada componente tiene estilos aislados y reutilizables
6. **Variables CSS:** Sistema centralizado de colores y tipografía
7. **Modo Claro/Oscuro:** Soporte nativo mediante clases `.light-mode` y `.dark-mode`

### Funcionalidades Clave

1. **Geolocalización:** Requiere permiso del usuario para funcionar óptimamente
2. **Carrito de Cotización:** No es un e-commerce real, solo genera cotizaciones
3. **WhatsApp Integration:** Los mensajes se envían directamente a la sucursal elegida
4. **Responsive Design:** Mobile-first approach con breakpoints en 768px y 1199px

### Buenas Prácticas del Proyecto

#### Nomenclatura de Componentes

- **PascalCase** para componentes: `ProductCard.jsx`
- **camelCase** para archivos de utilidades: `geolocation.js`
- **kebab-case** para archivos CSS: `product-card.module.css` _(opcional)_ o `ProductCard.module.css`

#### Estructura de Componentes

```jsx
// Imports
import { useState } from "react";
import styles from "./ComponentName.module.css";

// Componente
export const ComponentName = ({ prop1, prop2 }) => {
  // Hooks
  const [state, setState] = useState(null);

  // Funciones auxiliares
  const handleAction = () => {
    // lógica
  };

  // Render
  return <div className={styles.container}>{/* contenido */}</div>;
};
```

#### Gestión de Estado

- **Context API** para estado global (Carrito, Tema)
- **Custom Hooks** para lógica reutilizable
- **localStorage** para persistencia del carrito y preferencias de tema

#### Optimización

- Lazy loading de imágenes
- Code splitting por rutas
- Compresión de imágenes (WebP + fallback)
- Minificación automática en build

---

## 🔄 Control de Cambios

| Fecha | Versión | Descripción                            | Responsable  |
| ----- | ------- | -------------------------------------- | ------------ |
| -     | 1.0     | Documento inicial - Propuesta aprobada | Ricardo Rico |

---

## 📄 Licencia y Propiedad

Este proyecto es propiedad de **Envases La Merced**. Todos los derechos reservados.

---

## 🎯 Próximos Pasos

1. ✅ Propuesta aprobada
2. ✅ Stack tecnológico definido (React + Vite + CSS Modules)
3. ✅ Sistema de diseño establecido
4. ⏳ Iniciar Hito 1: Kick-off y recopilación de contenido
5. ⏳ Configurar repositorio y ambiente de desarrollo
6. ⏳ Crear estructura base del proyecto

### Tareas Inmediatas (Semana 1 - Día 1)

- [ ] Crear repositorio en GitHub/GitLab
- [ ] Inicializar proyecto con Vite + React
- [ ] Configurar estructura de carpetas
- [ ] Instalar dependencias base
- [ ] Configurar ESLint y Prettier
- [ ] Crear archivos de variables CSS
- [ ] Importar fuente Montserrat de Google Fonts
- [ ] Agendar reunión kick-off con cliente

---

**Última actualización:** [Fecha]  
**Estado del Proyecto:** 🚀 Iniciando Desarrollo
