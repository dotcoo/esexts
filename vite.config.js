import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.js',
      name: 'esexts',
      formats: ['es', 'umd'],
      fileName: (format) => format === 'es' ? 'esexts.js' : `esexts.${format}.js`,
    },
  },
});
