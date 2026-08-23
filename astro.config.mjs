import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jussell.github.io',
  base: '/Jusell-web-site',
  publicDir: './assets',
  devToolbar: { enabled: false },
  vite: {
    ssr: { external: ['aria-query', 'axobject-query'] },
    optimizeDeps: { exclude: ['aria-query', 'axobject-query'] }
  }
});
