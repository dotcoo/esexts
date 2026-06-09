import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts(),
  ],
  build: {
    lib: {
      entry: './lib/esexts.js',
      name: 'esexts',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => ({ es: 'esexts.js', cjs: 'esexts.cjs', umd: 'esexts.umd.js' })[format],
    },
  },
});
