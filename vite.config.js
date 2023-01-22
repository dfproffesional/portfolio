import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build:{
    outDir: 'build',
  },
  esbuild:{
    jsxInject: `
      import React from 'react';
      import { createRoot } from 'react-dom/client';
    `
  }
})