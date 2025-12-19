import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';

export default {
  input: ['src/config-template-card.ts'],
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
    serve({
      contentBase: './dist',
      host: '0.0.0.0',
      port: 5000,
      allowCrossOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }),
  ], treeshake: false,
};
    ],
  ],
  treeshake: true,
