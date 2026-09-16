# Guía para la Creación y Gestión de Nuevos Proyectos

Esta guía explica paso a paso cómo agregar, formatear y publicar nuevos casos de estudio/proyectos en tu portafolio web (construido con Astro).

---

## 1. Estructura Bilingüe de Proyectos

Cada proyecto tiene su propia subcarpeta dentro de `src/content/projects/<nombre-del-proyecto>/` con **dos archivos Markdown**:

- `src/content/projects/<nombre-del-proyecto>/es.md` (Versión en Español)
- `src/content/projects/<nombre-del-proyecto>/en.md` (Versión en Inglés)

> **Regla Clave:** Ambos archivos deben estar agrupados en la carpeta del proyecto y tener **exactamente el mismo `slug`** en su encabezado para que el selector de idioma funcione correctamente.

---

## 2. Encabezado Obligatorio (Frontmatter)

Cada archivo debe iniciar con un bloque de metadatos encerrado entre `---`:

### Ejemplo en Español (`src/content/projects/mi-proyecto/es.md`)
```markdown
---
slug: mi-proyecto
locale: es
title: Investigación UX para e-commerce
shortTitle: Investigación e-commerce
summary: Encontrar insights accionables mediante métodos de investigación, card sorting y síntesis.
role: UX Researcher & Product Designer
duration: 3 meses
status: in-progress # Opciones: 'published' o 'in-progress'
draft: false
featured: true # true para mostrar en la página de inicio
cover: images/Research.png # Imagen en assets/images/
tags: [Investigación UX, Card sorting, E-commerce]
tools: [Figma, Miro, Maze]
order: 1 # Número para determinar la posición en el listado (opcional)
nextSlug: online-sales # Slug del proyecto siguiente (opcional)
previousSlug: payment-app # Slug del proyecto anterior (opcional)
---
```

### Ejemplo en Inglés (`src/content/projects/mi-proyecto/en.md`)
```markdown
---
slug: mi-proyecto
locale: en
title: UX Research for E-commerce
shortTitle: E-commerce Research
summary: Finding actionable insights through research methods, card sorting, and synthesis.
role: UX Researcher & Product Designer
duration: 3 months
status: in-progress
draft: false
featured: true
cover: images/Research.png
tags: [UX Research, Card sorting, E-commerce]
tools: [Figma, Miro, Maze]
nextSlug: online-sales
previousSlug: payment-app
---
```

---

## 3. Manejo de Imágenes

### Ubicación de archivos
Guarda todas las imágenes del proyecto en la carpeta:
📁 `assets/images/`

*(Formatos recomendados: `.webp`, `.png`, `.jpg`, `.svg`)*

### Imagen de portada
En el frontmatter, usa la ruta relativa dentro de `images/`:
```yaml
cover: images/mi-portada.png
```

### Imágenes dentro del contenido Markdown
Para insertar imágenes dentro del cuerpo del texto:

**Opción A (Markdown):**
```markdown
![Descripción del prototipo](/images/mi-prototipo.png)
```

**Opción B (HTML para control de tamaño o alineación):**
```html
<img src="/images/mi-prototipo.png" alt="Prototipo de alta fidelidad" width="100%" />
```

---

## 4. Jerarquía de Títulos y Formato del Contenido

Usa los símbolos `#` seguidos de un espacio para dar estructura al caso de estudio:

```markdown
## Contexto del Proyecto
Explicación breve del problema y antecedentes...

## Desafío de Diseño
¿Qué problema estábamos intentando resolver?

### Investigación de usuarios
- Entrevistas cualitativas
- Pruebas de usabilidad

### Hallazgos clave
1. Primer hallazgo...
2. Segundo hallazgo...

## Solución Propuesta

### Wireframes y Prototipos
Detalles del proceso visual...

## Próximos Pasos
- Probar la hipótesis B con 10 usuarios adicionales.
- Iterar componentes en el Design System.
```

### Resumen de Títulos:
- `## Título` (`<h2>`): Secciones principales (Contexto, Desafío, Solución, Próximos pasos).
- `### Subtítulo` (`<h3>`): Subsecciones dentro de una sección principal.
- `#### Detalle` (`<h4>`): Desgloses o puntos específicos dentro de un `<h3>`.

---

## 5. Lista de Chequeo antes de Publicar

1. **Revisar Frontmatter:** Verificar que la versión `es` y `en` compartan el `slug`.
2. **Imágenes cargadas:** Confirmar que la imagen de portada y del cuerpo estén en `assets/images/`.
3. **Verificación de Tipos y Errores:**
   Ejecuta en tu consola:
   ```bash
   npm run check
   ```
4. **Construcción de prueba:**
   ```bash
   npm run build
   ```
