/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      screens: {
        'sm': '640px',    // телефон
        'tablet': '768px', // планшет
        'laptop': '1024px', // ноутбук
        'desktop': '1280px', // великий екран
      },
    },
    plugins: [],
  }
  