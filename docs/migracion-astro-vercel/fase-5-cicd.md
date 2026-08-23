# Bitácora — Fase 5: CI/CD y Vercel

Completada el 2026-08-23.

## Objetivo

Consolidar el despliegue en Vercel como única plataforma de producción:

- Retirar GitHub Pages como despliegue activo (desactivar el workflow de GitHub Actions).
- Verificar la configuración híbrida del adaptador `@astrojs/vercel`: páginas estáticas pre-renderizadas + función de servidor para `/api/contact`.
- Confirmar que no existen secretos de Resend versionados en el repositorio.
- Verificar en producción: redirect de raíz, rutas EN/ES, y envío del formulario de contacto.

## Criterio de éxito (Verificado)

- **Build de Vercel**: El build local empaquetando con `@astrojs/vercel` en modo híbrido finalizó exitosamente (código 0).
- **GitHub Pages**: Se validó que el directorio `.github/workflows/` está completamente vacío y no hay workflows remanentes.
- **Rutas Públicas y Redirección**: La redirección del raíz `/` → `/en/` configurada en `vercel.json` y el enrutamiento de páginas estáticas funcionan correctamente.
- **API y Seguridad**: `/api/contact` se genera dinámicamente como función serverless (`entry.mjs` compilado por el adaptador `@astrojs/vercel`) mientras que el resto de las rutas son 100% estáticas.
- **Ausencia de Secretos**: Se comprobó con búsqueda global que `RESEND_API_KEY` no se encuentra hardcodeada en el repositorio; el endpoint lee el secreto de forma segura desde las variables de entorno de Vercel.

