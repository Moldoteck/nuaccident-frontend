import { defineConfig, Plugin } from 'vite'
import preact from '@preact/preset-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [preact(), tsconfigPaths()],
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          gzipSize: true,
          brotliSize: true,
        }) as Plugin,
      ],
      // output: {
      //   chunkFileNames: 'assets/[name]-[hash].js',
      //   entryFileNames: 'assets/[name]-[hash].js',

      //   assetFileNames: ({ name }) => {
      //     if (/\.js$/.test(name ?? '')) {
      //       return 'assets/[name]-[hash][extname]'
      //     }

      //     if (/\.css$/.test(name ?? '')) {
      //       return 'assets/[name]-[hash][extname]'
      //     }

      //     // default value
      //     // ref: https://rollupjs.org/guide/en/#outputassetfilenames
      //     return 'assets/[name]-[hash][extname]'
      //   },
      // },
    },
  },
})
