/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "index.html"],     //El ** hace referencia a todos los jsx de la carpeta
  theme: {
    extend: {
      keyframes: {
        sidebarIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        sidebarIn: 'sidebarIn .15s ease-out',
      }
    },
  },
  plugins: [],
}
