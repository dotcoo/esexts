import { defineConfig } from 'vite';
// import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // dts(),
    viteStaticCopy({
      targets: [
        {
          src: 'lib/index.d.ts',
          dest: '',
          rename: { stripBase: 1, name: 'esexts.d.ts' }, // strips `bin/`
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: {
        esexts: './lib/index.js',
        polyfill: './lib/polyfill.js',
      },
      formats: ['es'],
      // name: 'esexts',
      // formats: ['es', 'cjs', 'umd'],
      // fileName: (format) => ({ es: 'esexts.js', cjs: 'esexts.cjs', umd: 'esexts.umd.js' })[format],
    },
  },
});
