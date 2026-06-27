// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://minoru-s.github.io',
  base: '/portfolio/',
  vite: {
    plugins: [tailwindcss()]
  }
});
