import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mi-portafolio/', // reemplaza 'mi-portafolio' con el nombre de tu repositorio en GitHub
});
