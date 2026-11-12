import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // * Ruta base del sitio. Si lo publicas en una subcarpeta (ej. /mi-estudio/),
  // * cambia este valor y el sitio ajustará imágenes y la página 404 solo.
  base: "/",

  build: {
    // * Objetivo de compilación más amplio que el predeterminado de Vite,
    // * para que el sitio funcione en móviles y navegadores más antiguos.
    target: ["es2018", "chrome64", "safari12", "firefox62", "edge79"],
  },
});
