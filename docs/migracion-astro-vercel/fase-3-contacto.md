# Bitácora — Fase 3: Contacto seguro

Trabajo técnico de la Fase 3 completado con éxito.

## Cambios realizados

1. **Instalación de Dependencias**:
   - Se agregaron `@astrojs/vercel` (v8.0.0, compatible con Astro 5.18) y `resend` en el archivo `package.json`.
   - Se añadió `@types/node` como dependencia de desarrollo para tipar `process.env`.
2. **Configuración de Astro**:
   - Modificación de `astro.config.mjs` para integrar el adaptador de Vercel (`adapter: vercel()`).
   - Se mantuvo la configuración de renderizado estática por defecto en Astro 5, forzando la API de forma dinámica mediante `export const prerender = false`.
3. **Copia bilingüe**:
   - Adición de cadenas de texto traducidas en `src/lib/site.ts` para etiquetas, campos, placeholders y estados del formulario.
4. **API Endpoint**:
   - Creación de `src/pages/api/contact.ts` para procesar peticiones `POST`.
   - Validación del lado del servidor (nombre >= 2 caracteres, correo válido, mensaje >= 10 caracteres).
   - Detección de spam mediante un campo invisible (honeypot) `website`. Si está relleno, la API simula un éxito (`status: 200`) pero descarta el mensaje de forma segura sin llamar al proveedor.
   - Envío de mensajes usando el SDK de Resend hacia el correo configurado (`juanlozanol@gmail.com`).
5. **Formulario en Interfaz**:
   - Sustitución del enlace `mailto` en `src/pages/[locale]/index.astro` por un formulario accesible, bilingüe y dinámico con honeypot.
   - Script integrado del lado del cliente que intercepta el envío con `fetch` para realizar validaciones previas y aplicar micro-animaciones en los estados "Enviando...", "¡Mensaje enviado!" o errores de validación sin recargar la página.
6. **Diseño Visual**:
   - Agregados estilos específicos en `src/styles/global.css` para el layout del formulario, campos con transparencia fluida sobre el color acento, bordes limpios y estados interactivos de focus acordes con la estética "Editorial premium".

## Verificación

- **astro check**: Finalizado con éxito (0 errores, 0 advertencias).
- **astro build**: Ejecución exitosa. Genera 13 páginas estáticas pre-renderizadas y empaqueta la función de servidor dinámica para Vercel.
