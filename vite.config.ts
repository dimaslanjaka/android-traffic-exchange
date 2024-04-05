import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { createRequire } from 'node:module';
import path from 'upath';
import { UserConfig, defineConfig } from 'vite';
import * as mdp from 'vite-plugin-markdown';

const { plugin: mdPlugin, Mode } = mdp;
dotenv.config({ override: true });

const require = createRequire(import.meta.url);

const config: UserConfig = {
  plugins: [react(), mdPlugin({ mode: [Mode.HTML, Mode.MARKDOWN, Mode.TOC] })],
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      '*': path.resolve('.'),
      '@utils': path.resolve('./src/utils'),
      '@components': path.resolve('./src/components'),
      '@routes': path.resolve('./src/routes'),
      '@assets': path.resolve('./src/assets'),
      '@src': path.resolve('./src'),
      '@root': path.resolve('./'),
      '@post': path.resolve('./src/posts'),
      'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime'),
      'react/jsx-runtime': require.resolve('react/jsx-runtime')
    }
  }
};

export default defineConfig(config);
