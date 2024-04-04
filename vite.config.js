import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'studentapp3',
      remotes: {
        studentapp1: 'http://localhost:3001/dist/assets/remoteEntry.js',
      },
      
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'es2022', // Target an environment that supports top-level await
  },
});
