# Bitácora — Fase 1: Desbloqueo técnico

**Fecha:** 2026-08-23  
**Estado:** trabajo técnico completado; puerta de aprobación 1.3 pendiente.  
**Alcance:** diagnosticar el bloqueo de validación/build y asegurar la generación completa de las rutas estáticas bilingües. No se modificó contenido, código legacy, despliegue ni contacto.

## 1.1 Baseline y reproducción

### Estado inicial

| Elemento | Evidencia |
| --- | --- |
| Runtime | Node.js 24.14.0 |
| Framework | Astro 5.18.2 |
| Validación | `@astrojs/check` 0.9.10 y TypeScript 5.9.3 |
| Contenido | 8 archivos Markdown: 4 slugs × 2 locales |
| Rutas esperadas de proyecto | 8: 4 bajo `/en/projects/` y 4 bajo `/es/projects/` |
| Salida inicial | `dist/` era parcial y solo mostraba combinaciones de idioma no deterministas |

### Observaciones del entorno

- No había procesos `node` activos antes de comenzar, por lo que no existían procesos zombis que terminar.
- PowerShell impide ejecutar `npm.ps1` por la política local. Se utilizó `npm.cmd` como equivalente de `npm` exclusivamente para ejecutar los scripts del proyecto; no se cambió la política del sistema.
- Las primeras ejecuciones de Astro superaron el límite corto de 30 segundos durante su inicialización. Una ejecución directa con ventana ampliada completó el build y permitió ver los avisos reales; después de sincronizar el contenido, `check` y `build` finalizaron normalmente.

### Hallazgo causal

El loader de contenido estaba definido como:

```ts
glob({ pattern: '**/*.md', base: 'src/content/projects' })
```

El ID predeterminado del loader omitía el sufijo de idioma. Por tanto, cada par de archivos con el mismo slug (`*-en.md` y `*-es.md`) producía el mismo ID lógico. Astro emitió cuatro avisos `Duplicate id` y conservó solo una entrada por slug.

Como la ruta dinámica obtiene sus páginas desde `getCollection('projects')`, el efecto fue directo:

```text
8 archivos fuente → 4 entradas de colección → 4 páginas de caso generadas
```

No se hallaron promesas sin resolver, dependencias circulares ni una incompatibilidad demostrable de Node. El problema funcional era la identidad duplicada de las entradas; los aparentes bloqueos iniciales ocultaban los diagnósticos y los errores de tipos.

## 1.2 Cambios aplicados

### Identidad de contenido

En `src/content.config.ts` se añadió `generateId` al loader:

```ts
generateId: ({ entry }) => entry.replace(/\.md$/, '')
```

Cada entrada conserva ahora el nombre de archivo sin extensión como ID (por ejemplo, `multiple-ecommerces-en` y `multiple-ecommerces-es`). El `slug` de frontmatter no cambió, por lo que las URLs públicas continúan siendo `multiple-ecommerces` en cada locale.

### Tipado que bloqueaba `astro check`

Al conseguir que `astro check` emitiera diagnósticos, se resolvieron 7 errores preexistentes:

- Se declaró `Locale = keyof typeof copy` en `src/lib/site.ts`.
- `Header`, `Layout` y `ProjectCard` declaran interfaces `Props` tipadas.
- `ProjectCard` recibe `CollectionEntry<'projects'>`, eliminando valores `any` en sus tags.
- Las rutas de índice normalizan el parámetro dinámico a `Locale` antes de consultar `copy[locale]` y filtrar la colección.

Estos cambios no alteran la interfaz visual ni el contenido; solo hacen explícitos los contratos ya usados por las rutas y componentes.

## Verificación ejecutada

| Verificación | Resultado |
| --- | --- |
| `npm.cmd run check` | Código 0; 11 archivos analizados, 0 errores, 0 advertencias y 0 hints. |
| `npm.cmd run build` | Código 0; build estático completado en 1.91 s. |
| Páginas generadas | 13: raíz, 2 índices por locale, 2 listados por locale y 8 páginas de proyecto. |
| Rutas EN | `ecommerce-research`, `multiple-ecommerces`, `online-sales`, `payment-app`. |
| Rutas ES | `ecommerce-research`, `multiple-ecommerces`, `online-sales`, `payment-app`. |
| IDs duplicados | No se emitieron avisos `Duplicate id` después de la corrección. |

## Resultado y decisión de continuidad

La condición técnica de la Fase 1 está cumplida: la colección mantiene las ocho entradas, las rutas bilingües se generan completas y las comprobaciones de Astro pasan.

La tarea **1.3 no está marcada**. Por decisión del plan, no se iniciará la Fase 2 hasta recibir una aprobación manual explícita. La próxima acción, cuando se autorice, será validar la paridad de Astro y retirar los archivos legacy enumerados en el plan.
