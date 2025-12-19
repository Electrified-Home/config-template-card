import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: ["src/config-template-card.ts"],
  output: {
    dir: './dist',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    alias({
      entries: [{ find: /^lit-element$/, replacement: 'lit-element/lit-element.js' }],
    }),
    resolve({
      browser: true,
      exportConditions: ['browser', 'default'],
    }),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true,
    }),
    terser({
      format: {
        comments: false,
      },
    }),
  ],
  treeshake: true,
};
