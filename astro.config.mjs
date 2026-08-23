import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  publicDir: './assets',
  devToolbar: { enabled: false },
  adapter: vercel(),
  vite: {
    ssr: { external: ['aria-query', 'axobject-query'] },
    optimizeDeps: { exclude: ['aria-query', 'axobject-query'] }
  }
});
