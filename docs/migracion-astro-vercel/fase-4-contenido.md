# Bitácora — Fase 4: Gestión de contenido

Trabajo técnico de la Fase 4 completado con éxito.

## Objetivo

Ocultar los casos de estudio sin evidencia real para que ningún placeholder (`[Add …]` / `[Agregar …]`) sea accesible en producción. La solución es reversible: eliminar `draft: true` del frontmatter cuando un caso esté listo con contenido real.

## Diagnóstico previo

| Proyecto            | status      | Placeholders `[Add …]` | Decisión  |
|---------------------|-------------|--------------------------|-----------|
| multiple-ecommerces | published   | parciales, sin datos duros | publicado |
| payment-app         | in-progress | sí, en Context y Outcome  | borrador  |
| ecommerce-research  | in-progress | sí, en Context y Outcome  | borrador  |
| online-sales        | in-progress | sí, en Context y Outcome  | borrador  |

## Cambios realizados

### 1. Schema — `src/content.config.ts`

Se añadió el campo `draft` como opcional con valor por defecto `false`. Mantiene retrocompatibilidad: los archivos sin el campo se comportan como publicados.

```diff
+    draft: z.boolean().optional().default(false)
```

### 2. Frontmatter — 6 archivos Markdown marcados como borrador

Se añadió `draft: true` en los siguientes archivos:

- `src/content/projects/payment-app-en.md`
- `src/content/projects/payment-app-es.md`
- `src/content/projects/ecommerce-research-en.md`
- `src/content/projects/ecommerce-research-es.md`
- `src/content/projects/online-sales-en.md`
- `src/content/projects/online-sales-es.md`

### 3. Filtro `!p.data.draft` en 3 páginas Astro

| Archivo | Lugar del cambio |
|---|---|
| `src/pages/[locale]/projects/[slug].astro` | `getStaticPaths` — borradores no generan rutas |
| `src/pages/[locale]/projects/index.astro` | Query de colección — listado excluye borradores |
| `src/pages/[locale]/index.astro` | Query de colección — sección "work" excluye borradores |

## Verificación

- **astro check**: Finalizado con éxito (0 errores, 0 advertencias, 12 archivos).
- **astro build**: Ejecución exitosa con código 0. Se generaron **9 páginas**:
  - `/en/index.html`, `/es/index.html`
  - `/en/projects/multiple-ecommerces/index.html`, `/es/projects/multiple-ecommerces/index.html`
  - `/en/projects/index.html`, `/es/projects/index.html`
  - `/index.html`
  - función de servidor dinámica para `/api/contact`
- Los seis archivos borrador **no generaron ninguna ruta**.

## Cómo publicar un borrador cuando esté listo

1. Añadir el contenido real (contexto, proceso, resultado) eliminando todos los `[Add …]`.
2. Eliminar `draft: true` del frontmatter EN y ES del proyecto.
3. Ejecutar `npm run check` y `npm run build`.
4. Confirmar que las rutas `/en/projects/<slug>/` y `/es/projects/<slug>/` aparecen en el output del build.
5. Commit y push a `main` → Vercel despliega automáticamente.
