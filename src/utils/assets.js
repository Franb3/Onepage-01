// * Devuelve la ruta correcta de un archivo de /public,
// * respetando la opción `base` de vite.config.js.
export const asset = (file) => `${import.meta.env.BASE_URL}${file}`;
