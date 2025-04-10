import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'lib/index.js',
      name: 'esexts',
    },
  },
});
