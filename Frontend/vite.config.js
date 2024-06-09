import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

console.log('VITE_API_URL:', process.env.VITE_API_URL); // Verifique se a variável está carregada

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env': process.env,
  },
  server: {
    port: 5173, // Porta para o servidor de desenvolvimento Vite
  },
  build: {
    outDir: 'dist', // Diretório de saída para os arquivos de build
  },
});