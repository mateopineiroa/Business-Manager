/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "index.html"],     //El ** hace referencia a todos los jsx de la carpeta
  theme: {
    extend: {
      keyframes: {
        sidebarIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        sidebarOut: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        sidebarIn: 'sidebarIn 1s',
        sidebarOut: 'sidebarOut 1s',
      },
    },
  },
  plugins: [],
}
