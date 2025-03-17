import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      formats: ['es', 'umd'],
      name: 'esexts',
    },
  },
});
