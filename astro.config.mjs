import { defineConfig } from 'astro/config';

// Use Vercel adapter only when not building for GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const adapterConfig = isGitHubPages
  ? {}
  : await import('@astrojs/vercel').then(m => ({ adapter: m.default() }));

export default defineConfig({
  publicDir: './assets',
  devToolbar: { enabled: false },
  output: isGitHubPages ? 'static' : undefined,
  ...adapterConfig,
  vite: {
    ssr: { external: ['aria-query', 'axobject-query'] },
    optimizeDeps: { exclude: ['aria-query', 'axobject-query'] }
  }
});
