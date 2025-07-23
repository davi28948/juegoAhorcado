import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 👇 Cambia el "base" al nombre de la subcarpeta donde lo alojas (¡ojo! con la barra final)
export default defineConfig({
  plugins: [vue()],
  base: '/juegoAhorcado/ahorcado/', // <<-- Ajusta según tu estructura real
})
