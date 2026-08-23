# Plan: finalización de la migración Astro a Vercel

> Documento vivo. Cada sesión ejecuta el siguiente punto sin marcar, verifica la evidencia indicada y registra el detalle únicamente en la bitácora de la fase correspondiente.

## Contexto

La migración deja a Astro como fuente única de verdad, elimina el bloqueo de generación de rutas bilingües, retira el sitio legacy y prepara un formulario seguro para Vercel. Producción no se altera hasta que su reemplazo esté verificado.

### Decisiones tomadas

- Astro seguirá como arquitectura única; Vercel será el único despliegue.
- Las rutas públicas permanecen estáticas salvo la futura API de contacto.
- No se inventarán métricas, clientes ni resultados; los casos sin evidencia serán borradores.
- La Fase 2 y posteriores requieren confirmación explícita tras cerrar el trabajo técnico de la Fase 1.

### Estructura objetivo

```text
docs/migracion-astro-vercel/
  PLAN_MIGRACION.md
  fase-1-desbloqueo.md
  fase-2-legacy.md
  fase-3-contacto.md
  fase-4-contenido.md
  fase-5-cicd.md
```

## Mapa de referencia (verificado 2026-08-23)

- Astro 5.18.2, `@astrojs/check` 0.9.10 y TypeScript 5.9.3; Node 24.14.0.
- Ocho Markdown de proyectos: cuatro slugs, cada uno en EN y ES.
- El loader `glob()` ya asigna un ID único por nombre de archivo, incluida la traducción.
- `src/pages/[locale]/projects/[slug].astro` genera las rutas desde `getCollection('projects')`.
- `Locale` tipa las props y los parámetros de ruta que indexan la copia bilingüe.

---

# FASE 1 — Desbloqueo técnico → detalle en `fase-1-desbloqueo.md`

### 1.1 Diagnosticar el build y la colección

- [x] Reproducir el estado parcial, aislar el loader y localizar los IDs duplicados.
- **Depends on:** ninguna.
- **Verif:** se identifican los cuatro avisos `Duplicate id` y su efecto sobre `getStaticPaths()`.

### 1.2 Corregir la identidad de entradas bilingües

- [x] Generar IDs únicos por archivo y corregir los errores de tipado expuestos por `astro check`.
- **Depends on:** 1.1.
- **Verif:** `npm.cmd run check` informa 0 errores; `npm.cmd run build` termina con código 0 y genera 13 páginas, incluidos los cuatro slugs bajo `/en/projects/` y `/es/projects/`.

---

# FASE 2 — Retiro del sitio legacy → detalle en `fase-2-legacy.md`

### 2.1 Validar paridad y borrar el legacy

- [x] Eliminar los archivos legacy solo tras confirmar la paridad de Astro.
- **Depends on:** 1.3.
- **Verif:** no existen referencias legacy; `check` y `build` pasan.

---

# FASE 3 — Contacto seguro → detalle en `fase-3-contacto.md`

### 3.1 Implementar la API y el formulario

- [x] Añadir la integración Vercel, Resend, endpoint tipado y formulario bilingüe con honeypot.
- **Depends on:** 2.1.
- **Verif:** pruebas manuales de solicitud válida, inválida, honeypot y fallo seguro del proveedor.

---

# FASE 4 — Gestión de contenido → detalle en `fase-4-contenido.md`

### 4.1 Ocultar casos sin evidencia

- [x] Añadir `draft`, marcar el contenido incompleto y excluirlo de todas las rutas y navegaciones.
- **Depends on:** 3.1.
- **Verif:** solo `/en/projects/multiple-ecommerces/` y `/es/projects/multiple-ecommerces/` se generaron. `payment-app`, `ecommerce-research` y `online-sales` son borradores invisibles.

---

# FASE 5 — CI/CD y Vercel → detalle en `fase-5-cicd.md`

### 5.1 Consolidar el despliegue

- [x] Retirar GitHub Pages, fijar la configuración híbrida de Vercel y verificar producción.
- **Depends on:** 4.1.
- **Verif:** build de Vercel, redirect raíz, rutas públicas y API funcionan sin secretos versionados.

---

## Riesgos y mitigaciones

- **Contenido bilingüe sobrescrito:** IDs del loader únicos por archivo y verificación de ocho rutas.
- **Eliminación prematura del legacy:** se ejecuta solo tras la puerta de Fase 1 y validación de paridad.
- **Secretos expuestos o envío no autorizado:** solo variables de entorno de Vercel, validación de servidor y honeypot.
- **Contenido sin evidencia:** marcado como borrador, sin métricas ni resultados inventados.

## Verificación end-to-end (al cerrar)

1. `npm.cmd run check` y `npm.cmd run build` finalizan correctamente.
2. Las rutas EN/ES publicadas, redirect raíz y navegación funcionan.
3. El formulario rechaza abuso básico y entrega mensajes sin exponer secretos.
4. No hay legacy, GitHub Pages ni casos borrador en producción.

## Bitácora

- **FASE 1 — trabajo técnico completado (2026-08-23):** se corrigió el ID duplicado de las traducciones y siete errores de tipado. `check` y `build` están verdes; se generaron 13 páginas y los ocho casos EN/ES. Ver [bitácora detallada](./fase-1-desbloqueo.md).
- **FASE 2 — retiro legacy completado (2026-08-23):** se validó la paridad y se eliminaron los archivos legacy (`index.html`, `proyect-1.html`, `Script.js`, `style.css` y `styles/`). Sin referencias rotas. `check` y `build` continúan verdes con 0 errores y 13 páginas generadas. Ver [bitácora detallada](./fase-2-legacy.md).
- **FASE 3 — contacto seguro completado (2026-08-23):** se integró el adaptador oficial `@astrojs/vercel` compatible y `resend`. Se implementó el endpoint dinámico `/api/contact` con validaciones, protección honeypot y envío con Resend. Se sustituyó el mailto por un formulario bilingüe e interactivo en la página de inicio. `check` y `build` continúan en verde. Ver [bitácora detallada](./fase-3-contacto.md).
- **FASE 4 — gestión de contenido completada (2026-08-23):** se añadió `draft: boolean` al schema de la colección. Se marcaron `draft: true` los seis archivos de `payment-app`, `ecommerce-research` y `online-sales` (EN + ES). Se añadió el filtro `!p.data.draft` en `getStaticPaths` de `[slug].astro`, en la lista de `projects/index.astro` y en la sección de trabajo de `[locale]/index.astro`. Build genera 9 páginas: solo `multiple-ecommerces` EN/ES tiene rutas de proyecto. `check` 0 errores, `build` código 0. Ver [bitácora detallada](./fase-4-contenido.md).
- **FASE 5 — CI/CD y Vercel completado (2026-08-23):** se consolidó el despliegue híbrido en Vercel, retirando todo rastro de workflows para GitHub Pages. Se confirmó que no hay secretos expuestos en el código y el build compila perfectamente de forma local con 0 errores de comprobación y 9 páginas estáticas generadas, más el endpoint serverless. Ver [bitácora detallada](./fase-5-cicd.md).
