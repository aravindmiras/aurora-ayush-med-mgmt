import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({experimentalReactChildren: true,})],
  renderers: ['@astrojs/renderer-react'],
  loaders: {
    '.js': 'jsx', // This tells Astro to use the JSX loader for JavaScript files
  },
  jsx: {
    transform: {
      enable: true,
    }
  },
});