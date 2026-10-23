/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          cream: '#FAF7F2',
          sand: '#F3EDE2',
          matcha: '#4A5D44',
          matchaLight: '#8A9A7A',
          matchaPale: '#EBF0E6',
          azuki: '#7C2D37',
          azukiLight: '#9E3D4A',
          caramel: '#C27C38',
          honey: '#E5A93C',
          crust: '#8B4513',
          ink: '#1D1A16',
          charcoal: '#2D2926',
          muted: '#6E675F',
          paper: '#FFFFFF',
          border: '#E8E1D5',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        jp: ['"Noto Serif JP"', 'serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px rgba(45, 41, 38, 0.06)',
        'float': '0 20px 40px rgba(45, 41, 38, 0.12)',
      }
    },
  },
  plugins: [],
}
