/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(var(--color-primary) 75%)',
          100: 'hsl(var(--color-primary) 70%)',
          200: 'hsl(var(--color-primary) 65%)',
          300: 'hsl(var(--color-primary) 60%)',
          400: 'hsl(var(--color-primary) 55%)',
          500: 'hsl(var(--color-primary) 50%)',
          600: 'hsl(var(--color-primary) 45%)',
          700: 'hsl(var(--color-primary) 40%)',
          800: 'hsl(var(--color-primary) 35%)',
          900: 'hsl(var(--color-primary) 30%)',
        }
      }
    },
  },
  plugins: [],
}

