import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://oxitorenk.github.io',
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
